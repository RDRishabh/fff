import React, { useState } from "react";

const cards = [
  {
    title: "Aucto",
    description: "A gamified auction platform designed for IPL enthusiasts to strategize, bid, and compete with friends.",
    tags: ["Gaming", "India"],
    logo: "",
  },
  {
    title: "Blue Bagels",
    description: "A performance-driven marketing agency that scales revenue 3x through full-funnel optimization—without tripling costs.",
    tags: ["Marketing Tech", "EU"],
    logo: "",
  },
  {
    title: "Curtains And More",
    description: "A premium home decor brand offering customized curtains and furnishings to elevate modern living spaces.",
    tags: ["eCommerce", "UK"],
    logo: "",
  },
  {
    title: "GreenBridge",
    description: "An AI-powered analytics platform helping wind, solar, and BESS operators turn complex energy data into actionable insights.",
    tags: ["CleanTech", "EU"],
    logo: "",
  },
  {
    title: "BYOC",
    description: "A decentralized investment ecosystem where users earn and spend ecosystem tokens across their favorite brands.",
    tags: ["Web3", "USA"],
    logo: "",
  },
  {
    title: "Nova Watches",
    description: "A curated collection of luxury and smartwatches known for standout design, quality, and customer trust.",
    tags: ["D2C", "India"],
    logo: "",
  },
  {
    title: "ICS",
    description: "A trusted supplier of top-tier electrical substation equipment from brands like ABB, Schneider, and Kirloskar.",
    tags: ["Industrial", "India"],
    logo: "",
  },
  {
    title: "And More",
    description: "Trusted by dozens of forward-thinking startups, enterprises, and global innovators.",
    tags: ["Global Clients", "Worldwide"],
    logo: "",
  },
];


const FeaturedClients = () => {
  const [activeIdx, setActiveIdx] = useState(null);

  // Detect mobile device (simple check)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  // Close details when clicking outside (mobile only)
  React.useEffect(() => {
    if (!isMobile) return;
    const handleClick = (e) => {
      if (!e.target.closest('.client-card')) {
        setActiveIdx(null);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [isMobile]);

  return (
    <section className="bg-white py-10 sm:py-20 overflow-hidden">
      <div className="">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-[13px] sm:text-[15px] font-semibold text-gray-400 uppercase tracking-wider mb-2 sm:mb-4 px-4 sm:px-16">
            PRODUCT DESIGN AND DEVELOPMENT AGENCY
          </h2>
          <h3 className="text-[32px] xs:text-[44px] sm:text-[64px] font-bold text-black mb-6 sm:mb-8 px-4 sm:px-16">
            Our <span className="text-orange-500 font-bold">featured</span> client wins
          </h3>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4">
          {cards.map((card, idx) => {
            const showDetails = isMobile ? activeIdx === idx : false;
            return (
              <div
                key={idx}
                className={`client-card group bg-white border border-gray-200 flex items-center justify-center min-h-[160px] xs:min-h-[180px] sm:min-h-[220px] h-[160px] xs:h-[180px] sm:h-[220px] cursor-pointer relative overflow-hidden transition-all duration-300 ease-out hover:shadow-xl`}
                style={{ boxShadow: "0 2px 16px 0 rgba(0,0,0,0.04)" }}
                onClick={() => isMobile ? setActiveIdx(activeIdx === idx ? null : idx) : undefined}
              >
                {/* Default: Centered logo (and icon for SHAGA) */}
                <div className={`absolute inset-0 flex items-center justify-center w-full h-full p-2 transition-all duration-300 ease-out ${isMobile ? (showDetails ? 'opacity-0 scale-110' : 'opacity-100 scale-100') : 'group-hover:opacity-0 group-hover:scale-110'}`}>
                  {card.title === "SHAGA" ? (
                    <div className={`flex flex-col items-center transition-transform duration-300 ease-out ${isMobile ? (showDetails ? 'scale-110' : 'scale-100') : 'group-hover:scale-110'}`}>
                      <span className={`mb-2 transition-transform duration-300 ease-out ${isMobile ? (showDetails ? 'rotate-6' : '') : 'group-hover:rotate-6'}`}>
                        {/* Example SHAGA icon, replace with SVG if needed */}
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="20" cy="20" r="20" fill="#111" />
                          <text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="12" fontFamily="Arial" dy=".3em">S</text>
                        </svg>
                      </span>
                      <span className="text-black font-bold text-xl tracking-wide">SHAGA</span>
                    </div>
                  ) : (
                    <span className={`flex items-center gap-2 text-black font-bold text-[16px] xs:text-xl tracking-wide transition-transform duration-300 ease-out ${isMobile ? (showDetails ? 'scale-110' : 'scale-100') : 'group-hover:scale-110'}`}>
                      {card.logo && <span className="text-2xl">{card.logo}</span>}
                      {card.title}
                    </span>
                  )}
                </div>

                {/* On hover/tap: show details in inner black div */}
                <div className={`absolute inset-0 flex items-center justify-center w-full h-full p-2 ${isMobile ? (showDetails ? 'opacity-100' : 'opacity-0 pointer-events-none') : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-300 ease-out`}>
                  <div className={`bg-black rounded-2xl w-full h-full flex flex-col justify-center items-center px-4 xs:px-6 sm:px-8 py-4 xs:py-6 sm:py-8 transition-all duration-500 ease-out transform scale-90 ${isMobile ? (showDetails ? 'scale-100' : 'scale-90') : 'group-hover:scale-100'} shadow-2xl`}>
                    <div className="flex flex-col justify-center items-center w-full h-full">
                      <span className={`text-white font-bold text-[15px] xs:text-xl mb-2 text-center transform translate-y-4 ${isMobile ? (showDetails ? 'translate-y-0' : '') : 'group-hover:translate-y-0'} transition-transform duration-300 ease-out delay-100`}>{card.title}</span>
                      <span className={`text-gray-300 text-[13px] xs:text-[15px] mb-4 text-center transform translate-y-4 ${isMobile ? (showDetails ? 'translate-y-0' : '') : 'group-hover:translate-y-0'} transition-transform duration-300 ease-out delay-150`}>{card.description}</span>
                      <div className={`flex gap-1 xs:gap-2 mt-2 transform translate-y-4 ${isMobile ? (showDetails ? 'translate-y-0' : '') : 'group-hover:translate-y-0'} transition-transform duration-300 ease-out delay-200`}>
                        {card.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="bg-gray-800 text-white text-[11px] xs:text-xs font-semibold px-2 xs:px-3 py-1 rounded transition-all duration-200 ease-out hover:bg-orange-500 transform hover:scale-105"
                            style={{
                              transitionDelay: `${200 + i * 50}ms`
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedClients;