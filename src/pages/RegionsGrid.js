// src/pages/RegionsGrid.jsx
import React from "react";
import { Link } from "react-router-dom";

const regions = {
  India: [
    "Packers and Movers in Delhi",
    "Packers and Movers in Gurugram",
    "Packers and Movers in Noida",
    "Packers and Movers in Ghaziabad",
  ],

  Nagaland: [
    "Packers and Movers in Dimapur",
    "Packers and Movers in Kiphire",
    "Packers and Movers in Kohima",
    "Packers and Movers in Longleng",
    "Packers and Movers in Mokokchung",
    "Packers and Movers in Peren",
    "Packers and Movers in Phek",
    "Packers and Movers in Tuensang",
    "Packers and Movers in Wokha",
    "Packers and Movers in Zunheboto",
  ],

  Meghalaya: [
    "Packers and Movers in Shillong",
    "Packers and Movers in Tura",
    "Packers and Movers in Jowai",
    "Packers and Movers in Umshong",
    "Packers and Movers in Ladrymbai",
    "Packers and Movers in Mendipathar",
    "Packers and Movers in Rongjeng",
    "Packers and Movers in Jorabat",
    "Packers and Movers in Byrnihat",
    "Packers and Movers in Nongstong",
  ],

  "Arunachal Pradesh": [
    "Packers and Movers in Naharlagun",
    "Packers and Movers in Itanagar",
    "Packers and Movers in Ranki",
    "Packers and Movers in Tippi Camp",
    "Packers and Movers in New Palin",
    "Packers and Movers in Seppa",
    "Packers and Movers in Khellong",
    "Packers and Movers in Megalong",
    "Packers and Movers in Kheti",
    "Packers and Movers in Nafra",
    "Packers and Movers in Yaekuli",
    "Packers and Movers in Bordumsa",
    "Packers and Movers in Bhanderdawa",
    "Packers and Movers in Chimpy",
    "Packers and Movers in Hapoli",
    "Packers and Movers in Kimin",
    "Packers and Movers in Tenga Valley",
    "Packers and Movers in Aalo",
    "Packers and Movers in Nirjuli",
    "Packers and Movers in Upper Subansiri",
    "Packers and Movers in West Kameng",
    "Packers and Movers in Siang",
    "Packers and Movers in Namsai",
    "Packers and Movers in Bomdila",
    "Packers and Movers in Daporijo",
    "Packers and Movers in Roing",
    "Packers and Movers in Tezu",
    "Packers and Movers in Tawang",
    "Packers and Movers in Ziro",
    "Packers and Movers in Lohit",
    "Packers and Movers in Pasighat",
    "Packers and Movers in Yupia",
    "Packers and Movers in Papum Pare",
    "Packers and Movers in Lower Subansiri",
  ],

  Mizoram: [
    "Packers and Movers in Aizawl",
    "Packers and Movers in Kolasib",
    "Packers and Movers in Lawngtlai",
    "Packers and Movers in Lunglei",
  ],

  Tripura: [
    "Packers and Movers in Dhalai",
    "Packers and Movers in Ambassa",
    "Packers and Movers in Sepahijala",
    "Packers and Movers in Khowai",
  ],

  Sikkim: [
    "Packers and Movers in East Sikkim",
    "Packers and Movers in Gangtok",
    "Packers and Movers in North Sikkim",
    "Packers and Movers in Mangan",
  ],

  // ✅ Assam (already replaced by your full list)
  Assam: [
    "Packers and Movers in Guwahati",
    "Packers and Movers in Jorabat",
    "Packers and Movers in Sonapur",
    "Packers and Movers in Khetri",
    "Packers and Movers in Jagiroad",
    "Packers and Movers in Maligaon",
    "Packers and Movers in Nagaon",
    "Packers and Movers in Jorhat",
    "Packers and Movers in Numaligarh",
    "Packers and Movers in Sivasagar",
    "Packers and Movers in Dibrugarh",
    "Packers and Movers in Tinsukia",
    "Packers and Movers in Duliajan",
    "Packers and Movers in Digboi",
    "Packers and Movers in Namrup",
    "Packers and Movers in Naharkatia",
    "Packers and Movers in Tezpur",
    "Packers and Movers in Mirza",
    "Packers and Movers in Mangaldai",
    "Packers and Movers in Rangia",
    "Packers and Movers in Nalbari",
    "Packers and Movers in Barpeta",
    "Packers and Movers in Bongaigaon",
    "Packers and Movers in Kokrajhar",
    "Packers and Movers in Dhubri",
    "Packers and Movers in Goalpara",
    "Packers and Movers in Biswanath Chariali",
    "Packers and Movers in Hojai",
    "Packers and Movers in Lanka",
    "Packers and Movers in Lumding",
    "Packers and Movers in Maibong",
    "Packers and Movers in Lakhipur",
    "Packers and Movers in North Lakhimpur",
    "Packers and Movers in Changsari",
    "Packers and Movers in Dhekiajuli",
  ],

  Manipur: [
    "Packers and Movers in Bishnupur",
    "Packers and Movers in Churachandpur",
    "Packers and Movers in Chandel",
    "Packers and Movers in Imphal East",
  ],
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
            <div style={{ fontWeight: 700, fontSize: "17px", marginBottom: "8px" }}>
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
