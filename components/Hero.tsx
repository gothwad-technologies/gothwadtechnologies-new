
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Shining Glow Background Elements */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-blue-100 rounded-full mix-blend-multiply filter blur-[150px] opacity-40 animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-[1000px] h-[1000px] bg-slate-200 rounded-full mix-blend-multiply filter blur-[150px] opacity-40 animate-pulse delay-1000"></div>

      {/* Subtle Dot Grid */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0056B3 0.5px, transparent 0.5px)', backgroundSize: '48px 48px' }}></div>

      <div className="container mx-auto px-6 relative z-10 text-center py-10 md:py-16">
        <div className="inline-flex items-center gap-3 px-6 py-2.5 glass-card border border-white/80 rounded-full mb-6 md:mb-8 group cursor-default shadow-sm transition-all hover:shadow-md">
          <div className="w-2 h-2 bg-[#0056B3] rounded-full animate-ping"></div>
          <span className="text-slate-900 text-[9px] font-black tracking-[0.3em] uppercase italic">India's Biggest Open Source Developer Community / Aiming for Tech Self-Reliance</span>
        </div>
        
        <h1 className="text-5xl md:text-[110px] font-black text-slate-900 leading-[0.9] mb-8 md:mb-10 tracking-tighter">
          Building India's <br /> <span className="text-[#0056B3]">Self-Reliant Future.</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-500 max-w-4xl mx-auto mb-10 md:mb-12 leading-relaxed font-medium">
          Replacing foreign technology with indigenous innovation. <br className="hidden md:block" />
          <span className="text-slate-900 font-black">Smart Software & Custom Solutions</span> engineered for a digital-first India.
        </p>

        <div className="flex flex-row items-center justify-center gap-2 md:gap-6">
          <a 
            href="https://gtechstore.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-slate-900 text-white px-3 py-3 md:px-12 md:py-7 rounded-xl md:rounded-[28px] text-[9px] md:text-xs font-black uppercase tracking-[0.1em] md:tracking-[0.2em] hover:bg-[#0056B3] transition-all shadow-2xl hover:-translate-y-1 active:scale-95 flex items-center justify-center min-w-[120px] md:min-w-0"
          >
            Visit Store
          </a>
          <a 
            href="https://github.com/gothwadtechnologies" 
            target="_blank" 
            rel="noopener noreferrer"
            className="glass-card text-[#0056B3] border border-white px-3 py-3 md:px-12 md:py-7 rounded-xl md:rounded-[28px] text-[9px] md:text-xs font-black uppercase tracking-[0.1em] md:tracking-[0.2em] hover:bg-white transition-all active:scale-95 shadow-lg flex items-center justify-center min-w-[120px] md:min-w-0"
          >
            Explore Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
