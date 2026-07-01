import React from 'react';
import PageShell from './PageShell';
import { motion } from 'framer-motion';
import { Users, Target, Network, Info } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { title: "About Research Committee", icon: Info, path: "/research-committee" },
  { title: "Objectives", icon: Target, path: "/research-committee/objectives" },
  { title: "Research Groups", icon: Network, path: "/research-committee/groups" },
  { title: "Committee Members", icon: Users, path: "/research-committee/members" }
];

const ResearchCommitteeLayout = ({ children }) => {
  const location = useLocation();

  return (
    <PageShell title="Research Initiatives" subtitle="Research Committee">
      <div className="py-16 bg-slate-50 relative overflow-hidden min-h-screen">
        
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          
          {/* Introduction / Hero (Full Width & Centered) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-1 w-12 bg-blue-600 rounded-full" />
              <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">Advanced Research Group</span>
              <div className="h-1 w-12 bg-blue-600 rounded-full" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-black text-slate-900 leading-tight mb-8 text-center">
              Research <span className="text-blue-600 italic font-medium lowercase">Committee</span>
            </h2>
            
            <div className="max-w-4xl mx-auto text-lg text-slate-700 leading-relaxed space-y-6 font-light text-center">
              <p>
                <strong className="font-semibold text-slate-900">Trident Group of Institution</strong> has established <strong className="font-semibold text-slate-900">Trident Research</strong> — an independent research setup through a group of committed, dedicated and devoted professors — the <em>Advanced Research Group (ARG)</em> to explore hidden capabilities and untapped potentiality available among the young faculties and students for carrying out advanced research and to come up with innovative solutions in varieties fields of application.
              </p>
              <p>
                Currently, Trident Research is in active operation in the state of Odisha as a non-profit research organization and is focused to conduct cross-disciplinary research projects in diverse areas to collectively address a wide variety of social and industrial problems.
              </p>
            </div>
          </motion.div>

          {/* Premium Horizontal Navigation Menu */}
          <div className="flex justify-center mb-16 relative z-20">
            <div className="inline-flex flex-wrap justify-center gap-2 p-2 bg-white/80 backdrop-blur-xl border border-slate-200/80 rounded-2xl shadow-sm">
              {navItems.map((item, idx) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link 
                    key={idx} 
                    to={item.path}
                    className={`relative flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold transition-all duration-300 z-10 group ${
                      isActive 
                        ? 'text-white' 
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    {isActive ? (
                      <motion.div
                        layoutId="activeTabBackground"
                        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-md z-[-1]"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    ) : (
                      <div className="absolute inset-0 bg-slate-100/0 group-hover:bg-slate-100/80 rounded-xl z-[-1] transition-colors duration-300" />
                    )}
                    <item.icon 
                      size={18} 
                      className={`relative z-10 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110 group-hover:text-blue-600'}`} 
                    />
                    <span className="relative z-10">{item.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Full-width Page Specific Content */}
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full"
          >
            {children}
          </motion.div>

        </div>
      </div>
    </PageShell>
  );
};

export default ResearchCommitteeLayout;
