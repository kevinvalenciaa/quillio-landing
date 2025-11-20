import React from 'react';
import { ScrollReveal } from './ui/ScrollReveal';
import { Sparkles, History, Brain, ArrowRight } from 'lucide-react';

export const GuardianSection: React.FC = () => {
  return (
    <section className="py-32 lg:py-40 relative overflow-hidden bg-slate-950">
        {/* Subtle ambient light - barely visible atmospheric glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-to-b from-slate-800 via-blue-900/10 to-transparent rounded-full blur-3xl pointer-events-none opacity-30" />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="text-center mb-24">
                <ScrollReveal>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 shadow-sm text-blue-200/80 text-[11px] font-medium uppercase tracking-wider mb-8 transition-transform hover:scale-105 cursor-default">
                        <Sparkles size={12} className="text-amber-400 fill-amber-400" />
                        <span>Active Reasoning Engine</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 tracking-tight leading-[1.1]">
                        Meet your Jarvis <br/> <span className="italic text-white/40">for life decisions.</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-blue-100/60 max-w-2xl mx-auto leading-relaxed font-light text-balance">
                        Quillio doesn't just record your life; it remembers it. It gently surfaces patterns between your daily frustrations and your long-term dreams.
                    </p>
                </ScrollReveal>
            </div>

            {/* The Artifact */}
            <ScrollReveal delay={0.2}>
                <div className="relative mx-auto max-w-3xl">
                    {/* Decorative elements behind */}
                    <div className="absolute -inset-px bg-gradient-to-b from-white/10 to-transparent rounded-[2rem] -z-10 opacity-60" />
                    <div className="absolute inset-0 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.5)] rounded-[2rem]" />

                    <div className="relative bg-slate-900 rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl">
                        {/* UI Chrome */}
                        <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-slate-900/80 backdrop-blur-md sticky top-0 z-20">
                             <div className="flex items-center gap-3">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                                </div>
                             </div>
                             <div className="flex items-center gap-2 text-[10px] text-white/30 font-medium uppercase tracking-widest">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                Live Session
                             </div>
                        </div>

                        <div className="p-8 md:p-12 text-left space-y-10 bg-gradient-to-b from-slate-900 to-slate-800/30">
                            {/* User Input */}
                            <div className="flex gap-5 group items-start">
                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10 text-white/40 text-xs font-medium mt-1">
                                    You
                                </div>
                                <div className="flex-1">
                                    <div className="inline-block p-5 bg-white/5 rounded-2xl rounded-tl-none text-lg md:text-xl text-white font-medium leading-relaxed tracking-tight border border-white/5">
                                        I feel like I'm spinning my wheels on this launch. Maybe I should delay it.
                                    </div>
                                </div>
                            </div>

                            {/* AI Response */}
                            <div className="flex gap-5 relative items-start">
                                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-900/20 mt-1 relative z-10 text-white">
                                    <Brain size={14} className="text-white" />
                                </div>
                                <div className="flex-1 space-y-4">
                                    {/* Context Tag */}
                                    <div className="flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-700">
                                        <span className="px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                                            <History size={10} />
                                            Context Active
                                        </span>
                                        <span className="text-xs text-white/30">Found 3 related entries</span>
                                    </div>

                                    <div className="p-6 bg-white rounded-2xl rounded-tl-none border-none shadow-sm space-y-5 animate-in fade-in slide-in-from-bottom-3 duration-700 delay-200">
                                        <p className="text-base text-slate-800 leading-relaxed font-medium">
                                            You mentioned <span className="bg-yellow-100 px-1.5 py-0.5 rounded border border-yellow-200 text-yellow-800 font-bold">fear of shipping</span> three times last week.
                                        </p>
                                        
                                        <div className="relative pl-4 border-l-2 border-blue-600">
                                            <p className="text-xl md:text-2xl text-slate-900 font-serif leading-relaxed">
                                                Is this delay about the product quality, or the safety of not launching?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                             {/* User Response */}
                             <div className="flex gap-5 items-start opacity-60 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10 text-white/40 text-xs font-medium mt-1">
                                    You
                                </div>
                                <div className="flex-1">
                                    <div className="inline-block p-5 bg-white/5 rounded-2xl rounded-tl-none text-lg md:text-xl text-white/70 font-medium leading-relaxed tracking-tight border border-white/5">
                                        Ugh. It's the safety. The product is fine.
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Footer Input Placeholder */}
                         <div className="px-6 py-4 border-t border-white/5 bg-white/5 flex items-center gap-4">
                            <div className="w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/20">
                                <Sparkles size={14} />
                            </div>
                            <div className="h-2 w-32 bg-white/10 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </div>
    </section>
  );
};
