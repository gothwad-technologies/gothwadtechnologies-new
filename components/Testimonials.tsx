
import React from 'react';

const reviews = [
  { name: 'Dr. Ramesh Sharma', org: 'Global Public School', text: 'School X has reduced our administrative workload by 60%. Highly recommend Gothwad Tech!' },
  { name: 'Ankita Meena', org: 'Gamerz Zone', text: 'Working with Pawan was a breeze. They delivered a high-performance game in record time.' },
  { name: 'Rahul Chaudhary', org: 'S.R. Academy', text: 'The attendance and fee module in School X is the most stable we have ever used.' }
];

const Testimonials: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
       <div className="text-center mb-10 md:mb-16">
        <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Success Stories</span>
        <h2 className="text-4xl md:text-5xl font-black mt-2 text-slate-900 leading-tight">Trusted by Industry Leaders</h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-7xl mx-auto mb-16">
        {reviews.map((r, i) => (
          <div key={i} className="bg-white p-4 md:p-8 rounded-2xl md:rounded-[40px] soft-shadow border border-slate-50 relative flex flex-col justify-between">
            <div>
              <div className="text-[#0056B3] mb-2 md:mb-4 flex gap-0.5">
                {[1,2,3,4,5].map(star => (
                  <span key={star} className="text-xs md:text-xl">★</span>
                ))}
              </div>
              <p className="text-slate-600 text-[10px] md:text-base italic leading-relaxed mb-4 md:mb-6">"{r.text}"</p>
            </div>
            <div className="flex items-center gap-2 md:gap-4">
              <div className="w-8 h-8 md:w-12 md:h-12 bg-slate-100 rounded-full overflow-hidden shrink-0">
                <img src={`https://picsum.photos/seed/rev${i}/100/100`} alt={r.name} />
              </div>
              <div className="min-w-0">
                <h5 className="font-bold text-slate-900 text-[10px] md:text-sm truncate">{r.name}</h5>
                <p className="text-[8px] md:text-xs font-bold text-blue-600 uppercase tracking-widest truncate">{r.org}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Feedback Form */}
      <div className="max-w-3xl mx-auto bg-slate-50 p-6 md:p-10 rounded-3xl border border-slate-100">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">Submit Your Feedback</h3>
          <p className="text-slate-500 text-sm font-medium">We value your opinion on our engineering standards.</p>
        </div>
        <form className="space-y-4 md:space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Full Name</label>
              <input type="text" placeholder="John Doe" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 md:py-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Profession / Org</label>
              <input type="text" placeholder="CEO, TechCorp" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 md:py-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Your Experience</label>
            <textarea rows={4} placeholder="Tell us about your project success..." className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 md:py-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"></textarea>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Rating:</span>
              <div className="flex gap-1">
                {[1,2,3,4,5].map(star => (
                  <button key={star} type="button" className="text-2xl text-slate-300 hover:text-yellow-400 transition-colors">★</button>
                ))}
              </div>
            </div>
            <button className="w-full md:w-auto bg-[#0056B3] text-white px-10 py-4 rounded-xl font-black uppercase tracking-[0.2em] text-xs hover:bg-slate-900 transition-all shadow-lg hover:scale-105 active:scale-95">
              Post Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Testimonials;
