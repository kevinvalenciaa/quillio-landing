# Waitlist Wiring (Step by Step)

This sets up the production-ready waitlist flow powered by the new `/api/waitlist` endpoint. The flow validates emails, blocks basic bots (honeypot), stores submissions in Supabase, and can fan out to Slack and email notifications through Resend.

## 1) Create the data store (Supabase)
1. Create a Supabase project (free tier is fine).
2. In the SQL editor, run:
   ```sql
   create table if not exists public.waitlist_signups (
     id uuid primary key default gen_random_uuid(),
     email text not null unique,
     name text,
     source text,
     page_url text,
     page_title text,
     referrer text,
     utm_source text,
     utm_medium text,
     utm_campaign text,
     utm_term text,
     utm_content text,
     user_agent text,
     ip_address text,
     status text default 'new',
     created_at timestamptz default now()
   );

   alter table public.waitlist_signups enable row level security;
   create policy "Service role access" on public.waitlist_signups
     for all using (auth.role() = 'service_role') with check (true);
   ```
3. Copy the project URL and Service Role key (Project Settings > API). The Service Role key stays server-side only.

## 2) Add environment variables
Set these in `.env.local` for local dev and in your hosting provider’s settings for production:

```
SUPABASE_URL=https://YOUR_PROJECT.supabase.co
SUPABASE_SERVICE_ROLE_KEY=YOUR_SERVICE_ROLE_KEY
WAITLIST_TABLE=waitlist_signups
WAITLIST_ALLOWED_ORIGINS=http://localhost:3000,https://your-domain.com

# Optional fan-out
SLACK_WEBHOOK_URL= # Slack incoming webhook for alerts
RESEND_API_KEY=    # Resend API key if you want email notifications
WAITLIST_FROM_EMAIL=waitlist@your-domain.com
WAITLIST_NOTIFY_EMAIL=you@your-domain.com

# Frontend (keep empty for same-origin)
VITE_API_BASE_URL=
```

- Ensure `WAITLIST_FROM_EMAIL` is verified in Resend (or your sender domain is).
- Keep `WAITLIST_ALLOWED_ORIGINS` to your live domain(s) and localhost for dev.

## 3) Run locally with the API
1. Install dependencies if needed: `npm install`
2. Install Vercel CLI (to run the serverless function locally): `npm i -g vercel`
3. Start the full stack locally: `vercel dev --listen 3000`
   - The landing page runs on `http://localhost:3000`
   - The API is served at `http://localhost:3000/api/waitlist`
4. Smoke test the API:
   ```bash
   curl -i -X POST http://localhost:3000/api/waitlist \
     -H "Content-Type: application/json" \
     -d '{"email":"test@example.com","source":"curl"}'
   ```

## 4) Deploy
1. Link the project to Vercel (or your provider with Node serverless support).
2. Add the same environment variables in the dashboard (Production and Preview).
3. Deploy: `vercel deploy --prod`
4. After deploy, submit the form on the live site and confirm:
   - Row created in `waitlist_signups`
   - Slack message delivered (if configured)
   - Notification email delivered (if Resend is configured)

## 5) Operational notes
- The API returns HTTP 500 if no downstream (Supabase/Slack/Resend) is configured or if they all fail. That keeps misconfiguration visible.
- The frontend request times out after 10s and shows a retry message.
- The honeypot field `website` is ignored for normal users and blocks basic bots.
