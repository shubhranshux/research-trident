import React, { useState } from 'react';
import PageShell from '../components/PageShell';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Briefcase } from 'lucide-react';

const consultancyData = [
  {
    year: "2023-24",
    type: "table",
    headers: [
      "Name of faculty (Chief Consultant)",
      "Client Organization",
      "Title of Consultancy of project",
      "Amount actually received (in Rupees)",
      "Amount received (in words)"
    ],
    rows: [
      [
        "Dr Ashok Kumar Rath, Dr Sakuntala Mahapatra",
        "DST, Govt of India",
        "D D Project",
        "500,000.00",
        "Five Lakhs Only"
      ],
      [
        "Dr Diptimayee Sahoo",
        "ORMAS, Govt of Odisha",
        "Recognition of Prior Learning ( RPL )",
        "401,942.00",
        "Four Lakhs One Thousand Nine Hundred Fourty Two only."
      ],
      [
        "Dr Nargis Begum",
        "SCARED Foundation",
        "Development of Community based sustainable model for food storage and processing facilities through application of hybrid solar power system to augment the supply chain management for enhancing effectiveness of NGOs under Mission Shakti Odisha.",
        "870,000.00",
        "Eight Lakhs Seventy Thousand only"
      ],
      [
        "Dr Diptimayee Sahoo",
        "DECARB CLIMATE RESEARCH LLP",
        "Reviving Ancient Stepwells and Traditional Rainwater Harvesting Systems for Sustainable Water Management in Smart Cities”",
        "1,184,000.00",
        "Eleven Lakhs Eighty Four Thousand Only"
      ],
      [
        "Dr Sabyasachi Dey",
        "Evolve Code Link LLP",
        "A study of Emerging potential of social media for marketing of Edtech companies in Odisha",
        "810,000.00",
        "Eight Lakhs Ten Thousand only"
      ],
      [
        "Ms Evani Pattanayak",
        "QUICKR MATHCODES LLP",
        "A study on issues and strategies of managing E-Learning services in rural educational institutions of Khordha District",
        "686,000.00",
        "Six Lakhs Eightysix Thousand only"
      ],
      [
        "Dr Nargis Begum",
        "Inland Engineers",
        "A Study to assess posibilities to convert consumers to prosumers to accelerate the clean energy transition in Odisha",
        "307,923.00",
        "Three Lakhs Seven Thousand Nine hunderd Twenty Three only"
      ]
    ]
  },
  {
    year: "2022-23",
    type: "table",
    headers: [
      "Name of faculty (Chief Consultant)",
      "Client Organization",
      "Title of Consultancy of project",
      "Amount actually received (in Rupees)",
      "Amount received (in words)"
    ],
    rows: [
      [
        "Dr Diptimayee Sahoo",
        "ORMAS, Govt of Odisha",
        "Recognition of Prior Learning ( RPL )",
        "1,028,209.00",
        "Ten Lakhs Twenty Eight Thousand Two Hundred Nine only."
      ],
      [
        "Dr Sonam Subhadarshini",
        "Odisha Tribal Development Society (OTDS), Govt of Odisha",
        "Placement Link Employeebility Training Programme (PLET)",
        "650,357.00",
        "Six Lakhs Fifty Thousand Three Hundred Fifty Seven Only"
      ],
      [
        "Dr Manas Ranjan Chowdhury & Dr Abhaya Kumar Samal",
        "Ministry of Mines, Govt of India",
        "RTGBMS Project",
        "2,410,900.00",
        "Twenty Four Lakhs Ten Thousand Nine Hundred only."
      ],
      [
        "Dr Nargis Begum",
        "Inland Engineers",
        "A Study to assess posibilities to convert consumers to prosumers to accelerate the clean energy transition in Odisha",
        "368,899.00",
        "Three Lakhs Sixty Eight Thousand Eight Hundred Nintynine only"
      ]
    ]
  },
  {
    year: "2021-22",
    type: "table",
    headers: [
      "Name of faculty (Chief Consultant)",
      "Client Organization",
      "Title of Consultancy of project",
      "Amount received (in Rupees)"
    ],
    rows: [
      [
        "Dr. Sonam Subhadarshini",
        "OSDA, Govt. of Odisha",
        "PMKVY 3.0 CSSM",
        "252,399.00"
      ],
      [
        "Dr Sonam Subhadarshini",
        "OTDS, Govt. of Odisha",
        "PRAYAS",
        "4,809,249.00"
      ],
      [
        "Dr Diptimayee Sahoo",
        "ORMAS, Govt. of Odisha",
        "MASON",
        "699,864.00"
      ],
      [
        "Dr. Sonam Subhadarshini",
        "INLAND ENGINEERS",
        "A study on Value Management of Employees",
        "524,870.00"
      ],
      [
        "Dr. Nargis begum",
        "SPARC",
        "A Study on the Employees of SPARC In Financial Planning and Wellness",
        "512,000.00"
      ]
    ]
  },
  {
    year: "2020-21",
    type: "table",
    headers: [
      "Name of faculty (Chief Consultant)",
      "Client Organization",
      "Title of Consultancy of project",
      "Amount received (in Rupees)"
    ],
    rows: [
      [
        "Dr. R. N. Satapathy",
        "ORMAS, Govt. of Odisha",
        "MASON",
        "572,616.00"
      ],
      [
        "Dr. Sakuntala Mohapatra",
        "INLAND ENGINEERS",
        "120KW Solar Installation (EPC)",
        "1,978,608.00"
      ],
      [
        "Dr. Abhaya Kumar Samal",
        "TSPL",
        "Development of general purpose configurable sensor node module for WSN setup",
        "1,257,592.00"
      ],
      [
        "Dr. Manas Senapati",
        "Dept of Forest and Environment",
        "Green and Sustainable Project",
        "20,000.00"
      ],
      [
        "Dr. R. N. Satapathy",
        "ORMAS, Govt. of Odisha",
        "Skill Development Project-Odisha",
        "15,240,531.00"
      ],
      [
        "Dr. R. N. Satapathy",
        "CSRLM, Govt. of Chhatisgarh",
        "Skill Development Project-Chhatisgarh",
        "5,858,106.00"
      ],
      [
        "Dr. R. N. Satapathy",
        "USRLM, Govt. of Uttarakhand",
        "Skill Development Project-Uttarakhand",
        "418,776.00"
      ]
    ]
  },
  {
    year: "2019-20",
    type: "table",
    headers: [
      "Name of faculty (Chief Consultant)",
      "Client Organization",
      "Title of Consultancy of project",
      "Amount received (in Rupees)"
    ],
    rows: [
      [
        "Mr. Sumanta Sahoo",
        "CISCO",
        "Knowledge Enhancement Training",
        "430,945.00"
      ],
      [
        "Mir Manjur Elahi",
        "INLAND ENGINEERS",
        "LFA for mega lift irrigation project",
        "446,350.00"
      ],
      [
        "Dr. Abhaya Kumar Samal",
        "TSPL",
        "Capacity Building on WebGIS using Google Maps API",
        "766,505.00"
      ],
      [
        "Prof. Amarendra Baral",
        "DST",
        "INSPIRE",
        "975,000.00"
      ],
      [
        "Dr. M.N. Dwibedi",
        "AICTE",
        "PMKVY-TI",
        "591,871.00"
      ],
      [
        "Dr. R.N. Satapathy",
        "ORMAS, Govt. of Odisha",
        "Skill Development Project-Odisha",
        "32,981,456.00"
      ],
      [
        "Dr. R.N. Satapathy",
        "CSRLM, Govt. of Chhatisgarh",
        "Skill Development Project-Chhatisgarh",
        "10,460,034.00"
      ],
      [
        "Dr. R.N. Satapathy",
        "USRLM, Govt. of Uttarakhand",
        "Skill Development Project-Uttarakhand",
        "5,432,150.00"
      ],
      [
        "Dr. R.N. Satapathy",
        "ASRLM, Govt. of Assam",
        "Skill Development Project-Assam",
        "10,519,506.00"
      ]
    ]
  }
];

const ConsultancyPage = () => {
  const [openYear, setOpenYear] = useState("2023-24"); // Open latest year by default

  const toggleYear = (year) => {
    setOpenYear(openYear === year ? null : year);
  };

  return (
    <PageShell title="Research" subtitle="Consultancy">
      <div className="max-w-7xl mx-auto px-4 lg:px-12 py-16">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 bg-blue-50 text-[#1B4D8E] rounded-xl flex items-center justify-center shrink-0">
            <Briefcase size={24} />
          </div>
          <div>
            <h2 className="text-3xl font-serif font-black text-[#1B4D8E] uppercase tracking-wider">Consultancy</h2>
            <div className="h-1 w-full max-w-[200px] bg-red-600 mt-3 rounded-full" />
          </div>
        </div>

        <p className="text-slate-600 mb-12 text-lg leading-relaxed text-justify max-w-4xl">
          Trident Academy of Technology actively engages in industrial consultancy, providing expert solutions and leveraging our strong academic and research foundation to solve real-world industry challenges.
        </p>

        {/* Accordion for Years */}
        <div className="space-y-4">
          {consultancyData.map((item, idx) => (
            <div 
              key={idx} 
              className={`border rounded-xl overflow-hidden transition-colors ${openYear === item.year ? 'border-blue-200 bg-white shadow-sm' : 'border-slate-200 bg-slate-50/30 hover:border-slate-300'}`}
            >
              <button
                onClick={() => toggleYear(item.year)}
                className={`w-full flex items-center justify-between p-5 text-left transition-colors ${openYear === item.year ? 'bg-blue-50/30' : ''}`}
              >
                <span className="font-bold text-slate-700 tracking-wide">YEAR: {item.year}</span>
                <div className={`p-1 rounded-full transition-colors ${openYear === item.year ? 'bg-blue-100 text-[#1B4D8E]' : 'bg-slate-100 text-slate-400'}`}>
                  {openYear === item.year ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openYear === item.year && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 border-t border-slate-100">
                      {item.type === "table" ? (
                        <div className="overflow-x-auto rounded-xl border border-slate-200">
                          <table className="w-full text-left border-collapse min-w-[800px]">
                            <thead>
                              <tr className="bg-slate-50">
                                {item.headers.map((header, hIdx) => (
                                  <th key={hIdx} className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200">
                                    {header}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {item.rows.map((row, rIdx) => (
                                <tr key={rIdx} className="hover:bg-slate-50/50 transition-colors">
                                  {row.map((cell, cIdx) => (
                                    <td key={cIdx} className="px-6 py-5 text-sm text-slate-600 border-b border-slate-100 last:border-b-0">
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ) : (
                        <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 text-center italic text-slate-500">
                          {item.content}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </PageShell>
  );
};

export default ConsultancyPage;
