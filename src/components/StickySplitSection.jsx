import React, { useState } from "react";

const stages = [
  {
    label: "Pre-Development",
    heading: "Strategy, Architecture & Design",
    boxes: [
      {
        title: "Product Strategy",
        description: "Validate your idea, analyze the market, and define goals and user needs.",
      },
      {
        title: "Solution Planning",
        description: "Select the right tech stack, design scalable architecture, and define key features.",
      },
      {
        title: "UI/UX Design",
        description: "Conduct user research, build wireframes, and create high-converting interfaces.",
      },
    ],
  },
  {
    label: "Development",
    heading: "Custom Engineering for Diverse Solutions",
    boxes: [
      {
        title: "Websites & Web Apps",
        description: "Build responsive marketing websites, corporate sites, and web applications.",
      },
      {
        title: "SaaS Platforms",
        description: "Develop scalable multi-tenant SaaS products with secure subscription management.",
      },
      {
        title: "CRM & ERP Systems",
        description: "Create customized business tools for sales, operations, HR, and finance automation.",
      },
      {
        title: "Full-stack Engineering",
        description: "Robust frontend, backend, API development with cloud infrastructure and DevOps setup.",
      },
      {
        title: "Testing & Deployment",
        description: "Automated testing, performance audits, security checks, and smooth production launches.",
      },
    ],
  },
  {
    label: "Post-Launch",
    heading: "Maintenance, Support & Growth",
    boxes: [
      {
        title: "Ongoing Support",
        description: "Monitor health, resolve issues, and keep the system running smoothly.",
      },
      {
        title: "Feature Enhancements",
        description: "Iterate based on feedback, improve UX, and roll out new capabilities.",
      },
      {
        title: "Scaling & Revamp",
        description: "Replatform, optimize performance, and modernize UI to meet growing business needs.",
      },
    ],
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
    setActiveStage(idx);
    const ref = sectionRefs.current[idx];
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="bg-black pt-10 sm:pt-20">
      <div className="flex flex-col lg:flex-row gap-0 px-4 sm:px-8">
        {/* Left sticky nav */}
        <div className="w-full lg:w-1/4 pr-0 sm:pr-8 flex flex-row lg:flex-col items-start sticky top-8 sm:top-12 h-fit lg:h-screen min-h-[120px] lg:min-h-screen mb-8 lg:mb-0">
          <div className="mb-6 sm:mb-12 mt-2 w-full flex flex-row lg:flex-col gap-2 lg:gap-0">
            {stages.map((stage, idx) => (
              <button
                key={stage.label}
                className={`text-[16px] xs:text-[20px] sm:text-[25px] font-bold mb-0 lg:mb-2 cursor-pointer transition-colors duration-200 px-2 py-2 lg:px-0 lg:py-0 rounded-lg border-2 border-transparent ${activeStage === idx ? " text-white " : "bg-transparent text-gray-400 hover:bg-gray-800 hover:text-white"}`}
                onClick={() => handleNavClick(idx)}
                type="button"
              >
                {stage.label}
              </button>
            ))}
          </div>
        </div>
        {/* Right content sections */}
        <div className="w-full lg:w-3/4">
          {stages.map((stage, idx) => (
            <section
              key={stage.label}
              ref={sectionRefs.current[idx]}
              className="mb-12"
            >
              <h2 className="text-[22px] xs:text-[28px] sm:text-[36px] font-bold text-white mb-6" style={{ fontFamily: 'Space Grotesk, Arial, sans-serif' }}>{stage.heading}</h2>
              <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-gray-800">
                {stage.boxes.map((box, bidx) => (
                  <div
                    key={box.title}
                    className={`border-b border-r border-gray-800 px-4 xs:px-6 sm:px-8 py-6 xs:py-8 sm:py-10 min-h-[120px] xs:min-h-[150px] sm:min-h-[180px] flex flex-col justify-between${bidx % 3 === 0 ? ' border-l border-gray-800' : ''}`}
                  >
                    <div>
                      <h3 className="text-[16px] xs:text-[20px] sm:text-[26px] font-bold text-white mb-2 sm:mb-4" style={{ fontFamily: 'Space Grotesk, Arial, sans-serif' }}>{box.title}</h3>
                      <p className="text-[13px] xs:text-[15px] sm:text-[17px] text-gray-400 mb-4 sm:mb-8" style={{ fontFamily: 'Space Grotesk, Arial, sans-serif' }}>{box.description}</p>
                    </div>
                    <button className="text-[13px] xs:text-[15px] font-bold text-white underline underline-offset-4 flex items-center gap-2 hover:text-gray-300 transition-colors duration-200">
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

}
export default StickySplitSection;
