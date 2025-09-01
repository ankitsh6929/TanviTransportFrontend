import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
export default function Navbar() {
  return (
    <nav style={{
      display: 'flex', alignItems: 'center', background: "#fff", padding: "12px 32px", 
      boxShadow: "0 2px 8px #efefef", position: "sticky", top: 0, zIndex: 10
    }}>
      <img src={logo} alt="TTC Logo" style={{height: 50, marginRight: 16}} />
      <div style={{flex: 1}}>
        <Link to="/" style={{margin: "0 22px", fontWeight: 500}}>Home</Link>
        <Link to="/services" style={{margin: "0 22px", fontWeight: 500}}>Services</Link>
        <Link to="/about" style={{margin: "0 22px", fontWeight: 500}}>About</Link>
        <Link to="/contact" style={{margin: "0 22px", fontWeight: 500}}>Contact</Link>
      </div>
      <Link to="/quote">
        <button style={{
          background: "#FFC107", color: "#222", padding: "8px 22px", borderRadius: 5, border: 0, cursor: "pointer"
        }}>Online Quote</button>
      </Link>
    </nav>
  );
}
