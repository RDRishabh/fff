import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ScrollSection from "../components/ScrollSection";

const Home = () => {
  return (
    <div className="bg-dark min-h-screen">
      <Navbar />
      <HeroSection />
      <ScrollSection />
    </div>
  );
};

export default Home;
