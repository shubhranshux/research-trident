import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
  Globe,
  Users,
  Link as LinkIcon,
  FileText,
  FileCheck,
  ArrowRight
} from 'lucide-react';
import SectionDivider from '../components/SectionDivider';
import { TextReveal, MaskReveal, FadeInUp } from '../utils/animations';

const HomePage = () => {
  const galleryImages = [
    "/gallery-1.jpeg",
    "/gallery-2.jpeg",
    "/gallery-3.jpeg",
    "/gallery-4.jpeg",
    "/gallery-5.jpeg",
    "/images/mba_department.jpg"
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden pt-32 pb-16">
        
        {/* Full Background (Cinematic Pan Simulation) */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#0a0f1c]">
          <img 
            src="/hero.jpeg" 
            alt="Laboratory Environment"
            className="w-full h-full object-cover origin-center animate-[pan_30s_ease-in-out_infinite_alternate]"
          />
          {/* Cinematic Dark Overlay - Darkened for better text visibility */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,15,28,0.95) 0%, rgba(10,15,28,0.7) 40%, rgba(10,15,28,0.2) 100%)' }} />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Content */}
            <div className="max-w-3xl">
              
              {/* Badge */}
              <FadeInUp delay={200} className="mb-8 inline-flex">
                <span className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-black/50 backdrop-blur-md text-[11px] font-bold text-white tracking-[0.2em] uppercase">
                  <Sparkles size={14} className="text-amber-400" /> PIONEERING GLOBAL DISCOVERY
                </span>
              </FadeInUp>

              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-white font-serif font-bold mb-6 tracking-tight leading-[1.1] flex flex-col">
                <div className="overflow-hidden">
                  <TextReveal delay={400} className="inline-block">Research &</TextReveal>
                </div>
                <div className="overflow-hidden pb-4">
                  <TextReveal delay={600} className="inline-block text-[#FCD34D] italic">Innovation</TextReveal>
                </div>
              </div>
              
              <FadeInUp delay={800} duration={1000} className="text-lg md:text-xl text-slate-200 font-light max-w-xl leading-relaxed mb-10">
                A Vision of Research Excellence and Scholarly Pursuit. Our institution is dedicated to pioneering scientific advancement and solving complex global challenges.
              </FadeInUp>
              
              <FadeInUp delay={1000} duration={1000} className="flex flex-wrap gap-6 items-center">
                <a href="https://research-tat.tekkzy.com/" className="bg-[#F6C955] text-slate-900 px-8 py-3.5 rounded-full font-bold text-xs tracking-widest hover:bg-white transition-colors duration-200 uppercase shadow-lg shadow-amber-400/20 flex items-center gap-2 group">
                  Explore Research <ChevronRight className="group-hover:translate-x-1 transition-transform duration-200" size={16} />
                </a>
              </FadeInUp>

              {/* Floating Stats */}
              <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-xl">
                {[
                  { value: "12+", label: "RESEARCH CENTERS" },
                  { value: "45+", label: "ACTIVE PATENTS" },
                  { value: "100+", label: "GLOBAL PARTNERS" }
                ].map((stat, i) => (
                  <FadeInUp key={i} delay={1000 + i * 150} duration={800} className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl flex flex-col justify-center transform hover:-translate-y-1 transition-all duration-300">
                    <div className="text-3xl sm:text-4xl font-serif font-bold text-white mb-2 tracking-tight">{stat.value}</div>
                    <div className="text-[10px] sm:text-xs text-amber-400 font-bold uppercase tracking-widest">{stat.label}</div>
                  </FadeInUp>
                ))}
              </div>
            </div>

            {/* Right Column: Static Image Layout over Video */}
            <div className="relative hidden lg:flex h-full w-full items-center justify-end">
              <FadeInUp delay={300} duration={1200} className="relative w-[80%] h-[500px] z-10">
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border-4 border-white/80 transform rotate-3 transition-transform hover:rotate-0 duration-500">
                  <img 
                    src="/hero.jpeg" 
                    alt="Scientist working" 
                    className="w-full h-full object-cover object-[center_10%] scale-105"
                  />
                </div>
              </FadeInUp>
            </div>

          </div>
        </div>
      </section>

      <div className="relative z-[20]" style={{ marginTop: '-2px' }}>
        <SectionDivider type="wave" topColor="#0F172A" bottomColor="#2D336B" height={80} />
      </div>

      {/* Research Gallery Section */}
      <section className="py-16 bg-[#2D336B] relative z-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <FadeInUp className="text-center mb-10 relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 uppercase tracking-[0.15em]">Gallery</h2>
            <div className="h-1 w-16 bg-white/20 mx-auto rounded-full" />
          </FadeInUp>

          {/* Perfectly aligned grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Big image — left */}
            <MaskReveal direction="left" className="h-full">
              <div className="relative overflow-hidden rounded-2xl group cursor-pointer w-full h-full min-h-[300px]">
                <img
                  src={galleryImages[0]}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  alt="Research 1"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </MaskReveal>

            {/* 2×2 grid — right */}
            <div className="grid grid-cols-2 gap-4">
              {galleryImages.slice(1, 5).map((src, i) => (
                <MaskReveal key={i} direction="up" delay={i * 100}>
                  <div className="relative overflow-hidden rounded-xl group cursor-pointer aspect-[4/3] w-full">
                    <img
                      src={src}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      alt={`Research ${i + 2}`}
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </MaskReveal>
              ))}
            </div>

          </div>
        </div>
      </section>

      <SectionDivider type="curve" topColor="#2D336B" bottomColor="#0F1A2E" height={80} />

      {/* Vision & Mission Section — Premium Editorial */}
      <section id="vision" className="relative overflow-hidden">

        {/* ── VISION BLOCK ── */}
        <div className="bg-[#0F1A2E] relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,137,123,0.15),transparent_60%)] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00897B]/30 to-transparent" />

          <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10">
            <div className="grid lg:grid-cols-[1fr_2fr] items-stretch min-h-[400px]">

              {/* Left — Label */}
              <div className="flex flex-col justify-center py-16 lg:py-24 lg:border-r lg:border-white/[0.06] lg:pr-16">
                <FadeInUp delay={200}>
                  <div className="w-10 h-[3px] bg-[#00897B] mb-6" />
                </FadeInUp>
                <div className="text-5xl md:text-6xl font-serif font-black text-white uppercase tracking-[0.08em] leading-none mb-4">
                  <TextReveal delay={300} className="inline-block">Our</TextReveal><br />
                  <span className="text-[#00897B]"><TextReveal delay={400} className="inline-block mt-2">Vision</TextReveal></span>
                </div>
                <FadeInUp delay={500}>
                  <p className="text-white/30 text-xs uppercase tracking-[0.3em] font-bold">What we aspire to be</p>
                </FadeInUp>
              </div>

              {/* Right — Statement */}
              <div className="flex items-center py-16 lg:py-24 lg:pl-16 relative">
                <span className="absolute -top-4 -left-2 lg:left-8 text-[10rem] md:text-[14rem] leading-none font-serif font-black text-white/[0.03] select-none pointer-events-none">"</span>
                <FadeInUp delay={600} duration={1200} className="text-xl md:text-2xl lg:text-[1.75rem] leading-[1.8] text-white/80 font-light max-w-3xl relative z-10">
                  To provide a platform to induct a sound culture of innovative <span className="text-[#00897B] font-medium">multi-disciplinary research</span> in the institute where the researchers get a scope to establish their immense potential and demonstrate their capability in hosting <span className="text-[#00897B] font-medium">state-of-the-art</span> high-end technical, industrial and social research.
                </FadeInUp>
              </div>

            </div>
          </div>
        </div>

        {/* ── MISSION BLOCK ── */}
        <div className="bg-gradient-to-b from-[#F8FAFC] to-[#EFF6FF] relative overflow-hidden">
          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #000 0, #000 1px, transparent 1px, transparent 80px), repeating-linear-gradient(0deg, #000 0, #000 1px, transparent 1px, transparent 80px)' }} />

          <div className="max-w-7xl mx-auto px-4 lg:px-12 py-24 lg:py-32 relative z-10">

            {/* Section header */}
            <div className="flex items-end justify-between mb-20 border-b border-slate-200 pb-8">
              <div>
                <FadeInUp delay={200}>
                  <div className="w-10 h-[3px] bg-blue-500 mb-5" />
                </FadeInUp>
                <div className="text-5xl md:text-6xl font-serif font-black text-secondary uppercase tracking-[0.08em] leading-none">
                  <TextReveal delay={300} className="inline-block mr-3">Our</TextReveal>
                  <span className="text-blue-500 italic font-medium lowercase"><TextReveal delay={400} className="inline-block">Mission</TextReveal></span>
                </div>
              </div>
              <FadeInUp delay={500}>
                <p className="hidden md:block text-slate-400 text-sm uppercase tracking-[0.2em] font-bold">06 Pillars</p>
              </FadeInUp>
            </div>

            {/* Mission items — 2-col asymmetric grid */}
            <div className="grid md:grid-cols-2 gap-x-16 lg:gap-x-24">
              {[
                { text: "Inculculate excellent research culture and provide best research infrastructure", accent: "#00897B" },
                { text: "Serve as a platform for the students and faculty members to undertake solution driven social research, strong interdisciplinary collaborations and knowledge sharing", accent: "#3B82F6" },
                { text: "Publish high quality research papers in standard research journals of international repute", accent: "#7C3AED" },
                { text: "Create quality human resources for scientific, industrial and social research", accent: "#F59E0B" },
                { text: "Promote industrial collaborations involving active and mutually beneficial R&D projects", accent: "#EC4899" },
                { text: "To establish Trident Research as a renowned institute and a trusted name in the field of high-end technical research.", accent: "#059669" }
              ].map((item, index) => (
                <FadeInUp
                  key={index}
                  delay={(index % 2) * 200 + Math.floor(index / 2) * 100 + 300}
                  className={`relative group py-10 border-b border-slate-100 ${index % 2 === 1 ? 'md:translate-y-12' : ''}`}
                >
                  {/* Oversized number watermark */}
                  <span className="absolute -top-2 -left-2 text-[5rem] md:text-[6rem] font-serif font-black leading-none select-none pointer-events-none transition-colors duration-500" style={{ color: `${item.accent}15` }}>
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className="relative z-10 pl-1">
                    {/* Accent dot + number label */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 rounded-full group-hover:scale-150 transition-transform duration-300" style={{ backgroundColor: item.accent }} />
                      <span className="text-[13px] font-black uppercase tracking-[0.3em]" style={{ color: item.accent }}>
                        0{index + 1}
                      </span>
                    </div>

                    {/* Text */}
                    <p className="text-[1.15rem] lg:text-[1.2rem] text-slate-800 leading-[1.85] font-normal group-hover:text-slate-950 transition-colors duration-300">
                      {item.text}
                    </p>
                  </div>
                </FadeInUp>
              ))}
            </div>

          </div>
        </div>

      </section>

      <div className="relative z-[20]" style={{ marginTop: '-2px' }}>
        <SectionDivider type="wave" topColor="#EFF6FF" bottomColor="#F7B538" height={80} />
      </div>

      {/* Philosophy Section - MOVED UP */}
      <section id="philosophy" className="py-40 bg-[#F7B538] relative overflow-hidden flex items-center justify-center border-t border-[#FCF8F3]/20 shadow-[0_-20px_50px_rgba(247,181,56,0.2)]">
        <div className="absolute inset-0 opacity-[0.03] mix-blend-luminosity bg-[url('/images/mba_department.jpg')] bg-cover bg-fixed bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F7B538] via-transparent to-[#F7B538]/80" />
        
        {/* Faint Trident Logo Watermark */}
        <img 
          src="/logo.png" 
          alt="" 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[150%] max-w-none opacity-[0.06] pointer-events-none mix-blend-multiply" 
        />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="text-black/5 text-9xl font-serif leading-none absolute -top-12 left-0 right-0 mx-auto select-none pointer-events-none self-center drop-shadow-sm">"</div>
          <div className="text-sm font-black text-slate-900 mb-12 uppercase tracking-[0.5em] relative z-10 flex flex-wrap justify-center gap-3">
            <TextReveal delay={200} className="inline-block">Institutional</TextReveal> <span className="text-[#006837] italic font-serif lowercase tracking-normal"><TextReveal delay={300} className="inline-block">philosophy</TextReveal></span>
          </div>
          <div className="text-4xl md:text-6xl leading-tight font-serif font-black text-[#1A1A1A] relative z-10 flex flex-wrap justify-center gap-x-3 gap-y-2">
            <TextReveal delay={400} className="inline-block">True academic excellence arises through</TextReveal>
            <span className="text-[#006837] italic font-medium"><TextReveal delay={700} className="inline-block">interdisciplinary collaboration</TextReveal></span>
            <TextReveal delay={1000} className="inline-block">and sustained intellectual rigor.</TextReveal>
          </div>
        </div>
      </section>

      <SectionDivider type="curve" topColor="#F7B538" bottomColor="#EEF2FF" height={80} />

      {/* Research Directory Section (Replaced Core Objectives) */}
      <section id="objectives" className="py-32 bg-[#f8f9fa] relative z-20 overflow-hidden">
        {/* Background Geometry */}
        <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_2px,transparent_2px)] [background-size:24px_24px] opacity-20 pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 1px, transparent 10px)' }} />
        
        {/* Geometric angled blocks */}
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[150%] bg-white border-r-[16px] border-blue-600/80 transform rotate-45 pointer-events-none shadow-2xl" />
        <div className="absolute -bottom-[40%] -right-[10%] w-[50%] h-[150%] bg-[#1e3a8a] border-l-[24px] border-slate-200 transform rotate-45 pointer-events-none shadow-2xl opacity-10" />
        
        <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10">
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-secondary/10 pb-8">
            <div>
              <div className="text-5xl md:text-6xl font-serif font-black text-secondary uppercase tracking-[0.1em] leading-tight">
                <TextReveal delay={200} className="inline-block mr-4">Research</TextReveal>
                <span className="text-emerald-600 italic font-medium lowercase"><TextReveal delay={300} className="inline-block">Directory</TextReveal></span>
              </div>
            </div>
            <FadeInUp delay={400} className="max-w-md text-slate-700 font-normal text-lg">
              Explore our core initiatives, policies, and dedicated hubs driving innovation and societal impact.
            </FadeInUp>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 border-t border-secondary/20 border-b">
            {[
              { title: "Objective", href: "/objective", desc: "Our core goals and academic mission." },
              { title: "Research Recognition", href: "/research-recognition", desc: "Awards and accolades in research." },
              { title: "Research Committee", href: "/research-committee", desc: "The team leading our initiatives." },
              { title: "Empowerment", href: "/empowerment", desc: "Fostering an innovative culture." },
              { title: "Research Linkage", href: "/research-linkage", desc: "Collaborations and partnerships." },
              { title: "Extramural Funding", href: "/extramural-funding", desc: "External grants and sponsorships." },
              { title: "Intramural Funding", href: "/intramural-funding", desc: "Internal financial support programs." },
              { title: "Domain Research Hubs", href: "/domain-research-hubs", desc: "Specialized research centers." },
              { title: "Patents", href: "/patents", desc: "Intellectual property & filings." },
              { title: "Consultancy", href: "/consultancy", desc: "Industry consulting services." },
              { title: "R&C Policy 2013", href: "/research-consultancy-policy", desc: "Foundational research framework." },
              { title: "R&D Policy 2024", href: "/rd-policy", desc: "Updated development guidelines." },
            ].map((link, idx) => (
              <FadeInUp key={idx} delay={(idx % 2) * 150 + Math.floor(idx / 2) * 50 + 200}>
                <Link 
                  to={link.href}
                  className="group flex flex-col sm:flex-row sm:items-center py-10 border-b border-secondary/10 hover:bg-white transition-colors duration-500 px-6 sm:-mx-6 lg:mx-0 text-decoration-none relative overflow-hidden rounded-xl sm:rounded-none h-full block"
                >
                  {/* Oversized Number Watermark effect on hover */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 font-serif font-black text-[140px] leading-none text-[#1B4D8E]/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0">
                    {String(idx + 1).padStart(2, '0')}
                  </div>

                  {/* Number */}
                  <div className="font-serif font-black text-3xl sm:text-4xl text-slate-400 group-hover:text-[#1B4D8E] transition-colors duration-500 w-16 shrink-0 relative z-10 mb-4 sm:mb-0">
                    {String(idx + 1).padStart(2, '0')}.
                  </div>

                  {/* Content */}
                  <div className="flex-1 pr-6 relative z-10">
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-800 group-hover:text-[#1B4D8E] transition-colors duration-300 mb-2">
                      {link.title}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-[15px] font-medium leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
                      {link.desc}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full border border-slate-200 group-hover:border-[#1B4D8E] group-hover:bg-[#1B4D8E] text-slate-400 group-hover:text-white transition-all duration-500 shrink-0 relative z-10">
                    <ArrowRight size={20} className="group-hover:-rotate-45 transition-transform duration-500" />
                  </div>
                </Link>
              </FadeInUp>
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
              <div className="text-4xl font-serif font-black text-secondary mb-6 uppercase tracking-[0.15em]">
                <TextReveal delay={200} className="inline-block">Governance</TextReveal><br/>
                <span className="italic text-emerald-600 font-medium lowercase"><TextReveal delay={300} className="inline-block mr-3">&</TextReveal></span> <TextReveal delay={400} className="inline-block">Policies</TextReveal>
              </div>
              <FadeInUp delay={500}>
                <div className="h-1 w-24 bg-emerald-600/20 rounded-full mb-8" />
              </FadeInUp>
              <FadeInUp delay={600} duration={1200} className="text-slate-700 text-[1.1rem] mb-12 leading-relaxed font-normal">
                Our established framework ensures rigorous ethical standards, active linkage with industry, and robust systems fostering research empowerment across all departments.
              </FadeInUp>
              <div className="space-y-2">
                <FadeInUp delay={700}>
                  <Link to="/research-committee" className="inline-flex items-center gap-4 text-sm font-bold tracking-widest uppercase text-secondary hover:text-emerald-600 transition-colors group">
                    Research Committee <ChevronRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                </FadeInUp>
                <br/>
                <FadeInUp delay={800}>
                  <Link to="/research-linkage" className="inline-flex items-center gap-4 text-sm font-bold tracking-widest uppercase text-secondary hover:text-blue-500 transition-colors group mt-4">
                    Research Linkage <Zap size={16} className="group-hover:text-amber-400 group-hover:translate-x-2 transition-all" />
                  </Link>
                </FadeInUp>
              </div>
            </div>

            <div className="lg:w-2/3 mt-12 lg:mt-0">
              <FadeInUp delay={300}>
                <h3 className="text-xl font-serif font-black text-slate-400 mb-8 tracking-[0.2em] uppercase border-b border-secondary/10 pb-4">
                  Core Documents
                </h3>
              </FadeInUp>
              
              <div className="flex flex-col">
                {[
                  { title: "Empowerment Guidelines", desc: "Framework for integrating research natively into academic curricula.", icon: Sparkles, href: "/empowerment" },
                  { title: "Research & Consultancy Policy", desc: "Foundational rules and metrics governing industrial consultancy.", icon: Briefcase, href: "/research-consultancy-policy" },
                  { title: "R&D Policy 2024", desc: "Updated mandates, ethical practices, and the R&D code of conduct.", icon: Mail, href: "/rd-policy" }
                ].map((policy, index) => (
                  <FadeInUp key={index} delay={400 + index * 150}>
                    <Link to={policy.href} className="flex items-center justify-between group cursor-pointer py-8 border-b border-secondary/10 hover:bg-white/40 transition-colors duration-300 px-4 -mx-4">
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
                    </Link>
                  </FadeInUp>
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
            <FadeInUp delay={200}>
              <h2 className="text-sm font-black text-slate-400 mb-4 uppercase tracking-[0.4em]">Explore Our</h2>
            </FadeInUp>
            <div className="text-5xl md:text-6xl font-serif font-black text-secondary uppercase tracking-[0.1em] drop-shadow-sm mb-6 flex flex-wrap justify-center gap-4">
              <TextReveal delay={300} className="inline-block">Research</TextReveal>
              <span className="text-blue-600 italic font-medium lowercase"><TextReveal delay={400} className="inline-block">Focus Areas</TextReveal></span>
            </div>
            <FadeInUp delay={600}>
              <div className="h-1.5 w-24 bg-blue-600/20 mx-auto rounded-full" />
            </FadeInUp>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-slate-100">
            {[
              {
                title: "Research Recognition",
                desc: "Honoring outstanding research contributions and scholarly achievements within our institution.",
                icon: Award,
                url: "/research-recognition",
                color: "text-amber-500 group-hover:bg-amber-50",
              },
              {
                title: "Extramural Funding",
                desc: "Securing external grants for impactful, solution-driven research projects and global challenges.",
                icon: Globe,
                url: "/extramural-funding",
                color: "text-blue-500 group-hover:bg-blue-50",
              },
              {
                title: "Intramural Funding",
                desc: "Internal funding schemes supporting faculty and student innovations to foster research excellence.",
                icon: Lightbulb,
                url: "/intramural-funding",
                color: "text-emerald-500 group-hover:bg-emerald-50",
              },
              {
                title: "Domain Research Hubs",
                desc: "Specialized centers fostering interdisciplinary, advanced technical and social research.",
                icon: Building2,
                url: "/domain-research-hubs",
                color: "text-indigo-500 group-hover:bg-indigo-50",
              },
              {
                title: "Patents",
                desc: "Securing intellectual property rights for groundbreaking and transformative innovations.",
                icon: Zap,
                url: "/patents",
                color: "text-rose-500 group-hover:bg-rose-50",
              },
              {
                title: "Consultancy",
                desc: "Bridging the gap between academia and industry through expert solutions and active R&D.",
                icon: Briefcase,
                url: "/consultancy",
                color: "text-cyan-500 group-hover:bg-cyan-50",
              }
            ].map((item, index) => (
              <FadeInUp key={index} delay={(index % 3) * 150 + 200}>
                <Link 
                  to={item.url}
                  className={`block bg-white p-12 border-b border-r border-slate-100 transition-colors duration-500 group ${item.color.split(' ')[1]} h-full`}
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
                </Link>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>



      
    </>
  );
};

export default HomePage;

