import React from 'react';

// About section holding the descriptive copy, expertise grid and stats (moved from original hero)
const AboutSection = () => {
  return (
  <section className="bg-black text-white py-28 sm:py-40 relative">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(255,115,0,0.08),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-start">
          {/* Left: Sticky media (sticks while right panels scroll) */}
          <div className="hidden lg:block h-full">
            <div className="sticky top-32">{/* top offset controls starting position */}
              <div className="relative rounded-2xl group">
                <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 opacity-70 group-hover:opacity-90 transition-opacity" />
                <div className="relative rounded-2xl bg-gray-900 p-2">
                  <video
                    src="/video/Novawatches.mp4"
                    className="w-full h-[78vh] object-cover rounded-xl border border-white/10 shadow-2xl will-change-transform"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Scroll panels */}
          <div className="flex flex-col lg:space-y-0">
            {/* Panel 1 */}
            <div className="lg:min-h-screen flex flex-col justify-center py-16 lg:py-32 border-b border-gray-900/60">
              <h2 className="text-[30px] xs:text-[36px] sm:text-[44px] font-bold leading-tight mb-10 max-w-xl">
                We help you strategize, design, build, launch & grow digital products for every stage of your business.
              </h2>
              <p className="text-gray-300 text-[15px] sm:text-[18px] max-w-xl leading-relaxed mb-12">
                From idea validation to scalable architecture and post‑launch optimization—we integrate seamlessly with founders & internal teams to deliver measurable outcomes. Our collaborative model focuses on velocity, quality & long‑term sustainability.
              </p>
              <div>
                <p className="text-[13px] sm:text-[15px] font-semibold text-gray-400 uppercase tracking-wider mb-5">
                  Our Expertise
                </p>
                <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-0 border-t border-gray-800">
                  {["Strategy & Planning","UI/UX Design","Development","Support & Growth"].map((item, idx) => (
                    <div key={idx} className={`flex items-center justify-center py-7 sm:py-9 border-b border-gray-800 ${idx !== 3 ? 'border-r' : ''} ${(idx===1)?'border-r-0 md:border-r':''}`}>
                      <span className="text-white font-bold text-[14px] sm:text-[15px] text-center px-2">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Panel 2 */}
            <div className="lg:min-h-screen flex flex-col justify-center py-20 lg:py-40 border-b border-gray-900/60">
              <p className="text-[13px] sm:text-[15px] font-semibold text-gray-400 uppercase tracking-wider mb-10">
                Our Impact In Numbers
              </p>
              <div className="grid grid-cols-2 gap-0 border-t border-gray-800">
                {[
                  { value: '98%', label: 'Client satisfaction rate' },
                  { value: '35%+', label: 'Avg. conversion boost after redesign' },
                  { value: '20+', label: 'Expert designers & developers' },
                  { value: '50+', label: 'Successful client launches' }
                ].map((stat, i) => (
                  <div key={i} className={`flex flex-col items-center justify-center py-12 border-gray-800 ${i < 2 ? 'border-b' : ''} ${(i % 2 === 0) ? 'border-r' : ''}`}>
                    <div className="text-[42px] xs:text-[48px] sm:text-[56px] font-light mb-3">{stat.value}</div>
                    <div className="text-[13px] xs:text-[15px] sm:text-[16px] text-gray-400 text-center max-w-[180px] leading-snug">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Panel 3 */}
            <div className="lg:min-h-screen flex flex-col justify-center py-24 lg:py-44">
              <p className="text-[13px] sm:text-[15px] font-semibold text-gray-400 uppercase tracking-wider mb-8">
                Trusted For
              </p>
              <div className="flex flex-wrap gap-5 items-center text-gray-300 text-[13px] sm:text-[14px] max-w-xl">
                {['MVP Launches','Scale Refactors','AI Integrations','Growth Experiments','Design Systems','Performance Revamps'].map((tag,i)=>(
                  <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-orange-500/40 hover:text-white transition-colors">{tag}</span>
                ))}
              </div>
              <p className="mt-12 text-gray-400 max-w-xl text-[14px] sm:text-[16px] leading-relaxed">
                Whether you are validating a concept or modernizing a mature platform, we plug in as an autonomous product pod—accelerating delivery while building internal capability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
