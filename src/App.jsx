import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Editor from "./Pages/Editor.jsx";
import Gallery from "./Pages/Gallery.jsx";
import Home from "./Pages/Home.jsx";
import Projects from "./Pages/Projects.jsx";
import Support from "./Pages/Support.jsx";
import Team from "./Pages/Team.jsx";

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
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
