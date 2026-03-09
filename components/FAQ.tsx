
import React, { useState } from 'react';

const faqs = [
  { q: 'How scalable is School X?', a: 'School X is designed with micro-services architecture, allowing it to handle from 500 to 50,000 students without performance degradation.' },
  { q: 'What is the pricing model for Gothwad App Store?', a: 'We offer both one-time licenses and SaaS-based subscription models depending on the product and usage requirements.' },
  { q: 'Is my data secure with Gothwad Cloud?', a: 'We utilize enterprise-grade encryption (AES-256) and redundant cloud backups to ensure 99.99% data safety.' }
];

const FAQ: React.FC = () => {
  const [active, setActive] = useState<number | null>(0);

  return (
    <div className="container mx-auto px-6 max-w-4xl">
      <div className="text-center mb-10">
        <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Support</span>
        <h2 className="text-4xl md:text-5xl font-black mt-2 text-slate-900 leading-tight">Frequently Asked Questions</h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white rounded-3xl soft-shadow border border-slate-100 overflow-hidden transition-all">
            <button 
              onClick={() => setActive(active === i ? null : i)}
              className="w-full text-left px-8 py-6 flex items-center justify-between"
            >
              <span className="text-lg font-bold text-slate-900">{faq.q}</span>
              <span className={`text-[#0056B3] transition-transform text-2xl font-bold ${active === i ? 'rotate-45' : ''}`}>+</span>
            </button>
            <div className={`px-8 transition-all duration-300 ease-in-out ${active === i ? 'pb-8 max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
              <p className="text-slate-500 leading-relaxed">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
