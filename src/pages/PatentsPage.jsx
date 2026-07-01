import React from 'react';
import PageShell from '../components/PageShell';
import { motion } from 'framer-motion';
import { Award, FileCheck, Lightbulb, TrendingUp, ArrowRight, Users, BookOpen } from 'lucide-react';



const stats = [
  { label: "Patents Filed", value: "15+", icon: FileCheck },
  { label: "Patents Published", value: "8+", icon: Award },
  { label: "Researchers Involved", value: "25+", icon: Users },
  { label: "Innovation Areas", value: "6+", icon: Lightbulb }
];

const PatentsPage = () => {
  return (
    <PageShell title="Research" subtitle="Patents & Intellectual Property">
      <div className="py-20 bg-slate-50 relative min-h-screen">
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/4" />

        <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10">
          
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-1 w-12 bg-amber-500 rounded-full" />
              <span className="text-amber-600 font-bold uppercase tracking-wider text-sm">Intellectual Property</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-black text-slate-900 leading-tight mb-6">
              Patents & Innovations
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed max-w-3xl text-justify">
              Trident Academy of Technology encourages its faculty members and students to pursue innovative research that leads to patentable inventions. The institution provides full support for patent filing through its Research Committee and actively fosters a culture of innovation and intellectual property creation. Our researchers have made significant contributions across areas like IoT, MEMS, Machine Learning, Wireless Sensor Networks, and Renewable Energy.
            </p>
          </motion.div>

          {/* Stats Row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm text-center hover:shadow-md hover:border-amber-200 transition-all">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <stat.icon size={24} />
                </div>
                <div className="text-3xl font-black text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>



          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl p-10 md:p-14 text-white relative overflow-hidden"
          >
            <div className="absolute -top-8 -right-8 opacity-10 pointer-events-none">
              <Award size={200} />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-3xl font-serif font-bold mb-3">Interested in Our Research?</h3>
                <p className="text-white/80 text-lg font-light max-w-xl">
                  Explore our research initiatives, collaborations, and discover how Trident Academy is driving innovation through patents and intellectual property.
                </p>
              </div>
              <a 
                href="https://site-generator-documents.s3.eu-north-1.amazonaws.com/patents.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-amber-700 font-bold px-8 py-4 rounded-xl hover:bg-amber-50 transition-all shadow-lg hover:shadow-xl group shrink-0"
              >
                Learn More
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </PageShell>
  );
};

export default PatentsPage;
