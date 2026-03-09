import React, { useState } from 'react';

import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

interface ProjectInquiryViewProps {
  onBack: () => void;
}

const ProjectInquiryView: React.FC<ProjectInquiryViewProps> = ({ onBack }) => {
  const logoUrl = "https://i.ibb.co/KxxyJK63/IMG-20260215-091905-778.webp";
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone1: '',
    phone2: '',
    email: '',
    projectTitle: '',
    projectDetails: '',
    budget: '20k to 30k'
  });

  const budgetOptions = [
    '20k to 30k',
    '30k to 40k',
    '40k to 50k',
    '50k to 60k',
    '60k to 70k',
    '70k to 80k',
    '80k to 90k',
    '90k to 1 Lakh',
    'Above 1 Lakh'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'project_inquiries'), {
        ...formData,
        createdAt: serverTimestamp(),
        status: 'pending'
      });
      alert('Thank you for your inquiry! Our team will contact you soon.');
      onBack();
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      alert('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-xl z-50 border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center gap-2 md:gap-4">
          <button 
            onClick={onBack}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600 shrink-0"
            aria-label="Back"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full overflow-hidden shadow-sm border border-slate-100 shrink-0">
               <img src={logoUrl} alt="Logo" className="w-full h-full object-cover scale-110" />
            </div>
            <h1 className="text-[10px] md:text-xl font-black text-slate-900 tracking-tighter uppercase truncate">
              Gothwad <span className="text-[#0056B3]">Technologies</span>
            </h1>
          </div>
        </div>
      </header>

      <main className="pt-24 md:pt-32 pb-12 md:pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-8 md:mb-12">
            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[8px] md:text-[10px] bg-blue-50 px-3 md:px-4 py-1 md:py-1.5 rounded-full inline-block mb-3 md:mb-4">Project Initiation</span>
            <h2 className="text-3xl md:text-6xl font-black text-slate-900 leading-tight tracking-tighter">Tell Us About Your <br /><span className="text-[#0056B3]">Next Big Venture.</span></h2>
            <p className="text-slate-500 text-sm md:text-lg mt-3 md:mt-4 max-w-2xl mx-auto">Fill out the form below and our engineering team will get back to you with a strategic blueprint and quote.</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-[32px] md:rounded-[40px] border border-slate-100 shadow-2xl shadow-blue-500/5 p-6 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-10">
              {/* Name */}
              <div className="space-y-1.5 md:space-y-2">
                <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Full Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 text-sm md:text-base text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5 md:space-y-2">
                <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Email Address</label>
                <input 
                  required
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 text-sm md:text-base text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              {/* Phone 1 */}
              <div className="space-y-1.5 md:space-y-2">
                <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Phone Number</label>
                <input 
                  required
                  type="tel" 
                  placeholder="+91 00000 00000"
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 text-sm md:text-base text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  value={formData.phone1}
                  onChange={(e) => setFormData({...formData, phone1: e.target.value})}
                />
              </div>

              {/* Phone 2 */}
              <div className="space-y-1.5 md:space-y-2">
                <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Alternate Phone (Optional)</label>
                <input 
                  type="tel" 
                  placeholder="+91 00000 00000"
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 text-sm md:text-base text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  value={formData.phone2}
                  onChange={(e) => setFormData({...formData, phone2: e.target.value})}
                />
              </div>

              {/* Address */}
              <div className="md:col-span-2 space-y-1.5 md:space-y-2">
                <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Address / Location</label>
                <input 
                  required
                  type="text" 
                  placeholder="City, State, Country"
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 text-sm md:text-base text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                />
              </div>

              {/* Project Title */}
              <div className="md:col-span-2 space-y-1.5 md:space-y-2">
                <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Project Title</label>
                <input 
                  required
                  type="text" 
                  placeholder="e.g. E-commerce Platform, Mobile App, AI Integration"
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 text-sm md:text-base text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  value={formData.projectTitle}
                  onChange={(e) => setFormData({...formData, projectTitle: e.target.value})}
                />
              </div>

              {/* Project Details */}
              <div className="md:col-span-2 space-y-1.5 md:space-y-2">
                <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Project Details</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="Describe your vision, key features, and goals..."
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 text-sm md:text-base text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                  value={formData.projectDetails}
                  onChange={(e) => setFormData({...formData, projectDetails: e.target.value})}
                ></textarea>
              </div>

              {/* Budget */}
              <div className="md:col-span-2 space-y-3 md:space-y-4">
                <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Estimated Budget Range</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
                  {budgetOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setFormData({...formData, budget: option})}
                      className={`px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl text-[10px] md:text-xs font-bold transition-all border ${
                        formData.budget === option 
                        ? 'bg-[#0056B3] text-white border-transparent shadow-lg scale-105' 
                        : 'bg-white text-slate-600 border-slate-100 hover:border-blue-200'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 rounded-full flex items-center justify-center text-[#0056B3] shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-[10px] md:text-xs text-slate-500 font-medium max-w-[200px]">Your data is encrypted and handled with corporate-level security.</p>
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full md:w-auto bg-[#0056B3] text-white px-8 md:px-12 py-4 md:py-5 rounded-xl md:rounded-2xl font-black uppercase tracking-[0.2em] text-xs md:text-sm transition-all shadow-xl hover:-translate-y-1 active:scale-95 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-slate-900'}`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Project Blueprint'}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ProjectInquiryView;
