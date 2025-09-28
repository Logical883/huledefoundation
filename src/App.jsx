import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./Pages/about";
import Contact from "./Pages/contact";
import Editor from "./Pages/editor";
import Gallery from "./Pages/gallery";
import Home from "./Pages/home";
import Projects from "./Pages/projects";
import Support from "./Pages/support";
import Team from "./Pages/team";

function App() {
  return (
    <Router>
      <Navbar />
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
    </Router>
  );
}

export default App;
