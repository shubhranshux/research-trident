import React, { useState } from 'react';
import PageShell from '../components/PageShell';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, IndianRupee, FileText, User, Building } from 'lucide-react';

const fundingData = [
  {
    year: "2021-22",
    projects: [
      {
        slNo: 1,
        title: "Design and Development of realtime ground behaviour monitoring system(RT-GBMS) for underfround metal mines – An innovative ICT based solution",
        pi: "Dr. Abhaya Kumar Samal",
        agency: "Ministry of Mines, Govt. of India",
        amount: "3988000"
      },
      {
        slNo: 2,
        title: "Design and Development of realtime ground behaviour monitoring system(RT-GBMS) for underfround metal mines – An innovative ICT based solution",
        pi: "Dr. Abhaya Kumar Samal",
        agency: "Manganize Ore India Ltd.(MOIL)",
        amount: "1000000"
      }
    ]
  },
  {
    year: "2020-21",
    projects: [
      { slNo: 1, title: "Skill and Personality Development Programme Center for SC/ST students", pi: "Dr. D.N. Pattanayak", agency: "AICTE", amount: "718000" },
      { slNo: 2, title: "An Intelligent IoT based system for Sensing Hazardous Gases in Manhole and Analysis", pi: "Dr. Sakuntala Mahapatra", agency: "DDP, DST, Govt. of India", amount: "1006672" },
      { slNo: 3, title: "IoT Based Smart Dustbin for Smart city", pi: "Dr. Sakuntala Mahapatra", agency: "BPUT", amount: "242799" },
      { slNo: 4, title: "MODROBS", pi: "Dr. D.N. Pattanayak", agency: "AICTE", amount: "868706" },
      { slNo: 5, title: "Short Term Training Programme", pi: "Dr. Sakuntala Mahapatra", agency: "AICTE", amount: "324667" },
      { slNo: 6, title: "Short Term Training Programme", pi: "Dr. D.N. Pattanayak", agency: "AICTE", amount: "205833" },
      { slNo: 7, title: "Short Term Training Programme", pi: "Dr. R.N. Satapathy", agency: "AICTE", amount: "180500" }
    ]
  },
  {
    year: "2019-20",
    projects: [
      { slNo: 1, title: "Automatic door opening and closing of vehicle using IoT and AI", pi: "Dr. R.N. Satapathy", agency: "BPUT", amount: "242952" },
      { slNo: 2, title: "Faculty Development Programme", pi: "Dr. Sakuntala Mohapatra", agency: "AICTE", amount: "469000" },
      { slNo: 3, title: "Faculty Development Programme", pi: "Dr. R.N. Satapathy", agency: "AICTE", amount: "533000" },
      { slNo: 4, title: "Seminar Grant", pi: "Prof. P.K. Sahoo", agency: "AICTE", amount: "380000" },
      { slNo: 5, title: "FIST", pi: "Dr. Sakuntala Mohapatra", agency: "DST", amount: "2800000" },
      { slNo: 6, title: "Online monitoring of powerline phase synchronisation status", pi: "Dr. Abhaya Kumar Samal, Mr. Mir Manjur Elahi", agency: "INLAND ENGINEERS", amount: "1844000" },
      { slNo: 7, title: "The effect of CSR on company performance : A Study on Spatial Planning & Analysis Research Centre", pi: "Dr. Nargis Begum", agency: "SPARC", amount: "1060000" }
    ]
  },
  {
    year: "2018-19",
    projects: [
      { slNo: 1, title: "Short Term Training Program", pi: "Prof.(Dr.) Sakuntala Mahapatra", agency: "AICTE, Govt of India", amount: "500000" },
      { slNo: 2, title: "Faculty Development Program", pi: "Prof.(Dr.) Sakuntala Mahapatra", agency: "AICTE, Govt of India", amount: "700000" }
    ]
  },
  {
    year: "2017-18",
    projects: [
      { slNo: 1, title: "AICTE Sponsored FDP on Embedded system in IoT", pi: "Prof.(Dr.) Sakuntala Mahapatra", agency: "AICTE, Govt of India", amount: "700000" },
      { slNo: 2, title: "AICTE Sponsored National seminar on Convergence of Communication, Network & Computing(CCNC-2017)", pi: "Prof.(Dr.) Sakuntala Mahapatra", agency: "AICTE, Govt of India", amount: "100000" }
    ]
  },
  {
    year: "2016-17",
    projects: [
      { slNo: 1, title: "16 channel wireless acquisition system for magnetic diagnostics of Aditya-U Tokamak", pi: "Prof.(Dr.) Sakuntala Mahapatra (PI) & Asst. Prof. Sk. Mohammed Ali (Co-PI)", agency: "BRNS, Department of Atomic Energy(DAE), Govt. of India", amount: "1871600" }
    ]
  }
];

const AccordionItem = ({ year, projects, isOpen, onClick }) => {
  return (
    <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden mb-4 shadow-sm hover:shadow-md transition-shadow duration-300">
      <button 
        onClick={onClick}
        className="w-full px-6 py-5 flex items-center justify-between bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
      >
        <h4 className="text-xl font-bold text-slate-800 flex items-center gap-3">
          <span className="w-2 h-8 bg-blue-600 rounded-full" />
          YEAR: <span className="text-blue-700">{year}</span>
        </h4>
        <div className={`p-2 rounded-full transition-colors duration-300 ${isOpen ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-500'}`}>
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 pt-2 border-t border-slate-100">
              {projects.length > 0 ? (
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200">
                        <th className="py-4 px-4 font-bold text-slate-700 w-16 text-center">Sl. No.</th>
                        <th className="py-4 px-4 font-bold text-slate-700">Project Title</th>
                        <th className="py-4 px-4 font-bold text-slate-700 w-48">Principal Investigator</th>
                        <th className="py-4 px-4 font-bold text-slate-700 w-48">Agency</th>
                        <th className="py-4 px-4 font-bold text-slate-700 w-36 text-right">Sanctioned Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {projects.map((project) => (
                        <tr key={project.slNo} className="hover:bg-slate-50 transition-colors">
                          <td className="py-4 px-4 text-slate-600 text-center font-medium">{project.slNo}</td>
                          <td className="py-4 px-4 text-slate-800 font-medium">{project.title}</td>
                          <td className="py-4 px-4 text-slate-600">
                            <div className="flex items-center gap-2">
                              <User size={14} className="text-slate-400 shrink-0" />
                              <span className="text-sm">{project.pi}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-slate-600">
                            <div className="flex items-center gap-2">
                              <Building size={14} className="text-slate-400 shrink-0" />
                              <span className="text-sm">{project.agency}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-slate-800 font-bold text-right tabular-nums whitespace-nowrap">
                            <div className="flex items-center justify-end gap-1">
                              <IndianRupee size={14} className="text-slate-500" />
                              {Number(project.amount).toLocaleString('en-IN')}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="py-12 text-center flex flex-col items-center justify-center text-slate-400 bg-slate-50/50 rounded-xl border border-dashed border-slate-200">
                  <FileText size={48} className="mb-4 text-slate-300" />
                  <p className="text-lg">No sponsored research data available for this year.</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ExtramuralFundingPage = () => {
  const [openYear, setOpenYear] = useState("2021-22");

  return (
    <PageShell title="Research Initiatives" subtitle="Extramural Funding">
      <div className="py-20 bg-slate-50/50 relative overflow-hidden min-h-screen">
        
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-blue-100/30 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-100/30 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/3" />

        <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-black text-slate-900 leading-tight mb-8">
              Extramural Funding <span className="text-blue-600 font-medium">(TEFR)</span>
            </h2>
            
            <div className="text-lg text-slate-600 leading-relaxed space-y-6 font-light text-left md:text-justify bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <p>
                Objective of the institutions offering technical education in engineering technology is not only to offer teaching, rather they bear with them a very high degree of expectations from the society and country to conduct research to provide effective solutions of burning issues and challenges being faced by the society and industry. 
              </p>
              <p>
                Recognizing the significance and role of technical institutions in the process of growth and development of the country, many government and semi-government, autonomous, national and international agencies come forward to grant financial assistance to promote research and innovation activity in engineering colleges.
              </p>
              <p>
                In this respect, faculties and students of <strong className="font-semibold text-slate-800">Trident Academy of Technology</strong> have availed the benefit of research grant from time to time in the form of Extramural Funding for Research from various funding agencies to carry out sponsored research projects on identified thrust areas.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="flex items-center gap-6 mb-10">
              <div className="h-px bg-slate-200 flex-1" />
              <h3 className="text-2xl font-serif font-bold text-slate-800">Details of Sponsored Research</h3>
              <div className="h-px bg-slate-200 flex-1" />
            </div>

            <div className="max-w-6xl mx-auto">
              {fundingData.map((data) => (
                <AccordionItem 
                  key={data.year}
                  year={data.year}
                  projects={data.projects}
                  isOpen={openYear === data.year}
                  onClick={() => setOpenYear(openYear === data.year ? null : data.year)}
                />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </PageShell>
  );
};

export default ExtramuralFundingPage;
