// src/components/Header.jsx
import React from "react";
import { Link, NavLink } from "react-router-dom";

const navLink = ({ isActive }) => ({
  padding: "10px 12px",
  borderRadius: 8,
  textDecoration: "none",
  fontWeight: 700,
  color: isActive ? "#fff" : "#0B5ED7",
  background: isActive ? "#0B5ED7" : "transparent",
});

export default function Header() {
  return (
    <header style={{ background: "#fff", boxShadow: "0 2px 14px rgba(2,6,23,.06)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "10px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link to="/" style={{ textDecoration: "none", fontWeight: 900, fontSize: 20, color: "#0B5ED7" }}>
          Tanvi Transport Company
        </Link>

        <nav style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <NavLink to="/" style={navLink} end>Home</NavLink>
          <NavLink to="/services" style={navLink}>Services</NavLink>
          <NavLink to="/about" style={navLink}>About</NavLink>
          <NavLink to="/customer-satisfaction" style={navLink}>Customer Satisfaction</NavLink>
          <NavLink to="/contact" style={navLink}>Contact</NavLink>
          <NavLink to="/quote" style={navLink}>Get Quote</NavLink>
        </nav>
      </div>
    </header>
  );
}
