
import React from 'react';

const markets = [
  { name: 'EdTech', icon: '🎓', label: 'School X ecosystem for thousands of institutions.' },
  { name: 'FinTech', icon: '💰', label: 'Secure payroll and institutional fee management.' },
  { name: 'Gaming', icon: '🎮', label: 'Hyper-performance mobile gaming & social engines.' },
  { name: 'E-commerce', icon: '🛍️', label: 'Scalable marketplaces with G-Auth integration.' },
  { name: 'Healthcare', icon: '🏥', label: 'Patient data management and diagnostic tools.' },
  { name: 'Logistics', icon: '🚚', label: 'Real-time fleet tracking and optimization.' }
];

const Industries: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-10">
        <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Market Expertise</span>
        <h2 className="text-4xl md:text-5xl font-black mt-2 text-slate-900">Industries We Empower</h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {markets.map((m, i) => (
          <div key={i} className="group bg-white p-4 md:p-8 rounded-2xl md:rounded-3xl border border-slate-100 hover:bg-[#0056B3] transition-all duration-300 shadow-sm cursor-default">
            <div className="text-2xl md:text-4xl mb-2 md:mb-4 grayscale group-hover:grayscale-0 transition-all">{m.icon}</div>
            <h4 className="text-sm md:text-xl font-black text-slate-900 group-hover:text-white mb-1 md:mb-3">{m.name}</h4>
            <p className="text-[10px] md:text-sm text-slate-500 group-hover:text-blue-100 leading-relaxed font-medium">
              {m.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industries;
