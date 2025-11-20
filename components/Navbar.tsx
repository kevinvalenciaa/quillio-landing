import React, { useState, useEffect } from 'react';
import { Menu, X, Feather } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-brand-bg/80 backdrop-blur-md border-b border-gray-100/50 py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group opacity-90 hover:opacity-100 transition-opacity">
            <div className="text-brand-text">
                <Feather className="w-5 h-5" strokeWidth={2} />
            </div>
            <span className="text-lg font-serif font-medium tracking-tight text-brand-text">Quillio</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-text/60">
          <a href="#philosophy" className="hover:text-brand-text transition-colors">Philosophy</a>
          <a href="#features" className="hover:text-brand-text transition-colors">Modes</a>
          <a href="#privacy" className="hover:text-brand-text transition-colors">Privacy</a>
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button className="px-5 py-2 text-xs font-medium text-brand-text bg-transparent border border-brand-text/10 rounded-full hover:bg-brand-text/5 transition-all">
            Sign In
          </button>
          <button className="px-5 py-2 text-xs font-medium text-white bg-brand-text rounded-full hover:bg-brand-text/90 transition-all shadow-soft hover:shadow-lg">
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-brand-text/70"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-brand-bg border-b border-gray-100 p-6 md:hidden flex flex-col gap-4 shadow-xl animate-in fade-in slide-in-from-top-5">
          <a href="#" className="text-base font-serif text-brand-text py-2 border-b border-gray-100">Philosophy</a>
          <a href="#" className="text-base font-serif text-brand-text py-2 border-b border-gray-100">Modes</a>
          <a href="#" className="text-base font-serif text-brand-text py-2 border-b border-gray-100">Privacy</a>
          <div className="flex flex-col gap-3 pt-4">
            <button className="w-full px-4 py-3 text-sm font-medium text-brand-text bg-gray-50 rounded-lg">
              Sign In
            </button>
            <button className="w-full px-4 py-3 text-sm font-medium text-white bg-brand-text rounded-lg">
              Start Thinking Clearly
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};