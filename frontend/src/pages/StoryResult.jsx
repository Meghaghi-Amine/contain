import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function StoryResult() {
  const navigate = useNavigate();

  //states of the page
  const [isLoading, setIsLoading] = useState(true);
  const [currentPanel, setCurrentPanel] =useState(0);
  const [panels, setPanels] =useState([]);

  // we retrieve the character name and the number of panels to generate the story
  const characterName = localStorage.getItem("character_name") || "Hero";
  const nbPanels =parseInt(localStorage.getItem("story_panels")) || 4;

  // sentences to display during the loading phase
  const loadingMessages = [
    "Waking up the storyteller...",
    "Building your world...",
    "Painting the scenes...",
    "Almost ready...",
  ];
  const [loadingIndex, setLoadingIndex] = useState(0);

  // generate exemples of panels based on the character name and the number of panels
  function generateExamplePanels(name, count) {
    const ExampleTexts = [
      `Once upon a time, ${name} woke up on a beautiful sunny morning and decided today would be the start of a great adventure.`,
      `${name} stepped outside and noticed something strange : a glowing path leading deep into the forest.`,
      `Following the path, ${name} discovered a hidden village full of tiny magical creatures who had never seen a human before.`,
      `The creatures were scared at first, but ${name} smiled kindly and offered to help them with a big problem they had.`,
      `Together, they worked all day to solve the mystery and saved the whole village from danger.`,
      `As the sun set, the creatures threw a big celebration and declared ${name} a true hero of the land.`,
      `${name} learned that even the smallest act of kindness can change someone's whole world.`,
      `And from that day on, ${name} visited the magical village every week, and they all lived happily ever after.`,
      `The end... or maybe just the beginning of the next adventure! 🌟`,
      `${name} smiled, knowing that the world was full of magic, you just had to look for it.`,
    ];
    return ExampleTexts.slice(0, count).map((text, i) => ({
      number: i + 1,
      text,
    }));
  }

  useEffect(() => {
    // change the loading message every 1,5 seconds
    const msgInterval = setInterval(() => {
      setLoadingIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 1500);


    const timer = setTimeout(() => {
      const ExamplePanels = generateExamplePanels(characterName, nbPanels);
      setPanels(ExamplePanels);
      setIsLoading(false);
      clearInterval(msgInterval);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearInterval(msgInterval);
    };
  }, []);

  const isLastPanel = currentPanel === panels.length - 1;

  // loeding screen
  if (isLoading) {
    return (
      <div className="create-page">
        <Navbar />
        <div className="loading-container">
          <div className="loading-spinner">
            <div className="spinner-ring" />
            <div className="spinner-emoji">✨</div>
          </div>
          <h2 className="loading-title">Creating {characterName}'s story...</h2>
          <p className="loading-message">{loadingMessages[loadingIndex]}</p>
        </div>
      </div>
    );
  }

  // page of panels
  return (
    <div className="create-page">
      <Navbar />
      {/* progress bar */}
      <div className="progress-bar-container">
        <p className="progress-label">
          Panel {currentPanel + 1} of {panels.length}
        </p>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${((currentPanel + 1) / panels.length) * 100}%` }}
          />
        </div>
      </div>

      {/* current panel */}
      <div className="create-card panel-card">

        <div className="panel-number">Panel {panels[currentPanel].number}</div>

        <div className="panel-text-box">
          <p className="panel-text">{panels[currentPanel].text}</p>
        </div>

        {/* navigation buttons */}
        <div className="nav-buttons" style={{ marginTop: "32px" }}>

          {currentPanel > 0 && (
            <button
              className="back-btn"
              onClick={() => setCurrentPanel((p) => p - 1)}
            >
              ← Previous
            </button>
          )}

          {!isLastPanel && (
            <button
              className="create-next-btn"
              onClick={() => setCurrentPanel((p) => p + 1)}
              style={{ flex: 1 }}
            >
              Next panel →
            </button>
          )}

          {isLastPanel && (
            <div className="end-buttons">
              <button className="save-btn">💾 Save this story</button>
              <button
                className="new-story-btn"
                onClick={() => navigate("/create/name")}
              >
                🔄 New story
              </button>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}

export default StoryResult;
