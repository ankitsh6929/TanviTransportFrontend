import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{ marginTop: 60, background: "#0f172a", color: "#e2e8f0" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "40px 18px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 28,
        }}
      >
        <div>
          <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 8 }}>Tanvi Transport Company</div>
          <div style={{ color: "#94a3b8" }}>
            Office No. 7 Golapi Market, Guwahati Assam 781001
            <br />
            Email: tanvitransportcompany@gmail.com
            <br />
            Care: 6901244444 / 9864535143
          </div>
        </div>

        <div>
          <div style={{ fontWeight: 700, marginBottom: 10 }}>Quick Links</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <Link to="/" style={{ color: "#cbd5e1", textDecoration: "none" }}>Home</Link>
            <Link to="/services" style={{ color: "#cbd5e1", textDecoration: "none" }}>Services</Link>
            <Link to="/about" style={{ color: "#cbd5e1", textDecoration: "none" }}>About</Link>
            <Link to="/contact" style={{ color: "#cbd5e1", textDecoration: "none" }}>Contact</Link>
            <Link to="/quote" style={{ color: "#cbd5e1", textDecoration: "none" }}>Online Quote</Link>
          </div>
        </div>

        <div>
          <div style={{ fontWeight: 700, marginBottom: 10 }}>Why TTC?</div>
          <ul style={{ margin: 0, paddingLeft: 18, color: "#94a3b8", lineHeight: 1.8 }}>
            <li>Professional Team</li>
            <li>Secure Packing</li>
            <li>Timely Delivery</li>
            <li>Insurance Coverage</li>
            <li>All India Service</li>
            <li>24/7 Support</li>
          </ul>
        </div>

        <div>
          <div style={{ fontWeight: 700, marginBottom: 10 }}>Stay Updated</div>
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{ display: "flex", gap: 10, alignItems: "center" }}
          >
            <input
              placeholder="Your email"
              type="email"
              style={{
                flex: 1,
                padding: "12px 14px",
                borderRadius: 10,
                border: "1px solid #334155",
                background: "#0b1220",
                color: "#e2e8f0",
              }}
            />
            <button
              style={{
                background: "linear-gradient(135deg, #0B5ED7, #4F46E5)",
                color: "#fff",
                border: "none",
                padding: "12px 18px",
                borderRadius: 10,
                fontWeight: 800,
              }}
            >
              Subscribe
            </button>
          </form>
          <div style={{ marginTop: 12, color: "#64748b", fontSize: 13 }}>
            We never spam. Unsubscribe anytime.
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid #152035" }} />
      <div style={{ textAlign: "center", padding: "14px 10px", color: "#94a3b8", fontSize: 14 }}>
        © {new Date().getFullYear()} Tanvi Transport Company. All rights reserved.
      </div>
    </footer>
  );
}
