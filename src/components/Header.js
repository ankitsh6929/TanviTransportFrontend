// src/components/Header.jsx
import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png"; // Importing logo

const navLink = ({ isActive }) => ({
  padding: "10px 14px",
  borderRadius: 8,
  textDecoration: "none",
  fontWeight: 600,
  fontSize: "15px",
  transition: "all 0.3s ease",
  color: isActive ? "#fff" : "#0B5ED7",
  background: isActive ? "#0B5ED7" : "transparent",
});

export default function Header() {
  return (
    <header
      style={{
        background: "#fff",
        boxShadow: "0 2px 14px rgba(2,6,23,.06)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "12px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo + Company Name */}
        <Link
          to="/"
          style={{
            textDecoration: "none",
            fontWeight: 900,
            fontSize: 22,
            color: "#0B5ED7",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img
            src={logo}
            alt="Tanvi Transport Logo"
            style={{ height: 45, width: "auto" }}
          />
          Tanvi Transport Company
        </Link>

        {/* Navigation */}
        <nav style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <NavLink to="/" style={navLink} end>
            Home
          </NavLink>
          <NavLink to="/services" style={navLink}>
            Services
          </NavLink>
          <NavLink to="/about" style={navLink}>
            About
          </NavLink>
          <NavLink to="/customer-satisfaction" style={navLink}>
            Customer Satisfaction
          </NavLink>
          <NavLink to="/contact" style={navLink}>
            Contact
          </NavLink>
          <NavLink to="/quote" style={navLink}>
            Get Quote
          </NavLink>
        </nav>

        {/* Contact Numbers */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            fontWeight: 600,
            color: "#0B5ED7",
            fontSize: "14px",
            lineHeight: "20px",
          }}
        >
          <span>📞 6901244444</span>
          <span>📞 9864535143</span>
        </div>
      </div>
    </header>
  );
}
