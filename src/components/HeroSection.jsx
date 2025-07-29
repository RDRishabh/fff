const HeroSection = () => {
  return (
    <section className="bg-dark text-white py-20 flex items-center">
      <div className="px-24 md:px-10 w-full">
          <p className="text-gray-400 uppercase tracking-wider mb-6 text-sm">
            PRODUCT DESIGN AND DEVELOPMENT AGENCY
          </p>
          <h1 className="hero-text mb-12">
            Empowering startups to launch,
            <br />
            scale, and <span className="hero-text-orange">succeed faster</span>
          </h1>

        <div className="mt-10 flex flex-wrap gap-4">
          <button className="bg-primary text-white px-6 py-3 rounded-md font-semibold">
            Let’s Talk
          </button>
          <button className="bg-[#1A1A1A] text-white px-6 py-3 rounded-md border border-gray-600">
            View Our Cases →
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
