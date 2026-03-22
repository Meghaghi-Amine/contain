import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Auth() {
  // "tab" controls which form is shown : login or register
  const [tab, setTab]= useState("login");
  const navigate = useNavigate();

  // fields for login
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // fields for registration
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerEmail, setRegisterEmail] =useState("");
  const [registerPassword, setRegisterPassword] =useState("");
  const [registerConfirm, setRegisterConfirm] = useState("");

  // Message shown to the user 
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  // login  
  const handleLogin = () => {
    if (!loginEmail || !loginPassword) {
      setIsError(true);
      setMessage("Please fill in all fields");
      return;
    }

    setIsError(false);
    setMessage(" Logged in! Redirecting...");
    setTimeout(() => navigate("/create/name"), 1500);
  };

  //register
  const handleRegister =() =>{
    if (!registerUsername || !registerEmail || !registerPassword || !registerConfirm) {
      setIsError(true);
      setMessage("Please fill in all fields");
      return;
    }
    if (registerPassword !== registerConfirm) {
      setIsError(true);
      setMessage("Passwords do not match");
      return;
    }
    if (registerPassword.length < 6) {
      setIsError(true);
      setMessage("Password must be at least 6 characters");
      return;
    }

    setIsError(false);
    setMessage(" Account created ! You can now log in");
    setTimeout(() => setTab("login"), 2000);
  };

  return (
  <>
    <nav className="navbar">
      <div className="navbar-brand" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        <img src={logo} alt="StoryBuddy logo" className="logo-image" />
        <span className="navbar-logo">StoryBuddy</span>
      </div>
      <div className="navbar-center">
        <button className="nav-link" onClick={()=> navigate("/")}>🏠 Home</button>
        <button className="nav-link" onClick={() => navigate("/create/name")}>✨ Create</button>
        <button className="nav-link" onClick={() =>navigate("/gallery")}>📖 Gallery</button>
      </div>
      <div className="navbar-links">
        <button className="nav-btn register-btn" onClick={() => navigate("/auth")}>
            Login / Register
        </button>
      </div>
    </nav>

    <div className="create-page" style={{ paddingTop: "0" }}>
      <div className="create-card auth-card">

        <div className="step-icon-big">🔐</div>
        <h1 className="create-title">Welcome back!</h1>
        <p className="create-subtitle">Login or create your account to save your stories.</p>

        <div className="auth-tabs">
          <button
            className={"auth-tab " + (tab === "login" && "active")}
            onClick={() => {
              setTab("login");
              setMessage("");
            }}
          >
            Login
          </button>

          <button
            className={"auth-tab " + (tab === "register" && "active")}
            onClick={() => {
              setTab("register");
              setMessage("");
            }}
          >
            Register
          </button>
        </div>

        {message && (
          <p className={`auth-message ${isError && "error" || "success"}`}>
            {message}
          </p>
        )}

        {tab === "login" && (
          <div className="auth-form">
            <div className="auth-field">
              <label className="auth-label"> Email</label>
              <input type="email" className="create-input" placeholder="your@email.com" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
            </div>
            <div className="auth-field">
              <label className="auth-label">🔒 Password</label>
              <input type="password" className="create-input" placeholder="Your password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleLogin()} />
            </div>
            <button className="create-next-btn" onClick={handleLogin}>Login ✨</button>
            <p className="auth-switch">No account yet? <span className="auth-switch-link" onClick={() => { setTab("register"); setMessage(""); }}>Create one!</span></p>
          </div>
        )}

        {tab === "register" && (
          <div className="auth-form">
            <div className="auth-field">
              <label className="auth-label">👤 Username</label>
              <input type="text" className="create-input" placeholder="Choose a username" value={registerUsername} onChange={(e) => setRegisterUsername(e.target.value)} maxLength={30} />
            </div>
            <div className="auth-field">
              <label className="auth-label"> Email</label>
              <input type="email" className="create-input" placeholder="your@email.com" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} />
            </div>
            <div className="auth-field">
              <label className="auth-label">🔒 Password</label>
              <input type="password" className="create-input" placeholder="Min 6 characters" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} />
            </div>
            <div className="auth-field">
              <label className="auth-label"> Confirm password</label>
              <input type="password" className="create-input" placeholder="Repeat your password" value={registerConfirm} onChange={(e) => setRegisterConfirm(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleRegister()} />
            </div>
            <button className="create-next-btn" onClick={handleRegister}>Create my account 🚀</button>
            <p className="auth-switch">Already have an account? <span className="auth-switch-link" onClick={() => { setTab("login"); setMessage(""); }}>Login here!</span></p>
          </div>
        )}

      </div>
    </div>
  </>
);
}

export default Auth;
