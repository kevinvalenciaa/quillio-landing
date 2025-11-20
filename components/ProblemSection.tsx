import React from 'react';
import { ScrollReveal } from './ui/ScrollReveal';
import { StickyNote, MessageSquare, Book, Layers, ZapOff, Clock } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
       
       {/* Subtle Background Texture */}
       <div className="absolute inset-0 bg-[radial-gradient(#E5E7EB_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.25] pointer-events-none"></div>

       <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          
          {/* Cinematic Header */}
          <div className="mb-24 md:text-center max-w-4xl mx-auto">
             <ScrollReveal>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.1] mb-8 text-brand-text text-balance">
                  Your thoughts live in <span className="italic text-brand-accent/90 pr-2">5–7 places</span>.
                  <br />
                  <span className="text-gray-400">Your clarity lives in none.</span>
                </h2>
             </ScrollReveal>
             
             <ScrollReveal delay={0.1}>
                <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed max-w-2xl mx-auto text-balance">
                  The modern workflow is fractured. We act in one tool, feel in another, and plan in a third. The result is noise, not signal.
                </p>
             </ScrollReveal>
          </div>

          {/* The Problem Cards (Light Mode) */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
             
             {/* Card 1: Scattered Context */}
             <ScrollReveal delay={0.2} className="h-full">
                <div className="h-full bg-brand-bg/50 border border-gray-100 rounded-3xl p-8 lg:p-10 hover:bg-white hover:shadow-soft hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden">
                   
                   <div className="relative z-10">
                       <div className="h-14 w-14 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 transition-transform duration-500">
                           <Layers size={26} strokeWidth={1.5} />
                       </div>
                       <h3 className="text-2xl font-serif mb-4 text-brand-text">Scattered Context</h3>
                       <p className="text-sm text-gray-500 leading-relaxed font-light">
                          Insights from your morning pages never reach your strategy docs. Your wisdom is trapped in silos, forcing you to restart your thinking every time.
                       </p>
                   </div>
                </div>
             </ScrollReveal>
             
             {/* Card 2: Amnesiac AI */}
             <ScrollReveal delay={0.3} className="h-full">
                <div className="h-full bg-brand-bg/50 border border-gray-100 rounded-3xl p-8 lg:p-10 hover:bg-white hover:shadow-soft hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden">
                   
                   <div className="relative z-10">
                       <div className="h-14 w-14 bg-purple-50 border border-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-8 group-hover:scale-110 transition-transform duration-500">
                           <ZapOff size={26} strokeWidth={1.5} />
                       </div>
                       <h3 className="text-2xl font-serif mb-4 text-brand-text">Amnesiac AI</h3>
                       <p className="text-sm text-gray-500 leading-relaxed font-light">
                          Chatbots give quick answers but reset every session. They don't know your history, your values, or your long-term goals. They can't truly guide you.
                       </p>
                   </div>
                </div>
             </ScrollReveal>

             {/* Card 3: Static Journals */}
             <ScrollReveal delay={0.4} className="h-full">
                <div className="h-full bg-brand-bg/50 border border-gray-100 rounded-3xl p-8 lg:p-10 hover:bg-white hover:shadow-soft hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden">
                   
                   <div className="relative z-10">
                       <div className="h-14 w-14 bg-rose-50 border border-rose-100 rounded-2xl flex items-center justify-center text-rose-600 mb-8 group-hover:scale-110 transition-transform duration-500">
                           <Book size={26} strokeWidth={1.5} />
                       </div>
                       <h3 className="text-2xl font-serif mb-4 text-brand-text">Static Journals</h3>
                       <p className="text-sm text-gray-500 leading-relaxed font-light">
                          Writing "I'm stuck" for 6 months helps you endure, not resolve. Traditional journals are data graveyards—passive, linear, and disconnected from action.
                       </p>
                   </div>
                </div>
             </ScrollReveal>
          </div>

          {/* Visual Footer / Divider */}
          <ScrollReveal delay={0.5}>
              <div className="mt-24 flex justify-center">
                  <div className="h-16 w-px bg-gradient-to-b from-gray-200 to-transparent"></div>
              </div>
          </ScrollReveal>

       </div>
    </section>
  );
};