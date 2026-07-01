import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';

const PageShell = ({ title, children }) => (
  <div className="min-h-screen bg-white pt-28">
    <div className="max-w-[1400px] mx-auto px-6 xl:px-12 mt-8">
      <nav className="flex items-center gap-2 flex-wrap text-[11px] font-medium text-slate-400 uppercase tracking-[0.2em] mb-12">
        <Link to="/" className="hover:text-[#1B4D8E] transition-colors flex items-center gap-1"><Home size={12} /> Home</Link>
        <ChevronRight size={10} />
        <span className="text-slate-500">Research</span>
        <ChevronRight size={10} />
        <span className="text-[#1B4D8E] font-bold">{title}</span>
      </nav>
      <h1 className="text-4xl md:text-5xl font-serif font-black text-secondary mb-8">{title}</h1>
      <div className="h-1 w-20 bg-[#00897B] rounded-full mb-12" />
      {children || <p className="text-slate-500 text-lg">Content coming soon.</p>}
      <div className="pb-24" />
    </div>
  </div>
);

export default PageShell;
