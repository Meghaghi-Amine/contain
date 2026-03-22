import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function StepStory() {
  // Store the story idea given by the user
  const [story, setStory] = useState("");
  const navigate = useNavigate();

  // maximum number of characters allowed
  const max = 300;
  // The user can only go to next step if he wrote at least 10 characters
  const isReady = story.trim().length >= 10;

  const handleNext = () => {
    if (!isReady) return;
    localStorage.setItem("story_idea", story.trim());
    navigate("/create/style");
  };
  // List of example story to inspire the user
  const examples = [
    "My hero finds a magic door in the forest 🌲",
    "A friendly dragon wants to make new friends 🐉",
    "The hero discovers a lost treasure on a desert island 🏝️",
    "A little robot learns to feel emotions 🤖",];

  return (
    <div className="create-page">
      <Navbar />
      <div className="progress-bar-container">
        <div className="progress-steps">
          {[1, 2, 3, 4, 5, 6].map((s) => (
            <div
              key={s}
              className={`progress-step ${s === 4 && "active" || ""}`}
            >
              {s}
            </div>
          ))}
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: "57%" }} />
        </div>
        <p className="progress-label">Step 4 of 6</p>
      </div>
      <div className="create-card">
        <div className="step-icon-big">✏️</div>
        <h1 className="create-title">What happens in your story?</h1>
        <p className="create-subtitle">Describe your idea</p>

        <textarea
          className="story-textarea"
          placeholder="Example: My hero finds a magic door in the forest and discovers a hidden world..."
          value={story}
          onChange={(e) => {
            if (e.target.value.length <= max) setStory(e.target.value);
          }}
          rows={5}
        />

        {/* Character counter */}
        <p className="char-counter">{story.length} / {max} characters</p>

        <div className="examples-section">
          <p className="suggestions-label">💡 Need ideas?</p>
          <div className="examples-list">
            {examples.map((ex, i) => (
              <button key={i} className="example-btn" onClick={() => setStory(ex)}>
                {ex}
              </button>
            ))}
          </div>
        </div>

        <div className="nav-buttons">
          <button
            className="back-btn"
            onClick={() => navigate("/create/look")}
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

export default StepStory;
