import React from 'react';
import PageShell from '../components/PageShell';
import { motion } from 'framer-motion';
import { Target, Users, Globe, Lightbulb, Rocket, Award } from 'lucide-react';

const ResearchObjectivePage = () => {
  return (
    <PageShell title="Research Initiatives" subtitle="Research Objectives">
      <div className="py-24 bg-white relative overflow-hidden">
        
        {/* Subtle Background Elements */}
        <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-slate-50 to-transparent pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          
          {/* Main Intro */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-50 border border-slate-100 mb-8">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-[11px] font-black text-slate-500 uppercase tracking-[0.3em]">Institutional Vision</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                Solution-Driven <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Social Research</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 font-light leading-relaxed"
            >
              Present engineering curricula prescribed by many universities including BPUT offers ample of scope to incorporate course supplementation in order to address the need for <strong className="font-semibold text-slate-900">solution driven social research</strong> which is highly essential to give shape to vital national projects, like our Honourable Prime Minister Sri Narendra Modi’s flagship projects – Smart Cities, Skill India, Digital India, Startup India, Make In India, etc.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-slate-600 font-light leading-relaxed mt-6"
            >
              Such dream projects crucial in the path of growth and success of our country will come true if the students and faculties in the technical institutions are <strong className="font-semibold text-blue-600">empowered with appropriate knowledge</strong> and show inclinations towards research and innovations. Therefore, it is of paramount importance for the faculties of engineering institutions to dive into the research areas of versatile science and technology application domain.
            </motion.p>
          </div>

          {/* Primary Goals Section */}
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-12"
            >
              <Target size={20} strokeWidth={1.5} className="text-blue-500" />
              <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.3em]">Two Primary Goals</h3>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-slate-200 to-transparent" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group p-10 rounded-[2rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/20 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-100 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Users size={32} strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">Interdisciplinary Collaborations</h4>
                <p className="text-slate-600 leading-relaxed font-light text-lg">
                  To build interdisciplinary collaborations that inspire innovation among faculty as well as students.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group p-10 rounded-[2rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/20 hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-100 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Globe size={32} strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">Capacity Building</h4>
                <p className="text-slate-600 leading-relaxed font-light text-lg">
                  Focus on capacity building to meet global challenges of societal as well as industrial need where we can achieve greatest impact and excellence and achieve clear leadership position in promising new and growing areas of engineering research.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Core Intension Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-[2.5rem] overflow-hidden bg-slate-900 p-12 lg:p-16 text-center"
          >
            {/* Dark background effects */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-luminosity" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900/90" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px]" />

            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-8">
                <Rocket size={32} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-serif font-black text-white leading-tight mb-8">
                Clear Leadership Position
              </h3>
              
              <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed">
                The intension of research initiative at TGI is to place Trident Research in a clear leadership position in promising new and growing areas of engineering research through multifarious interests, such as:
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mt-10">
                {['IEDC Activity', 'Technical Club Activities', 'Intramural Funded Schemes', 'National & International Conferences'].map((tag, idx) => (
                  <div key={idx} className="px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-sm font-medium text-white/90 flex items-center gap-2">
                    <Award size={14} className="text-blue-400" />
                    {tag}
                  </div>
                ))}
              </div>
              
              <p className="text-slate-400 font-medium tracking-wide text-sm uppercase mt-12">
                To encourage, motivate and recognize research initiatives.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </PageShell>
  );
};

export default ResearchObjectivePage;
