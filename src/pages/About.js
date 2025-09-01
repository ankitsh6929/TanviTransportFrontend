import React from "react";
import teamPhoto from "../assets/team-photo.jpg"; // Your chosen photo
import movingTruck from "../assets/moving-truck.jpg"; // Another relevant image

export default function About() {
  return (
    <div style={{ maxWidth: 1000, margin: "40px auto", padding: "0 14px" }}>
      {/* Header Section */}
      <header style={{ textAlign: "center", marginBottom: 40 }}>
        <h1 style={{ fontWeight: "bold", fontSize: 36, color: "#1976D2" }}>
          About Tanvi Transport Company
        </h1>
        <p style={{ fontSize: 18, color: "#555", marginTop: 8 }}>
          Reliable Packers & Movers with Quality and Care Across India
        </p>
      </header>

      {/* Company Profile & Images */}
      <section style={{ display: "flex", gap: 36, flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: 320 }}>
          <img
            src={teamPhoto}
            alt="Our Team"
            style={{ width: "100%", borderRadius: 10, boxShadow: "0 2px 18px #ccc" }}
          />
        </div>
        <div style={{ flex: 1, minWidth: 320 }}>
          <p style={{ fontSize: 17, lineHeight: "1.7", color: "#333" }}>
            Tanvi Transport Company (TTC) is a trusted name in the packers and movers industry, headquartered in Guwahati, Assam. With several years of experience, we are dedicated to providing safe, timely, and cost-effective relocation services throughout India. Our expertise covers household shifting, office relocation, factory shifting, vehicle transportation, warehousing, and specialized cargo handling. We equip our team with professional training and use modern equipment to ensure your belongings reach their destination securely and on time.
          </p>
          <p style={{ marginTop: 18, fontSize: 17, lineHeight: "1.7", color: "#333" }}>
            Our commitment to quality, careful packing, transparent pricing, and excellent customer support has earned us a loyal clientele. At TTC, safety is our priority; hence, we also offer complete insurance coverage for your valuable goods during transit.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section style={{ marginTop: 48, background: "#f0f7ff", padding: 28, borderRadius: 12 }}>
        <h2 style={{ color: "#1976D2", fontWeight: "bold", marginBottom: 20 }}>
          Our Core Values
        </h2>
        <ul style={{ listStyleType: "square", paddingLeft: 20, color: "#555", fontSize: 16 }}>
          <li>Customer-centric and transparent service</li>
          <li>Timely delivery and professional handling</li>
          <li>Expert and dedicated team members</li>
          <li>Complete insurance for safety and peace of mind</li>
          <li>Nationwide coverage with affordable pricing</li>
        </ul>
      </section>

   {/* Image below core values */}
<div style={{ marginTop: 40, textAlign: "center" }}>
  <img
    src={movingTruck}
    alt="Moving Truck"
    style={{
      width: "340px",        // Smaller width for the moving truck
      maxWidth: "100%",      // Responsive for small screens
      height: "auto",        // Keeps aspect ratio
      borderRadius: 10,
      boxShadow: "0 2px 18px #ccc"
    }}
  />
</div>


      {/* Call to Action */}
      <div style={{ marginTop: 40, textAlign: "center" }}>
        <a href="/quote" style={{
          background: "#1976D2",
          color: "#fff",
          padding: "14px 44px",
          fontSize: 18,
          fontWeight: "bold",
          borderRadius: 8,
          textDecoration: "none"
        }}>
          Get a Free Quote
        </a>
      </div>
    </div>
  );
}
