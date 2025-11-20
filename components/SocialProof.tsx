import React from 'react';
import { ScrollReveal } from './ui/ScrollReveal';

export const SocialProof: React.FC = () => {
  return (
    <section className="relative z-20 py-10 border-b border-white/5 bg-slate-900/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        
        <ScrollReveal width="100%">
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 shadow-sm flex items-center gap-3 hover:bg-white/10 transition-colors">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-[11px] font-medium text-blue-100/80 tracking-wide">1.2k+ builders reflecting daily</span>
                </div>
                <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 shadow-sm flex items-center gap-3 hover:bg-white/10 transition-colors">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                    <span className="text-[11px] font-medium text-blue-100/80 tracking-wide">40+ teams early access</span>
                </div>
                 <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 shadow-sm flex items-center gap-3 hover:bg-white/10 transition-colors">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                    <span className="text-[11px] font-medium text-blue-100/80 tracking-wide">76% report clearer decisions</span>
                </div>
            </div>
        </ScrollReveal>

        <ScrollReveal width="100%" delay={0.1}>
            <div className="flex gap-8 items-center justify-center md:justify-end opacity-50 hover:opacity-100 transition-all duration-700">
               <span className="font-serif font-bold text-xl tracking-tight text-white">Linear</span>
               <span className="font-sans font-bold text-lg tracking-tight text-white">Notion</span>
               <span className="font-serif font-bold text-xl tracking-tight italic text-white">Substack</span>
               <svg height="20" viewBox="0 0 116 100" fill="currentColor" className="text-white"><path fillRule="evenodd" clipRule="evenodd" d="M57.5 0L115 100H0L57.5 0z" /></svg>
            </div>
        </ScrollReveal>
        
      </div>
    </section>
  );
};
