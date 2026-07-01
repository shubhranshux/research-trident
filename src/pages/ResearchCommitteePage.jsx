import React from 'react';
import ResearchCommitteeLayout from '../components/ResearchCommitteeLayout';
import { Quote } from 'lucide-react';

const ResearchCommitteePage = () => {
  return (
    <ResearchCommitteeLayout>
      <div className="scroll-mt-32">
        <h3 className="text-3xl font-serif font-bold text-slate-900 mb-8 pb-4 border-b border-slate-200">
          About Research Committee
        </h3>
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100 space-y-8 text-slate-700 leading-relaxed">
          <p>
            Through a creative visualization, understanding of the significance of research in technical institutions, our Chief Mentor - a man with a strong passion for setting up a world-class technical institution and deep inclination for societal and industrial research activities, the R&D movement at Trident Group of Institutions (TGI) were initiated way back in 1991 through the setup of Trident Software Pvt. Ltd. (TSPL). Since then, the desire for R&D has been evolving slowly to finally emerge as Spatial Planning & Analysis Research Centre (SPARC) in 1997. Since education is an integral part of the envisaged development, in steady pace with the growing demand for technological advancement, TGI ultimately took bold step towards research initiative by establishing an Research Committee.
          </p>
          <p>
            The prime objective of Research Committee, showcased today in the name of Trident Research (TR) as a core function of TGI - as a modest attempt to facilitate the attainment of the destined R&D goals by providing world class research, development, consultancy and extension services. As a challenging ladder to success TGI has adopted innovations in education through research as a significant part of its academic activity to achieve quality and excellence. TGI believes in working in small focused groups to achieve success in research in diverse fields of application.
          </p>
          
          <div className="py-8 text-center px-4 relative">
            <Quote className="absolute top-0 left-1/2 -translate-x-1/2 text-red-100 w-24 h-24 -z-10" />
            <h4 className="text-xl md:text-2xl font-bold text-red-600">
              Holism holds that the whole is greater than the sum of its parts
            </h4>
          </div>
          
          <p>
            Holism, ambition, networking and realism are fundamental components of the Trident Research's viewpoint. Despite infrastructural limitations, the available technical manpower has adopted networking as the only approach to excellence. Trident Research networks as far as possible with experts and organizations inside and outside. Different Research Groups constituting Research Committee function in a cooperative manner to identify and initiate fundamental inter-disciplinary research as well as to propose multi-disciplinary research projects promoting industry-academic interactive mode of operation, create and combine patentable Intellectual Property (IP) components, design and develop prototypes and proof of concepts, manage and market products and solutions (through know-how transferred incubated companies), and win and work to deliver funded research projects.
          </p>
        </div>
      </div>
    </ResearchCommitteeLayout>
  );
};

export default ResearchCommitteePage;
