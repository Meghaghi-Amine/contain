import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="navbar-brand" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        <img src={logo} alt="StoryBuddy logo" className="logo-image" />
        <span className="navbar-logo">StoryBuddy</span>
      </div>

      {/*links of the middle  */}
      <div className="navbar-center">
        <button className="nav-link" onClick={() => navigate("/")}>🏠 Home</button>
        <button className="nav-link" onClick={() => navigate("/create/name")}>✨ Create</button>
        <button className="nav-link" onClick={() => navigate("/gallery")}>📖 Gallery</button>
      </div>

      {/* buttons login/register */}
      <div className="navbar-links">
        <button className="nav-btn register-btn" onClick={() => navigate("/auth")}>
          Login / Register
        </button>
      </div>

    </nav>
  );
}

export default Navbar;
