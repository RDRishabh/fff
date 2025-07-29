import React from "react";

const cards = [
  {
    title: "Airportr",
    description: "Airport luggage delivery service for travelers.",
    tags: ["TRAVEL", "UK"],
    logo: "",
  },
  {
    title: "Nomupay",
    description: "Global payments platform for businesses.",
    tags: ["FINTECH", "GLOBAL"],
    logo: "",
  },
  {
    title: "One Text",
    description: "Y Combinator–backed SaaS startup enabling frictionless payments via SMS.",
    tags: ["SAAS", "USA"],
    logo: "",
  },
  {
    title: "SHAGA",
    description: "Innovative solutions for digital transformation.",
    tags: ["TECH", "EU"],
    logo: "",
  },
  {
    title: "Techstars",
    description: "Accelerator for high-growth startups.",
    tags: ["ACCELERATOR", "GLOBAL"],
    logo: "",
  },
  {
    title: "Y Combinator",
    description: "Leading startup incubator and investor.",
    tags: ["INCUBATOR", "USA"],
    logo: "",
  },
  {
    title: "Andreessen Horowitz",
    description: "Venture capital firm backing top tech companies.",
    tags: ["VC", "USA"],
    logo: "",
  },
  {
    title: "And More",
    description: "Many more successful clients worldwide.",
    tags: ["CLIENTS", "WORLD"],
    logo: "",
  },
];

const FeaturedClients = () => (
  <section className="bg-white py-20">
    <div className="">
      <div className="mb-12">
        <h2 className="text-[15px] font-semibold text-gray-400 uppercase tracking-wider mb-4 px-16">
          PRODUCT DESIGN AND DEVELOPMENT AGENCY
        </h2>
        <h3 className="text-[64px] font-bold text-black mb-8 px-16">
          Our <span className="text-orange-500 font-bold">featured</span> client wins
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="group bg-white border border-gray-200 flex items-center justify-center min-h-[220px] h-[220px] cursor-pointer relative overflow-hidden transition-all duration-300 ease-out hover:shadow-xl "
            style={{ boxShadow: "0 2px 16px 0 rgba(0,0,0,0.04)" }}
          >
            {/* Default: Centered logo (and icon for SHAGA) */}
            <div className="absolute inset-0 flex items-center justify-center w-full h-full p-2 transition-all duration-300 ease-out group-hover:opacity-0 group-hover:scale-110">
              {card.title === "SHAGA" ? (
                <div className="flex flex-col items-center transition-transform duration-300 ease-out group-hover:scale-110">
                  <span className="mb-2 transition-transform duration-300 ease-out group-hover:rotate-6">
                    {/* Example SHAGA icon, replace with SVG if needed */}
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="20" cy="20" r="20" fill="#111" />
                      <text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="12" fontFamily="Arial" dy=".3em">S</text>
                    </svg>
                  </span>
                  <span className="text-black font-bold text-xl tracking-wide">SHAGA</span>
                </div>
              ) : (
                <span className="flex items-center gap-2 text-black font-bold text-xl tracking-wide transition-transform duration-300 ease-out group-hover:scale-110">
                  {card.logo && <span className="text-2xl">{card.logo}</span>}
                  {card.title}
                </span>
              )}
            </div>
            
            {/* On hover: show details in inner black div */}
            <div className="absolute inset-0 flex items-center justify-center w-full h-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
              <div className="bg-black rounded-2xl w-full h-full flex flex-col px-8 py-8 justify-center items-center transition-all duration-500 ease-out transform scale-90 group-hover:scale-100 shadow-2xl">
                <span className="text-white font-bold text-xl mb-2 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out delay-100">{card.title}</span>
                <span className="text-gray-300 text-[15px] mb-4 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out delay-150">{card.description}</span>
                <div className="flex gap-2 mt-auto transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out delay-200">
                  {card.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded transition-all duration-200 ease-out hover:bg-orange-500 transform hover:scale-105"
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
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedClients;