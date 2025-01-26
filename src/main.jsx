import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import ScrollToTopButton from "./components/ScrollToTop.jsx";
import Footer from "./components/Footer.jsx";
import About from "./pages/About.jsx";
import Project from "./pages/Project.jsx";
import Contact from "./pages/Contact.jsx";
import { useLocation } from "react-router-dom";
import ContactFooter from "./components/ContactFooter.jsx";
import ScrollToTop from "./components/ScrollTopNav.jsx";

const FooterRenderer = () => {
  const location = useLocation();

  

  if (location.pathname === "/contact") {
    return <ContactFooter />;
  }

  return <Footer />;
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <BrowserRouter>
  <ScrollToTop />
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/home" element={<App />} />
    <Route path="/about" element={<About />} />
    <Route path="/projects" element={<Project/>} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
  <FooterRenderer />
  <ScrollToTopButton />
</BrowserRouter>
  </StrictMode>
);