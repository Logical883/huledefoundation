import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./styles/portal.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./Pages/about.jsx";
import Application from "./Pages/application.jsx";
import Contact from "./Pages/contact.jsx";
import Gallery from "./Pages/gallery.jsx";
import Home from "./Pages/home.jsx";
import Management from "./Pages/management.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ paddingTop: "68px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/management" element={<Management />} />
          <Route path="/application" element={<Application />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/team" element={<Navigate to="/management" replace />} />
          <Route path="/projects" element={<Navigate to="/" replace />} />
          <Route path="/editor" element={<Navigate to="/gallery" replace />} />
          <Route path="/support" element={<Navigate to="/contact" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
