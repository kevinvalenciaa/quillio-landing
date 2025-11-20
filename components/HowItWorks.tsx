import React from 'react';
import { ScrollReveal } from './ui/ScrollReveal';
import { Mic, BrainCircuit, ArrowUpRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <ScrollReveal>
                <div className="text-center relative z-10">
                    <div className="w-16 h-16 mx-auto bg-slate-900 border border-white/10 shadow-lg shadow-black/20 rounded-2xl flex items-center justify-center mb-6 text-blue-400">
                        <Mic size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-serif font-medium text-white mb-2">1. Capture</h3>
                    <p className="text-sm text-blue-100/60 leading-relaxed max-w-xs mx-auto">
                        Speak, write, or type. Unload your mental clutter into a judgment-free space.
                    </p>
                </div>
            </ScrollReveal>

             <ScrollReveal delay={0.1}>
                <div className="text-center relative z-10">
                    <div className="w-16 h-16 mx-auto bg-slate-900 border border-white/10 shadow-lg shadow-black/20 rounded-2xl flex items-center justify-center mb-6 text-purple-400">
                        <BrainCircuit size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-serif font-medium text-white mb-2">2. Connect</h3>
                    <p className="text-sm text-blue-100/60 leading-relaxed max-w-xs mx-auto">
                        Quillio links today's fears with last month's goals, finding patterns you missed.
                    </p>
                </div>
            </ScrollReveal>

             <ScrollReveal delay={0.2}>
                <div className="text-center relative z-10">
                    <div className="w-16 h-16 mx-auto bg-slate-900 border border-white/10 shadow-lg shadow-black/20 rounded-2xl flex items-center justify-center mb-6 text-emerald-400">
                        <ArrowUpRight size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-serif font-medium text-white mb-2">3. Clarify</h3>
                    <p className="text-sm text-blue-100/60 leading-relaxed max-w-xs mx-auto">
                        Receive daily summaries, strategic nudges, and a clear path forward.
                    </p>
                </div>
            </ScrollReveal>
        </div>

      </div>
    </section>
  );
};
