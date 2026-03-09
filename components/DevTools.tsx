
import React from 'react';

const DevTools: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Developer Ecosystem</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2 mb-4 leading-tight">
            Built with <span className="text-[#0056B3]">Elite</span> Technologies
          </h2>
          <p className="text-slate-500 text-lg mb-6">
            At Gothwad Technologies, we don't just write code; we architect experiences. Our engineering team utilizes the most robust frameworks to ensure performance, scalability, and security.
          </p>
        </div>

        <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
          <div className="bg-slate-900 p-6 md:p-8 rounded-2xl text-white flex flex-col justify-center items-center text-center">
            <h5 className="text-3xl md:text-5xl font-black mb-2">99.9%</h5>
            <p className="text-[10px] md:text-xs text-slate-400 uppercase font-bold tracking-widest">Code Reliability</p>
          </div>
          <div className="bg-[#0056B3] p-6 md:p-8 rounded-2xl text-white flex flex-col justify-center items-center text-center">
            <h5 className="text-3xl md:text-5xl font-black mb-2">40+</h5>
            <p className="text-[10px] md:text-xs text-blue-200 uppercase font-bold tracking-widest">Active Libraries</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevTools;
