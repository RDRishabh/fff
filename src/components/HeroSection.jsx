import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-black text-white min-h-screen pt-20">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12 md:py-16">
        {/* Header Caption */}
        <div className="mb-4 sm:mb-6 mt-8 sm:mt-12">
          <h1 className="text-[13px] sm:text-[15px] font-semibold text-gray-400 uppercase tracking-wider">
            STRATEGY, DESIGN, DEVELOPMENT & GROWTH PARTNER
          </h1>
        </div>

        {/* Main Headline */}
        <div className="mb-6 sm:mb-8">
          <h2
            className="text-[38px] xs:text-[48px] sm:text-[56px] md:text-[64px] font-bold leading-[1.1] sm:leading-[1.05] tracking-tight mb-2"
          >
            From product strategy to post-launch growth,<br className="hidden sm:block" />
            we deliver <span className="text-orange-500 font-bold">end-to-end solutions</span>
          </h2>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10 sm:mb-16">
          <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold text-[15px] transition-colors duration-300 hover:bg-white hover:text-black">
            START YOUR PROJECT
          </button>
          <button className="bg-gray-800 text-white px-8 py-4 rounded-lg font-bold text-[15px] transition-colors duration-300 flex items-center gap-2 hover:bg-white hover:text-black">
            SEE OUR WORK
            <span className="text-orange-500 group-hover:text-black transition-colors duration-300">→</span>
          </button>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Left Column - Sticky Dashboard Preview */}
          <div className="mb-10 lg:mb-0 lg:sticky lg:top-16 lg:h-fit">
            {/* Dashboard Mock-up with Gradient Border */}
            <div className="relative rounded-xl overflow-hidden">
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 p-[2px] rounded-xl">
                <div className="bg-gray-900 rounded-xl h-full w-full"></div>
              </div>
              {/* Dashboard Image */}
              <div className="relative z-10 rounded-xl overflow-hidden">
                <video 
                  src="/video/Novawatches.mp4" 
                  className="w-full h-[40vh] sm:h-[60vh] md:h-[80vh] object-cover rounded-xl border-2 border-white shadow-lg" 
                  autoPlay 
                  loop 
                  muted
                  playsInline
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8 sm:space-y-12">
            {/* Description */}
            <div>
              <h3 className="text-[20px] xs:text-[24px] sm:text-[28px] font-bold mb-12 sm:mb-48">
                We help you strategize, design, build, launch, and grow digital products for every stage of your business.
              </h3>
              <div className="mb-12 sm:mb-48">
                <p className="text-[13px] sm:text-[15px] font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  OUR EXPERTISE
                </p>
                <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-0 border-t border-gray-800">
                  <div className="flex items-center justify-center py-6 sm:py-8 border-b border-gray-800 border-r">
                    <span className="text-white font-bold text-[15px] sm:text-[16px] px-2 py-1 rounded mr-2 text-center">Strategy & Planning</span>
                  </div>
                  <div className="flex items-center justify-center py-6 sm:py-8 border-b border-gray-800 border-r-0 md:border-r">
                    <span className="text-white font-bold text-[15px] sm:text-[16px] px-2 py-1 rounded mr-2 text-center">UI/UX Design</span>
                  </div>
                  <div className="flex items-center justify-center py-6 sm:py-8 border-b border-gray-800 border-r">
                    <span className="text-white font-bold text-[15px] sm:text-[16px] px-2 py-1 rounded mr-2 text-center">Development</span>
                  </div>
                  <div className="flex items-center justify-center py-6 sm:py-8 border-b border-gray-800">
                    <span className="text-white font-bold text-[15px] sm:text-[16px] px-2 py-1 rounded mr-2 text-center">Support & Growth</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div>
              <div className="mb-4 sm:mb-6">
                <p className="text-[13px] sm:text-[15px] font-semibold text-gray-400 uppercase tracking-wider">
                  OUR IMPACT IN NUMBERS
                </p>
              </div>
              <div className="grid grid-cols-2 gap-0 border-t border-gray-800">
                <div className="flex flex-col items-center justify-center py-8 sm:py-10 border-b border-gray-800 border-r">
                  <div className="text-[38px] xs:text-[44px] sm:text-[51px] font-light text-white mb-2">98%</div>
                  <div className="text-[15px] xs:text-[16px] sm:text-[17px] text-gray-400 text-center">Client satisfaction rate</div>
                </div>
                <div className="flex flex-col items-center justify-center py-8 sm:py-10 border-b border-gray-800">
                  <div className="text-[38px] xs:text-[44px] sm:text-[51px] font-light text-white mb-2">35%+</div>
                  <div className="text-[15px] xs:text-[16px] sm:text-[17px] text-gray-400 text-center">Average conversion boost after redesign</div>
                </div>
                <div className="flex flex-col items-center justify-center py-8 sm:py-10 border-r border-gray-800">
                  <div className="text-[38px] xs:text-[44px] sm:text-[51px] font-light text-white mb-2">20+</div>
                  <div className="text-[15px] xs:text-[16px] sm:text-[17px] text-gray-400 text-center">Expert designers & developers</div>
                </div>
                <div className="flex flex-col items-center justify-center py-8 sm:py-10">
                  <div className="text-[38px] xs:text-[44px] sm:text-[51px] font-light text-white mb-2">50+</div>
                  <div className="text-[15px] xs:text-[16px] sm:text-[17px] text-gray-400 text-center">Successful client launches</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </section>
  );
};

export default HeroSection;