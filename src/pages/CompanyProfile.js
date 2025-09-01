import React, { useState } from "react";

const profileCards = [
  {
    key: 'team',
    title: 'Our Team Experts',
    img: require("../assets/loading.jpg"),
    desc: 'We are known for professional services rendered by efficient teams.',
    full:
      'Our specialists undergo regular training for relocation techniques, inventory management, and careful handling, ensuring consistent quality on every project.',
  },
  {
    key: 'quality',
    title: 'Our Quality Assurance',
    img: require("../assets/car.jpg"),
    desc: 'We have been packing, moving, and delivering household goods safely.',
    full:
      'Our commitment is backed by transparent procedures, top-rated packing materials, and strict supervision from start to finish for damage-free moves.',
  },
  {
    key: 'vision',
    title: 'Our Vision',
    img: require("../assets/bike.jpg"),
    desc: 'We look forward to setting a benchmark in packing & moving services.',
    full:
      'The company aspires to set new standards in customer satisfaction, operational efficiency, and value-driven service across all Indian cities.',
  },
];

export default function CompanyProfile() {
  const [expanded, setExpanded] = useState({});

  const handleToggle = (key) => {
    setExpanded(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 480 }}>
      {profileCards.map(card => (
        <div
          key={card.key}
          style={{
            background: "#fff",
            boxShadow: "0 4px 18px #e3e3ee",
            borderRadius: 16,
            padding: "26px 22px",
            margin: "0 auto",
            maxWidth: 480
          }}
        >
          <img
            src={card.img}
            alt={card.title}
            style={{
              width: 72,
              borderRadius: 8,
              marginBottom: 8,
              boxShadow: "0 2px 10px #ccc"
            }}
          />
          <div
            style={{
              fontWeight: "bold",
              color: "#D32F2F",
              fontSize: "1.15rem",
              marginBottom: 6
            }}
          >
            {card.title}
          </div>
          <div style={{ color: "#27313a", fontSize: 17, marginBottom: 6 }}>
            {card.desc}
            {expanded[card.key] && (
              <span style={{ display: "block", marginTop: 6 }}>{card.full}</span>
            )}
          </div>
          <button
            onClick={() => handleToggle(card.key)}
            style={{
              border: "2px solid #1976D2",
              color: "#1976D2",
              background: "#fff",
              borderRadius: 8,
              padding: "7px 22px",
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: "0 1px 5px #e3e3ee",
              fontSize: 16,
              marginTop: 5
            }}
          >
            {expanded[card.key] ? "Readless" : "Readmore"}
          </button>
        </div>
      ))}
    </div>
  );
}
