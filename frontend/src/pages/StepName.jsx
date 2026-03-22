import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function StepName() {
  // store the character name typed by the user
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const navigate = useNavigate();

  // Save the name and gender
  const handleNext = () => {
    if (name.trim() === "" || gender === "") return;
    localStorage.setItem("character_name", name.trim());
    localStorage.setItem("character_gender", gender);
    navigate("/create/age");
  };
  // List of suggested name
  const suggestions = ["Lina", "Tom", "Nova", "Zara", "Max", "Luna","Amir", "Sofia", "Kai", "Yuki", "Omar", "Isla","Leo", "Amara", "Jin", "Chloe", "Diego", "Nour",];

  const genders = [
    { value: "boy", label: "Boy", emoji: "👦" },
    { value: "girl",label: "Girl", emoji: "👧" },
    { value: "neutral", label: "Neutral", emoji: "⭐" },
  ];
  // the user can only go to next step if both name and gender are filled
  const isReady = name.trim() !== "" && gender !== "";

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
              className={`progress-step ${s === 1 && "active" || ""}`}
            >
              {s}
            </div>
          ))}
        </div>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: "14%" }} />
        </div>

        <p className="progress-label">Step 1 of 6</p>
      </div>

      {/* card */}
      <div className="create-card">

        <div className="step-icon-big">🧙‍♂️</div>

        {/* name */}
        <h1 className="create-title">Who is your character?</h1>
        <p className="create-subtitle">Give your hero a name and pick their identity!</p>

        <input
          type="text"
          className="create-input"
          placeholder="Type a name..."
          value={name}
          onChange={(e)=> setName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleNext()}
          maxLength={30}
          autoFocus
        />

        {/* suggestions of names */}
        <div className="suggestions">
          <p className="suggestions-label">✨ Need inspiration?</p>

          <div className="suggestions-list">
            {suggestions.map((s) => (
              <button
                key={s}
                className={`suggestion-btn ${name === s && "selected" || ""}`}
                onClick={() => setName(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* divider */}
        <div className="section-divider" />

        {/* gender with 3 buttons : boy, girl, neutral */}
        <p className="section-label">Who are they?</p>

        <div className="gender-list">
          {genders.map((g) => (
            <button
              key={g.value}
              className={`gender-btn ${gender === g.value && "selected" || ""}`}
              onClick={() => setGender(g.value)}
            >
              <span className="gender-emoji">{g.emoji}</span>
              <span className="gender-label">{g.label}</span>
            </button>
          ))}
        </div>

        {/* Next button */}
        <button
          className={`create-next-btn ${!isReady && "disabled" || ""}`}
          onClick={handleNext}
          disabled={!isReady}
        >
          Next →
        </button>

      </div>

    </div>
  );
}

export default StepName;
