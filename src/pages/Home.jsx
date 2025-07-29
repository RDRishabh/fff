import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SectionCurve from "../components/SectionCurve";
import FeaturedClients from "../components/FeaturedClients";
import SectionCurveFlipped from "../components/SectionCurveFlipped";
import SectionTextBelow from "../components/SectionTextBelow";
import StickySplitSection from "../components/StickySplitSection";
import FeaturedCasesSection from "../components/FeaturedCasesSection";
import FeaturedCaseStickySection from "../components/FeaturedCaseStickySection";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
        <HeroSection />
        <SectionCurve />
        <FeaturedClients />
        <SectionCurveFlipped />
        <SectionTextBelow />
        <StickySplitSection />
        <SectionCurve />
        <FeaturedCasesSection />
        <FeaturedCaseStickySection />
    </div>
  );
};

export default Home;
