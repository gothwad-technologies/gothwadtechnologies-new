
import React from 'react';

const stats = [
  { label: 'Lines of Code', value: '10M+', suffix: '' },
  { label: 'Satisfied Clients', value: '500', suffix: '+' },
  { label: 'People Managed', value: '250', suffix: 'K+' },
  { label: 'YouTube Subscribers', value: '30K', suffix: '+' }
];

const Stats: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="bg-white rounded-[40px] premium-shadow py-12 px-4 md:px-8 grid grid-cols-2 md:flex md:flex-wrap justify-around items-center gap-6 md:gap-8 border border-slate-50">
        {stats.map((stat, i) => (
          <div key={i} className="text-center group">
            <p className="text-3xl md:text-5xl font-black text-[#0056B3] mb-2 tracking-tighter group-hover:scale-110 transition-transform">
              {stat.value}{stat.suffix}
            </p>
            <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
