import React, { useState } from "react";

const stages = [
  {
    label: "Pre-seed",
    active: true,
    boxes: [
      {
        title: "Design prototype",
        description: "Test product ideas fast with clickable user journeys and visual flows.",
      },
      {
        title: "Product discovery",
        description: "Map out key features, user flows, and architecture to align your team and reduce risks.",
      },
      {
        title: "Website development",
        description: "Launch a fast, scalable site that converts and supports product growth.",
      },
    ],
    heading: "Validate your idea & attract early investors",
  },
  {
    label: "Seed",
    active: false,
    boxes: [
      {
        title: "Branding",
        description: "Develop a brand that resonates — visually, emotionally, and strategically.",
      },
      {
        title: "Technical workshop",
        description: "Validate your tech stack, architecture, and scalability path.",
      },
      {
        title: "Custom mvp development",
        description: "Expand your prototype into a fully functional, production-ready product.",
      },
      {
        title: "Rapid mvp development",
        description: "Get your MVP 50% faster with lean sprints and pre-built frameworks.",
      },
      {
        title: "Dedicated team",
        description: "Access a team of experts to fuel your product’s growth.",
      },
    ],
    heading: "Build your product & gain market traction",
  },
  {
    label: "Series A & beyond",
    active: false,
    boxes: [
      {
        title: "Ux audit",
        description: "Identify usability bottlenecks, improve engagement, and optimize for conversions.",
      },
      {
        title: "Product redesign",
        description: "Upgrade legacy interfaces with scalable, business-driven UX and UI.",
      },
      {
        title: "Team extension",
        description: "Instantly scale with dedicated designers and developers ready to start.",
      },
      {
        title: "Website redesign",
        description: "Modernize your web presence with a digital product design agency that drives engagement and brand authority.",
      },
    ],
    heading: "Scale, optimize & reach more users",
  },
];


const StickySplitSection = () => {
  const [activeStage, setActiveStage] = useState(0);
  const sectionRefs = React.useRef(stages.map(() => React.createRef()));

  // Intersection Observer to update activeStage on scroll
  React.useEffect(() => {
    const handleObserve = (entries) => {
      const visible = entries.filter(e => e.isIntersecting);
      if (visible.length > 0) {
        // Pick the first visible section (or the one closest to top)
        const idx = entries.findIndex(e => e.isIntersecting);
        if (idx !== -1) setActiveStage(idx);
      }
    };
    const observer = new window.IntersectionObserver(handleObserve, {
      root: null,
      rootMargin: "-100px 0px -60% 0px",
      threshold: 0.3,
    });
    sectionRefs.current.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });
    return () => observer.disconnect();
  }, []);

  // Scroll to section on label click
  const handleNavClick = (idx) => {
    const ref = sectionRefs.current[idx];
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="bg-black pt-20">
      <div className="flex flex-row gap-0 px-8">
        {/* Left sticky nav */}
        <div className="w-1/4 pr-8 flex flex-col items-start sticky top-12 h-screen min-h-screen">
          <div className="mb-12 mt-2">
            {stages.map((stage, idx) => (
              <div
                key={stage.label}
                className={`text-[25px] font-bold mb-2 cursor-pointer transition-colors duration-200 ${activeStage === idx ? "text-white" : "text-gray-400"}`}
                onClick={() => handleNavClick(idx)}
              >
                {stage.label}
              </div>
            ))}
          </div>
          <button className=" bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-[15px] transition-colors duration-300 flex items-center gap-2">
            EXPLORE ALL <span className="ml-2">→</span>
          </button>
        </div>
        {/* Right content: all stages rendered, no custom scrollbar */}
        <div className="w-3/4">
          {stages.map((stage, idx) => (
            <section
              key={stage.label}
              ref={sectionRefs.current[idx]}
              className="mb-24"
              style={{ scrollMarginTop: '120px' }}
            >
              <h2 className="text-[51px] font-bold text-white mb-12 leading-tight" style={{ fontFamily: 'Space Grotesk, Arial, sans-serif' }}>
                {stage.heading}
              </h2>
              <div className={`grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-gray-800`}>
                {stage.boxes.map((box, bidx) => (
                  <div
                    key={bidx}
                    className={`border-b border-r border-gray-800 px-8 py-10 min-h-[180px] flex flex-col justify-between${bidx % 3 === 0 ? ' border-l border-gray-800' : ''}`}
                  >
                    <div>
                      <h3 className="text-[26px] font-bold text-white mb-4" style={{ fontFamily: 'Space Grotesk, Arial, sans-serif' }}>{box.title}</h3>
                      <p className="text-[17px] text-gray-400 mb-8" style={{ fontFamily: 'Space Grotesk, Arial, sans-serif' }}>{box.description}</p>
                    </div>
                    <button className="text-[15px] font-bold text-white underline underline-offset-4 flex items-center gap-2 hover:text-orange-500 transition-colors duration-200">
                      EXPLORE <span>→</span>
                    </button>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StickySplitSection;
