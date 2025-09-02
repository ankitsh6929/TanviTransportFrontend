// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import QuoteForm from "./pages/QuoteForm";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RegionContent from "./pages/RegionContent";
import ScrollToTop from "./components/ScrollToTop";
import CustomerSatisfaction from "./pages/CustomerSatisfaction"; // NEW

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quote" element={<QuoteForm />} />
        <Route path="/region/:region" element={<RegionContent />} />
        <Route path="/customer-satisfaction" element={<CustomerSatisfaction />} /> {/* NEW */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
