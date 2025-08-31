import React from "react";

const cards = [
  {
    title: "Aucto",
    description:
      "A gamified auction platform designed for IPL enthusiasts to strategize, bid, and compete with friends.",
    tags: ["Gaming", "India"],
    logo: "🎮",
  },
  {
    title: "Blue Bagels",
    description:
      "A performance-driven marketing agency that scales revenue 3x through full-funnel optimization—without tripling costs.",
    tags: ["Marketing Tech", "EU"],
    logo: "📈",
  },
  {
    title: "Curtains And More",
    description:
      "A premium home decor brand offering customized curtains and furnishings to elevate modern living spaces.",
    tags: ["eCommerce", "UK"],
    logo: "🏡",
  },
  {
    title: "GreenBridge",
    description:
      "An AI-powered analytics platform helping wind, solar, and BESS operators turn complex energy data into actionable insights.",
    tags: ["CleanTech", "EU"],
    logo: "🌱",
  },
  {
    title: "BYOC",
    description:
      "A decentralized investment ecosystem where users earn and spend ecosystem tokens across their favorite brands.",
    tags: ["Web3", "USA"],
    logo: "🪙",
  },
  {
    title: "Nova Watches",
    description:
      "A curated collection of luxury and smartwatches known for standout design, quality, and customer trust.",
    tags: ["D2C", "India"],
    logo: "⌚",
  },
  {
    title: "ICS",
    description:
      "A trusted supplier of top-tier electrical substation equipment from brands like ABB, Schneider, and Kirloskar.",
    tags: ["Industrial", "India"],
    logo: "⚡",
  },
  {
    title: "And More",
    description:
      "Trusted by dozens of forward-thinking startups, enterprises, and global innovators.",
    tags: ["Global Clients", "Worldwide"],
    logo: "🌍",
  },
];

const FeaturedClients = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-14 sm:py-24">
      <div className="px-6 sm:px-16">
        {/* Heading */}
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="text-[14px] sm:text-[16px] font-semibold text-orange-500 uppercase tracking-wider mb-3">
            PRODUCT DESIGN AND DEVELOPMENT AGENCY
          </h2>
          <h3 className="text-[30px] sm:text-[46px] md:text-[60px] font-extrabold text-gray-900 leading-tight">
            Our <span className="text-orange-500 drop-shadow">featured</span> client wins
          </h3>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-100 rounded-3xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden"
            >
              {/* Logo/Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-orange-100 text-2xl mb-5">
                {card.logo}
              </div>

              {/* Title */}
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                {card.title}
              </h4>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
                {card.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-2">
                {card.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-orange-50 text-orange-700 text-xs font-medium px-3 py-1 rounded-full border border-orange-200 hover:bg-orange-100 transition"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Subtle Gradient Highlight */}
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-50 via-transparent to-transparent opacity-40 pointer-events-none rounded-3xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedClients;