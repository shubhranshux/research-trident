import React from 'react';
import PageShell from '../components/PageShell';
import { motion } from 'framer-motion';
import { 
  Award, Building2, FileText, CheckCircle2, 
  Network, GraduationCap, ArrowRight, Download
} from 'lucide-react';

const ResearchRecognitionPage = () => {
  return (
    <PageShell title="Research Initiatives" subtitle="Research Recognition">
      <div className="py-20 bg-slate-50 relative overflow-hidden">
        
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 transform origin-top pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/4 h-3/4 bg-amber-50/40 skew-x-12 transform origin-bottom pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-black text-slate-900 mb-6 leading-tight">
                Institutional <span className="text-blue-600 italic font-medium lowercase">Recognitions</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-light">
                Trident Academy of Technology is recognized by prestigious national and state-level organizations for its outstanding contributions to scientific research, innovation, and technological advancement.
              </p>
            </motion.div>
          </div>

          <div className="space-y-12">
            
            {/* SIRO Recognition Section */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/40 border border-slate-100 relative overflow-hidden group"
            >
              {/* Decorative side accent */}
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-blue-600 to-blue-400 group-hover:w-3 transition-all duration-300" />
              
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-2/3">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 shadow-sm">
                      <Award size={32} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black text-slate-900">
                        SIRO Recognized
                      </h3>
                      <p className="text-blue-600 font-semibold tracking-wide uppercase text-sm mt-1">
                        Department of Scientific and Industrial Research (DSIR)
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-slate-700 leading-relaxed space-y-4">
                    <p>
                      The Scientific and Industrial Research Organizations (SIROs), which are part of the Department of Scientific and Industrial Research (DSIR), Ministry of Science and Technology, Government of India, have recognized the Trident Group of Institutions in Bhubaneswar.
                    </p>
                    <p>
                      Its main goal is to unite non-profit organizations that operate on a volunteer basis in order to support their initiatives in the fields of scientific and industrial research, design, and development of homegrown technology in order to achieve technological self-reliance and reduce the use of foreign inputs.
                    </p>
                    <p>
                      This acknowledgment enables us to increase our expertise in the sphere of cutting-edge science and engineering. The Trident Group was able to build in-house research and development on new technologies, products, processes, designs, quality, ranges, etc. thanks to this important accreditation. Additionally, it makes it possible for us to obtain financial Research and Development grants from numerous funding organizations, including DST, CSIR, DBT, TDB, ICMR, and ICAR.
                    </p>
                  </div>
                </div>

                <div className="lg:w-1/3 flex flex-col justify-center">
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6 flex items-center gap-2">
                      <FileText size={16} className="text-blue-600" /> Official Documents
                    </h4>
                    <div className="space-y-4">
                      <a href="https://site-generator-documents.s3.eu-north-1.amazonaws.com/research/SIRO.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm hover:shadow-md hover:border-blue-200 border border-transparent transition-all group/btn">
                        <span className="font-semibold text-slate-700 text-sm group-hover/btn:text-blue-700">SIRO Recognition Letter 2023</span>
                        <Download size={18} className="text-slate-400 group-hover/btn:text-blue-600" />
                      </a>
                      <a href="https://site-generator-documents.s3.eu-north-1.amazonaws.com/research/SIRO.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm hover:shadow-md hover:border-blue-200 border border-transparent transition-all group/btn">
                        <span className="font-semibold text-slate-700 text-sm group-hover/btn:text-blue-700">SIRO Recognition Letter</span>
                        <Download size={18} className="text-slate-400 group-hover/btn:text-blue-600" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* BPUT NCR Section */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/40 border border-slate-100 relative overflow-hidden group"
            >
              {/* Decorative side accent */}
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-emerald-500 to-teal-400 group-hover:w-3 transition-all duration-300" />
              
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-full">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 border-b border-slate-100 pb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 shadow-sm">
                        <Building2 size={32} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-black text-slate-900">
                          BPUT NCR
                        </h3>
                        <p className="text-emerald-600 font-semibold tracking-wide uppercase text-sm mt-1">
                          Nodal Centre for Research
                        </p>
                      </div>
                    </div>
                    
                    <div className="shrink-0">
                      <a href="https://site-generator-documents.s3.eu-north-1.amazonaws.com/research/List-of-approved-BPUT-NCR-for-the-year-2022-232023-24-2024-25.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white rounded-xl font-bold text-sm transition-colors duration-300 shadow-sm group/btn">
                        <FileText size={18} />
                        BPUT NCR LETTER
                        <Download size={16} className="opacity-70 group-hover/btn:opacity-100" />
                      </a>
                    </div>
                  </div>

                  <p className="text-lg text-slate-700 mb-6">
                    Trident has been recognized to be the Nodal centre for research by <strong>Biju Patnaik University of Technology (BPUT)</strong> for two Departments:
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 mb-10">
                    <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4 flex-1">
                      <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                        <Network size={20} />
                      </div>
                      <span className="font-semibold text-slate-800">Electronics and Telecommunication Engineering</span>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4 flex-1">
                      <div className="w-10 h-10 rounded-lg bg-cyan-100 text-cyan-600 flex items-center justify-center shrink-0">
                        <GraduationCap size={20} />
                      </div>
                      <span className="font-semibold text-slate-800">Computer Science and Engineering</span>
                    </div>
                  </div>

                  <h4 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
                    Main Objectives of this Centre
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                    {[
                      "To promote and facilitate collaborative and interdisciplinary research and enhancement of research networking capacity and infrastructure under the umbrella of BPUT in the state of Odisha.",
                      "To increase and effectively manage the resources and research support for its stakeholders.",
                      "To provide education and training in research and related skills especially for PG and UG students.",
                      "To contribute to the University strategic educational and research missions and to support synergies between research teaching and learning and consultancy services.",
                      "To promote and enhance the reputation of faculty members in academic as well as quality of research."
                    ].map((objective, idx) => (
                      <div key={idx} className="flex gap-4 group/item">
                        <div className="mt-1">
                          <CheckCircle2 size={20} className="text-emerald-500 group-hover/item:scale-110 transition-transform" />
                        </div>
                        <p className="text-slate-700 leading-relaxed text-[15px]">
                          {objective}
                        </p>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </PageShell>
  );
};

export default ResearchRecognitionPage;
