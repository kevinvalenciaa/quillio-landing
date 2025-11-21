import React, { useState, useEffect } from 'react';

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
        scrolled ? 'bg-slate-900/80 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group opacity-90 hover:opacity-100 transition-opacity">
            <img 
                src="/white-quillio.png" 
                alt="Quillio" 
                className="w-5 h-5"
            />
            <span className="text-lg font-serif font-medium tracking-tight text-white">Quillio</span>
        </div>

        {/* Desktop Links removed */}
        {/* Desktop Actions removed */}

        {/* Mobile Toggle removed since links are gone */}
        {/* <button 
          className="md:hidden p-2 text-white/70"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button> */}
      </div>

      {/* Mobile Menu removed */}
      {/* {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-slate-900 border-b border-white/10 p-6 md:hidden flex flex-col gap-4 shadow-xl animate-in fade-in slide-in-from-top-5">
          <a href="#" className="text-base font-serif text-white py-2 border-b border-white/10">Philosophy</a>
          <a href="#" className="text-base font-serif text-white py-2 border-b border-white/10">Modes</a>
          <a href="#" className="text-base font-serif text-white py-2 border-b border-white/10">Privacy</a>
          <div className="flex flex-col gap-3 pt-4">
            <button className="w-full px-4 py-3 text-sm font-medium text-white bg-white/5 rounded-lg">
              Sign In
            </button>
            <button className="w-full px-4 py-3 text-sm font-medium text-slate-900 bg-white rounded-lg">
              Start Thinking Clearly
            </button>
          </div>
        </div>
      )} */}
    </nav>
  );
};
