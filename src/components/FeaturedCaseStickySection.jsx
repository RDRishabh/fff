import React, { useRef } from "react";

const cases = [
  {
    image: "/public/featured/shaga.png", // Replace with your actual image path
    tags: ["#WEBSITE DESIGN", "#WEBSITE DEVELOPMENT"],
    title: "Shaga Odyssey – an award-winning web3 gamepad platform",
    buttons: ["SHAGA.XYZ", "USA"],
    tech: "Webflow",
    timeline: "5 months",
    results: ["+40% increase in user engagement", "3x faster platform navigation"],
  },
  {
    image: "/public/featured/klickex.png",
    tags: ["#UX AUDIT", "#PRODUCT REDESIGN", "#WEB DEVELOPMENT"],
    title: "KlickEx – frictionless cross-border payments for the Pacific Island communities",
    buttons: ["NOMUPAY", "NEW ZEALAND"],
    tech: "Next.js, TypeScript, React Redux",
    timeline: "6 months",
    results: ["+35% 'Add Money' conversion rate", "+30% 'Money Transfer' completion rate"],
  },
  {
    image: "/public/featured/isora.png",
    tags: ["#UX AUDIT", "#PRODUCT REDESIGN", "#WEB DEVELOPMENT", "#TEAM EXTENTION"],
    title: "Isora – optimizing governance, risk & compliance for top institutions",
    buttons: ["SALTYCLOUD", "TEXAS, USA"],
    tech: "React, Python, AWS",
    timeline: "12 months, ongoing",
    results: ["2x faster user workflows", "50% shorter time-to-market", "Nominated for UX Design Award 2024"],
  },
];

const FeaturedCaseStickySection = () => {
  // For advanced sticky logic, you can use refs and IntersectionObserver if needed
  return (
    <section className="bg-white py-10 sm:py-20">
      <div className="relative">
        {cases.map((c, idx) => (
          <div
            key={idx}
            className={`bg-white top-2 xs:top-4 sm:top-8 md:top-12 lg:top-16 xl:top-24 px-4 xs:px-6 sm:px-12 py-8 xs:py-10 sm:py-12 flex flex-col lg:flex-row gap-8 xs:gap-12 mb-16 sm:mb-24 border-t border-gray-200 transition-all duration-300 ${idx !== 0 ? "mt-24 sm:mt-48 z-20" : "z-10"}`}
            style={{ minHeight: "400px", position: "sticky" }}
          >
            {/* Left image sticky */}
            <div
              className="w-full lg:w-1/2 sticky top-8 xs:top-12 sm:top-16 h-[40vh] xs:h-[60vh] sm:h-[80vh] flex items-center justify-center mb-8 lg:mb-0"
              style={{ zIndex: 10 }}
            >
              <img
                src={c.image}
                alt={c.title}
                className="rounded-2xl object-cover w-full h-full shadow-xl"
                style={{ maxHeight: "500px", background: "#000" }}
              />
            </div>
            {/* Right details scrollable */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <div className="mb-4">
                {c.tags.map((tag, i) => (
                  <span key={i} className="uppercase text-gray-500 tracking-widest mr-2 xs:mr-4 text-[13px] xs:text-[15px] font-bold">{tag}</span>
                ))}
              </div>
              <h3 className="font-bold text-black text-[24px] xs:text-[32px] sm:text-[42px] leading-tight mb-4 xs:mb-6" style={{ fontFamily: 'Space Grotesk, Arial, sans-serif' }}>
                {c.title}
              </h3>
              <div className="flex flex-wrap gap-2 xs:gap-4 mb-6 xs:mb-8">
                {c.buttons.map((btn, i) => (
                  <span key={i} className="bg-black text-white px-4 xs:px-6 py-2 rounded-lg font-bold text-[14px] xs:text-[16px] flex items-center gap-2">{btn}</span>
                ))}
              </div>
              <div className="grid grid-cols-1 xs:grid-cols-2 border-t border-gray-300 py-4 xs:py-6 mb-4 xs:mb-6">
                <div>
                  <div className="uppercase text-gray-500 text-[13px] xs:text-[15px] mb-2 tracking-widest">Tech Stack</div>
                  <div className="text-black text-[16px] xs:text-[20px] font-normal">{c.tech}</div>
                </div>
                <div>
                  <div className="uppercase text-gray-500 text-[13px] xs:text-[15px] mb-2 tracking-widest">Timeline</div>
                  <div className="text-black text-[16px] xs:text-[20px] font-normal">{c.timeline}</div>
                </div>
              </div>
              <div className="border-t border-gray-300 pt-4 xs:pt-6">
                <div className="uppercase text-gray-500 text-[13px] xs:text-[15px] mb-2 tracking-widest">Results</div>
                <ul className="text-black text-[16px] xs:text-[20px] font-normal list-disc pl-4 xs:pl-6">
                  {c.results.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
              <div>
                <button className="inline-block mt-6 xs:mt-8 bg-orange-500 hover:bg-orange-600 text-white px-6 xs:px-8 py-4 rounded-lg font-bold text-[14px] xs:text-[15px] transition-colors duration-300 gap-2">
                    EXPLORE ALL <span className="ml-2">→</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCaseStickySection;
