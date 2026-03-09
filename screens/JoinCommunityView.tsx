import React, { useState } from 'react';

import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

interface JoinCommunityViewProps {
  onBack: () => void;
}

const JoinCommunityView: React.FC<JoinCommunityViewProps> = ({ onBack }) => {
  const logoUrl = "https://i.ibb.co/KxxyJK63/IMG-20260215-091905-778.webp";
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    instaUsername: '',
    profession: 'Web Developer'
  });

  const professionOptions = [
    'Web Developer',
    'App Developer',
    'AI / ML Related',
    'Any Other Tech Related'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'community_requests'), {
        ...formData,
        createdAt: serverTimestamp(),
        status: 'pending'
      });
      alert('Thank you for your interest! Our team will review your profile and get back to you.');
      onBack();
    } catch (error) {
      console.error('Error submitting request:', error);
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
            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[8px] md:text-[10px] bg-blue-50 px-3 md:px-4 py-1 md:py-1.5 rounded-full inline-block mb-3 md:mb-4">Join Our Ecosystem</span>
            <h2 className="text-3xl md:text-6xl font-black text-slate-900 leading-tight tracking-tighter">Become a <br /><span className="text-[#0056B3]">Gothwad Contributor.</span></h2>
            <p className="text-slate-500 text-sm md:text-lg mt-3 md:mt-4 max-w-2xl mx-auto">Are you a developer, designer, or tech enthusiast? Join India's fastest-growing open-source community and build the future with us.</p>
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

              {/* Phone */}
              <div className="space-y-1.5 md:space-y-2">
                <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Phone Number</label>
                <input 
                  required
                  type="tel" 
                  placeholder="+91 00000 00000"
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 text-sm md:text-base text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              {/* Instagram */}
              <div className="space-y-1.5 md:space-y-2">
                <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Instagram Username</label>
                <input 
                  required
                  type="text" 
                  placeholder="@yourusername"
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 text-sm md:text-base text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  value={formData.instaUsername}
                  onChange={(e) => setFormData({...formData, instaUsername: e.target.value})}
                />
              </div>

              {/* Profession */}
              <div className="md:col-span-2 space-y-3 md:space-y-4">
                <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Your Profession / Expertise</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {professionOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setFormData({...formData, profession: option})}
                      className={`px-3 md:px-4 py-3 md:py-4 rounded-lg md:rounded-xl text-[10px] md:text-xs font-bold transition-all border text-left flex items-center justify-between ${
                        formData.profession === option 
                        ? 'bg-[#0056B3] text-white border-transparent shadow-lg' 
                        : 'bg-white text-slate-600 border-slate-100 hover:border-blue-200'
                      }`}
                    >
                      {option}
                      {formData.profession === option && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 rounded-full flex items-center justify-center text-[#0056B3] shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <p className="text-[10px] md:text-xs text-slate-500 font-medium max-w-[200px]">Join a community of 10,000+ developers building for India.</p>
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full md:w-auto bg-[#0056B3] text-white px-8 md:px-12 py-4 md:py-5 rounded-xl md:rounded-2xl font-black uppercase tracking-[0.2em] text-xs md:text-sm transition-all shadow-xl hover:-translate-y-1 active:scale-95 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-slate-900'}`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default JoinCommunityView;
