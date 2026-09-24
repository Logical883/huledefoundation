import { useEffect } from "react";

export default function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll("[data-animate]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in-view");
        });
      },
      { threshold: 0.12 }
    );
    nodes.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}
