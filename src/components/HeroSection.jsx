import React from 'react';

// Focused hero only (content preserved but reorganised). Remaining descriptive
// content, expertise grid & stats moved to AboutSection.
const HeroSection = () => {
  return (
    <section className="relative bg-black text-white min-h-[92vh] flex items-center overflow-hidden pt-32 pb-32 sm:pt-40 sm:pb-44">
      {/* Soft ambient gradient (more subtle & off‑center for less distraction) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,140,0,0.18),transparent_70%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-black" />
      </div>

      <div className="relative z-10 max-w-8xl mx-auto px-5 sm:px-10 text-center">
        <p className="text-[11px] sm:text-[13px] tracking-[0.35em] text-gray-400/80 uppercase mb-10 font-semibold">
          STRATEGY  •  DESIGN  •  DEVELOPMENT  •  GROWTH
        </p>
        <h1 className="font-bold tracking-tight leading-[1.05] mx-auto max-w-6xl text-5xl sm:text-6xl md:text-7xl text-center">
  From product strategy  
  to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">post-launch growth</span>,  
  we deliver <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500">end-to-end solutions</span>
</h1>

        <p className="max-w-2xl mx-auto mt-8 text-[15px] sm:text-[18px] leading-relaxed text-gray-300">
          We help you strategize, design, build, launch & scale digital products at every stage of your business lifecycle.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group inline-flex items-center justify-center px-10 py-3 rounded-full text-[15px] font-semibold bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-[0_8px_24px_-8px_rgba(255,115,0,0.55)] hover:shadow-[0_12px_32px_-8px_rgba(255,115,0,0.65)] transition-all">
            <svg className="w-4 h-4 mr-2 -ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg>
            Start Your Project
          </button>
          <button className="group inline-flex items-center justify-center px-10 py-3 rounded-full text-[15px] font-semibold bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black transition-colors">
            See Our Work
            <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;