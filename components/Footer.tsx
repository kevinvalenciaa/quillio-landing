import React from 'react';
import { Feather } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-32 pb-12 relative overflow-hidden">
      
      {/* Final CTA Background: Dusk Gradient */}
      <div className="absolute top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-brand-lavender/30 to-white pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mb-24">
        <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-text mb-6">
                Clarity is a practice. Start today.
            </h2>
            <p className="text-gray-500 text-sm mb-10">
                3 minutes. No setup. Just you and Quillio.
            </p>
            <button className="px-10 py-4 text-sm font-medium text-white bg-brand-text rounded-full hover:bg-brand-text/90 transition-all shadow-xl shadow-brand-text/20">
                Start your reflection
            </button>
        </ScrollReveal>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-gray-100 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-400">
            <div className="flex items-center gap-2">
                 <Feather size={16} />
                <span className="font-serif font-medium text-gray-600">Quillio</span>
                <span>© 2025</span>
            </div>

            <div className="flex gap-6">
                <a href="#" className="hover:text-brand-text transition-colors">Privacy</a>
                <a href="#" className="hover:text-brand-text transition-colors">Security</a>
                <a href="#" className="hover:text-brand-text transition-colors">Manifesto</a>
                <a href="#" className="hover:text-brand-text transition-colors">Contact</a>
            </div>
      </div>
    </footer>
  );
};