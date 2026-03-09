
import React from 'react';

const services = [
  {
    title: 'Enterprise App Development',
    desc: 'Scalable mobile and web applications built with TypeScript and React Native for millions of users.',
    icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
  },
  {
    title: 'High-Performance Game Dev',
    desc: 'Immersive arcade and simulation games developed using custom low-latency engines.',
    icon: 'M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z'
  },
  {
    title: 'Cloud Infrastructure',
    desc: 'High-availability server solutions and real-time database management for educational institutions.',
    icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z'
  },
  {
    title: 'Educational Systems',
    desc: 'Bespoke ERP and management software for schools and colleges (School X ecosystem).',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
  },
  {
    title: 'Digital Marketing & Growth',
    desc: 'Data-driven strategies and YouTube content production via our Ai Tricker network.',
    icon: 'M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z'
  },
  {
    title: 'Developer Consultancy',
    desc: 'Code audits, technical debt reduction, and architecture planning for scaling startups.',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
  }
];

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-10">
        <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Capabilities</span>
        <h2 className="text-4xl md:text-5xl font-black mt-2 text-slate-900 leading-tight">Elite Software Services</h2>
      </div>
      
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {services.map((s, i) => (
          <div key={i} className="bg-white p-4 md:p-8 rounded-2xl md:rounded-[32px] soft-shadow border border-slate-100 hover:border-blue-100 transition-all card-hover">
            <div className="w-10 h-10 md:w-16 md:h-16 bg-blue-50 rounded-xl md:rounded-2xl flex items-center justify-center text-[#0056B3] mb-4 md:mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={s.icon} />
              </svg>
            </div>
            <h3 className="text-sm md:text-2xl font-bold text-slate-900 mb-2 md:mb-4">{s.title}</h3>
            <p className="text-[10px] md:text-base text-slate-500 leading-relaxed">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
