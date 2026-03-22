import Navbar from "../components/Navbar";
import HeroSection from "../components/Herosection";
import HowItWorks from "../components/HowItWorks";

function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <HeroSection />
      <HowItWorks />
    </div>
  );
}

export default Home;
