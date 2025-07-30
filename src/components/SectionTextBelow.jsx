import React from "react";

const SectionTextBelow = () => (
  <section className="bg-black py-10 sm:py-20 overflow-hidden">
    <div className="px-4 sm:px-8 text-left">
      <h2 className="text-[13px] sm:text-[15px] font-medium text-gray-500 uppercase tracking-wider mb-4 sm:mb-8">
        PRODUCT DESIGN AND DEVELOPMENT AGENCY SERVICES
      </h2>
      <h1
        className="text-[32px] xs:text-[44px] sm:text-[60px] lg:text-[72px] font-bold leading-tight mb-4 sm:mb-8"
        style={{ color: "#fff", fontFamily: "Space Grotesk, Arial, sans-serif" }}
      >
        <span className="text-orange-500">Strategy. Development.</span>{" "}
        <span className="text-orange-500">Growth.</span>
        <br className="hidden sm:block" />
        <span style={{ color: "#fff" }}>For every stage of your product.</span>
      </h1>
      <p
        className="text-[15px] xs:text-[18px] sm:text-[21px] lg:text-[24px] text-gray-400 font-light max-w-3xl"
        style={{ fontFamily: "Space Grotesk, Arial, sans-serif" }}
      >
        From vision to launch—and beyond. We help you architect, build, and evolve products with precision across{" "}
        <span className="text-orange-500">Pre-Development</span>,{" "}
        <span className="text-orange-500">Development</span>, and{" "}
        <span className="text-orange-500">Post-Launch</span> phases.
      </p>
    </div>
  </section>
);

export default SectionTextBelow;
