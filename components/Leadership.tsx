
import React from 'react';

const leaders = [
  {
    name: 'Pawan Kumar Meena',
    role: 'Founder & Principal Architect',
    bio: 'Pawan (Gothwad) is the lead visionary behind Gothwad Technologies, specializing in ultra-high-capacity system architectures.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop',
  },
  {
    name: 'Vishnu Meena',
    role: 'Co-Founder & Head of Tech',
    bio: 'A master of backend performance, Vishnu ensures that every Gothwad product operates with zero-latency efficiency.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop',
  },
  {
    name: 'Chirag Jha',
    role: 'CEO & Strategy Lead',
    bio: 'Chirag drives the global expansion and strategic partnerships for the Gothwad ecosystem.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop',
  }
];

const Leadership: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Board of Directors</span>
        <h2 className="text-4xl md:text-5xl font-black mt-2 text-slate-900 leading-tight">Visionary Engineering</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {leaders.map((leader, i) => (
          <div key={i} className="flex flex-col items-center text-center group">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-6 border-4 border-white shadow-2xl transition-transform duration-500 group-hover:scale-105 relative">
              <img 
                src={leader.image} 
                alt={leader.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <span className="text-[#0056B3] font-black text-[10px] uppercase tracking-[0.3em] mb-2 block">{leader.role}</span>
            <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tighter">{leader.name}</h3>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              {leader.bio}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leadership;
