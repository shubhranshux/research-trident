const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '..', 'src', 'pages', 'HomePage.jsx');
const content = fs.readFileSync(targetFile, 'utf-8');

const lines = content.split('\n');
const insertIndex = lines.findIndex(line => line.includes('<section id="philosophy"'));

if (insertIndex === -1) {
  console.log('Error: Could not find philosophy section');
  process.exit(1);
}

const blockToInsert = \          </div>
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
                "To provide a platform to induct a sound culture of innovative multi-disciplinary research in the institute where the researchers get a scope to establish their immense potential and demonstrate their capability in hosting state-of-the-art high-end technical, industrial and social research."
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
                  "Inculcate excellent research culture and provide best research infrastructure",
                  "Serve as a platform for the students and faculty members to undertake solution driven social research, strong interdisciplinary collaborations and knowledge sharing",
                  "Publish high quality research papers in standard research journals of international repute",
                  "Create quality human resources for scientific, industrial and social research",
                  "Promote industrial collaborations involving active and mutually beneficial R&D projects",
                  "To establish Trident Research as a renowned institute and a trusted name in the field of high-end technical research.",
                  "Present engineering curricula prescribed by many universities including BPUT offers ample of scope to"
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
      </div>\n\n\;

lines.splice(insertIndex, 0, blockToInsert);

fs.writeFileSync(targetFile, lines.join('\n'));
console.log('Successfully repaired HomePage.jsx');
