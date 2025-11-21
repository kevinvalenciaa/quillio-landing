import type { VercelRequest, VercelResponse } from '@vercel/node';

type PersistResult = { ok: boolean; skipped?: boolean; detail?: string };

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_ORIGINS = (process.env.WAITLIST_ALLOWED_ORIGINS ?? '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const SUPABASE_TABLE = process.env.WAITLIST_TABLE || 'waitlist_signups';
const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_FROM = process.env.WAITLIST_FROM_EMAIL;
const RESEND_TO = process.env.WAITLIST_NOTIFY_EMAIL;

function allowOrigin(origin: string | undefined) {
  if (!origin) return '*';
  if (ALLOWED_ORIGINS.length === 0) return origin;
  return ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
}

function setCorsHeaders(res: VercelResponse, origin?: string) {
  res.setHeader('Access-Control-Allow-Origin', allowOrigin(origin));
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Max-Age', '86400');
  res.setHeader('Cache-Control', 'no-store');
}

function parseBody(req: VercelRequest) {
  if (!req.body) return {};
  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body);
    } catch {
      return {};
    }
  }
  return req.body;
}

function normalizeEmail(value: unknown) {
  if (!value || typeof value !== 'string') return null;
  const trimmed = value.trim().toLowerCase();
  return EMAIL_REGEX.test(trimmed) ? trimmed : null;
}

function clientIp(req: VercelRequest) {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string') return forwarded.split(',')[0]?.trim();
  if (Array.isArray(forwarded)) return forwarded[0];
  return req.socket?.remoteAddress ?? 'unknown';
}

async function persistToSupabase(
  payload: Record<string, unknown>
): Promise<PersistResult> {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    return { ok: false, skipped: true, detail: 'Supabase not configured' };
  }

  const response = await fetch(`${SUPABASE_URL}/rest/v1/${SUPABASE_TABLE}`, {
    method: 'POST',
    headers: {
      apikey: SUPABASE_SERVICE_ROLE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
      'Content-Type': 'application/json',
      Prefer: 'resolution=merge-duplicates' // idempotent on unique email
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => 'Failed to write');
    return { ok: false, detail: errorText };
  }

  return { ok: true };
}

async function notifySlack(
  payload: Record<string, unknown>
): Promise<PersistResult> {
  if (!SLACK_WEBHOOK_URL) {
    return { ok: false, skipped: true, detail: 'Slack not configured' };
  }

  const response = await fetch(SLACK_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      text: 'New waitlist signup',
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: [
              '*New waitlist signup*',
              `• Email: ${payload.email}`,
              payload.name ? `• Name: ${payload.name}` : null,
              payload.source ? `• Source: ${payload.source}` : null,
              payload.page_url ? `• Page: ${payload.page_url}` : null,
              payload.referrer ? `• Referrer: ${payload.referrer}` : null
            ]
              .filter(Boolean)
              .join('\n')
          }
        }
      ]
    })
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => 'Slack failed');
    return { ok: false, detail: errorText };
  }

  return { ok: true };
}

async function emailViaResend(
  payload: Record<string, unknown>
): Promise<PersistResult> {
  if (!RESEND_API_KEY || !RESEND_FROM || !RESEND_TO) {
    return { ok: false, skipped: true, detail: 'Resend not configured' };
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: RESEND_FROM,
      to: [RESEND_TO],
      subject: 'New waitlist signup',
      text: [
        'New waitlist signup',
        `Email: ${payload.email}`,
        payload.name ? `Name: ${payload.name}` : null,
        payload.source ? `Source: ${payload.source}` : null,
        payload.page_url ? `Page: ${payload.page_url}` : null,
        payload.referrer ? `Referrer: ${payload.referrer}` : null,
        payload.user_agent ? `UA: ${payload.user_agent}` : null
      ]
        .filter(Boolean)
        .join('\n')
    })
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => 'Email failed');
    return { ok: false, detail: errorText };
  }

  return { ok: true };
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  setCorsHeaders(res, req.headers.origin as string | undefined);

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const body = parseBody(req);
  const email = normalizeEmail((body as any).email);
  const honeypot = (body as any).website;

  if (honeypot) {
    res.status(400).json({ error: 'Invalid submission' });
    return;
  }

  if (!email) {
    res.status(422).json({ error: 'A valid email is required.' });
    return;
  }

  const submission = {
    email,
    name: typeof (body as any).name === 'string' ? (body as any).name.trim() : null,
    source: typeof (body as any).source === 'string' ? (body as any).source.trim() : null,
    page_url: typeof (body as any).pageUrl === 'string' ? (body as any).pageUrl : null,
    page_title: typeof (body as any).pageTitle === 'string' ? (body as any).pageTitle : null,
    referrer: typeof (body as any).referrer === 'string' ? (body as any).referrer : null,
    utm_source: (body as any).utm?.source ?? null,
    utm_medium: (body as any).utm?.medium ?? null,
    utm_campaign: (body as any).utm?.campaign ?? null,
    utm_term: (body as any).utm?.term ?? null,
    utm_content: (body as any).utm?.content ?? null,
    user_agent: req.headers['user-agent'] ?? null,
    ip_address: clientIp(req),
    created_at: new Date().toISOString(),
    status: 'new'
  };

  try {
    const [dbResult, slackResult, emailResult] = await Promise.all([
      persistToSupabase(submission),
      notifySlack(submission),
      emailViaResend(submission)
    ]);

    const attempts = [dbResult, slackResult, emailResult];
    const ok = attempts.some((attempt) => attempt.ok);

    if (!ok) {
      console.error('Waitlist submission failed', attempts);
      res
        .status(500)
        .json({ error: 'Unable to record your request right now.' });
      return;
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Waitlist submission error', error);
    res.status(500).json({ error: 'Unexpected error submitting request.' });
  }
}
