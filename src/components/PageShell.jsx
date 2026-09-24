import Footer from "./Footer/Footer";
import useReveal from "../hooks/useReveal";

export default function PageShell({ children }) {
  useReveal();
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
