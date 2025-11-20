import React from 'react';
import { ScrollReveal } from './ui/ScrollReveal';
import { StickyNote, MessageSquare, Book, Layers, ZapOff, Clock } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden">
       
       {/* Subtle Background Texture */}
       <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03] pointer-events-none"></div>
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none opacity-40" />

       <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          
          {/* Cinematic Header */}
          <div className="mb-24 md:text-center max-w-4xl mx-auto">
             <ScrollReveal>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.1] mb-8 text-white text-balance">
                  Your thoughts live in <span className="italic text-blue-200/90 pr-2">5–7 places</span>.
                  <br />
                  <span className="text-white/30">Your clarity lives in none.</span>
                </h2>
             </ScrollReveal>
             
             <ScrollReveal delay={0.1}>
                <p className="text-lg md:text-xl text-blue-100/60 font-light leading-relaxed max-w-2xl mx-auto text-balance">
                  The modern workflow is fractured. We act in one tool, feel in another, and plan in a third. The result is noise, not signal.
                </p>
             </ScrollReveal>
          </div>

          {/* The Problem Cards (Dark Mode) */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
             
             {/* Card 1: Scattered Context */}
             <ScrollReveal delay={0.2} className="h-full">
                <div className="h-full bg-white/5 border border-white/5 rounded-3xl p-8 lg:p-10 hover:bg-white/10 hover:border-white/10 hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden">
                   
                   <div className="relative z-10">
                       <div className="h-14 w-14 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 mb-8 group-hover:scale-110 transition-transform duration-500">
                           <Layers size={26} strokeWidth={1.5} />
                       </div>
                       <h3 className="text-2xl font-serif mb-4 text-white">Scattered Context</h3>
                       <p className="text-sm text-blue-100/60 leading-relaxed font-light">
                          Insights from your morning pages never reach your strategy docs. Your wisdom is trapped in silos, forcing you to restart your thinking every time.
                       </p>
                   </div>
                </div>
             </ScrollReveal>
             
             {/* Card 2: Amnesiac AI */}
             <ScrollReveal delay={0.3} className="h-full">
                <div className="h-full bg-white/5 border border-white/5 rounded-3xl p-8 lg:p-10 hover:bg-white/10 hover:border-white/10 hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden">
                   
                   <div className="relative z-10">
                       <div className="h-14 w-14 bg-purple-500/10 border border-purple-500/20 rounded-2xl flex items-center justify-center text-purple-400 mb-8 group-hover:scale-110 transition-transform duration-500">
                           <ZapOff size={26} strokeWidth={1.5} />
                       </div>
                       <h3 className="text-2xl font-serif mb-4 text-white">Amnesiac AI</h3>
                       <p className="text-sm text-blue-100/60 leading-relaxed font-light">
                          Chatbots give quick answers but reset every session. They don't know your history, your values, or your long-term goals. They can't truly guide you.
                       </p>
                   </div>
                </div>
             </ScrollReveal>

             {/* Card 3: Static Journals */}
             <ScrollReveal delay={0.4} className="h-full">
                <div className="h-full bg-white/5 border border-white/5 rounded-3xl p-8 lg:p-10 hover:bg-white/10 hover:border-white/10 hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden">
                   
                   <div className="relative z-10">
                       <div className="h-14 w-14 bg-rose-500/10 border border-rose-500/20 rounded-2xl flex items-center justify-center text-rose-400 mb-8 group-hover:scale-110 transition-transform duration-500">
                           <Book size={26} strokeWidth={1.5} />
                       </div>
                       <h3 className="text-2xl font-serif mb-4 text-white">Static Journals</h3>
                       <p className="text-sm text-blue-100/60 leading-relaxed font-light">
                          Writing "I'm stuck" for 6 months helps you endure, not resolve. Traditional journals are data graveyards—passive, linear, and disconnected from action.
                       </p>
                   </div>
                </div>
             </ScrollReveal>
          </div>

          {/* Visual Footer / Divider */}
          <ScrollReveal delay={0.5}>
              <div className="mt-24 flex justify-center opacity-20">
                  <div className="h-16 w-px bg-gradient-to-b from-white to-transparent"></div>
              </div>
          </ScrollReveal>

       </div>
    </section>
  );
};
