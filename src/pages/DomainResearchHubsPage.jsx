import React from 'react';
import PageShell from '../components/PageShell';
import { motion } from 'framer-motion';
import { ChevronRight, Cpu, Zap, Database, Wifi, Network, CircuitBoard, Microscope } from 'lucide-react';

import { Link } from 'react-router-dom';

const sidebarLinks = [
  { title: "MEMS & Nano Center", icon: Microscope, path: "/domain-research-hubs/mems-nano-center" },
  { title: "Energy Center", icon: Zap, path: "/domain-research-hubs/energy-center" },
  { title: "Data-Science Center", icon: Database, path: "/domain-research-hubs/data-science-center" },
  { title: "IoT & WSN Center", icon: Wifi, path: "/domain-research-hubs/iot-wsn-center" },
  { title: "CISCO thingQbator", icon: Network, path: "/domain-research-hubs/cisco-thingqbator" },
  { title: "MICROCHIP", icon: Cpu, path: "/domain-research-hubs/microchip" },
  { title: "PCB Prototyping and Design Lab", icon: CircuitBoard, path: "/domain-research-hubs/pcb-prototyping" }
];

const DomainResearchHubsPage = () => {
  return (
    <PageShell title="Research Initiatives" subtitle="Domain Research Hubs">
      <div className="py-20 bg-slate-50 relative min-h-screen">
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />

        <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10">
          
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Main Content (Left) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-2/3"
            >
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-1 w-12 bg-blue-600 rounded-full" />
                  <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">Trident Research</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-black text-slate-900 leading-tight mb-8">
                  Domain Research Hubs <span className="text-blue-600 font-medium">(DRH)</span>
                </h2>
                
                <div className="prose prose-lg text-slate-600 font-light leading-relaxed mb-12 space-y-6 text-justify">
                  <p>
                    The mission of launching various <strong className="font-semibold text-slate-800">Domains Research Hubs (DRH)</strong> is to provide students of TGI with high quality academic foundation and innovative academic research environment that will enable them to make sound decisions regarding selection of pathway to their educational, personal, and professional goals. Broadly, Trident Research promotes DoEs for TGI to showcase the research initiatives and activities of students and faculty members both. DoEs are formed with the support through both internal resources and faculties as well as through the academic collaborations with other institutions of global reputations and presence.
                  </p>
                  <p>
                    Different Domains of Excellences (DoEs) at Trident serve as TGI's central resource and support system infrastructure for planning various beyond curriculum academic programs and other campus opportunities. Coordinators of different DoE from internal academic departments as well as the DoE representatives from the outside collaborating institutions work closely with all academic departments to provide specialized knowledge transfer to the students.
                  </p>
                  <p>
                    At present, there are four DoEs successfully promoted to operate under Trident Research through which the TGI envisage to achieve this designated mission. ADEs organize specialized study skills workshops and peer-led, content based supplemental instruction sessions including hands on practice assistance.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Sidebar (Right) */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/3 w-full sticky top-32"
            >
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 relative">
                
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-8 pb-4 border-b border-slate-100">
                  Domain Research Hubs
                </h3>
                
                <nav className="flex flex-col gap-2">
                  {sidebarLinks.map((link, idx) => (
                    <Link 
                      key={idx}
                      to={link.path}
                      className="flex items-center gap-4 px-4 py-4 rounded-xl hover:bg-blue-50 border border-transparent hover:border-blue-100 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 rounded-full bg-blue-100/50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        <link.icon size={20} />
                      </div>
                      <span className="font-semibold text-slate-700 group-hover:text-blue-800 transition-colors">
                        {link.title}
                      </span>
                      <ChevronRight size={18} className="ml-auto text-slate-300 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </nav>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </PageShell>
  );
};

export default DomainResearchHubsPage;
