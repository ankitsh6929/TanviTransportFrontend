import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const navItem = ({ to, label, onClick }) => (
    <NavLink
      to={to}
      onClick={onClick}
      style={({ isActive }) => ({
        textDecoration: "none",
        padding: "10px 14px",
        borderRadius: 10,
        fontWeight: 600,
        color: isActive ? "#0B5ED7" : "#1E293B",
        background: isActive ? "rgba(13,110,253,0.08)" : "transparent",
      })}
    >
      {label}
    </NavLink>
  );

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backdropFilter: "blur(10px)",
        background: "rgba(255,255,255,0.75)",
        borderBottom: "1px solid #e9eef7",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "10px 18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        {/* Brand */}
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
          <img src={logo} alt="TTC Logo" style={{ height: 50, borderRadius: 10 }} />
          <div style={{ lineHeight: 1 }}>
            <div style={{ fontWeight: 800, color: "#0F172A", letterSpacing: 0.2 }}>Tanvi Transport Company</div>
            <small style={{ color: "#64748B" }}>Quality Is Our Priority</small>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav" style={{ display: "none" }}>
          {/* hidden on small; shown via media query below */}
        </nav>

        <div className="desktop-actions" style={{ display: "none" }}>
          {/* hidden on small; shown via media query below */}
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 42,
            height: 42,
            borderRadius: 10,
            border: "1px solid #e6ebf5",
            background: "#fff",
            boxShadow: "0 2px 8px rgba(16,24,40,0.06)",
          }}
          className="mobile-toggle"
        >
          ☰
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div style={{ padding: "10px 18px", borderTop: "1px solid #edf2fb", background: "rgba(255,255,255,0.9)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {navItem({ to: "/", label: "Home", onClick: () => setOpen(false) })}
            {navItem({ to: "/services", label: "Services", onClick: () => setOpen(false) })}
            {navItem({ to: "/about", label: "About", onClick: () => setOpen(false) })}
            {navItem({ to: "/contact", label: "Contact", onClick: () => setOpen(false) })}
            <Link
              to="/quote"
              onClick={() => setOpen(false)}
              style={{
                textDecoration: "none",
                background: "linear-gradient(135deg, #0B5ED7, #4F46E5)",
                color: "#fff",
                textAlign: "center",
                padding: "10px 14px",
                borderRadius: 10,
                fontWeight: 700,
              }}
            >
              Get a Quote
            </Link>

            {!user && (
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                style={{
                  textDecoration: "none",
                  background: "#FFC107",
                  color: "#222",
                  textAlign: "center",
                  padding: "10px 14px",
                  borderRadius: 10,
                  fontWeight: 700,
                }}
              >
                Login
              </Link>
            )}

            {user && (
              <>
                {user.role === "admin" && (
                  <Link
                    to="/admin"
                    onClick={() => setOpen(false)}
                    style={{
                      textDecoration: "none",
                      background: "#0ea5e9",
                      color: "#fff",
                      textAlign: "center",
                      padding: "10px 14px",
                      borderRadius: 10,
                      fontWeight: 700,
                    }}
                  >
                    Admin
                  </Link>
                )}
                <button
                  onClick={() => {
                    logout();
                    setOpen(false);
                    navigate("/");
                  }}
                  style={{
                    background: "#ef4444",
                    color: "#fff",
                    padding: "10px 14px",
                    borderRadius: 10,
                    fontWeight: 700,
                    border: "none",
                  }}
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Tiny CSS for responsive switch */}
      <style>{`
        @media (min-width: 900px) {
          .mobile-toggle { display: none; }
          .desktop-nav { 
            display: flex !important; 
            gap: 10px; 
            align-items: center;
          }
          .desktop-actions { 
            display: flex !important; 
            align-items: center; 
            gap: 10px; 
            margin-left: auto; 
          }
        }
      `}</style>

      {/* Desktop nav row */}
      <div
        className="desktop-row"
        style={{
          display: "none",
          maxWidth: 1200,
          margin: "0 auto",
          padding: "10px 18px",
          alignItems: "center",
          gap: 12,
        }}
      >
        <nav className="desktop-nav" style={{}}>
          {navItem({ to: "/", label: "Home" })}
          {navItem({ to: "/services", label: "Services" })}
          {navItem({ to: "/about", label: "About" })}
          {navItem({ to: "/contact", label: "Contact" })}
        </nav>

        <div className="desktop-actions">
          <Link
            to="/quote"
            style={{
              textDecoration: "none",
              background: "linear-gradient(135deg, #0B5ED7, #4F46E5)",
              color: "#fff",
              padding: "10px 16px",
              borderRadius: 10,
              fontWeight: 800,
              boxShadow: "0 6px 20px rgba(79,70,229,0.25)",
            }}
          >
            Get a Quote
          </Link>

          {!user ? (
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                background: "#FFC107",
                color: "#222",
                padding: "10px 16px",
                borderRadius: 10,
                fontWeight: 800,
              }}
            >
              Login
            </Link>
          ) : (
            <>
              {user.role === "admin" && (
                <Link
                  to="/admin"
                  style={{
                    textDecoration: "none",
                    background: "#0ea5e9",
                    color: "#fff",
                    padding: "10px 16px",
                    borderRadius: 10,
                    fontWeight: 800,
                  }}
                >
                  Admin
                </Link>
              )}
              <button
                onClick={() => {
                  logout();
                  navigate("/");
                }}
                style={{
                  background: "#ef4444",
                  color: "#fff",
                  padding: "10px 16px",
                  borderRadius: 10,
                  fontWeight: 800,
                  border: "none",
                }}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
