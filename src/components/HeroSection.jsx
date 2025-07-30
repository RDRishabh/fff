import React from 'react';

const HeroSection = () => {
  return (
    
    <section className="bg-black text-white min-h-screen pt-20">
      <div className="w-full px-16 py-16">
        {/* Header Caption */}
        <div className="mb-6 mt-12">
          <h1 className="text-[15px] font-semibold text-gray-400 uppercase tracking-wider">
            PRODUCT DESIGN AND DEVELOPMENT AGENCY
          </h1>
        </div>

        {/* Main Headline */}
        <div className="mb-8">
          <h2
            className="text-[73px] font-bold leading-[1.05] tracking-tight mb-2"
            
          >
            Empowering startups to launch,<br />
            scale, and <span className="text-orange-500 font-bold">succeed faster</span>
          </h2>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold text-[15px] transition-colors duration-300 hover:bg-white hover:text-black">
            LET’S TALK
          </button>
          <button className="bg-gray-800 text-white px-8 py-4 rounded-lg font-bold text-[15px] transition-colors duration-300 flex items-center gap-2 hover:bg-white hover:text-black">
            VIEW OUR CASES
            <span className="text-orange-500 group-hover:text-black transition-colors duration-300">→</span>
          </button>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Sticky Dashboard Preview */}
          <div className="lg:sticky lg:top-16 lg:h-fit">
            {/* Dashboard Mock-up with Gradient Border */}
            <div className="relative rounded-xl overflow-hidden">
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 p-[2px] rounded-xl">
                <div className="bg-gray-900 rounded-xl h-full w-full"></div>
              </div>
              {/* Dashboard Image */}
              <div className="relative z-10 rounded-xl overflow-hidden">
                <video 
                  src="/video/digital-product-design-agency.mp4" 
                  className=" w-full h-[80vh] object-cover rounded-xl" 
                  autoPlay 
                  loop 
                  muted
                  playsInline
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Description */}
            <div>
              <h3 className="text-[28px] font-bold mb-48">
                From MVP to market domination – your reliable partner in UI/UX design and development
              </h3>
              <div className="mb-48">
                <p className="text-[15px] font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  DESIGNING PRODUCTS FOR STARTUPS BACKED BY
                </p>
                <div className="grid grid-cols-4 gap-0 border-t border-gray-800">
                  {/* techstars */}
                  <div className="flex items-center justify-center py-8 border-b border-gray-800 border-r">
                    <span className="text-white font-bold text-[16px]">techstars</span>
                  </div>
                  {/* Y Combinator */}
                  <div className="flex items-center justify-center py-8 border-b border-gray-800 border-r">
                    <span className="bg-white text-black font-bold text-[16px] px-2 py-1 rounded mr-2">Y</span>
                    <span className="text-white text-[16px]">Combinator</span>
                  </div>
                  {/* andreessen horowitz */}
                  <div className="flex items-center justify-center py-8 border-b border-gray-800 border-r">
                    <span className="text-white text-[16px] text-center">andreessen<br/>horowitz</span>
                  </div>
                  {/* and more */}
                  <div className="flex items-center justify-center py-8 border-b border-gray-800">
                    <span className="text-white text-[16px] font-semibold uppercase">AND MORE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div>
              <div className="mb-6">
                <p className="text-[15px] font-semibold text-gray-400 uppercase tracking-wider">
                  PHENOMENON STUDIO IN NUMBERS
                </p>
              </div>
              <div className="grid grid-cols-2 gap-0 border-t border-gray-800">
                {/* 98% */}
                <div className="flex flex-col items-center justify-center py-10 border-b border-gray-800 border-r">
                  <div className="text-[51px] font-light text-white mb-2">98%</div>
                  <div className="text-[17px] text-gray-400 text-center">customer satisfaction rate</div>
                </div>
                {/* 35%+ */}
                <div className="flex flex-col items-center justify-center py-10 border-b border-gray-800">
                  <div className="text-[51px] font-light text-white mb-2">35%+</div>
                  <div className="text-[17px] text-gray-400 text-center">boost in conversions after redesign</div>
                </div>
                {/* 50+ */}
                <div className="flex flex-col items-center justify-center py-10 border-r">
                  <div className="text-[51px] font-light text-white mb-2">50+</div>
                  <div className="text-[17px] text-gray-400 text-center">top-tier designers and developers on board</div>
                </div>
                {/* 500M+ */}
                <div className="flex flex-col items-center justify-center py-10">
                  <div className="text-[51px] font-light text-white mb-2">500M+</div>
                  <div className="text-[17px] text-gray-400 text-center">investments raised by our clients</div>
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