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

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<App />} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </BrowserRouter>
  </StrictMode>
);