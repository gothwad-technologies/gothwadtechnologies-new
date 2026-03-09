
import React from 'react';

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onAdminTrigger?: () => void;
}

const ContactDrawer: React.FC<ContactDrawerProps> = ({ isOpen, onClose, onAdminTrigger }) => {
  const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=gothwadtechnologies@gmail.com";
  const [tapCount, setTapCount] = React.useState(0);
  const tapTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleIconTap = () => {
    const newCount = tapCount + 1;
    setTapCount(newCount);

    if (tapTimeoutRef.current) {
      clearTimeout(tapTimeoutRef.current);
    }

    if (newCount === 3) {
      setTapCount(0);
      if (onAdminTrigger) {
        onAdminTrigger();
      }
    } else {
      tapTimeoutRef.current = setTimeout(() => {
        setTapCount(0);
      }, 1000); // Reset if not tapped 3 times within 1 second
    }
  };

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'Our Mission', id: 'aim' },
    { label: 'Global Trust', id: 'trust' },
    { label: 'Key Statistics', id: 'stats' },
    { label: 'Quality Manifesto', id: 'manifesto' },
    { label: 'Core Services', id: 'services' },
    { label: 'The Blueprint', id: 'process' },
    { label: 'Industry Solutions', id: 'industries' },
    { label: 'Project Showcase', id: 'project-showcase' },
    { label: 'Market Comparison', id: 'comparison' },
    { label: 'Client Testimonials', id: 'testimonials' },
    { label: 'Leadership Team', id: 'leadership' },
    { label: 'FAQ Center', id: 'faq' },
    { label: 'Technology Stack', id: 'tech-matrix' },
    { label: 'Community Join Us', id: 'join-us' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[150] transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-[75%] md:w-[400px] bg-white z-[200] shadow-2xl flex flex-col border-l border-slate-100 animate-in slide-in-from-right duration-300">
        <div className="px-3 md:px-5 py-3 md:py-4 bg-[#001F3F] flex items-center justify-between sticky top-0 z-10">
          <div className="min-w-0">
            <h2 className="text-xs md:text-lg font-black text-white uppercase tracking-tighter leading-tight truncate">Gothwad Technologies</h2>
            <p className="text-blue-300 font-bold text-[8px] md:text-[10px] uppercase tracking-[0.1em] md:tracking-[0.2em] truncate">Aim: Building Self-Reliant India</p>
          </div>
          <button onClick={onClose} className="p-1.5 md:p-2 hover:bg-white/10 rounded-full transition-colors text-white/70 hover:text-white shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-grow overflow-y-auto px-2 md:px-4 py-2 md:py-4 scrollbar-hide">
          <div className="grid grid-cols-1 gap-0.5 md:gap-1">
            {navLinks.map((link, i) => (
              <button 
                key={i} 
                onClick={() => scrollToSection(link.id)}
                className="w-full flex items-center justify-between p-2.5 md:p-3 rounded-lg md:rounded-xl hover:bg-slate-50 transition-all text-left group border border-transparent hover:border-slate-100"
              >
                <div className="flex items-center gap-2 md:gap-4 min-w-0">
                  <span className="font-bold text-slate-700 text-xs md:text-base group-hover:text-slate-900 tracking-tight transition-colors truncate">
                    {link.label}
                  </span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 md:h-4 md:w-4 opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0 text-[#0056B3] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            ))}
          </div>
        </div>

        <div className="px-3 md:px-5 py-3 md:py-4 bg-[#001F3F] text-white">
          <div className="flex flex-col gap-3 md:gap-4">
            <div className="flex flex-wrap items-center gap-2.5 md:gap-4">
              <a href="https://instagram.com/pawangothwad" target="_blank" rel="noopener noreferrer" className="w-7 h-7 md:w-8 md:h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.337 2.617 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.339-.2 6.78-2.617 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.338-2.617-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://facebook.com/pawangothwad" target="_blank" rel="noopener noreferrer" className="w-7 h-7 md:w-8 md:h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://github.com/pawangothwad" target="_blank" rel="noopener noreferrer" className="w-7 h-7 md:w-8 md:h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              </a>
              <a href="https://twitter.com/pawangothwad" target="_blank" rel="noopener noreferrer" className="w-7 h-7 md:w-8 md:h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="w-7 h-7 md:w-8 md:h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.1 0-65.6-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.5-11.3 2.5-2.5 5.6-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.6-9.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
              </a>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <div 
                onClick={handleIconTap}
                className="w-6 h-6 md:w-8 md:h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white shrink-0 cursor-pointer active:scale-90 transition-transform"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 md:h-4 md:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="min-w-0">
                <a href={gmailUrl} target="_blank" rel="noopener noreferrer" className="text-[10px] md:text-xs font-bold hover:text-blue-300 transition-colors truncate block">gothwadtechnologies@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDrawer;
