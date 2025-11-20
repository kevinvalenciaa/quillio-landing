import React, { useEffect, useState } from 'react';
import { ScrollReveal } from './ui/ScrollReveal';
import { Play, ArrowRight } from 'lucide-react';

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

export const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

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

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-slate-900">
      
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
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-24 lg:pt-0">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
            
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
            <div className="col-span-12 lg:col-span-6 text-center flex flex-col items-center">
                 <ScrollReveal>
                    <div className="inline-flex items-center gap-3 mb-8">
                        <span className="h-px w-12 bg-white/20"></span>
                        <span className="text-[11px] font-bold text-blue-100/80 uppercase tracking-[0.25em] font-sans">clarity between decisions</span>
                        <span className="h-px w-12 bg-white/20"></span>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-medium text-white mb-8 leading-[1.1] tracking-tight text-balance drop-shadow-sm">
                    Make better decisions with an AI that <span className="italic text-blue-200/90 font-serif">remembers</span> your life.
                    </h1>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                    <p className="text-lg sm:text-xl text-blue-100/80 max-w-2xl mx-auto mb-12 leading-relaxed font-light text-balance">
                    Daily reflection, deep strategic canvases, and long-term pattern insights. Your private thinking partner for business, life, and relationships.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                    <div className="flex flex-col sm:flex-row gap-5 justify-center w-full mb-16">
                        <form className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-1.5 pr-2 w-full max-w-md hover:bg-white/15 transition-colors group focus-within:bg-white/20 focus-within:border-white/30 shadow-lg shadow-black/10">
                            <input 
                                type="email" 
                                placeholder="Enter your email..." 
                                className="bg-transparent border-none text-white placeholder:text-blue-100/50 px-6 py-3 flex-1 outline-none text-sm font-medium w-full"
                            />
                            <button className="px-6 py-3 text-sm font-semibold text-white bg-white/10 border border-white/10 rounded-full hover:bg-white/20 transition-all flex items-center justify-center gap-2 whitespace-nowrap shadow-sm">
                                Join Waitlist
                            </button>
                        </form>
                    
                        {/* 
                        <button className="px-8 py-4 text-sm font-semibold text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group">
                            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                 <Play size={10} fill="currentColor" className="ml-0.5 text-white"/>
                            </div>
                            see how it works
                        </button>
                         */}
                    </div>
                </ScrollReveal>
            </div>

            {/* Right Column: Testimonial (Visible on LG) */}
            <div className="hidden lg:flex col-span-3 pt-20 justify-end lg:translate-x-12">
                <ScrollReveal delay={0.7} className="w-full max-w-[320px]">
                    <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-3xl text-left relative overflow-hidden group cursor-default transition-colors hover:bg-white/15">
                        <div className="absolute top-0 left-0 right-0 h-0.5 bg-white/10">
                            <div
                                className="h-full bg-white transition-all duration-200 ease-linear"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                        <div className="flex -space-x-3 mb-6 mt-3">
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
                        
                        <div className="flex gap-1 mt-4 text-white/60">
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
        <div className="lg:hidden grid grid-cols-3 gap-4 pb-12 text-center max-w-md mx-auto">
             <div>
                <div className="text-2xl font-serif text-white">1.2K+</div>
                <div className="text-[10px] text-blue-100/60 uppercase tracking-wider mt-1">Founders</div>
             </div>
             <div>
                <div className="text-2xl font-serif text-white">40+</div>
                <div className="text-[10px] text-blue-100/60 uppercase tracking-wider mt-1">Teams</div>
             </div>
             <div>
                <div className="text-2xl font-serif text-white">76%</div>
                <div className="text-[10px] text-blue-100/60 uppercase tracking-wider mt-1">Impact</div>
             </div>
        </div>

        {/* Bottom Footer Text */}
        <div className="absolute bottom-8 left-0 right-0 text-center">
             <p className="text-[10px] font-medium text-white/40 uppercase tracking-widest">
                Created for clarity in thought leadership
             </p>
        </div>
      </div>
    </section>
  );
};
