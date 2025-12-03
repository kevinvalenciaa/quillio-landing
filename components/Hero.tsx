import React, { useEffect, useState } from 'react';
import { ScrollReveal } from './ui/ScrollReveal';
import { Check, X } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Elena Mora',
    role: 'Founder, Crescent Studio',
    quote: "I didn't need another productivity tool, I needed calm to think and make decisions. Quillio gave me that pause button.",
    avatar: '/elena.png'
  },
  {
    name: 'Marcus Lee',
    role: 'CEO, Northwind Labs',
    quote: 'Quillio remembers the threads between my board updates and daily standups. It has become my quiet chief of staff.',
    avatar: '/marcus.png'
  },
  {
    name: 'Priya Nair',
    role: 'Product Lead, Lumen',
    quote: 'It mirrors back the emotional patterns hiding in my notes. That perspective keeps our roadmap grounded in reality.',
    avatar: '/priya.png'
  }
];
const TESTIMONIAL_DURATION = 8000;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Vercel serverless function endpoint
const WAITLIST_ENDPOINT = '/api/waitlist';

export const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('Email sent!');
  const [notificationType, setNotificationType] = useState<'success' | 'error'>('success');

  useEffect(() => {
    const tick = 60;
    const increment = (100 * tick) / TESTIMONIAL_DURATION;
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
          return 0;
        }
        return next;
      });
    }, tick);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = TESTIMONIALS[currentIndex];

  const handleJoinWaitlist = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = (formData.get('email') as string | null)?.trim();
    const website = formData.get('website'); // honeypot to filter bots

    if (website) return;
    if (!email || !EMAIL_REGEX.test(email)) {
      setNotificationMessage('Please enter a valid email address.');
      setNotificationType('error');
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
      return;
    }

    const url = typeof window !== 'undefined' ? window.location.href : null;
    const title = typeof document !== 'undefined' ? document.title : null;
    const referrer = typeof document !== 'undefined' ? document.referrer : null;
    const searchParams =
      typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;

    const utm = searchParams
      ? {
          source: searchParams.get('utm_source'),
          medium: searchParams.get('utm_medium'),
          campaign: searchParams.get('utm_campaign'),
          term: searchParams.get('utm_term'),
          content: searchParams.get('utm_content')
        }
      : undefined;

    setIsSubmitting(true);
  
    try {
      const controller = new AbortController();
      const timeout = window.setTimeout(() => controller.abort(), 10000);

      const res = await fetch(WAITLIST_ENDPOINT, {
        method: 'POST',
        signal: controller.signal,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          source: 'landing_hero',
          pageUrl: url,
          pageTitle: title,
          referrer,
          utm,
          website // honeypot stays empty for humans
        })
      });

      window.clearTimeout(timeout);

      if (!res.ok) {
        const error = await res.json().catch(() => ({}));
        const message = error?.error || 'Something went wrong. Please try again.';
        throw new Error(message);
      }

      form.reset();
      setNotificationMessage('You are on the waitlist!');
      setNotificationType('success');
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3200);
    } catch (error: unknown) {
      const message =
        error instanceof Error && error.name === 'AbortError'
          ? 'Network timeout. Please retry.'
          : error instanceof Error
            ? error.message
            : 'Something went wrong. Please try again.';

      setNotificationMessage(message);
      setNotificationType('error');
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3200);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-slate-900 pb-8 pt-20 sm:pb-12 sm:pt-24 lg:pt-0 lg:pb-0">
      
      {/* Glass Notification */}
      {showNotification && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] animate-in fade-in slide-in-from-top-5 duration-300">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 shadow-2xl shadow-black/20 flex items-center gap-3">
            {notificationType === 'success' ? (
              <div className="w-5 h-5 bg-emerald-500/20 rounded-full flex items-center justify-center border border-emerald-500/30">
                <Check size={12} className="text-emerald-400" strokeWidth={3} />
              </div>
            ) : (
              <div className="w-5 h-5 bg-rose-500/20 rounded-full flex items-center justify-center border border-rose-500/30">
                <X size={12} className="text-rose-400" strokeWidth={3} />
              </div>
            )}
            <p className="text-white font-medium text-sm tracking-wide">{notificationMessage}</p>
          </div>
        </div>
      )}
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/quillio-hero.png" 
          alt="Background" 
          className="w-full h-full object-cover opacity-100"
        />
        {/* Heavy darkening overlay for contrast */}
        <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-900/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-transparent to-slate-900/40"></div>
      </div>

      {/* Concentric Circles / Ripples Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-white/5 rounded-full pointer-events-none z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1600px] h-[1600px] border border-white/5 rounded-full pointer-events-none z-0"></div>

      {/* Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full lg:pt-0 py-8 sm:py-0">
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Stats (Visible on LG) */}
            <div className="hidden lg:flex flex-col gap-16 col-span-3 text-left pt-20">
                <ScrollReveal delay={0.4}>
                    <div className="space-y-1">
                        <div className="text-3xl font-serif text-white">41%</div>
                        <div className="text-sm text-blue-100/70 font-light leading-relaxed">drop in perceived stress<br/>after reflective sessions</div>
                    </div>
                </ScrollReveal>
                <ScrollReveal delay={0.5}>
                     <div className="space-y-1">
                        <div className="text-3xl font-serif text-white">10+</div>
                        <div className="text-sm text-blue-100/70 font-light leading-relaxed">founders in<br/>early access</div>
                    </div>
                </ScrollReveal>
                 <ScrollReveal delay={0.6}>
                     <div className="space-y-1">
                        <div className="text-3xl font-serif text-white">65%</div>
                        <div className="text-sm text-blue-100/70 font-light leading-relaxed">report higher clarity<br/>in long-term planning</div>
                    </div>
                </ScrollReveal>
            </div>

            {/* Center Column: Main Hero */}
            <div className="col-span-12 lg:col-span-6 text-center flex flex-col items-center w-full px-2 sm:px-0">
                 <ScrollReveal>
                    <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 lg:mb-8">
                        <span className="h-px w-8 sm:w-12 bg-white/20"></span>
                        <span className="text-[10px] sm:text-[11px] font-bold text-blue-100/80 uppercase tracking-[0.25em] font-sans">clarity between decisions</span>
                        <span className="h-px w-8 sm:w-12 bg-white/20"></span>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-white mb-4 sm:mb-6 lg:mb-8 leading-[1.1] tracking-tight text-balance drop-shadow-sm px-2 sm:px-0">
                    Make better decisions with an AI that <span className="italic text-blue-200/90 font-serif">remembers</span> your life.
                    </h1>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                    <p className="text-base sm:text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto mb-6 sm:mb-8 lg:mb-12 leading-relaxed font-light text-balance px-2 sm:px-0">
                    Quillio turns your daily brain dumps into one crystal clear weekly plan, then makes sure your calendar and tasks actually match it.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center w-full mb-8 sm:mb-12 lg:mb-16 px-2 sm:px-0">
                        <form onSubmit={handleJoinWaitlist} className="flex flex-col sm:flex-row items-stretch sm:items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl sm:rounded-full p-2 sm:p-1.5 sm:pr-2 w-full max-w-md mx-auto hover:bg-white/15 transition-colors group focus-within:bg-white/20 focus-within:border-white/30 shadow-lg shadow-black/10 gap-2 sm:gap-0">
                            <input
                                type="text"
                                name="website"
                                tabIndex={-1}
                                autoComplete="off"
                                className="hidden"
                            />
                            <input
                                type="hidden"
                                name="source"
                                value="landing_hero"
                            />
                            <input 
                                name="email"
                                type="email" 
                                placeholder="Enter your email..." 
                                required
                                autoComplete="email"
                                className="waitlist-input bg-transparent border-none text-white placeholder:text-blue-100/50 px-4 sm:px-6 py-2 sm:py-3 flex-1 outline-none text-sm font-medium w-full text-center sm:text-left"
                            />
                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className={`px-6 py-3 text-sm font-semibold text-white bg-white/10 border border-white/10 rounded-xl sm:rounded-full transition-all flex items-center justify-center gap-2 whitespace-nowrap shadow-sm w-full sm:w-auto ${isSubmitting ? 'opacity-60 cursor-not-allowed' : 'hover:bg-white/20'}`}
                            >
                                {isSubmitting ? 'Sending...' : 'Join Waitlist'}
                            </button>
                        </form>
                    </div>
                </ScrollReveal>
            </div>

            {/* Right Column: Testimonial */}
            <div className="flex lg:flex col-span-12 lg:col-span-3 pt-4 sm:pt-6 lg:pt-20 justify-center lg:justify-end lg:translate-x-12 px-2 sm:px-0">
                <ScrollReveal delay={0.7} className="w-full max-w-[320px]">
                    <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-3xl text-center lg:text-left relative overflow-hidden group cursor-default transition-colors hover:bg-white/15">
                        <div className="absolute top-0 left-0 right-0 h-0.5 bg-white/10">
                            <div
                                className="h-full bg-white transition-all duration-200 ease-linear"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                        <div className="flex -space-x-3 mb-6 mt-3 justify-center lg:justify-start">
                            {TESTIMONIALS.map((testimonial, index) => (
                                <div key={testimonial.name} className="w-10 h-10 rounded-full border-2 border-white/20 overflow-hidden bg-white/5">
                                    <img 
                                        src={testimonial.avatar} 
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover"
                                        loading={index === 0 ? 'eager' : 'lazy'}
                                        decoding="async"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="mb-4">
                            <h4 className="text-white font-medium">{currentTestimonial.name}</h4>
                            <p className="text-xs text-blue-200 uppercase tracking-wider mt-1">{currentTestimonial.role}</p>
                        </div>

                        <p className="text-sm text-blue-100/90 leading-relaxed italic opacity-90 transition-opacity duration-500">
                            “{currentTestimonial.quote}”
                        </p>
                        
                        <div className="flex gap-1 mt-4 text-white/60 justify-center lg:justify-start">
                            {TESTIMONIALS.map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-1.5 h-1.5 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-white/30'}`}
                                ></div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>

        </div>
        
        {/* Mobile Stats (Visible only on small screens) */}
        <div className="lg:hidden grid grid-cols-3 gap-3 sm:gap-4 pb-8 sm:pb-12 pt-8 sm:pt-12 text-center max-w-md mx-auto border-t border-white/5 mt-8 sm:mt-12 px-4 sm:px-0">
             <div>
                <div className="text-2xl font-serif text-white">41%</div>
                <div className="text-[10px] text-blue-100/60 uppercase tracking-wider mt-1">Less Stress</div>
             </div>
             <div>
                <div className="text-2xl font-serif text-white">10+</div>
                <div className="text-[10px] text-blue-100/60 uppercase tracking-wider mt-1">Founders</div>
             </div>
             <div>
                <div className="text-2xl font-serif text-white">65%</div>
                <div className="text-[10px] text-blue-100/60 uppercase tracking-wider mt-1">Clarity</div>
             </div>
        </div>

        {/* Bottom Footer Text */}
        <div className="absolute bottom-8 left-0 right-0 text-center hidden lg:block">
             <p className="text-[10px] font-medium text-white/40 uppercase tracking-widest">
                Created for clarity in thought leadership
             </p>
        </div>
        
        <div className="text-center lg:hidden pb-4 sm:pb-8 pt-4 sm:pt-0">
             <p className="text-[10px] font-medium text-white/40 uppercase tracking-widest">
                Created for clarity in thought leadership
             </p>
        </div>
      </div>
    </section>
  );
};
