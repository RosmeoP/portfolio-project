import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import App from "./App";
import ScrollToTopButton from "./components/ScrollToTop";
import Footer from "./components/Footer";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import ContactFooter from "./components/ContactFooter";
import ScrollToTop from "./components/ScrollTopNav";
import NotFound from "./components/NotFound";

const FooterRenderer = () => {
  const location = useLocation();
  
  if (location.pathname === "*" || location.pathname === "/404" || !location.pathname.match(/^\/(home|about|projects|contact)?$/)) {
    return null;
  }

  if (location.pathname === "/contact") {
    return <ContactFooter />;
  }

  return <Footer />;
};

const AppWrapper = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FooterRenderer />
      <ScrollToTopButton />
    </>
  );
};

export default AppWrapper;