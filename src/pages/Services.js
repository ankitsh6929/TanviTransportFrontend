import React from "react";
import { Link } from "react-router-dom";
import packingIcon from "../assets/packing.png";
import movingIcon from "../assets/moving.png";
import transportIcon from "../assets/transport.png";
import warehouseIcon from "../assets/warehouse.png";

const servicesList = [
  { name: "Complete Shifting Solution", icon: packingIcon, desc: "Safe and efficient moving for home and office." },
  { name: "Warehouse Service", icon: warehouseIcon, desc: "Secure and climate-controlled storing facilities." },
  { name: "Parcel Service", icon: transportIcon, desc: "Fast and reliable parcel delivery across India." },
  { name: "Defence Relocation Service", icon: movingIcon, desc: "Specialized relocation for defence personnel." },
  { name: "Packers And Movers", icon: packingIcon, desc: "Professional packing and moving with care." },
  { name: "Corporate Relocation Service", icon: transportIcon, desc: "Seamless office shifting for businesses." },
  { name: "Surface Cargo Services", icon: transportIcon, desc: "Affordable surface cargo transport services." },
  { name: "Office Shifting Service", icon: movingIcon, desc: "Efficient office shifting with minimal downtime." },
  { name: "ODC Services All India", icon: transportIcon, desc: "Over Dimensional Cargo handling anywhere in India." },
  { name: "Domestic Relocation Service", icon: packingIcon, desc: "Reliable relocation within cities and states." },
  { name: "Bike & Car Carriers Service", icon: transportIcon, desc: "Safe transport of your vehicles nationwide." }
];

export default function Services() {
  return (
    <div style={{ maxWidth: 1100, margin: "40px auto", padding: "0 12px" }}>
      <h1 style={{ textAlign: "center", marginBottom: 34, fontWeight: "bold", color: "#1976D2" }}>
        Our Services
      </h1>

      {/* Service Cards Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
        gap: 30
      }}>
        {servicesList.map(service => (
          <div key={service.name}
            style={{
              background: "#fff",
              borderRadius: 12,
              boxShadow: "0 6px 15px #d9d9d9",
              padding: "28px 24px",
              textAlign: "center",
              transition: "transform 0.22s ease, box-shadow 0.22s ease",
              cursor: "pointer"
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 10px 25px #a0a0a0";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 6px 15px #d9d9d9";
            }}
          >
            <img src={service.icon} alt={service.name} style={{ width: 70, marginBottom: 18 }} />
            <h3 style={{ fontWeight: "bold", marginBottom: 14 }}>{service.name}</h3>
            <p style={{ color: "#666", marginBottom: 18 }}>{service.desc}</p>
            <Link to="/quote">
              <button style={{
                background: "#1976D2",
                color: "#fff",
                border: 0,
                padding: "12px 26px",
                borderRadius: 6,
                fontWeight: "bold",
                cursor: "pointer"
              }}>Get a Quote</button>
            </Link>
          </div>
        ))}
      </div>

      {/* Why Choose Us Section */}
      <div style={{
        marginTop: 56,
        background: "#e8f0fe",
        padding: 28,
        borderRadius: 14,
        textAlign: "center"
      }}>
        <h2 style={{ fontWeight: "bold", marginBottom: 26, color: "#0b3b8f" }}>Why Choose TTC?</h2>
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: 40,
          flexWrap: "wrap"
        }}>
          {["Professional Team", "Secure Packing", "Timely Delivery", "Insurance Coverage", "All India Service", "24/7 Support"].map((point) => (
            <div key={point} style={{ maxWidth: 180 }}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
                alt={point}
                style={{ width: 48, marginBottom: 12 }}
              />
              <div style={{ fontWeight: "bold", marginBottom: 6 }}>{point}</div>
              <small style={{ color: "#555" }}>
                {/* You can customize descriptions here if desired */}
                {point === "Professional Team" && "Experienced and skilled movers and packers."}
                {point === "Secure Packing" && "Quality materials and careful packaging."}
                {point === "Timely Delivery" && "On-time moving service as promised."}
                {point === "Insurance Coverage" && "Full insurance for your valuable goods."}
                {point === "All India Service" && "Moving services covering all states."}
                {point === "24/7 Support" && "Round the clock customer assistance."}
              </small>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
