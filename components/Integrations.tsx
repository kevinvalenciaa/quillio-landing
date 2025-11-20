import React from 'react';
import { ScrollReveal } from './ui/ScrollReveal';
import { Github, Slack, Calendar, Trello, Mail, Database, Feather } from 'lucide-react';

export const Integrations: React.FC = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        <ScrollReveal>
            <div className="inline-block bg-indigo-50 rounded-full px-3 py-1 text-xs font-medium text-brand-orange mb-4">
                Integrations
            </div>
            <h2 className="text-4xl font-medium text-gray-900 mb-20">
                Connects with your <br/> entire workflow
            </h2>
        </ScrollReveal>

        {/* Hub Animation */}
        <div className="relative h-[400px] flex items-center justify-center">
            <ScrollReveal>
                <div className="relative z-10">
                    {/* Center Node */}
                    <div className="w-32 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl shadow-indigo-200 z-20 relative">
                        <div className="flex items-center gap-2 text-white">
                            <Feather size={18} />
                            <span className="font-medium tracking-wide">Quillio</span>
                        </div>
                    </div>

                    {/* Orbiting Icons */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px]">
                        
                        {/* Icons placed along an arc - updated for "Thinking Tools" context */}
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-white border border-gray-100 rounded-full shadow-sm animate-float" style={{ animationDelay: '0s' }}>
                            <Calendar className="w-6 h-6 text-gray-600" />
                        </div>
                        <div className="absolute left-[15%] top-[20%] p-3 bg-white border border-gray-100 rounded-full shadow-sm animate-float" style={{ animationDelay: '1s' }}>
                            <Slack className="w-6 h-6 text-gray-600" />
                        </div>
                        <div className="absolute left-[30%] top-[80%] p-3 bg-white border border-gray-100 rounded-full shadow-sm animate-float" style={{ animationDelay: '2s' }}>
                            <Mail className="w-6 h-6 text-gray-600" />
                        </div>
                        
                        <div className="absolute right-[30%] top-[10%] p-3 bg-white border border-gray-100 rounded-full shadow-sm animate-float" style={{ animationDelay: '1.5s' }}>
                            <Github className="w-6 h-6 text-gray-600" />
                        </div>
                        <div className="absolute right-[15%] top-[70%] p-3 bg-white border border-gray-100 rounded-full shadow-sm animate-float" style={{ animationDelay: '0.5s' }}>
                            <Trello className="w-6 h-6 text-gray-600" />
                        </div>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-white border border-gray-100 rounded-full shadow-sm animate-float" style={{ animationDelay: '2.5s' }}>
                            <Database className="w-6 h-6 text-gray-600" />
                        </div>

                         {/* Connecting lines to center (visual flair) */}
                         <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
                             <path d="M300 150 L 0 150" stroke="currentColor" strokeDasharray="4" fill="none" />
                             <path d="M300 150 L 90 60" stroke="currentColor" strokeDasharray="4" fill="none" />
                             <path d="M300 150 L 180 240" stroke="currentColor" strokeDasharray="4" fill="none" />
                             <path d="M300 150 L 420 30" stroke="currentColor" strokeDasharray="4" fill="none" />
                             <path d="M300 150 L 510 210" stroke="currentColor" strokeDasharray="4" fill="none" />
                             <path d="M300 150 L 600 150" stroke="currentColor" strokeDasharray="4" fill="none" />
                         </svg>
                    </div>
                </div>
            </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3}>
            <p className="max-w-2xl mx-auto text-xs text-gray-500 mt-12 leading-relaxed">
                Whether you're reflecting on your calendar, processing Slack conversations, or planning in Linear, Quillio pulls the context you need into one coherent space.
            </p>
        </ScrollReveal>

      </div>
    </section>
  );
};