
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenContact: () => void;
  onStartProject: () => void;
  onLogoClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onStartProject, onLogoClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const logoUrl = "https://i.ibb.co/KxxyJK63/IMG-20260215-091905-778.webp";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-lg py-3' : 'bg-transparent py-5'
    }`}>
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Left: Logo + Name */}
        <div 
          className="flex items-center gap-3 md:gap-4 group cursor-pointer" 
          onClick={() => onLogoClick ? onLogoClick() : window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full overflow-hidden shadow-md group-hover:rotate-12 transition-transform duration-500 shrink-0 border border-slate-100">
             <img src={logoUrl} alt="Gothwad Logo" className="w-full h-full object-cover scale-110" />
          </div>
          <div className="leading-tight">
            <h1 className="text-sm md:text-xl font-black text-slate-900 tracking-tighter uppercase">
              Gothwad <span className="text-[#0056B3]">Technologies</span>
            </h1>
          </div>
        </div>

        {/* Right: Actions + Menu */}
        <div className="flex items-center gap-2 md:gap-6">
          <div className="flex items-center gap-2 md:gap-4">
            <button 
              onClick={onStartProject}
              className="bg-[#0056B3] text-white px-4 md:px-7 py-2 md:py-3 rounded-full text-[9px] md:text-xs font-black uppercase tracking-widest hover:bg-slate-900 transition-all shadow-lg hover:-translate-y-0.5 active:scale-95 whitespace-nowrap"
            >
              Start Project
            </button>
          </div>

          {/* Hamburger Menu (3 Horizontal Lines) */}
          <button 
            onClick={onOpenContact}
            className="p-2 md:p-3 text-slate-900 hover:text-[#0056B3] transition-colors"
            aria-label="Menu"
          >
            <div className="space-y-1.5 flex flex-col items-end">
              <div className="w-6 md:w-8 h-0.5 bg-current rounded-full"></div>
              <div className="w-6 md:w-8 h-0.5 bg-current rounded-full"></div>
              <div className="w-6 md:w-8 h-0.5 bg-current rounded-full"></div>
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
