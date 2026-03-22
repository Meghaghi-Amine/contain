import { useNavigate } from "react-router-dom";
import boy from "../assets/boy.png";
import star from "../assets/star.png";

function HeroSection() {
  // useNavigate lets us change pages when a button is clicked
  const navigate = useNavigate();

  return (
    <section className="hero">

      <img src={star} alt="" className="hero-star" />

      <div className="hero-center">

        <h1>
          Create your own<br />
          <span className="hero-highlight">Magic Story</span>
        </h1>

        <p>
          Pick a hero, choose a world, and let the magic begin !
          Your perfect adventure is just one click away 
        </p>
        
        <div className="hero-buttons">
          <button className="btn-start" onClick={() => navigate("/create/name")}>
            🚀 Start Creating
          </button>
          <button className="btn-gallery" onClick={() => navigate("/gallery")}>
            📖 Open Gallery
          </button>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">1000+</span>
            <span className="stat-label">Stories created</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number">300+</span>
            <span className="stat-label">Happy kids</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number">∞</span>
            <span className="stat-label">Adventures</span>
          </div>
        </div>

      </div>

      <img src={boy} alt="A child reading a story" className="hero-image" />

    </section>
  );
}

export default HeroSection;
