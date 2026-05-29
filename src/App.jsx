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
import SectionDivider from './components/SectionDivider';

const App = () => {
  const galleryImages = [
    "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1614935151651-0bea6508ab2b?auto=format&fit=crop&q=80&w=1200"
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

      <div className="relative z-[20]" style={{ marginTop: '-2px' }}>
        <SectionDivider type="wave" topColor="#0F172A" bottomColor="#2D336B" height={80} />
      </div>

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

      <SectionDivider type="curve" topColor="#2D336B" bottomColor="#FCF8F3" height={80} />

      {/* Vision & Mission Section (Image 1 Style: Overlapping Circular Gradients) */}
      <section id="vision" className="py-32 bg-gradient-to-br from-[#f0f4f8] to-[#fcecee] relative overflow-hidden">
        {/* Background Circles */}
        <div className="absolute -top-[20%] -left-[10%] w-[800px] h-[800px] rounded-full border-[60px] border-white/40 pointer-events-none" />
        <div className="absolute top-[10%] -right-[20%] w-[1000px] h-[1000px] rounded-full bg-gradient-to-tr from-white/60 to-transparent pointer-events-none" />
        <div className="absolute -bottom-[30%] left-[20%] w-[1200px] h-[1200px] rounded-full border-[100px] border-white/30 pointer-events-none mix-blend-overlay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/40 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-start">
            
            {/* Vision */}
            <div className="relative">
              <div className="text-[120px] font-serif font-black text-[#F7B538] opacity-20 absolute -top-16 -left-10 select-none">01</div>
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="w-12 h-1 bg-[#00897B]" />
                <h2 className="text-4xl font-serif font-black tracking-[0.1em] text-secondary uppercase">Our Vision</h2>
              </div>
              <p className="text-[1.3rem] leading-relaxed text-slate-700 font-serif italic relative z-10 pl-16 border-l border-[#00897B]/20">
                "To establish an ecosystem of continuous learning and discovery that pioneers scientific advancement and reshapes the global technological landscape."
              </p>
            </div>

            {/* Mission */}
            <div className="relative mt-16 md:mt-0 md:pt-24">
              <div className="text-[120px] font-serif font-black text-blue-500 opacity-10 absolute top-8 -left-10 select-none">02</div>
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="w-12 h-1 bg-blue-500" />
                <h2 className="text-4xl font-serif font-black tracking-[0.1em] text-secondary uppercase">Our Mission</h2>
              </div>
              <ul className="space-y-8 relative z-10 pl-16 border-l border-blue-500/20">
                {[
                  "Foster a culture of innovative and disruptive thinking.",
                  "Build state-of-the-art research infrastructure.",
                  "Facilitate global collaboration and knowledge exchange."
                ].map((item, index) => (
                  <li key={index} className="flex gap-6 items-start group">
                    <span className="text-sm font-bold text-blue-500 mt-1 opacity-50 group-hover:opacity-100 transition-opacity">0{index + 1}.</span>
                    <span className="text-[1.1rem] text-slate-700 leading-relaxed font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      <div className="relative z-[20]" style={{ marginTop: '-2px' }}>
        <SectionDivider type="wave" topColor="#FCF8F3" bottomColor="#F7B538" height={80} />
      </div>

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

      <SectionDivider type="curve" topColor="#F7B538" bottomColor="#EEF2FF" height={80} />

      {/* Core Objectives Section (Image 3 Style: Geometric & Dots) */}
      <section id="objectives" className="py-32 bg-[#f8f9fa] relative z-20 overflow-hidden">
        {/* Background Geometry */}
        <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_2px,transparent_2px)] [background-size:24px_24px] opacity-20 pointer-events-none" />
        {/* Diagonal striped overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 1px, transparent 10px)' }} />
        
        {/* Geometric angled blocks */}
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[150%] bg-white border-r-[16px] border-blue-600/80 transform rotate-45 pointer-events-none shadow-2xl" />
        <div className="absolute -bottom-[40%] -right-[10%] w-[50%] h-[150%] bg-[#1e3a8a] border-l-[24px] border-slate-200 transform rotate-45 pointer-events-none shadow-2xl opacity-10" />
        
        <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10">
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-secondary/10 pb-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-serif font-black text-secondary uppercase tracking-[0.1em] leading-tight">
                Core <span className="text-emerald-600 italic font-medium lowercase">Objectives</span>
              </h2>
            </div>
            <div className="max-w-md text-slate-700 font-normal">
              Guiding principles that steer our research endeavors toward societal and academic impact.
            </div>
          </div>

          <div className="flex flex-col">
            {[
              {
                title: "Excellence in Research",
                desc: "Achieve academic, industrial, and societal research excellence through continuous and rigorous innovation.",
                color: "#1d71b8",
              },
              {
                title: "Interdisciplinary Collaboration",
                desc: "Promote cross-domain research and seamlessly share knowledge via reputed high-impact journals and global conferences.",
                color: "#059669",
              },
              {
                title: "Sensitization Programs",
                desc: "Organize impactful seminars and workshops with renowned guest experts to directly address societal and industrial needs.",
                color: "#7c3aed",
              },
              {
                title: "Industry Networking",
                desc: "Conduct applied research through active collaboration, robust networking, and strategic alliances with industry partners.",
                color: "#be185d",
              }
            ].map((obj, index) => (
              <div 
                key={index}
                className="group flex flex-col md:flex-row md:items-center py-12 border-b border-secondary/10 hover:bg-white/50 transition-colors duration-500 cursor-pointer px-4 -mx-4"
              >
                <div className="w-24 shrink-0 font-serif font-black text-5xl text-secondary/40 group-hover:text-secondary transition-colors duration-500 mb-4 md:mb-0">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="md:w-1/3 pr-8 mb-4 md:mb-0">
                  <h3 className="text-2xl font-serif font-black text-secondary group-hover:translate-x-2 transition-transform duration-500" style={{ color: obj.color }}>{obj.title}</h3>
                </div>
                <div className="md:w-1/2">
                  <p className="text-slate-700 text-lg font-normal leading-relaxed group-hover:text-slate-900 transition-colors duration-500">{obj.desc}</p>
                </div>
                <div className="hidden md:flex ml-auto w-12 h-12 rounded-full border border-secondary/20 items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                  <ChevronRight size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="relative z-[20]" style={{ marginTop: '-2px' }}>
        <SectionDivider type="wave" topColor="#EEF2FF" bottomColor="#FCF8F3" height={80} />
      </div>

      {/* Governance & Policies Section (Image 2 Style: Wavy Blue Curves) */}
      <section id="governance" className="py-32 bg-[#e0f2fe] relative overflow-hidden">
        {/* Wavy SVGs at bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none leading-none z-0">
          <svg className="relative block w-full h-[150px] md:h-[250px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.49,190.61,93.85,236.4,74.19,279.79,64.12,321.39,56.44Z" className="fill-blue-500/10"></path>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none leading-none z-0">
          <svg className="relative block w-full h-[100px] md:h-[180px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-blue-400/20"></path>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none leading-none z-0">
          <svg className="relative block w-full h-[60px] md:h-[100px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" className="fill-white opacity-40"></path>
          </svg>
        </div>

        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/4" />

        <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:items-start">
            <div className="lg:w-1/3">
              <h2 className="text-4xl font-serif font-black text-secondary mb-6 uppercase tracking-[0.15em]">Governance<br/><span className="italic text-emerald-600 font-medium lowercase">&</span> Policies</h2>
              <div className="h-1 w-24 bg-emerald-600/20 rounded-full mb-8" />
              <p className="text-slate-700 text-[1.1rem] mb-12 leading-relaxed font-normal">
                Our established framework ensures rigorous ethical standards, active linkage with industry, and robust systems fostering research empowerment across all departments.
              </p>
              <div className="space-y-2">
                <a href="https://research-tat.tekkzy.com/research-committee/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 text-sm font-bold tracking-widest uppercase text-secondary hover:text-emerald-600 transition-colors group">
                  Research Committee <ChevronRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </a>
                <br/>
                <a href="https://research-tat.tekkzy.com/research-linkage/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 text-sm font-bold tracking-widest uppercase text-secondary hover:text-blue-500 transition-colors group mt-4">
                  Research Linkage <Zap size={16} className="group-hover:text-amber-400 group-hover:translate-x-2 transition-all" />
                </a>
              </div>
            </div>

            <div className="lg:w-2/3 mt-12 lg:mt-0">
              <h3 className="text-xl font-serif font-black text-slate-400 mb-8 tracking-[0.2em] uppercase border-b border-secondary/10 pb-4">
                Core Documents
              </h3>
              
              <div className="flex flex-col">
                {[
                  { title: "Empowerment Guidelines", desc: "Framework for integrating research natively into academic curricula.", icon: Sparkles, href: "https://research-tat.tekkzy.com/empowerment-guidelines/" },
                  { title: "Research & Consultancy Policy", desc: "Foundational rules and metrics governing industrial consultancy.", icon: Briefcase, href: "https://tat.ac.in/research/research-and-consultancy-policy/" },
                  { title: "R&D Policy 2024", desc: "Updated mandates, ethical practices, and the R&D code of conduct.", icon: Mail, href: "https://tat.ac.in/research/research-code-of-conduct-and-ethical-practice-manual/" }
                ].map((policy, index) => (
                  <a key={index} href={policy.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group cursor-pointer py-8 border-b border-secondary/10 hover:bg-white/40 transition-colors duration-300 px-4 -mx-4">
                    <div className="flex gap-6 items-center">
                      <div className="text-secondary/30 group-hover:text-emerald-600 transition-colors duration-300">
                        <policy.icon size={28} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="text-[1.3rem] font-serif font-black text-secondary group-hover:text-emerald-600 transition-colors duration-300">{policy.title}</h4>
                        <p className="text-[1rem] text-slate-600 font-normal mt-1">{policy.desc}</p>
                      </div>
                    </div>
                    <div className="text-secondary/20 group-hover:text-emerald-600 group-hover:translate-x-2 transition-all duration-300">
                      <ChevronRight size={24} />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider type="curve" topColor="#FCF8F3" bottomColor="#FFFFFF" height={80} />

      {/* Research Focus Areas Section (Image 1 Style: Soft Overlapping Circles) */}
      <section id="focus-areas" className="py-32 bg-slate-50 relative overflow-hidden border-t border-slate-200">
        <div className="absolute top-[10%] -left-[10%] w-[600px] h-[600px] rounded-full border-[40px] border-blue-100/50 pointer-events-none" />
        <div className="absolute bottom-[5%] right-[5%] w-[800px] h-[800px] rounded-full bg-gradient-to-tl from-indigo-100/40 to-transparent pointer-events-none" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[1000px] h-[1000px] rounded-full border-[80px] border-white/60 pointer-events-none mix-blend-overlay" />

        <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-sm font-black text-slate-400 mb-4 uppercase tracking-[0.4em]">Explore Our</h2>
            <h3 className="text-5xl md:text-6xl font-serif font-black text-secondary uppercase tracking-[0.1em] drop-shadow-sm mb-6">
              Research <span className="text-blue-600 italic font-medium lowercase">Focus Areas</span>
            </h3>
            <div className="h-1.5 w-24 bg-blue-600/20 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-slate-100">
            {[
              {
                title: "Research Recognition",
                desc: "Honoring outstanding research contributions and scholarly achievements within our institution.",
                icon: Award,
                url: "https://research-tat.tekkzy.com/research-recognition/",
                color: "text-amber-500 group-hover:bg-amber-50",
              },
              {
                title: "Extramural Funding",
                desc: "Securing external grants for impactful, solution-driven research projects and global challenges.",
                icon: Globe,
                url: "https://research-tat.tekkzy.com/extramural-funding/",
                color: "text-blue-500 group-hover:bg-blue-50",
              },
              {
                title: "Intramural Funding",
                desc: "Internal funding schemes supporting faculty and student innovations to foster research excellence.",
                icon: Lightbulb,
                url: "https://research-tat.tekkzy.com/intramural-funding/",
                color: "text-emerald-500 group-hover:bg-emerald-50",
              },
              {
                title: "Domain Research Hubs",
                desc: "Specialized centers fostering interdisciplinary, advanced technical and social research.",
                icon: Building2,
                url: "https://research-tat.tekkzy.com/domain-research-hub/",
                color: "text-indigo-500 group-hover:bg-indigo-50",
              },
              {
                title: "Patents",
                desc: "Securing intellectual property rights for groundbreaking and transformative innovations.",
                icon: Zap,
                url: "https://tat.ac.in/research/patents/",
                color: "text-rose-500 group-hover:bg-rose-50",
              },
              {
                title: "Consultancy",
                desc: "Bridging the gap between academia and industry through expert solutions and active R&D.",
                icon: Briefcase,
                url: "https://research-tat.tekkzy.com/consultancy/",
                color: "text-cyan-500 group-hover:bg-cyan-50",
              }
            ].map((item, index) => (
              <a 
                key={index} 
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`block bg-white p-12 border-b border-r border-slate-100 transition-colors duration-500 group ${item.color.split(' ')[1]}`}
              >
                <div className="mb-8">
                  <item.icon className={item.color.split(' ')[0]} size={36} strokeWidth={1} />
                </div>
                <h4 className="text-2xl font-serif font-black text-secondary mb-4 group-hover:text-slate-900 transition-colors duration-200">
                  {item.title}
                </h4>
                <p className="text-slate-600 leading-relaxed font-normal text-[1.05rem]">
                  {item.desc}
                </p>
                <div className="mt-8 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-slate-300 group-hover:text-slate-900 transition-colors duration-200">
                  Explore <ChevronRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="relative z-[20]" style={{ marginTop: '-2px' }}>
        <SectionDivider type="wave" topColor="#FFFFFF" bottomColor="#2D336B" height={80} />
      </div>

      {/* National Initiatives Section (Image 3 Style: Dark Tech Geometry) */}
      <section id="initiatives" className="bg-[#1e293b] relative overflow-hidden py-32">
        {/* Dark Geometric Background */}
        <div className="absolute inset-0 bg-[radial-gradient(#334155_2px,transparent_2px)] [background-size:32px_32px] opacity-30 pointer-events-none" />
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(-45deg, #cbd5e1 0, #cbd5e1 1px, transparent 1px, transparent 12px)' }} />
        
        <div className="absolute -top-[30%] -right-[10%] w-[60%] h-[150%] bg-[#0f172a] border-l-[12px] border-blue-500/30 transform -rotate-45 pointer-events-none shadow-2xl" />
        <div className="absolute -bottom-[50%] -left-[20%] w-[70%] h-[150%] bg-[#020617] border-r-[20px] border-amber-500/20 transform -rotate-45 pointer-events-none shadow-2xl opacity-60" />

        <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10 mb-20">
          <div className="text-center">
            <h2 className="text-sm font-black text-blue-100/60 mb-4 uppercase tracking-[0.4em] flex items-center justify-center gap-4">
              <span className="w-8 h-px bg-white/20" /> Aligning <span className="text-white italic">With</span> <span className="w-8 h-px bg-white/20" />
            </h2>
            <h3 className="text-5xl md:text-7xl font-serif font-black text-white uppercase tracking-[0.1em] drop-shadow-sm">
              National <span className="text-amber-400 italic font-medium lowercase">Initiatives</span>
            </h3>
          </div>
        </div>

        <div className="flex flex-col">
          {[
            { 
              img: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=1200", 
              title: "SMART CITIES", 
              desc: "Developing next-generation urban infrastructure models for a sustainable tomorrow.", 
              color: "#d32128" 
            },
            { 
              img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200", 
              title: "DIGITAL INDIA", 
              desc: "Pioneering state-of-the-art cyber-physical frameworks for a connected nation.", 
              color: "#4F8AFF" 
            },
            { 
              img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=1200", 
              title: "STARTUP INDIA", 
              desc: "Fostering entrepreneurial excellence through robust mentorship and venture funding.", 
              color: "#fbbd18" 
            }
          ].map((item, index) => (
            <div key={index} className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} group overflow-hidden`}>
              <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                <img src={item.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt={item.title} />
                <div className="absolute inset-0 bg-[#2D336B]/40 group-hover:bg-[#2D336B]/10 transition-colors duration-500" />
              </div>
              <div className="md:w-1/2 p-12 md:p-24 flex flex-col justify-center bg-[#1A1E40] border-t border-white/5">
                <div className="w-12 h-1 mb-8" style={{ backgroundColor: item.color }} />
                <h3 className="font-serif font-black text-4xl mb-6 tracking-widest text-white">{item.title}</h3>
                <p className="text-blue-50/90 text-[1.2rem] font-normal leading-relaxed max-w-md">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
