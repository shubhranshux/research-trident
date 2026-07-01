import React from 'react';
import PageShell from '../components/PageShell';
import { motion } from 'framer-motion';
import { FileDown, ChevronRight, FileText, Briefcase, Users, Megaphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const downloadableForms = [
  { title: "Terms and Conditions for availing project funding under TIFR Scheme", icon: FileText, href: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/research/TIFR-Sheme-Research-Project-Proposal-Terms-Conditions.pdf" },
  { title: "Utilization Certificate Format for funding under TIFR Scheme", icon: FileText, href: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/research/TIFR-Scheme-Format-for-submission-of-Utilization-Certificate-against-Research-Funding.pdf" },
  { title: "Template for Final Project Report upon completion of Project funded under TIFR Scheme", icon: FileText, href: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/research/TIFR-Scheme-Format-for-submission-of-Final-Project-Report.pdf" },
  { title: "Bill wise Detailed Statement of Expenditure of Grant Money received under TIFR Scheme", icon: FileText, href: "https://site-generator-documents.s3.eu-north-1.amazonaws.com/research/TIFR-Scheme-Billwise-detailed-statement-of-expenditure.pdf" }
];

const sidebarLinks = [
  { title: "Ongoing Staff Research", icon: Briefcase, path: "/intramural-funding/ongoing-staff-research" },
  { title: "Ongoing Student Research", icon: Users, path: "/intramural-funding/ongoing-student-research" },
  { title: "Call for Proposals", icon: Megaphone, path: "/intramural-funding/call-for-proposals" }
];

const IntramuralFundingPage = () => {
  return (
    <PageShell title="Research Initiatives" subtitle="Intramural Funding">
      <div className="py-20 bg-slate-50 relative min-h-screen">
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-900/5 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10">
          
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            
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
                  <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">Trident Research Scheme</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-black text-slate-900 leading-tight mb-8">
                  Intramural Funding <span className="text-blue-600 font-medium">(TIFR)</span>
                </h2>
                
                <div className="prose prose-lg text-slate-600 font-light leading-relaxed mb-12">
                  <p>
                    This option presents an introductory overview of the <strong className="font-semibold text-slate-800">Trident Intramural Funded Research (TIFR) Scheme</strong>, 
                    outlining the broad categories of the projects being considered candidate for intramural funding, application procedure, mode of application, application format (downloadable), approval procedure, procedure for release of fund, monitoring and evaluation method, amount of funding, fund utilization guidelines (e.g., equipment, books, journals, travel, conference registration, etc.), appointing research assistant/fellow, etc.
                  </p>
                  <p>
                    This will also include list of projects completed, list of projects on progress, etc.
                  </p>
                </div>
              </div>

              {/* Downloadable Forms Section */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                <h3 className="text-2xl font-serif font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <FileDown className="text-blue-600" />
                  Links to Downloadable forms
                </h3>
                
                <div className="space-y-4">
                  {downloadableForms.map((form, idx) => (
                    <a 
                      key={idx}
                      href={form.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-4 p-4 rounded-xl hover:bg-blue-50 border border-transparent hover:border-blue-100 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <form.icon size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-1 block group-hover:text-blue-700">Download</span>
                        <h4 className="text-slate-800 font-medium leading-snug group-hover:text-blue-800 transition-colors">
                          {form.title}
                        </h4>
                      </div>
                      <ChevronRight className="text-slate-300 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-all self-center" />
                    </a>
                  ))}
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
              <div className="bg-slate-900 rounded-3xl p-8 shadow-xl text-white overflow-hidden relative">
                {/* Decorative background circle */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3" />
                
                <h3 className="text-2xl font-serif font-bold mb-8 relative z-10">
                  Intramural Funding (TIFR)
                </h3>
                
                <nav className="flex flex-col gap-3 relative z-10">
                  {sidebarLinks.map((link, idx) => (
                    <Link 
                      key={idx}
                      to={link.path}
                      className="flex items-center gap-4 px-4 py-4 rounded-xl hover:bg-white/10 transition-colors group"
                    >
                      <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                        <link.icon size={22} />
                      </div>
                      <span className="font-medium text-slate-200 group-hover:text-white transition-colors">
                        {link.title}
                      </span>
                      <ChevronRight size={18} className="ml-auto text-slate-500 group-hover:text-white transform group-hover:translate-x-1 transition-all" />
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

export default IntramuralFundingPage;
