import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./Pages/about.jsx";
import Contact from "./Pages/contact.jsx";
import Editor from "./Pages/editor.jsx";
import Gallery from "./Pages/gallery.jsx";
import Home from "./Pages/home.jsx";
import Projects from "./Pages/projects.jsx";
import Support from "./Pages/support.jsx";
import Team from "./Pages/team.jsx";

function App() {
  // Height of navbar (adjust if you change navbar height in CSS)
  const navbarHeight = 60;
  return (
    <Router>
      <Navbar />
      <div style={{ paddingTop: `${navbarHeight}px` }}>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/support" element={<Support />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
