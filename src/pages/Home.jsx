import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SectionCurve from "../components/SectionCurve";
import FeaturedClients from "../components/FeaturedClients";
import SectionCurveFlipped from "../components/SectionCurveFlipped";
import SectionTextBelow from "../components/SectionTextBelow";
import StickySplitSection from "../components/StickySplitSection";
import FeaturedCasesSection from "../components/FeaturedCasesSection";
import FeaturedCaseStickySection from "../components/FeaturedCaseStickySection";
import HorizontalScroll from "../components/HorizontalScroll";
import TestimonialsSection from "../components/TestimonialsSection";
import LeadForm from "../components/LeadForm";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
        <Navbar />
        <HeroSection /> {/* Black themed */}
        <AboutSection /> {/* Black themed - new about section */}
        <SectionCurve /> {/* Black themed */}
        <FeaturedClients /> {/* White themed */}
        <SectionCurveFlipped /> {/* Black themed */}
        <SectionTextBelow /> {/* Black themed */}
        <StickySplitSection /> {/* Black themed */}
        <SectionCurve /> {/* Black themed */}
        <FeaturedCasesSection /> {/* White themed */}
        <FeaturedCaseStickySection /> {/* White themed */}
        {/* <HorizontalScroll /> */}
        <SectionCurveFlipped /> {/* Black themed */}
        <TestimonialsSection /> {/* Black themed */}
        <SectionCurve /> {/* Black themed */}
        <LeadForm /> {/* White themed */}
        <SectionCurveFlipped /> {/* Black themed */}
        <Footer /> {/* Black themed */}
    </div>
  );
};

export default Home;
