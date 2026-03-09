
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Process from './components/Process';
import Industries from './components/Industries';
import DevTools from './components/DevTools';
import Testimonials from './components/Testimonials';
import Leadership from './components/Leadership';
import FAQ from './components/FAQ';
import ContactDrawer from './components/ContactDrawer';
import Footer from './components/Footer';
import LoginView from './screens/LoginView';
import ProjectInquiryView from './screens/ProjectInquiryView';
import JoinCommunityView from './screens/JoinCommunityView';
import AdminLoginView from './admin/AdminLoginView';
import AdminHomeScreen from './admin/AdminHomeScreen';

const App: React.FC = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'landing' | 'login' | 'project-inquiry' | 'community-join' | 'admin-login' | 'admin-home'>('landing');

  const logoUrl = "https://i.ibb.co/KxxyJK63/IMG-20260215-091905-778.webp";
  const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=gothwadtechnologies@gmail.com";

  const toggleLogin = () => {
    setCurrentView(currentView === 'landing' ? 'login' : 'landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentView === 'login') {
    return <LoginView onBack={() => setCurrentView('landing')} />;
  }

  if (currentView === 'project-inquiry') {
    return <ProjectInquiryView onBack={() => setCurrentView('landing')} />;
  }

  if (currentView === 'community-join') {
    return <JoinCommunityView onBack={() => setCurrentView('landing')} />;
  }

  if (currentView === 'admin-login') {
    return (
      <AdminLoginView 
        onBack={() => setCurrentView('landing')} 
        onSuccess={() => setCurrentView('admin-home')}
      />
    );
  }

  if (currentView === 'admin-home') {
    return <AdminHomeScreen onLogout={() => setCurrentView('landing')} />;
  }

  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden text-slate-900">
      <Navbar 
        onOpenContact={() => setDrawerOpen(true)} 
        onStartProject={() => setCurrentView('project-inquiry')}
        onLogoClick={toggleLogin} 
      />
      
      <main className="pt-[80px] md:pt-[100px]">
        <section id="hero">
          <Hero />
        </section>
        
        <section id="stats" className="py-12 relative overflow-hidden">
          <Stats />
        </section>

        {/* Quality Manifesto Section - Shining Glassmorphism */}
        <section id="manifesto" className="py-12 md:py-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-[120px] opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-200 rounded-full blur-[120px] opacity-30"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="glass-card p-6 md:p-12 rounded-[40px] md:rounded-[60px] border border-white/50 shadow-2xl shadow-blue-500/5">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                  <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] bg-blue-50 px-4 py-1.5 rounded-full inline-block mb-4">The Gothwad Manifesto</span>
                  <h2 className="text-4xl md:text-8xl font-black text-slate-900 leading-[0.95] tracking-tighter">
                    We Build Code That <br /> <span className="text-[#0056B3]">Never Sleeps.</span>
                  </h2>
                </div>
                
                <div className="space-y-10">
                  <p className="text-slate-600 text-lg md:text-2xl font-medium leading-relaxed text-center max-w-3xl mx-auto">
                    Every product leaving the Gothwad factory is a testament to rigorous engineering. We push for industrial-grade stability that handles millions of requests with zero latency.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 md:gap-10">
                    <div className="bg-white/50 backdrop-blur-sm p-4 md:p-8 rounded-3xl border border-white shadow-sm hover:shadow-md transition-all">
                      <div className="w-8 h-8 md:w-12 md:h-12 bg-[#0056B3] rounded-xl flex items-center justify-center text-white mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h4 className="text-sm md:text-xl font-black text-slate-900 mb-1 md:mb-2">Accountability</h4>
                      <p className="text-slate-500 text-[10px] md:text-sm leading-tight">Corporate-level protection for your investment.</p>
                    </div>
                    
                    <div className="bg-white/50 backdrop-blur-sm p-4 md:p-8 rounded-3xl border border-white shadow-sm hover:shadow-md transition-all">
                      <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-100 rounded-xl flex items-center justify-center text-[#0056B3] mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <h4 className="text-sm md:text-xl font-black text-slate-900 mb-1 md:mb-2">Clean Engineering</h4>
                      <p className="text-slate-500 text-[10px] md:text-sm leading-tight">Modular docs designed for infinite scale.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-12 md:py-16">
          <Services />
        </section>

        <section id="process" className="py-12 md:py-16">
          <Process />
        </section>

        <section id="industries" className="py-12 md:py-16">
          <Industries />
        </section>

        <section id="studio" className="py-12 md:py-16">
          <DevTools />
        </section>

        <section id="testimonials" className="py-12 md:py-16">
          <Testimonials />
        </section>

        <section id="leadership" className="py-12 md:py-16">
          <Leadership />
        </section>

        <section id="faq" className="py-12 md:py-16">
          <FAQ />
        </section>
      </main>

      <Footer 
        onOpenContact={() => setDrawerOpen(true)} 
        onStartProject={() => setCurrentView('project-inquiry')}
        id="join-us" 
      />

      {/* Right Side: Floating Action Buttons Stack */}
      <div className="fixed bottom-3 right-3 z-[140] flex flex-col gap-3">
        <a 
          href="https://arena.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-3 md:p-4 rounded-[16px] md:rounded-[20px] shadow-[0_10px_30px_rgba(99,102,241,0.4)] hover:scale-110 transition-transform active:scale-95 group relative flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
          </svg>
          <span className="absolute right-full mr-4 glass-card text-slate-900 px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-2xl pointer-events-none hidden md:block">
            Launch G-AI Assistant
          </span>
        </a>

        <a 
          href="https://wa.me/91XXXXXXXXXX" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-3 md:p-4 rounded-[16px] md:rounded-[20px] shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform active:scale-95 group relative flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" viewBox="0 0 448 512" fill="currentColor">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.1 0-65.6-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.5-11.3 2.5-2.5 5.6-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.6-9.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
          </svg>
          <span className="absolute right-full mr-4 glass-card text-slate-900 px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-2xl pointer-events-none hidden md:block">
            Chat on WhatsApp
          </span>
        </a>

        <a 
          href={gmailUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0056B3] text-white p-3 md:p-4 rounded-[16px] md:rounded-[20px] shadow-[0_10px_30px_rgba(0,86,179,0.4)] hover:scale-110 transition-transform active:scale-95 group relative flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="absolute right-full mr-4 glass-card text-slate-900 px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-2xl pointer-events-none hidden md:block">
            Direct Gmail Dispatch
          </span>
        </a>
      </div>

      <ContactDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setDrawerOpen(false)} 
        onAdminTrigger={() => {
          setDrawerOpen(false);
          setCurrentView('admin-login');
        }}
      />

      {/* Left Side: Floating Action Buttons Stack */}
      <div className="fixed bottom-3 left-3 z-[140] flex flex-col gap-3">
        <a 
          href="https://gtechstore.vercel.app" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0056B3] text-white p-1.5 md:p-2 rounded-full shadow-[0_10px_30px_rgba(0,86,179,0.4)] hover:scale-110 transition-transform active:scale-95 group relative flex items-center justify-center border border-white/30"
        >
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden flex items-center justify-center bg-white/10">
            <img 
              src="https://i.ibb.co/4RFKFmPR/file-00000000bf907207abbf3e9db6cfe8a1.png" 
              alt="G-Tech Store" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="absolute left-full ml-4 glass-card text-slate-900 px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-2xl pointer-events-none hidden md:block">
            Visit G-Tech Store
          </span>
        </a>

        <button 
          onClick={() => setCurrentView('community-join')}
          className="bg-[#0056B3] text-white p-1.5 md:p-2 rounded-full shadow-[0_10px_30px_rgba(0,86,179,0.4)] hover:scale-110 transition-transform active:scale-95 group relative flex items-center justify-center border border-white/30"
        >
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden flex items-center justify-center bg-white/10">
            <img 
              src={logoUrl} 
              alt="Join Community" 
              className="w-full h-full object-cover scale-110"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="absolute left-full ml-4 glass-card text-slate-900 px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-2xl pointer-events-none hidden md:block">
            Join Gothwad Community
          </span>
        </button>
      </div>
    </div>
  );
};

export default App;
