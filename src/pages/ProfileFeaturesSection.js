import React, { useState } from "react";
import boxTruckImg from "../assets/box-truck.jpg";
import manWithBoxImg from "../assets/man-box.jpg";
import womanMovingImg from "../assets/woman-moving.jpg";

const featureCards = [
  {
    key: "experts",
    title: "Our Team Experts",
    shortDesc: "Our reputation is built on quality services provided by capable teams.",
    fullDesc:
      "With a dedicated team of experts, we make each relocation smooth, trustworthy, and hassle-free. Our professionals specialize in managing delicate belongings, large furniture, and end-to-end logistics across the country.",
    img: boxTruckImg,
  },
  {
    key: "quality",
    title: "Our Quality Assurance",
    shortDesc:
      "Committed to safety, we handle packing, moving, and delivering of household items with care.",
    fullDesc:
      "We follow strict quality standards in packing, handling, and transporting goods. Using premium materials, advanced techniques, and continuous monitoring, TTC guarantees safety and customer satisfaction in every move.",
    img: manWithBoxImg,
  },
  {
    key: "vision",
    title: "Our Vision",
    shortDesc:
      "We strive to redefine excellence in packing and relocation services.",
    fullDesc:
      "Our vision is to become India’s most trusted relocation partner by delivering innovative logistics solutions, setting high service benchmarks, and maintaining long-term relationships with clients built on trust and reliability.",
    img: womanMovingImg,
  },
];

export default function ProfileFeaturesSection() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section
      style={{
        maxWidth: 1200,
        margin: "60px auto",
        display: "flex",
        gap: 40,
        flexWrap: "wrap",
      }}
    >
      {/* Left side: Profile block */}
      <div style={{ flex: 1, minWidth: 330 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            marginBottom: 14,
          }}
        >
          <img
            src={boxTruckImg}
            alt="Team"
            style={{ width: 100, borderRadius: 10 }}
          />
          <div>
            <span style={{ fontWeight: 700, fontSize: 23, color: "#1976d2" }}>
              Get relocated anywhere in India with{" "}
              <span style={{ color: "#FFC107" }}>REAL SPECIALISTS…</span>
            </span>
            <div style={{ display: "flex", gap: 9, marginTop: 9 }}>
              <img
                src={manWithBoxImg}
                alt="Moving"
                style={{ width: 38, borderRadius: 6 }}
              />
              <img
                src={womanMovingImg}
                alt="Packing"
                style={{ width: 38, borderRadius: 6 }}
              />
            </div>
          </div>
        </div>
        <h2 style={{ color: "red", fontWeight: "bold", marginBottom: 10 }}>
          OUR PROFILE
        </h2>
        <div
          style={{
            fontSize: 16,
            color: "#222",
            marginBottom: 18,
            lineHeight: "1.7",
          }}
        >
          <span style={{ fontWeight: "bold" }}>
            Tanvi Transport Company (TTC)
          </span>{" "}
          {expanded === "profile"
            ? "is a nation-wide company that specializes in Packers and Movers, Household & Office Shifting, Factory Shifting, Goods Packaging, Loading & Unloading, and Car Transportation. Our relocation services use special trailers, containers, trucks, and more. TTC understands the importance of safe transit and offers insurance arrangements to ensure peace of mind and protection from risk during moving."
            : "is a nation-wide company that specializes in Packers and Movers, Household & Office Shifting, Factory Shifting, Goods Packaging, Loading & Unloading, and Car Transportation."}
        </div>
        <button
          onClick={() =>
            setExpanded(expanded === "profile" ? null : "profile")
          }
          style={{
            padding: "11px 36px",
            borderRadius: 7,
            background: "#fff",
            border: "2px solid #1976D2",
            color: "#1976D2",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          {expanded === "profile" ? "Read Less" : "Read More"}
        </button>
      </div>

      {/* Right side: 3 feature cards */}
      <div
        style={{
          flex: 1.1,
          minWidth: 340,
          display: "grid",
          gap: 21,
          gridTemplateRows: "repeat(3,minmax(112px,1fr))",
        }}
      >
        {featureCards.map((card) => (
          <div
            key={card.key}
            style={{
              background: "#fff",
              boxShadow: "0 2px 8px #eaeaea",
              borderRadius: 12,
              padding: "21px 22px",
              display: "flex",
              gap: 18,
              alignItems: "center",
            }}
          >
            <img
              src={card.img}
              alt="feature"
              style={{ width: 80, borderRadius: 9 }}
            />
            <div>
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                  color: "red",
                  marginBottom: 6,
                }}
              >
                {card.title}
              </div>
              <div style={{ fontSize: 15, marginBottom: 8 }}>
                {expanded === card.key ? card.fullDesc : card.shortDesc}
              </div>
              <button
                onClick={() =>
                  setExpanded(expanded === card.key ? null : card.key)
                }
                style={{
                  padding: "7px 22px",
                  borderRadius: 6,
                  background: "#fff",
                  color: "#1976D2",
                  border: "2px solid #1976D2",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                {expanded === card.key ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
