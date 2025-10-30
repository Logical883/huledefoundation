import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import global animations stylesheet so all pages get the effects
import "./styles/animations.css";
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

  useEffect(() => {
    // Single global IntersectionObserver to handle [data-animate] elements app-wide
    if (typeof window === "undefined") return;
    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in-view");
          else entry.target.classList.remove("in-view");
        });
      },
      { threshold: 0.15 }
    );

    // observe current nodes and future ones added by route changes
    const observeAll = () => {
      document
        .querySelectorAll("[data-animate]")
        .forEach((el) => observer.observe(el));
    };

    // initial observe
    observeAll();

    // also re-run when route content changes (listen for DOM changes)
    const mo = new MutationObserver(() => observeAll());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      observer.disconnect();
    };
  }, []);

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
