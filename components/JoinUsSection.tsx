
import React from 'react';

interface JoinUsSectionProps {
  onStartProject: () => void;
}

const JoinUsSection: React.FC<JoinUsSectionProps> = ({ onStartProject }) => {
  const youtubeLinks = [
    { name: 'Ai Tricker', url: 'https://youtube.com/@aitricker' },
    { name: 'Gothwad Tech', url: '#' },
    { name: 'Dev Insights', url: '#' },
    { name: 'Code Factory', url: '#' },
    { name: 'Tech Tutorials', url: '#' },
  ];

  const githubLinks = [
    { name: 'Gothwad Main', url: 'https://github.com/gothwadtechnologies' },
    { name: 'GTech Store', url: 'https://github.com/gothwadtechnologies' },
    { name: 'School X Core', url: 'https://github.com/gothwadtechnologies' },
    { name: 'IDE Plugins', url: 'https://github.com/gothwadtechnologies' },
    { name: 'UI Components', url: 'https://github.com/gothwadtechnologies' },
    { name: 'Open Source', url: 'https://github.com/gothwadtechnologies' },
  ];

  const telegramLinks = [
    { name: 'Official Channel', url: '#' },
    { name: 'Dev Community', url: '#' },
    { name: 'Project Updates', url: '#' },
    { name: 'Support Group', url: '#' },
    { name: 'News Feed', url: '#' },
  ];

  const otherLinks = [
    { name: 'LinkedIn', url: '#' },
    { name: 'Twitter', url: '#' },
    { name: 'Instagram', url: '#' },
    { name: 'Discord', url: '#' },
    { name: 'Medium Blog', url: '#' },
    { name: 'Portfolio', url: '#' },
  ];

  return (
    <div className="mb-16">
      <div className="flex flex-row items-center justify-between mb-10 gap-4">
        <div className="flex-1">
          <h2 className="text-xl md:text-4xl font-black text-white tracking-tighter uppercase leading-tight">
            Join Our <span className="text-[#0056B3]">Ecosystem</span>
          </h2>
          <p className="text-slate-500 mt-1 text-[10px] md:text-base hidden sm:block">Connect with us across all platforms.</p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Active</span>
          </div>
          <button 
            onClick={onStartProject}
            className="bg-[#0056B3] text-white px-4 md:px-6 py-2 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all shadow-lg active:scale-95 whitespace-nowrap"
          >
            Start Project
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10">
        {/* YouTube Section */}
        <div>
          <h4 className="text-[#FF0000] font-black text-[9px] md:text-xs uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
            <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            YouTube
          </h4>
          <ul className="space-y-2">
            {youtubeLinks.slice(0, 4).map((link, i) => (
              <li key={i}>
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white text-[10px] md:text-sm transition-colors flex items-center justify-between group">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* GitHub Section */}
        <div>
          <h4 className="text-white font-black text-[9px] md:text-xs uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
            <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            GitHub
          </h4>
          <ul className="space-y-2">
            {githubLinks.slice(0, 4).map((link, i) => (
              <li key={i}>
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white text-[10px] md:text-sm transition-colors flex items-center justify-between group">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Telegram Section */}
        <div>
          <h4 className="text-[#24A1DE] font-black text-[9px] md:text-xs uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
            <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0C5.346 0 0 5.346 0 11.944c0 6.598 5.346 11.944 11.944 11.944 6.598 0 11.944-5.346 11.944-11.944C23.888 5.346 18.542 0 11.944 0zm5.206 8.334l-1.742 8.27c-.131.58-.477.724-.963.451l-2.652-1.955-1.28 1.231c-.142.142-.261.261-.534.261l.19-2.698 4.91-4.437c.213-.189-.046-.294-.33-.106l-6.07 3.823-2.615-.82c-.568-.177-.578-.568.118-.84l10.21-3.935c.472-.171.886.113.724.906z"/></svg>
            Telegram
          </h4>
          <ul className="space-y-2">
            {telegramLinks.slice(0, 4).map((link, i) => (
              <li key={i}>
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white text-[10px] md:text-sm transition-colors flex items-center justify-between group">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Others Section */}
        <div>
          <h4 className="text-blue-400 font-black text-[9px] md:text-xs uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
            <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.828a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg>
            Socials
          </h4>
          <ul className="space-y-2">
            {otherLinks.slice(0, 4).map((link, i) => (
              <li key={i}>
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white text-[10px] md:text-sm transition-colors flex items-center justify-between group">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JoinUsSection;
