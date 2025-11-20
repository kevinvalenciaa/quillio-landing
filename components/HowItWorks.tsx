import React from 'react';
import { ScrollReveal } from './ui/ScrollReveal';
import { Mic, BrainCircuit, ArrowUpRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

            <ScrollReveal>
                <div className="text-center relative z-10">
                    <div className="w-16 h-16 mx-auto bg-white border border-gray-100 shadow-sm rounded-2xl flex items-center justify-center mb-6 text-gray-400">
                        <Mic size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-serif font-medium text-brand-text mb-2">1. Capture</h3>
                    <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
                        Speak, write, or type. Unload your mental clutter into a judgment-free space.
                    </p>
                </div>
            </ScrollReveal>

             <ScrollReveal delay={0.1}>
                <div className="text-center relative z-10">
                    <div className="w-16 h-16 mx-auto bg-white border border-gray-100 shadow-sm rounded-2xl flex items-center justify-center mb-6 text-brand-accent">
                        <BrainCircuit size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-serif font-medium text-brand-text mb-2">2. Connect</h3>
                    <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
                        Quillio links today's fears with last month's goals, finding patterns you missed.
                    </p>
                </div>
            </ScrollReveal>

             <ScrollReveal delay={0.2}>
                <div className="text-center relative z-10">
                    <div className="w-16 h-16 mx-auto bg-white border border-gray-100 shadow-sm rounded-2xl flex items-center justify-center mb-6 text-brand-text">
                        <ArrowUpRight size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-serif font-medium text-brand-text mb-2">3. Clarify</h3>
                    <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
                        Receive daily summaries, strategic nudges, and a clear path forward.
                    </p>
                </div>
            </ScrollReveal>
        </div>

      </div>
    </section>
  );
};