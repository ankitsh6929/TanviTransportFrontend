import React from "react";
import statueImg from "../assets/statue.jpg";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div style={{
      maxWidth: 1150,
      margin: "50px auto",
      display: "flex",
      gap: "44px",
      alignItems: "flex-start",
      flexWrap: "wrap"
    }}>
      {/* Left: Branding/Photo */}
      <div style={{
        flex: "0 0 340px",
        minWidth: "220px",
        display: "flex",
        justifyContent: "center"
      }}>
        <img src={statueImg} alt="Brand" style={{
          width: "100%",
          maxWidth: "340px",
          borderRadius: "22px",
          boxShadow: "0 4px 24px #ebebeb"
        }} />
      </div>

      {/* Right: Reusable Contact Form */}
      <ContactForm />
    </div>
  );
}
