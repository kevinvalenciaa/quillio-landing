import React from 'react';
import { ScrollReveal } from './ui/ScrollReveal';
import { Sparkles, History, Brain } from 'lucide-react';

export const GuardianSection: React.FC = () => {
  return (
    <section className="py-32 lg:py-40 relative overflow-hidden bg-white">
        {/* Subtle ambient light - barely visible atmospheric glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-to-b from-gray-50 via-indigo-50/20 to-transparent rounded-full blur-3xl pointer-events-none opacity-60" />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="text-center mb-24">
                <ScrollReveal>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm text-gray-600 text-[11px] font-medium uppercase tracking-wider mb-8 transition-transform hover:scale-105 cursor-default">
                        <Sparkles size={12} className="text-amber-400 fill-amber-400" />
                        <span>Active Reasoning Engine</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-serif text-brand-text mb-8 tracking-tight leading-[1.1]">
                        Meet your Jarvis <br/> <span className="italic text-gray-400">for life decisions.</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-light text-balance">
                        Quillio doesn't just record your life; it remembers it. It gently surfaces patterns between your daily frustrations and your long-term dreams.
                    </p>
                </ScrollReveal>
            </div>

            {/* The Artifact */}
            <ScrollReveal delay={0.2}>
                <div className="relative mx-auto max-w-3xl">
                    {/* Decorative elements behind */}
                    <div className="absolute -inset-px bg-gradient-to-b from-gray-200 to-transparent rounded-[2rem] -z-10 opacity-60" />
                    <div className="absolute inset-0 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.05)] rounded-[2rem]" />

                    <div className="relative bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm">
                        {/* UI Chrome */}
                        <div className="px-6 py-4 border-b border-gray-50 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-20">
                             <div className="flex items-center gap-3">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                                </div>
                             </div>
                             <div className="flex items-center gap-2 text-[10px] text-gray-400 font-medium uppercase tracking-widest">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                Live Session
                             </div>
                        </div>

                        <div className="p-8 md:p-12 text-left space-y-10 bg-gradient-to-b from-white to-gray-50/30">
                            {/* User Input */}
                            <div className="flex gap-5 group items-start">
                                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 border border-gray-200 text-gray-400 text-xs font-medium mt-1">
                                    You
                                </div>
                                <div className="flex-1">
                                    <div className="inline-block p-5 bg-gray-50 rounded-2xl rounded-tl-none text-lg md:text-xl text-gray-800 font-medium leading-relaxed tracking-tight">
                                        I feel like I'm spinning my wheels on this launch. Maybe I should delay it.
                                    </div>
                                </div>
                            </div>

                            {/* Visual Connector */}
                            {/* <div className="pl-4 -my-6 opacity-30">
                                <div className="w-px h-12 bg-gray-300 border-l border-dashed border-gray-300"></div>
                            </div> */}

                            {/* AI Response */}
                            <div className="flex gap-5 relative items-start">
                                <div className="w-8 h-8 rounded-full bg-brand-text flex items-center justify-center flex-shrink-0 shadow-lg shadow-brand-text/20 mt-1 relative z-10">
                                    <Brain size={14} className="text-white" />
                                </div>
                                <div className="flex-1 space-y-4">
                                    {/* Context Tag */}
                                    <div className="flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-700">
                                        <span className="px-2.5 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                                            <History size={10} />
                                            Context Active
                                        </span>
                                        <span className="text-xs text-gray-400">Found 3 related entries</span>
                                    </div>

                                    <div className="p-6 bg-white rounded-2xl rounded-tl-none border border-gray-100 shadow-sm space-y-5 animate-in fade-in slide-in-from-bottom-3 duration-700 delay-200">
                                        <p className="text-base text-gray-600 leading-relaxed">
                                            You mentioned <span className="bg-yellow-50 px-1.5 py-0.5 rounded border border-yellow-100 text-yellow-800 font-medium">fear of shipping</span> three times last week.
                                        </p>
                                        
                                        <div className="relative pl-4 border-l-2 border-brand-accent/30">
                                            <p className="text-xl md:text-2xl text-brand-text font-serif leading-relaxed">
                                                Is this delay about the product quality, or the safety of not launching?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                             {/* User Response */}
                            <div className="flex gap-5 group items-start">
                                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 border border-gray-200 text-gray-400 text-xs font-medium mt-1">
                                    You
                                </div>
                                <div className="flex-1">
                                    <div className="inline-block p-5 bg-gray-50 rounded-2xl rounded-tl-none text-lg md:text-xl text-gray-800 font-medium leading-relaxed tracking-tight">
                                        Ugh. It's the safety. The product is fine.
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Footer Input Placeholder */}
                         <div className="px-6 py-4 border-t border-gray-100 bg-gray-50/50 flex items-center gap-4">
                            <div className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-300">
                                <Sparkles size={14} />
                            </div>
                            <div className="h-2 w-32 bg-gray-200/50 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </div>
    </section>
  );
};
