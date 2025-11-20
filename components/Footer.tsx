import React from 'react';
import { Feather } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-32 pb-12 relative overflow-hidden">
      
      {/* Final CTA Background: Dusk Gradient */}
      <div className="absolute top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-slate-900 to-slate-950 pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mb-24">
        <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
                Clarity is a practice. Start today.
            </h2>
            <p className="text-blue-100/60 text-sm mb-10">
                3 minutes. No setup. Just you and Quillio.
            </p>
            <button className="px-10 py-4 text-sm font-medium text-slate-900 bg-white rounded-full hover:bg-blue-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                Start your reflection
            </button>
        </ScrollReveal>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/30">
            <div className="flex items-center gap-2">
                 <Feather size={16} className="text-white/50" />
                <span className="font-serif font-medium text-white/70">Quillio</span>
                <span>© 2025</span>
            </div>

            <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Security</a>
                <a href="#" className="hover:text-white transition-colors">Manifesto</a>
                <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
      </div>
    </footer>
  );
};
