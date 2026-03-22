import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StepName from "./pages/StepName";
import StepAge from "./pages/StepAge";
import "./index.css";
import "./steps.css";
import StepLook from "./pages/StepLook";
import StepStory from "./pages/StepStory";
import StepStyle from "./pages/StepStyle";
import StepPanels from "./pages/StepPanels";
import StoryResult from "./pages/StoryResult";
import Auth from "./pages/Auth";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create/name" element={<StepName />} />
        <Route path="/create/age" element={<StepAge />} />
        <Route path="/create/look" element={<StepLook />} />
        <Route path="/create/story" element={<StepStory />} />
        <Route path="/create/style" element={<StepStyle />} />
        <Route path="/create/panels" element={<StepPanels />} />
        <Route path="/create/summary" element={<StoryResult />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
