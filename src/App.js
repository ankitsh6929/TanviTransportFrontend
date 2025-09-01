import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import QuoteForm from "./pages/QuoteForm";
import Login from "./pages/Login"; // ✅ upgraded to Register+Login combo
import Admin from "./pages/Admin";  // ✅ new
import Header from "./components/Header"; // ✅ new modern header
import Footer from "./components/Footer"; // ✅ modernized footer

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

// ✅ Import RegionContent
import RegionContent from "./pages/RegionContent";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
            <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<QuoteForm />} />
          <Route path="/login" element={<Login />} />

          {/* ✅ Dynamic Region Route */}
          <Route path="/region/:region" element={<RegionContent />} />

          <Route
            path="/admin"
            element={
              <ProtectedRoute roles={["admin"]}>
                <Admin />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
