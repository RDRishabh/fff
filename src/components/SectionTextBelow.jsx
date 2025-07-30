import React from "react";

const SectionTextBelow = () => (
  <section className="bg-black py-10 sm:py-20 overflow-hidden">
    <div className="px-4 sm:px-8 text-left">
      <h2 className="text-[13px] sm:text-[15px] font-semibold text-gray-400 uppercase tracking-wider mb-4 sm:mb-8">
        PRODUCT DESIGN AND DEVELOPMENT AGENCY SERVICES
      </h2>
      <h1 className="text-[32px] xs:text-[44px] sm:text-[60px] lg:text-[73px] font-bold leading-tight mb-4 sm:mb-8" style={{ color: '#fff', fontFamily: 'Space Grotesk, Arial, sans-serif' }}>
        <span className="text-orange-500">Tailored support</span> from first<br className="hidden sm:block" />
        <span style={{ color: '#fff' }}>prototype to long-term scale</span>
      </h1>
      <p className="text-[15px] xs:text-[18px] sm:text-[22px] lg:text-[25px] text-gray-300 font-light max-w-3xl" style={{ fontFamily: 'Space Grotesk, Arial, sans-serif' }}>
        Great products don’t happen by accident. As a digital product design agency, we help startups grow through smart strategy, solid UX, and scalable development from day one.
      </p>
    </div>
  </section>
);

export default SectionTextBelow;
