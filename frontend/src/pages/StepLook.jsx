import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

// ColorPicker displays a row of color circles, so the user clicks on a circle to select a color
function ColorPicker({ label, emoji, colors, selected, onSelect }) {
  return (
    <div className="color-section">
      {/* section title with emoji */}
      <p className="color-section-label">{emoji} {label}</p>
      <div className="color-grid">
        {colors.map((c) => (
          <button
            key={c.value}
            className={`color-dot ${selected === c.value && "selected" || ""}`}
            style={{ backgroundColor: c.hex }}
            onClick={() => onSelect(c.value)}
            title={c.label}
          >
          </button>
        ))}
      </div>
    </div>
  );
}

function StepLook() {
  // store the selected color for each category
  const [hairColor, setHairColor] = useState("");
  const [eyeColor, setEyeColor] =useState("");
  const [outfitColor, setOutfitColor] =useState("");
  const navigate = useNavigate();

  // The user can only go to next step if all 3 colors are selected
  const isReady = hairColor && eyeColor && outfitColor;

  const handleNext = ()=> {
    if (!isReady) return;
    localStorage.setItem("hair_color", hairColor);
    localStorage.setItem("eye_color", eyeColor);
    localStorage.setItem("outfit_color", outfitColor);
    navigate("/create/story");
  };

  // list of available hair colors
  const hairColors = [
    { value: "black", label: "Black", hex: "#1a1a1a" },
    { value: "brown", label: "Brown", hex: "#8B4513" },
    { value: "blonde",label: "Blonde", hex: "#FFD700" },
    { value: "red", label: "Red", hex: "#CC3300" },
    { value: "white",label: "White", hex: "#e0e0e0" },
    { value: "blue", label: "Blue", hex: "#4169E1" },
    { value: "pink", label: "Pink", hex: "#FF69B4" },
    { value: "purple", label: "Purple", hex: "#8A2BE2" },
    { value: "green", label: "Green", hex: "#228B22" },
    { value: "orange", label: "Orange", hex: "#FF8C00" },
  ];

  // List of available eye colors
  const eyeColors = [
    { value: "brown", label: "Brown", hex: "#8B4513" },
    { value: "black", label: "Black", hex: "#1a1a1a" },
    { value: "blue", label: "Blue", hex: "#4169E1" },
    { value: "green", label: "Green", hex: "#228B22" },
    { value: "gray",label: "Gray",hex: "#808080" },
    { value: "hazel", label: "Hazel", hex: "#8E7618" },
    { value: "amber", label: "Amber", hex: "#FFBF00" },
    { value: "violet", label: "Violet", hex: "#8A2BE2" },
  ];

  // List of available outfit colors

  const outfitColors = [
    { value: "red", label: "Red", hex: "#E63946" },
    { value: "blue", label: "Blue", hex: "#4361EE" },
    { value: "green",label: "Green", hex: "#2DC653" },
    { value: "yellow",label: "Yellow",hex: "#FFD60A" },
    { value: "purple", label: "Purple", hex: "#7B2FBE" },
    { value: "orange", label: "Orange", hex: "#FB8500" },
    { value: "pink", label: "Pink", hex: "#FF69B4" },
    { value: "white", label: "White", hex: "#e0e0e0" },
    { value: "black", label: "Black", hex: "#1a1a1a" },
    { value: "teal", label: "Teal", hex: "#0096A0" },
  ];

  return (
    <div className="create-page">
      {/* navigation bar at the top */}
      <Navbar />
      <div className="progress-bar-container">
        <div className="progress-steps">
          {[1, 2, 3, 4, 5, 6].map((s) => (
            <div
              key={s}
              className={`progress-step ${s === 3 && "active" || ""}`}
            >
              {s}
            </div>
          ))}
        </div>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: "42%" }} />
        </div>

        <p className="progress-label">Step 3 of 6</p>
      </div>
      {/* card with the color pickers */}
      <div className="create-card">
        <div className="step-icon-big">🎨</div>
        <h1 className="create-title">What does your character look like?</h1>
        <p className="create-subtitle">Pick colors to bring your hero to life!</p>
        {/* hair color */}
        <ColorPicker label="Hair color" emoji="💇" colors={hairColors} selected={hairColor} onSelect={setHairColor} />
        <div className="section-divider" />
        {/* Eye color */}
        <ColorPicker label="Eye color" emoji="👁️" colors={eyeColors} selected={eyeColor} onSelect={setEyeColor} />
        <div className="section-divider" />
        {/* Outfit color */}
        <ColorPicker label="Outfit color" emoji="👕" colors={outfitColors} selected={outfitColor} onSelect={setOutfitColor} />
        <div className="nav-buttons" style={{ marginTop: "32px" }}>
          <button
            className="back-btn"
            onClick={() => navigate("/create/age")}
          >
            ← Back
          </button>

          <button
            className={`create-next-btn ${!isReady && "disabled" || ""}`}
            onClick={handleNext}
            disabled={!isReady}
            style={{ flex: 1 }}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}

export default StepLook;
