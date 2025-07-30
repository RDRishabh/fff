import React from "react";

const FeaturedCasesSection = () => {
  return (
    <section className="bg-white py-12 sm:py-20 px-4 sm:px-8 overflow-hidden">
      <div className="">
        <div className="mb-4 sm:mb-8">
          <span className="tracking-widest text-gray-500 font-bold text-[14px] sm:text-[18px]">FEATURED CASES</span>
        </div>
        <h2 className="font-bold text-black text-[36px] xs:text-[48px] sm:text-[70px] leading-tight" style={{ fontFamily: 'Space Grotesk, Arial, sans-serif' }}>
          Discover how we’re driving change<br className="hidden sm:block" />
          through innovative projects, strong <br className="hidden sm:block" />
          partnerships, and <span className="text-orange-500">measurable <br className="hidden sm:block" />outcomes</span>
        </h2>
      </div>
    </section>
  );
};

export default FeaturedCasesSection;
