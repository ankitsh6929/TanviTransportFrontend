import React from "react";
import { Link } from "react-router-dom";

const regions = {
  India: ["Packers and Movers in Delhi", "Packers and Movers in Gurugram", "Packers and Movers in Noida", "Packers and Movers in Ghaziabad"],
  Nagaland: ["Packers and Movers in Kohima", "Packers and Movers in Longleng", "Packers and Movers in Mokokchung", "Packers and Movers in Mon"],
  Mizoram: ["Packers and Movers in Aizawl", "Packers and Movers in Kolasib", "Packers and Movers in Lawngtlai", "Packers and Movers in Lunglei"],
  Meghalaya: ["Packers and Movers in Jowai", "Packers and Movers in Khiehriat", "Packers and Movers in Shillong", "Packers and Movers in Nongpoh"],
  Tripura: ["Packers and Movers in Dhalai", "Packers and Movers in Ambassa", "Packers and Movers in Sepahijala", "Packers and Movers in Khowai"],
  "Arunachal Pradesh": ["Packers and Movers in Anini", "Packers and Movers in Kurung Kumey", "Packers and Movers in Koloriang", "Packers and Movers in Namsai"],
  Sikkim: ["Packers and Movers in East Sikkim", "Packers and Movers in Gangtok", "Packers and Movers in North Sikkim", "Packers and Movers in Mangan"],
  Assam: ["Packers and Movers in Baksa", "Packers and Movers in Mushalpur", "Packers and Movers in Barpeta", "Packers and Movers in Biswanath"],
  Guwahati: ["Packers and Movers in Ambikagiri Nagar", "Packers and Movers in Ambari", "Packers and Movers in Adabari", "Packers and Movers in Amingaon"],
  Manipur: ["Packers and Movers in Bishnupur", "Packers and Movers in Churachandpur", "Packers and Movers in Chandel", "Packers and Movers in Imphal East"],
};

export default function RegionsGrid() {
  const cardStyle = {
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 2px 8px #ededed",
    padding: "18px",
    maxHeight: "190px",
    overflowY: "auto",
    marginBottom: "18px",
  };

  return (
    <section style={{ background: "#f7f7f7", padding: "34px 0 50px 0" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "24px",
        }}
      >
        {Object.entries(regions).map(([region, locations]) => (
          <div key={region} style={cardStyle}>
            <div
              style={{
                fontWeight: 700,
                fontSize: "17px",
                marginBottom: "8px",
              }}
            >
              {region}
            </div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {locations.map((loc) => (
                <li key={loc} style={{ marginBottom: "7px" }}>
                  <Link
                    to={`/region/${encodeURIComponent(loc)}`}
                    reloadDocument
                    style={{
                      display: "block",
                      padding: "4px 0",
                      borderRadius: "6px",
                      textDecoration: "none",
                      color: "#333",
                      transition: "background 0.18s",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.background = "#e2f0fb")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.background = "transparent")
                    }
                  >
                    {loc}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
