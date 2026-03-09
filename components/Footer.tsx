
import React from 'react';
import JoinUsSection from './JoinUsSection';

import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

interface FooterProps {
  onOpenContact: () => void;
  onStartProject: () => void;
  id?: string;
}

const Footer: React.FC<FooterProps> = ({ onOpenContact, onStartProject, id }) => {
  const logoUrl = "https://i.ibb.co/KxxyJK63/IMG-20260215-091905-778.webp";
  const [email, setEmail] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'newsletter_subscriptions'), {
        email,
        createdAt: serverTimestamp()
      });
      alert('Successfully subscribed to newsletter!');
      setEmail('');
    } catch (error) {
      console.error('Error subscribing:', error);
      alert('Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id={id} className="bg-slate-900 text-white pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0056B3] to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <JoinUsSection onStartProject={onStartProject} />
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 mb-16">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center overflow-hidden border border-white/10">
                 <img src={logoUrl} alt="Gothwad Logo" className="w-full h-full object-cover scale-110" />
              </div>
              <div>
                <h1 className="text-lg md:text-xl font-bold tracking-tight">GOTHWAD</h1>
                <p className="text-[9px] uppercase font-bold text-[#0056B3] tracking-widest leading-none">Technologies</p>
              </div>
            </div>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6 max-w-sm">
              Pioneering enterprise software and high-capacity digital ecosystems from the heart of Rajasthan to the global stage.
            </p>
            <div className="flex gap-3">
               <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-[#E4405F] hover:border-transparent transition-all group" title="Instagram">
                 <svg className="w-4 h-4 fill-white/50 group-hover:fill-white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.947.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
               </a>
               <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-[#1877F2] hover:border-transparent transition-all group" title="Facebook">
                 <svg className="w-4 h-4 fill-white/50 group-hover:fill-white" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
               </a>
               <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-[#24A1DE] hover:border-transparent transition-all group" title="Telegram">
                 <svg className="w-4 h-4 fill-white/50 group-hover:fill-white" viewBox="0 0 24 24"><path d="M11.944 0C5.346 0 0 5.346 0 11.944c0 6.598 5.346 11.944 11.944 11.944 6.598 0 11.944-5.346 11.944-11.944C23.888 5.346 18.542 0 11.944 0zm5.206 8.334l-1.742 8.27c-.131.58-.477.724-.963.451l-2.652-1.955-1.28 1.231c-.142.142-.261.261-.534.261l.19-2.698 4.91-4.437c.213-.189-.046-.294-.33-.106l-6.07 3.823-2.615-.82c-.568-.177-.578-.568.118-.84l10.21-3.935c.472-.171.886.113.724.906z"/></svg>
               </a>
               <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-[#FF0000] hover:border-transparent transition-all group" title="YouTube">
                 <svg className="w-4 h-4 fill-white/50 group-hover:fill-white" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
               </a>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="text-sm font-bold mb-6 text-white uppercase tracking-wider">Ecosystem</h4>
            <ul className="space-y-3 text-[11px] md:text-sm text-slate-500">
              <li><a href="#" className="hover:text-white transition-colors">School X</a></li>
              <li><a href="#" className="hover:text-white transition-colors">App Store</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cloud Infra</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-sm font-bold mb-6 text-white uppercase tracking-wider">Resources</h4>
            <ul className="space-y-3 text-[11px] md:text-sm text-slate-500">
              <li><a href="https://youtube.com/@aitricker" target="_blank" className="hover:text-white transition-colors flex items-center gap-2">
                Ai Tricker
                <span className="text-[8px] bg-red-600 text-white px-1.5 py-0.5 rounded-full">YT</span>
              </a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sketchware</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-sm font-bold mb-6 text-white uppercase tracking-wider">Newsletter</h4>
            <p className="text-xs text-slate-500 mb-4">Stay updated with our latest releases.</p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-slate-800 border-none rounded-lg px-4 py-2 text-xs focus:ring-1 focus:ring-[#0056B3] flex-grow" 
              />
              <button 
                type="submit"
                disabled={isSubmitting}
                className="bg-[#0056B3] p-2 rounded-lg hover:bg-[#004494] transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800/50 pt-8 flex justify-center">
          <p className="text-slate-600 text-[10px] md:text-xs font-medium text-center">
            © 2026 Gothwad Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
