import React from 'react';
import PageShell from '../components/PageShell';
import { motion } from 'framer-motion';
import { Building2, ArrowRight, UserCircle } from 'lucide-react';

const linkagesData = {
  "Dr. Sakuntala Mahapatra": [
    {
      organization: "Indian Institute of Science, Bangalore",
      involvement: "Coordinated the setup of the National MEMS Design Centre (NMDC) – a Center of Excellence established in the institute in collaboration with IISc, Bangalore under NPMASS Programme."
    },
    {
      organization: "Institute for Plasma Research (IPR), Gandhinagar",
      involvement: "Principal Investigator (PI) for a project funded by Board of Research in Fusion Science and Technology (BRFST), Gandhinagar."
    },
    {
      organization: "Berhampur University",
      involvement: "Associated with Berhampur University as External Examiner and Evaluator. Also associated as a Research Advisor and guide for Ph.D. Scholars."
    },
    {
      organization: "Department of Science and Technology (DST), Govt. of India",
      involvement: "Guide and Research Advisor for innovative and experimental sponsored projects under Innovation and Entrepreneurship Development Centre (IEDC), Govt. of India."
    },
    {
      organization: "Elsevier Conference, Bhubaneswar, India",
      involvement: "Technical chair for evaluating research papers of the presenters at the 2nd International Conference on Intelligent Computing, Communication and Convergence (ICCC-2016), Elsevier."
    },
    {
      organization: "IEEE Conference, Dehradun, India",
      involvement: "Member of the Technical Program Committee of International Conference on Advance Computing, Communication & Automation (ICACCA-2016), IEEE, Dehradun, India."
    },
    {
      organization: "IJSSAN",
      involvement: "Member of the Editorial Board of International Journal of Smart Sensors and Ad Hoc Networks (IJSSAN)."
    }
  ],
  "Dr. Arup Sarkar": [
    {
      organization: "University of Lubeck, Germany; Doyen Diagonositic & Research Foundation, Kolkata",
      involvement: "Principal Investigator in an Indo-German project (DFG-ICMR). Established linkages with an international academic institute (University of Lubeck - Prof. Tamas Laskay) and health industry (Doyen Diagonositic - Mr. Subir Roy)."
    },
    {
      organization: "University of Lubeck, Germany; University of Minho, Portugal; CNRS, Paris, France; National Center for Cell Sciences, India",
      involvement: "Principal Investigator in the multilateral Indo-European project 'INFECT-ERA-2016'. Academically connected with Dr. Ricardo Silvestre, Prof. Tamas Laskay, Prof. Jerome Estaquier, and Dr. Bhaskar Saha."
    },
    {
      organization: "Aston University, UK; Medical University of Sofia, Bulgaria; University of Cambridge, UK; NIST, USA; CSIC, Spain; Park Clinic, Barcelona; OncoQR ML GmbH, Austria",
      involvement: "Independent investigator in a European commission sponsored project named 'Horizon 2020', developing a successful research consortium with 8 European, USA, and Indian organizations."
    },
    {
      organization: "Semmelweis University, Budapest, Hungary; University of Calcutta, India",
      involvement: "Co-investigator in an Indo-Hungarian project collaborating with Prof. Atilla Mocsai (Semmelweis University) and Dr. Biswanath Maity (University of Calcutta)."
    }
  ],
  "Dr. Bharat Bhusan Patnaik": [
    {
      organization: "Chonnam National University, South Korea",
      involvement: "Collaborated with Prof. Han, Yeon Soo. Consultancy Project: Tenebrio molitor genome sequencing, Elucidation of innate immunity pathway genes and host-pathogen interactions."
    },
    {
      organization: "Soonchunhyang University, South Korea (Bioinformatics Group)",
      involvement: "Collaborated with Prof. Lee, Yong Seok. Consultancy Project: DNA and RNA Sequencing of endangered and endemic invertebrates of Korea."
    },
    {
      organization: "Soonchunhyang University, South Korea (Microbial Physiology Group)",
      involvement: "Collaborated with Prof. Han, Man-Deuk. Consultancy Project: Isolation and Biophysical characterization of bioactive compounds from herbs and mushrooms, Bacterial community dynamics in traditional food."
    },
    {
      organization: "Central Institute of Freshwater Aquaculture (CIFA), Bhubaneswar",
      involvement: "Collaborated with Dr. Jyotirmaya Mohanty. Extramural Project Partner: Development of a RNA-interference based gene-silencing approach in Macrobrachium rosenbergii. (DBT, GoI Project)."
    },
    {
      organization: "Asian Institute of Public Health (AIPH), Bhubaneswar",
      involvement: "Collaborated with Dr. Bijay Kumar Padhi. Extramural Project Partner: Development of an Online Digital Library with community participation for the documentation of ethno-economic plants of Odisha State (NRDMS, DST, GoI)."
    }
  ],
  "Dr. Abhaya Kumar Samal": [
    {
      organization: "Ministry of Mines, Government of India",
      involvement: "Principal Investigator for a major project funded by the Ministry of Mines, Government of India."
    }
  ]
};

const ResearchLinkagePage = () => {
  return (
    <PageShell title="Research Initiatives" subtitle="Research Linkage">
      <div className="py-20 bg-slate-50 relative overflow-hidden min-h-screen">
        
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-full h-96 bg-gradient-to-b from-indigo-900/5 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-1 w-12 bg-indigo-600 rounded-full" />
              <span className="text-indigo-600 font-bold uppercase tracking-wider text-sm">Industry & Academia</span>
              <div className="h-1 w-12 bg-indigo-600 rounded-full" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-black text-slate-900 leading-tight mb-8">
              Research <span className="text-indigo-600 italic font-medium lowercase">Linkage</span>
            </h2>
            
            <div className="text-lg text-slate-700 leading-relaxed space-y-6 font-light text-left md:text-center">
              <p>
                Off late, many engineering colleges have realized the significance of industry-academia linkages as a key ingredient for the empowerment of the faculties and students as well through collaborative involvement and coordinated efforts. <strong className="font-semibold text-slate-900">Trident Academy of Technology</strong> has always played a lead role through Trident Research in establishing linkages with frontline industries, institutions of repute, and research organizations to provide intellectual inputs to both its faculties and students. 
              </p>
              <p>
                Trident Research provides one of the best working environments to motivate faculty and students to work towards the accomplishment of the targeted R&D vision of the organization.
              </p>
              <p>
                Trident Research has developed very good research linkages with the outside world through the relationships that have been developed by its senior faculty members due to their research connection and academic interactions among outside experts. Few noteworthy research linkages of senior faculty members of Trident Research are highlighted below.
              </p>
            </div>
          </motion.div>

          {/* Linkages Grouped by Faculty */}
          <div className="space-y-16">
            {Object.entries(linkagesData).map(([facultyName, linkages], index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden"
              >
                {/* Faculty Header */}
                <div className="bg-slate-50 border-b border-slate-200 px-8 py-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-xl flex items-center justify-center shrink-0">
                    <UserCircle size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{facultyName}</h3>
                </div>

                {/* Linkages List */}
                <div className="p-8 space-y-8">
                  {linkages.map((linkage, idx) => (
                    <div key={idx} className="flex flex-col md:flex-row gap-6 group">
                      
                      {/* Organization Name */}
                      <div className="md:w-1/3 shrink-0">
                        <div className="flex items-start gap-3">
                          <Building2 size={20} className="text-indigo-600 mt-1 shrink-0" />
                          <h4 className="font-bold text-slate-800 text-lg group-hover:text-indigo-700 transition-colors">
                            {linkage.organization}
                          </h4>
                        </div>
                      </div>

                      {/* Involvement Details */}
                      <div className="md:w-2/3 bg-slate-50 rounded-2xl p-6 border border-slate-100 relative">
                        <div className="absolute top-1/2 -left-3 -translate-y-1/2 text-slate-200 hidden md:block">
                          <ArrowRight size={24} />
                        </div>
                        <p className="text-slate-700 leading-relaxed">
                          {linkage.involvement}
                        </p>
                      </div>

                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </PageShell>
  );
};

export default ResearchLinkagePage;
