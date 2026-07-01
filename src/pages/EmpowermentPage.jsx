import React from 'react';
import PageShell from '../components/PageShell';
import { motion } from 'framer-motion';
import { Calendar, User, BookOpen, Building } from 'lucide-react';

const technicalTalks = [
  { name: "Prof. (Dr.) Samprat R. Sabat", affiliation: "Central University of Hyderabad & IIT – Bhubaneswar", topic: "Art of Writing Technical Paper for reputed journal publication and Research Proposal", date: "28.08.2018" },
  { name: "Dr. Priyadarshan Patra", affiliation: "Intel Corp, US", topic: "Current Trends in Technology", date: "27.05.2018" },
  { name: "Prof. (Dr.) S. K. S. Parashar", affiliation: "Kalinga Institute of Industrial Technology (KIIT)", topic: "New Trend in Research", date: "3rd May 2018" },
  { name: "Prof. (Dr.) Ajit Kumar Panda", affiliation: "National Institute of Science & Technology (NIST)", topic: "Funded Research Opportunities", date: "12th April 2018" },
  { name: "Prof. (Dr.) Payodhar Padhy", affiliation: "Konark Institute of Science & Technology (KIST)", topic: "Sensitization Seminar on Research Project – Case Study", date: "5th April 2018" },
  { name: "Prof. (Dr.) P. K. Nanda, Dean Research", affiliation: "SoA University, Bhubaneswar", topic: "Significance of Research in Higher Educational Institutions", date: "23rd February, 2018" },
  { name: "S.B.Mishra, Senior Engineer", affiliation: "CAD CAM Division, CTTC, Bhubaneswar", topic: "Requirement of skill sets for employment in Automotive Industries", date: "23rd April, 2016" },
  { name: "S.P. Satra , Technical Head, Odisha", affiliation: "Ultra-Tech Cement Limited", topic: "Cement and Concrete Fundamentals: Option & Trends", date: "18th April, 2016" },
  { name: "Akshaya Swain, Professor", affiliation: "Department of Electrical and Computer Engineering, University of Auckland", topic: "Current Research Direction in Control in Signal Processing", date: "20th January 2016" },
  { name: "Arunabha Pradhan, Chief (BD & PP)", affiliation: "NRDC, An Enterprise of DSIR, Ministry of Science & Technology, Govt. of India, New Delhi", topic: "Commercialisation of Technologies-Issues and Strategies and NRDC’s Experience", date: "5th January 2016" },
  { name: "P. K. Meher, Professor", affiliation: "Nanyang Technological University, Singapore", topic: "Emerging Trends in Teaching and Research in Computing", date: "28th December 2015" },
  { name: "Sunil Sabat, Principal Technical Alliance Manager (Big Data)", affiliation: "Informatica, Redwood City, CA, United States", topic: "A Review of Global Scenario in the Field of Big-data and Analytics – Past, Present and Future", date: "1st August 2015" },
  { name: "Bijay Kumar Sahu, Dy. Manager-IPR", affiliation: "National Research Development Corporation (NRDC), An Enterprise of DSIR, Ministry of Science & Technology, Govt. of India, New Delhi", topic: "Role of IP and Innovation for University and Academia", date: "2nd June 2015" },
  { name: "Ganapati Panda, Professor", affiliation: "School of Electrical Sciences, IIT, Bhubaneswar", topic: "Scopes, Opportunities and Technology Trends in the field of Big-Data Analytics and Wireless Sensor Networks", date: "6th February 2015" },
  { name: "Technical Team from Mechahawks Pvt. Ltd.", affiliation: "Mechahawks Pvt. Ltd., Bhubaneswar (Jointly with Dept. of Mech. Engg., TAT)", topic: "Workshop on Aerodynamics and 3D modeling", date: "21st August, 2014" },
  { name: "Basant K Mohanty, Associate Professor", affiliation: "Jaypee University of Engineering and Technology, Guna, Madhya Pradesh", topic: "High-Performance Hardware Accelerators for Signal Processing Applications: Design Approaches and Strategies", date: "8th July 2014" },
  { name: "Ajit Kumar Panda, Dean(Research)", affiliation: "NIST, Berahampur", topic: "Innovation in Research", date: "23rd June 2014" },
  { name: "Himadri Chattopadhay, Professor", affiliation: "Dept, of Mech Engg, Jadavpur University, WB", topic: "Application of Computational Fluid Dynamics (CFD) in Mechanical Engineering", date: "15th April, 2013" },
  { name: "P. K. Ray, Asst. Professor", affiliation: "NIT, Rourkela", topic: "Writing Research Proposals for Extramural Funding", date: "March 2013" },
  { name: "P. K. Dash, Dean(Research)", affiliation: "ITER, Bhubaneswar", topic: "Research Methodology", date: "December 2012" },
  { name: "Sudarsan Nanda, Dean(Research)", affiliation: "KIIT University, Bhubaneswar", topic: "Research Methodology", date: "17th December 2011" }
];

const EmpowermentPage = () => {
  return (
    <PageShell title="Research Initiatives" subtitle="Empowerment">
      <div className="py-20 bg-slate-50 relative overflow-hidden">
        
        {/* Background Accents */}
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-900/5 to-transparent pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-1 w-12 bg-blue-600 rounded-full" />
              <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">Faculty Development</span>
              <div className="h-1 w-12 bg-blue-600 rounded-full" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-black text-slate-900 leading-tight mb-6">
              Faculty <span className="text-blue-600 italic font-medium lowercase">Empowerment</span>
            </h2>
          </motion.div>

          {/* Intro Section with Images */}
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 space-y-6 text-lg text-slate-700 font-light leading-relaxed"
            >
              <p>
                <strong className="font-semibold text-slate-900">Empowerment of the faculty</strong> is essential for academic success. The Chief Mentor of TGI believes in a model for empowerment of faculty through professional development and by inculcating them into the culture of academic, industrial, and societal research. 
              </p>
              <p>
                Quality improvement is a key component for success in higher technical education, which is not possible without the empowerment of faculty to harness their unique talents and skills and promote their professional growth.
              </p>
              <p>
                TGI implements faculty empowerment in the institution through <strong className="font-semibold text-slate-900">Trident Research</strong> by introducing various schemes and scopes from time to time.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 grid grid-cols-2 gap-4"
            >
              <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-white transform hover:-translate-y-2 transition-transform duration-500 h-64">
                <img 
                  src="/images/empowerment-1.jpg" 
                  alt="Faculty Empowerment Program" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-white transform translate-y-8 hover:translate-y-6 transition-transform duration-500 h-64">
                <img 
                  src="/images/empowerment-2.jpeg" 
                  alt="Faculty Development Session" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Technical Talks Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">
                Technical Talks by Experts
              </h3>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Delivered by experts from reputed academia and industry during various Faculty Empowerment Programs conducted at the Trident Campus.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {technicalTalks.map((talk, idx) => (
                <div 
                  key={idx}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-200 transition-all duration-300 flex flex-col h-full group"
                >
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full mb-3">
                      <Calendar size={14} />
                      {talk.date}
                    </span>
                    <h4 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-blue-700 transition-colors">
                      {talk.topic}
                    </h4>
                  </div>
                  
                  <div className="mt-auto space-y-2 pt-4 border-t border-slate-100">
                    <div className="flex items-start gap-2 text-sm">
                      <User size={16} className="text-slate-400 mt-0.5 shrink-0" />
                      <span className="font-semibold text-slate-700">{talk.name}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <Building size={16} className="text-slate-400 mt-0.5 shrink-0" />
                      <span className="text-slate-600">{talk.affiliation}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </PageShell>
  );
};

export default EmpowermentPage;
