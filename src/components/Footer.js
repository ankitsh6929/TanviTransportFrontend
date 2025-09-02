// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer style={{ background: "#0B5ED7", color: "#fff", marginTop: 40 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "28px 16px", display: "grid", gap: 20, gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))" }}>
        <div>
          <div style={{ fontWeight: 900, fontSize: 18 }}>Tanvi Transport Company</div>
          <div style={{ marginTop: 8, opacity: 0.9 }}>
            No.47, Beltola College Road, Bongaon, Guwahati, Assam, 781028, India
          </div>
          <div style={{ marginTop: 8, opacity: 0.9 }}>
            Email: tanvitransportcompany@gmail.com
          </div>
          <div style={{ marginTop: 8, opacity: 0.9 }}>
            Phone: 6901244444, 9864535143
          </div>
        </div>

        <div>
          <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 8 }}>Quick Links</div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.9 }}>
            <li><a href="/" style={linkStyle}>Home</a></li>
            <li><a href="/services" style={linkStyle}>Services</a></li>
            <li><a href="/about" style={linkStyle}>About</a></li>
            <li><a href="/customer-satisfaction" style={linkStyle}>Customer Satisfaction</a></li>
            <li><a href="/contact" style={linkStyle}>Contact</a></li>
            <li><a href="/quote" style={linkStyle}>Get a Quote</a></li>
          </ul>
        </div>

        <div>
          <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 8 }}>Follow Us</div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.9 }}>
            <li><a href="https://www.youtube.com/@tanvitransportcompany" target="_blank" rel="noreferrer" style={linkStyle}>YouTube</a></li>
            <li><a href="https://twitter.com/SONU9864535143" target="_blank" rel="noreferrer" style={linkStyle}>Twitter / X</a></li>
            <li><a href="https://www.facebook.com/share/1HVbottRXv/" target="_blank" rel="noreferrer" style={linkStyle}>Facebook</a></li>
            <li><a href="https://t.ly/8CG76" target="_blank" rel="noreferrer" style={linkStyle}>WhatsApp</a></li>
          </ul>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,.25)", padding: "12px 16px", textAlign: "center", fontSize: 14, opacity: 0.9 }}>
        © {new Date().getFullYear()} Tanvi Transport Company. All rights reserved.
      </div>
    </footer>
  );
}

const linkStyle = { color: "#fff", textDecoration: "none", opacity: 0.95 };
