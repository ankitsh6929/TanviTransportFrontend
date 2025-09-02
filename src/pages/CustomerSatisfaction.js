// src/pages/CustomerSatisfaction.jsx
import React from "react";

const card = {
  background: "#fff",
  borderRadius: 14,
  boxShadow: "0 6px 18px rgba(0,0,0,.06)",
  padding: "24px 22px",
  textAlign: "center",
};

export default function CustomerSatisfaction() {
  const testimonials = [
    {
      quote:
        "I am highly impressed with the professionalism and passion of people of TTC Packers and Movers. Recommended to others also.",
      name: "R. Shrinivasan",
      city: "Bhopal",
    },
    {
      quote:
        "The staff is amazing! Very helpful and considerate with a sense of urgency & Loads are 99% on time. Thank You TTC Packers and Movers!",
      name: "Vikas Jana",
      city: "Gwalior",
    },
    {
      quote:
        "I have never ever seen this kind of reliability and expertise in the packing and moving companies. I have used their satisfactory packers and movers services.",
      name: "Rajkumar Pandey",
      city: "Pune",
    },
  ];

  return (
    <div style={{ background: "#efeae5", padding: "30px 0 60px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px" }}>
        <div style={{ color: "#c0392b", fontWeight: 800, letterSpacing: 1, textTransform: "uppercase" }}>❮ Testimonials ❯</div>
        <h1 style={{ fontSize: 36, fontWeight: 900, margin: "6px 0 22px", color: "#222" }}>
          1000+ Happy Customers Said
        </h1>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 22 }}>
          {testimonials.map((t) => (
            <div key={t.name} style={card}>
              <p style={{ color: "#333", fontSize: 16, lineHeight: 1.7 }}>{t.quote}</p>
              <div style={{ fontWeight: 900, fontSize: 20, marginTop: 10 }}>{t.name}</div>
              <div style={{ color: "#7a7a7a", marginTop: 4 }}>{t.city}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
