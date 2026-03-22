import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function StepPanels() {
  // store the number of panels selected by the user
  const [panels, setPanels] = useState(null);
  const navigate = useNavigate();

  const handleNext= () => {
    if (!panels) return;
    localStorage.setItem("story_panels", panels);
    navigate("/create/summary");
  };
  // List of available options for the number of panels
  const options = [2, 4, 6, 8, 10];

  return (
    <div className="create-page">
      <Navbar />
      <div className="progress-bar-container">
        <div className="progress-steps">
          {[1, 2, 3, 4, 5, 6].map((s) => (
            <div
              key={s}
              className={`progress-step ${s === 6 && "active" || ""}`}
            >
              {s}
            </div>
          ))}
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: "85%" }} />
        </div>
        <p className="progress-label">Step 6 of 6</p>
      </div>
      <div className="create-card">
        <div className="step-icon-big">🎬</div>
        <h1 className="create-title">How long should your story be?</h1>
        <p className="create-subtitle">Each panel is one scene</p>

        {/* Grid of panel options */}
        <div className="panels-grid">
          {options.map((o) => (
            <button
              key={o}
              className={`panel-small-btn ${panels === o && "selected" || ""}`}
              onClick={() => setPanels(o)}
            >
              {/* Display the number and the word "panels" */}
              {o}
              <span className="panel-small-label">panels</span>
            </button>
          ))}
        </div>
        {/* back button and generate button */}
        <div className="nav-buttons" style={{ marginTop: "32px" }}>
          <button
            className="back-btn"
            onClick={() => navigate("/create/style")}
          >
            ← Back
          </button>

          <button
            className={`create-next-btn ${!panels && "disabled" || ""}`}
            onClick={handleNext}
            disabled={!panels}
            style={{ flex: 1 }}
          >
            Generate my story 🚀
          </button>
        </div>
      </div>
    </div>
  );
}

export default StepPanels;
