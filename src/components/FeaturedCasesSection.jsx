import React from "react";

const FeaturedCasesSection = () => {
  return (
    <section className="bg-white py-20 px-8">
      <div className="">
        <div className="mb-8">
          <span className="tracking-widest text-gray-500 font-bold text-[18px]">FEATURED CASES</span>
        </div>
        <h2 className="font-bold text-black text-[70px] leading-tight" style={{ fontFamily: 'Space Grotesk, Arial, sans-serif' }}>
          Discover how we’re driving change<br />
          through innovative projects, strong<br />
          partnerships, and <span className="text-orange-500">measurable<br />outcomes</span>
        </h2>
      </div>
    </section>
  );
};

export default FeaturedCasesSection;
