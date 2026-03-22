import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function StepAge() {
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  const handleNext =() => {
    if (age === "") return;
    localStorage.setItem("character_age", age);
    navigate("/create/look"); 
  };

  function getNextClass() {
    if (age === "") return "create-next-btn disabled";
    return "create-next-btn";
  }

  const ages = [
    { value: "3-5", label: "3 – 5 years old", emoji: "🐣", description: "Toddler" },
    { value: "6-8", label: "6 – 8 years old", emoji: "🧒", description: "Child" },
    { value: "9-12",label: "9 – 12 years old", emoji: "🧑", description:"Preteen" },
    { value: "13+", label: "13+ years old", emoji: "🧑‍🦱", description: "Teen" },
  ];

  return (
    <div className="create-page">

      {/* Navbar */}
      <Navbar />

      {/* progress bar */}
      <div className="progress-bar-container">
        <div className="progress-steps">
          {[1, 2, 3, 4, 5, 6].map((s) => (
            <div
              key={s}
              className={`progress-step ${s === 2 && "active" || ""}`}
            >
              {s}
            </div>
          ))}
        </div>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: "28%" }} />
        </div>

        <p className="progress-label">Step 2 of 6</p>
      </div>

      {/* card */}
      <div className="create-card">

        <div className="step-icon-big">🎂</div>

        <h1 className="create-title">How old is your character?</h1>
        <p className="create-subtitle">
          This helps us write a story that fits your hero perfectly!
        </p>

        {/* age selection */}
        <div className="age-list">
          {ages.map((a) => {
            const isSelected = age === a.value;

            return (
              <button
                key={a.value}
                className={`age-btn ${isSelected && "selected" || ""}`}
                onClick={() => setAge(a.value)}
              >
                <span className="age-emoji">{a.emoji}</span>
                <div className="age-info">
                  <span className="age-label">{a.label}</span>
                  <span className="age-description">{a.description}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* navigation buttons */}
        <div className="nav-buttons">
          <button className="back-btn" onClick={() => navigate("/create/name")}>
            ← Back
          </button>

          <button
            className={getNextClass()}
            onClick={handleNext}
            disabled={age === ""}
            style={{ flex: 1 }}
          >
            Next →
          </button>
        </div>

      </div>

    </div>
  );
}

export default StepAge;
