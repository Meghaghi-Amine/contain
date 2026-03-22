import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";


// fictional stories for the gallery
const stories = [
  { id: 1, title:"Luna in the Magic Forest", character: "Luna", style: "Magical", panels: 6, emoji: "🪄"},
  { id: 2, title:"Tom's Space Adventure", character: "Tom", style: "Adventure", panels: 8, emoji: "⚔️"},
  { id: 3, title:"Nova and the Friendly Dragon",character: "Nova", style: "Funny", panels: 4, emoji: "😂"},
  { id: 4, title:"Amir's Big Feelings", character: "Amir", style: "Emotional", panels: 6, emoji: "💛"},
  { id: 5, title:"Zara Saves the Ocean",character: "Zara", style: "Adventure", panels: 10, emoji: "⚔️"},
  { id: 6, title:"Kai and the Robot Friend", character: "Kai", style: "Funny",  panels: 4, emoji: "😂"},
];

const styleColors = {
  Magical: { bg: "#f3e5f5", border: "#ab47bc", text: "#7b1fa2" },
  Adventure: { bg: "#e8f5e9", border: "#66bb6a", text: "#2e7d32" },
  Funny:{ bg: "#fff8e1", border: "#ffd54d", text: "#f57f17" },
  Emotional: { bg: "#fff3e0", border: "#ffa726", text: "#e65100" },
};

function Gallery() {
  const navigate = useNavigate();

  return (
    <div className="gallery-page">

      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-brand" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          <img src={logo} alt="StoryBuddy logo" className="logo-image" />
          <span className="navbar-logo">StoryBuddy</span>
        </div>
        <div className="navbar-center">
          <button className="nav-link" onClick={() => navigate("/")}>🏠 Home</button>
          <button className="nav-link" onClick={() => navigate("/create/name")}>✨ Create</button>
          <button className="nav-link active-link" onClick={() => navigate("/gallery")}>📖 Gallery</button>
        </div>
        <div className="navbar-links">
            <button className="nav-btn register-btn" onClick={() => navigate("/auth")}>
                Login / Register
            </button>
        </div>
      </nav>

      <div className="gallery-header">
        <h1 className="gallery-title">📖 Story Gallery</h1>
        <p className="gallery-subtitle">Discover stories created by other kids!</p>
      </div>

      {/* grid of stories */}
      <div className="gallery-grid">
        {stories.map((story) => {
          const colors = styleColors[story.style];
          return (
            <div
              key={story.id}
              className="story-card"
              style={{ borderColor: colors.border }}
            >
              <div className="story-card-emoji">{story.emoji}</div>
              <h3 className="story-card-title">{story.title}</h3>
              <div className="story-card-meta">
                <span className="story-card-character">👤 {story.character}</span>
                <span
                  className="story-card-style"
                  style={{ backgroundColor: colors.bg, color: colors.text }}
                >
                  {story.style}
                </span>
              </div>
              <p className="story-card-panels">📄 {story.panels} panels</p>
            </div>
          );
        })}
      </div>

      {/* button to create a story */}
      <div className="gallery-cta">
        <p className="gallery-cta-text">Want to add your own story?</p>
        <button className="create-next-btn" style={{ maxWidth: "300px" }} onClick={() => navigate("/create/name")}>
          ✨ Create my story
        </button>
      </div>

    </div>
  );
}

export default Gallery;
