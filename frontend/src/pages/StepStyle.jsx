import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function StepStyle() {
  // Store the selected story style
  const [style, setStyle] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    if (!style) return;
    localStorage.setItem("story_style", style);
    navigate("/create/panels");
  };
  // List of available story styles  
  const styles = [
    {
      value:"funny",
      label: "Funny",
      emoji: "😂",
      description: "Jokes, silly moments and lots of laughter!",
      color:"#fff8e1",
      border: "#ffd54d",
    },
    {
      value: "emotional",
      label:"Emotional",
      emoji: "❤️",
      description:"Touching moments, friendship and big feelings!",
      color: "#facbcb",
      border: "#ee4654",
    },
    {
      value:"magical",
      label: "Magical",
      emoji: "🪄",
      description: "Spells, enchanted worlds and mysterious powers!",
      color: "#f3e5f5",
      border:"#ab47bc",
    },
    {
      value: "adventure",
      label: "Adventure",
      emoji: "⚔️",
      description: "Epic quests, brave heroes and big challenges!",
      color: "#e8f5e9",
      border: "#66bb6a",
    },
  ];

  return (
    <div className="create-page">
      <Navbar />
      <div className="progress-bar-container">
        <div className="progress-steps">
          {[1, 2, 3, 4, 5, 6].map((s) => (
            <div
              key={s}
              className={`progress-step ${s === 5 && "active" || ""}`}
            >
              {s}
            </div>
          ))}
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: "71%" }} />
        </div>
        <p className="progress-label">Step 5 of 6</p>
      </div>

      <div className="create-card">

        <div className="step-icon-big">🎭</div>
        <h1 className="create-title">What's the vibe of your story?</h1>
        <p className="create-subtitle">Pick the style that fits your adventure!</p>
        {/* when it's selected, the button background changes to the border color */}
        <div className="style-grid">
          {styles.map((s) => (
            <button
              key={s.value}
              className={`style-btn ${style === s.value && "selected" || ""}`}
              style={{
                backgroundColor: style === s.value && s.border || s.color,
                borderColor: s.border,
              }}
              onClick={() => setStyle(s.value)}
            >
              <span className="style-emoji">{s.emoji}</span>
              <span className="style-label">{s.label}</span>
              <span className="style-description">{s.description}</span>
            </button>
          ))}
        </div>

        <div className="nav-buttons">
          <button className="back-btn" onClick={() => navigate("/create/story")}>
            ← Back
          </button>
          <button
            className={`create-next-btn ${!style && "disabled" || ""}`}
            onClick={handleNext}
            disabled={!style}
            style={{ flex: 1 }}
          >
            Next →
          </button>
        </div>

      </div>

    </div>
  );
}

export default StepStyle;
