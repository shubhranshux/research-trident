import React from 'react';
import { motion } from 'framer-motion';
import { 
  Eye, 
  Target, 
  Building2, 
  Cpu, 
  Lightbulb, 
  Briefcase,
  ChevronRight,
  Mail,
  Sparkles,
  Zap,
  Award,
  Database,
  Globe
} from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const galleryImages = [
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&q=80&w=800"
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-primary/20 text-text-dark font-sans">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-32 pb-16">
        
        {/* Full Background (Cinematic Pan Simulation) */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#0a0f1c]">
          {/* 
            Note: Free stock video URLs (Mixkit/Coverr) blocked hotlinking (HTTP 403) recently. 
            This Unsplash image with a slow CSS pan perfectly simulates a cinematic drone video 
            without ever breaking. If you prefer a real video, simply change this <img> 
            back to a <video> pointing to a local .mp4 file in your public directory.
          */}
          <img 
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2500" 
            alt="Laboratory Environment"
            className="w-full h-full object-cover origin-center animate-[pan_30s_ease-in-out_infinite_alternate] opacity-40 mix-blend-screen"
          />
          {/* Cinematic Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/80 to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Content */}
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-8 shadow-sm"
              >
                <Sparkles className="text-amber-400" size={16} />
                <span className="text-white/90 text-[11px] font-bold uppercase tracking-widest">Pioneering Global Discovery</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                className="text-4xl sm:text-5xl md:text-7xl lg:text-[5rem] text-white font-serif font-bold mb-6 tracking-tight leading-[1.1]"
              >
                Research & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200 italic pr-4">Innovation</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.28, ease: "easeOut" }}
                className="text-lg md:text-xl text-slate-300 font-light max-w-xl leading-relaxed mb-10"
              >
                A Vision of Research Excellence and Scholarly Pursuit. Our institution is dedicated to pioneering scientific advancement and solving complex global challenges.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="flex flex-wrap gap-6 items-center"
              >
                <a href="https://research-tat.tekkzy.com/" className="bg-amber-400 text-slate-900 px-10 py-5 rounded-full font-bold text-[11px] tracking-[0.2em] hover:bg-white transition-colors duration-200 uppercase shadow-xl shadow-amber-400/20 flex items-center gap-2 group">
                  Explore Research <ChevronRight className="group-hover:translate-x-1 transition-transform duration-200" size={16} />
                </a>
              </motion.div>

              {/* Floating Stats */}
              <motion.div 
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}
                className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-xl"
              >
                {[
                  { label: "Research Centers", val: "12+" },
                  { label: "Active Patents", val: "45+" },
                  { label: "Global Partners", val: "100+" }
                ].map((stat, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 sm:p-5 rounded-2xl shadow-sm hover:bg-white/10 transition-colors duration-200">
                    <div className="text-2xl sm:text-3xl font-serif font-bold text-white mb-1">{stat.val}</div>
                    <div className="text-[9px] sm:text-[10px] text-amber-400/80 font-bold uppercase tracking-[0.2em]">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Column: Static Image Layout over Video */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="relative hidden lg:block h-[600px] w-full"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] h-[85%] rounded-[2rem] overflow-hidden shadow-2xl border-[4px] border-white/20 transform rotate-2 hover:rotate-0 transition-transform duration-700 ease-out z-10">
                <img 
                  src="/lab_scientist_static.png" 
                  alt="Scientist working" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-1/4 -right-10 w-32 h-32 bg-amber-400 rounded-full blur-[80px] opacity-20 z-0 pointer-events-none" />
              <div className="absolute bottom-1/4 left-10 w-40 h-40 bg-blue-500 rounded-full blur-[80px] opacity-20 z-0 pointer-events-none" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Research Gallery Section */}
      <section className="py-14 bg-[#2D336B] relative z-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-8 relative z-10">
            <h2 className="text-3xl font-serif font-bold text-white mb-3 uppercase tracking-[0.15em]">Gallery</h2>
            <div className="h-1 w-16 bg-white/20 mx-auto rounded-full" />
          </div>

          {/* Split layout: 1 big image left + 2×2 grid right */}
          <div className="flex flex-col md:flex-row gap-3">

            {/* Big image — left */}
            <div className="relative overflow-hidden rounded-2xl group cursor-pointer md:w-1/2 aspect-[4/3]">
              <img
                src={galleryImages[0]}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                alt="Research 1"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-250" />
            </div>

            {/* 2×2 grid — right */}
            <div className="grid grid-cols-2 gap-3 md:w-1/2">
              {galleryImages.slice(1, 5).map((src, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-xl group cursor-pointer aspect-[4/3]"
                >
                  <img
                    src={src}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    alt={`Research ${i + 2}`}
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-250" />
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="vision" className="py-32 bg-[#FCF8F3] relative overflow-hidden border-y border-[#FCF8F3]/50">
        <div className="absolute inset-0 bg-grid-slate-100 opacity-40 pointer-events-none" />
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none animate-blob" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-6 mb-10 relative z-10">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 group-hover:border-[#00897B]/30 group-hover:bg-[#00897B]/5 transition-colors duration-300">
                  <Eye className="text-[#00897B]" size={32} strokeWidth={1.5} />
                </div>
                <h2 className="text-3xl font-serif font-bold tracking-[0.2em] text-secondary uppercase">Our Vision</h2>
              </div>
              <p className="text-[1.1rem] leading-relaxed text-slate-600 font-light relative z-10">
                To establish an ecosystem of continuous learning and discovery that pioneers scientific advancement and reshapes the global technological landscape.
              </p>
            </div>

            <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-6 mb-10 relative z-10">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 group-hover:border-blue-500/30 group-hover:bg-blue-500/5 transition-colors duration-300">
                  <Target className="text-blue-500" size={32} strokeWidth={1.5} />
                </div>
                <h2 className="text-3xl font-serif font-bold tracking-[0.2em] text-secondary uppercase">Our Mission</h2>
              </div>
              <ul className="space-y-6 relative z-10">
                {[
                  "Foster a culture of innovative and disruptive thinking.",
                  "Build state-of-the-art research infrastructure.",
                  "Facilitate global collaboration and knowledge exchange."
                ].map((item, index) => (
                  <li key={index} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0 mt-1 border border-slate-100">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                    </div>
                    <span className="text-[1.05rem] text-slate-600 leading-relaxed font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section - MOVED UP */}
      <section id="philosophy" className="py-40 bg-[#F7B538] relative overflow-hidden flex items-center justify-center border-t border-[#FCF8F3]/20 shadow-[0_-20px_50px_rgba(247,181,56,0.2)]">
        <div className="absolute inset-0 opacity-[0.03] mix-blend-luminosity bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-fixed bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F7B538] via-transparent to-[#F7B538]/80" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="text-black/5 text-9xl font-serif leading-none absolute -top-12 left-0 right-0 mx-auto select-none pointer-events-none self-center drop-shadow-sm">"</div>
          <h2 className="text-sm font-black text-slate-900 mb-12 uppercase tracking-[0.5em] relative z-10">Institutional <span className="text-[#006837] italic font-serif lowercase tracking-normal">philosophy</span></h2>
          <p className="text-4xl md:text-6xl leading-tight font-serif font-black text-[#1A1A1A] relative z-10">
            True academic excellence arises through <span className="text-[#006837] italic font-medium">interdisciplinary collaboration</span> and sustained intellectual rigor.
          </p>
        </div>
      </section>

      {/* Core Objectives Section - MOVED DOWN */}
      <section id="objectives" className="py-32 bg-[#EEF2FF] relative z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-serif font-black text-secondary uppercase tracking-[0.1em] mb-6 leading-tight">
              Core <span className="text-emerald-600 italic font-medium lowercase">Objectives</span>
            </h2>
            <div className="h-1.5 w-32 bg-emerald-600/20 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Excellence in Research",
                desc: "Achieve academic, industrial, and societal research excellence through innovation.",
                color: "#1d71b8",
                gradient: "from-[#dbeafe] to-[#eff6ff]",
                accent: "rgba(29,113,184,0.15)"
              },
              {
                title: "Interdisciplinary Collaboration",
                desc: "Promote cross-domain research and share knowledge via reputed journals and conferences.",
                color: "#059669",
                gradient: "from-[#ccfbf1] to-[#f0fdfa]",
                accent: "rgba(5,150,105,0.15)"
              },
              {
                title: "Sensitization Programs",
                desc: "Organize seminars and workshops with guest experts to address societal and industrial needs.",
                color: "#7c3aed",
                gradient: "from-[#ede9fe] to-[#f5f3ff]",
                accent: "rgba(124,58,237,0.15)"
              },
              {
                title: "Industry Networking",
                desc: "Conduct research through active collaboration and networking with industry partners.",
                color: "#be185d",
                gradient: "from-[#fce7f3] to-[#fdf2f8]",
                accent: "rgba(190,24,93,0.15)"
              }
            ].map((obj, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br ${obj.gradient} p-10 rounded-[2.5rem] shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-[#2D336B]/5 border-b-[6px] group relative overflow-hidden`}
                style={{ borderBottomColor: obj.color }}
              >
                <div className="w-16 h-16 rounded-[1.5rem] bg-white shadow-sm flex items-center justify-center mb-10 border border-slate-100 relative z-10">
                  <span className="font-serif font-black text-3xl" style={{ color: obj.color }}>{index + 1}</span>
                </div>
                <h3 className="text-2xl font-serif font-black text-secondary mb-4 pr-4 leading-snug relative z-10">{obj.title}</h3>
                <p className="text-slate-700 leading-relaxed text-[1rem] font-bold opacity-80 relative z-10">{obj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance & Policies Section */}
      <section id="governance" className="py-32 bg-[#FCF8F3] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-serif font-bold text-secondary mb-6 uppercase tracking-[0.15em]">Governance & Policies</h2>
              <div className="h-1 w-24 bg-[#2D336B]/20 rounded-full mb-8" />
              <p className="text-slate-600 text-[1.05rem] mb-12 leading-relaxed font-light">
                Our established framework ensures rigorous ethical standards, active linkage with industry, and robust systems fostering research empowerment across all departments.
              </p>
              <div className="space-y-5">
                <a href="https://research-tat.tekkzy.com/research-committee/" target="_blank" rel="noopener noreferrer" className="w-full bg-white border border-slate-200 text-secondary px-8 py-5 rounded-[1.5rem] font-bold text-[11px] tracking-[0.25em] transition-all duration-200 hover:border-slate-300 hover:shadow-md uppercase shadow-sm flex items-center justify-between group block text-center">
                  Research Committee <ChevronRight className="group-hover:translate-x-1 transition-transform duration-200 text-slate-400" size={18} />
                </a>
                <a href="https://research-tat.tekkzy.com/research-linkage/" target="_blank" rel="noopener noreferrer" className="w-full bg-white text-secondary px-8 py-5 rounded-[1.5rem] font-bold text-[11px] tracking-[0.25em] transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 uppercase flex items-center justify-between group border border-slate-200 shadow-sm hover:border-blue-500/30 block text-center">
                  Research Linkage <Zap className="text-blue-500 group-hover:text-amber-400 transition-colors duration-200" size={18} />
                </a>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-sm border border-[#2D336B]/5 relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#F5F5F7] rounded-full blur-[80px]" />
                <h3 className="text-2xl font-serif font-bold text-[#2D336B] mb-10 pb-6 border-b border-[#F5F5F7] tracking-[0.15em] relative z-10 flex items-center gap-4">
                  <div className="w-4 h-4 bg-[#F7B538] rounded-sm transform rotate-45 shadow-sm" />
                  Core Documents
                </h3>
                
                <div className="space-y-4 relative z-10">
                  {[
                    { title: "Empowerment Guidelines", desc: "Framework for integrating research natively into academic curricula.", icon: Sparkles, href: "https://research-tat.tekkzy.com/empowerment-guidelines/" },
                    { title: "Research & Consultancy Policy 2013", desc: "Foundational rules and metrics governing industrial consultancy.", icon: Briefcase, href: "https://tat.ac.in/research/research-and-consultancy-policy/" },
                    { title: "Research & Development Policy 2024", desc: "Updated mandates, ethical practices, and the R&D code of conduct.", icon: Mail, href: "https://tat.ac.in/research/research-code-of-conduct-and-ethical-practice-manual/" }
                  ].map((policy, index) => (
                    <a key={index} href={policy.href} target="_blank" rel="noopener noreferrer" className="flex gap-6 items-start group cursor-pointer p-6 rounded-[1.5rem] bg-[#FCF8F3]/50 hover:bg-white border border-[#F5F5F7] hover:border-[#2D336B]/20 hover:shadow-md transition-all duration-250">
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 border border-[#2D336B]/10 group-hover:bg-[#2D336B] group-hover:border-[#2D336B] transition-all duration-250 shadow-sm">
                        <policy.icon className="text-[#2D336B] group-hover:text-white transition-colors duration-250" size={22} strokeWidth={2} />
                      </div>
                      <div>
                        <h4 className="text-[1.1rem] font-bold text-secondary group-hover:text-[#2D336B] transition-colors duration-200 tracking-wide">{policy.title}</h4>
                        <p className="text-[0.9rem] text-slate-500 font-medium mt-2 leading-relaxed">{policy.desc}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Focus Areas Section */}
      <section id="focus-areas" className="py-32 bg-white relative overflow-hidden border-t border-slate-100">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -skew-x-12 origin-top-right transform z-0" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-sm font-black text-slate-400 mb-4 uppercase tracking-[0.4em]">Explore Our</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-black text-secondary uppercase tracking-[0.1em] drop-shadow-sm mb-6">
              Research <span className="text-blue-600 italic font-medium lowercase">Focus Areas</span>
            </h3>
            <div className="h-1.5 w-24 bg-blue-600/20 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Research Recognition",
                desc: "Honoring outstanding research contributions and scholarly achievements within our institution.",
                icon: Award,
                url: "https://research-tat.tekkzy.com/research-recognition/",
                color: "text-amber-500",
                bg: "bg-amber-50",
                border: "group-hover:border-amber-500/30"
              },
              {
                title: "Extramural Funding (TEFR)",
                desc: "Securing external grants for impactful, solution-driven research projects and global challenges.",
                icon: Globe,
                url: "https://research-tat.tekkzy.com/extramural-funding/",
                color: "text-blue-500",
                bg: "bg-blue-50",
                border: "group-hover:border-blue-500/30"
              },
              {
                title: "Intramural Funding (TIFR)",
                desc: "Internal funding schemes supporting faculty and student innovations to foster research excellence.",
                icon: Lightbulb,
                url: "https://research-tat.tekkzy.com/intramural-funding/",
                color: "text-emerald-500",
                bg: "bg-emerald-50",
                border: "group-hover:border-emerald-500/30"
              },
              {
                title: "Domain Research Hubs",
                desc: "Specialized centers fostering interdisciplinary, advanced technical and social research.",
                icon: Building2,
                url: "https://research-tat.tekkzy.com/domain-research-hub/",
                color: "text-indigo-500",
                bg: "bg-indigo-50",
                border: "group-hover:border-indigo-500/30"
              },
              {
                title: "Patents",
                desc: "Securing intellectual property rights for groundbreaking and transformative innovations.",
                icon: Zap,
                url: "https://tat.ac.in/research/patents/",
                color: "text-rose-500",
                bg: "bg-rose-50",
                border: "group-hover:border-rose-500/30"
              },
              {
                title: "Consultancy",
                desc: "Bridging the gap between academia and industry through expert solutions and active R&D.",
                icon: Briefcase,
                url: "https://research-tat.tekkzy.com/consultancy/",
                color: "text-cyan-500",
                bg: "bg-cyan-50",
                border: "group-hover:border-cyan-500/30"
              }
            ].map((item, index) => (
              <a 
                key={index} 
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`block bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 ${item.border}`}
              >
                <div className={`w-16 h-16 rounded-[1.25rem] ${item.bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={item.color} size={28} strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                  {item.title}
                </h4>
                <p className="text-slate-500 leading-relaxed font-medium text-[0.95rem]">
                  {item.desc}
                </p>
                <div className="mt-8 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-blue-600 transition-colors duration-200">
                  Explore <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* National Initiatives Section */}
      <section id="initiatives" className="py-32 bg-[#2D336B] relative overflow-hidden shadow-[inset_0_20px_50px_rgba(0,0,0,0.1)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-40" />
        
        {/* Floating Thematic Watermarks */}
        <div className="absolute top-20 left-10 text-white/5 pointer-events-none rotate-12">
          <Cpu size={200} strokeWidth={0.5} />
        </div>
        <div className="absolute bottom-20 right-10 text-white/5 pointer-events-none -rotate-12">
          <Database size={240} strokeWidth={0.5} />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/[0.02] pointer-events-none">
          <Globe size={500} strokeWidth={0.5} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-sm font-black text-blue-100/60 mb-4 uppercase tracking-[0.4em] flex items-center justify-center gap-4">
              <span className="w-8 h-px bg-white/20" /> Aligning <span className="text-white italic">With</span> <span className="w-8 h-px bg-white/20" />
            </h2>
            <h3 className="text-5xl md:text-6xl font-serif font-black text-white uppercase tracking-[0.1em] drop-shadow-sm">
              National <span className="text-amber-400 italic font-medium lowercase">Initiatives</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                img: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=800", 
                title: "SMART CITIES", 
                desc: "Developing next-generation urban infrastructure models for a sustainable tomorrow.", 
                color: "#d32128" 
              },
              { 
                img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800", 
                title: "DIGITAL INDIA", 
                desc: "Pioneering state-of-the-all cyber-physical frameworks for a connected nation.", 
                color: "#4F8AFF" 
              },
              { 
                img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800", 
                title: "STARTUP INDIA", 
                desc: "Fostering entrepreneurial excellence through robust mentorship and venture funding.", 
                color: "#fbbd18" 
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-[#1A1E40] rounded-[2.5rem] text-center border border-white/10 shadow-lg transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden"
              >
                <div className="h-56 relative overflow-hidden">
                  <img src={item.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1E40] to-transparent opacity-60" />
                </div>
                <div className="p-10 relative z-10">
                  <h3 className="font-serif font-black text-2xl mb-4 tracking-widest text-white" style={{ color: item.color }}>{item.title}</h3>
                  <p className="text-blue-50 text-[1rem] font-bold opacity-80">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
