// src/components/Footer.jsx
import React from "react";
import logo from "../assets/logo.png"; // company logo

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #0B5ED7, #003c8f)",
        color: "#fff",
        marginTop: 40,
      }}
    >
      {/* Main Footer Content */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "40px 20px",
          display: "grid",
          gap: 30,
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
        }}
      >
        {/* Company Info */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: 12,
            }}
          >
            <img
              src={logo}
              alt="Tanvi Transport Logo"
              style={{ height: 50, width: "auto" }}
            />
            <span style={{ fontWeight: 900, fontSize: 20 }}>
              Tanvi Transport Company
            </span>
          </div>

          <div style={{ marginTop: 8, opacity: 0.9, lineHeight: 1.6 }}>
            No.47, Beltola College Road, Bongaon, Guwahati, Assam, 781028, India
          </div>
          <div style={{ marginTop: 8, opacity: 0.9 }}>
            Email:{" "}
            <a
              href="mailto:tanvitransportcompany@gmail.com"
              style={linkStyle}
            >
              tanvitransportcompany@gmail.com
            </a>
          </div>
          <div style={{ marginTop: 8, opacity: 0.9 }}>
            Phone:{" "}
            <a href="tel:6901244444" style={linkStyle}>
              6901244444
            </a>{" "}
            ,{" "}
            <a href="tel:9864535143" style={linkStyle}>
              9864535143
            </a>
          </div>
          <div style={{ marginTop: 10 }}>
            📍{" "}
            <a
              href="https://maps.app.goo.gl/dJyFvH6wtoBujhaGA?g_st=aw"
              target="_blank"
              rel="noreferrer"
              style={{ ...linkStyle, fontWeight: 600 }}
            >
              View on Google Maps
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <div style={sectionHeading}>Quick Links</div>
          <ul style={ulStyle}>
            <li>
              <a href="/" style={linkStyle}>
                Home
              </a>
            </li>
            <li>
              <a href="/services" style={linkStyle}>
                Services
              </a>
            </li>
            <li>
              <a href="/about" style={linkStyle}>
                About
              </a>
            </li>
            <li>
              <a href="/customer-satisfaction" style={linkStyle}>
                Customer Satisfaction
              </a>
            </li>
            <li>
              <a href="/contact" style={linkStyle}>
                Contact
              </a>
            </li>
            <li>
              <a href="/quote" style={linkStyle}>
                Get a Quote
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <div style={sectionHeading}>Follow Us</div>
          <ul style={ulStyle}>
            <li>
              ▶️{" "}
              <a
                href="https://www.youtube.com/@tanvitransportcompany"
                target="_blank"
                rel="noreferrer"
                style={linkStyle}
              >
                YouTube
              </a>
            </li>
            <li>
              🐦{" "}
              <a
                href="https://twitter.com/SONU9864535143"
                target="_blank"
                rel="noreferrer"
                style={linkStyle}
              >
                Twitter / X
              </a>
            </li>
            <li>
              📘{" "}
              <a
                href="https://www.facebook.com/share/1HVbottRXv/"
                target="_blank"
                rel="noreferrer"
                style={linkStyle}
              >
                Facebook
              </a>
            </li>
            <li>
              💬{" "}
              <a
                href="https://t.ly/8CG76"
                target="_blank"
                rel="noreferrer"
                style={linkStyle}
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,.25)",
          padding: "14px 20px",
          textAlign: "center",
          fontSize: 14,
          opacity: 0.9,
        }}
      >
        © {new Date().getFullYear()} Tanvi Transport Company. All rights
        reserved.
      </div>
    </footer>
  );
}

// Styles
const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  opacity: 0.95,
};

const sectionHeading = {
  fontWeight: 800,
  fontSize: 16,
  marginBottom: 12,
};

const ulStyle = { listStyle: "none", padding: 0, margin: 0, lineHeight: 1.9 };
