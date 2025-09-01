import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import RegionsGrid from "./RegionsGrid";

export default function RegionContent() {
  const { region } = useParams();
  const decodedRegion = decodeURIComponent(region || "");
  // Expect strings like "Packers and Movers in Gurugram"
  const city = useMemo(() => {
    const parts = decodedRegion.split(/ in /i);
    return parts.length > 1 ? parts[1] : decodedRegion.replace(/^Packers and Movers in\s*/i, "").trim();
  }, [decodedRegion]);

  return (
    <div style={{ background: "#fff", padding: "40px 20px" }}>
      {/* 1) Contact form (same as your /contact page form) */}
      <section style={{ marginBottom: "50px", maxWidth: 1150, marginInline: "auto" }}>
        <ContactForm />
      </section>

      {/* 2) Welcome + SEO content (dynamically uses the clicked city) */}
      <section style={{ maxWidth: 900, margin: "0 auto 50px auto", lineHeight: 1.6 }}>
        <h1 style={{ fontSize: 26, fontWeight: 800, marginBottom: 14 }}>
          Welcome to Tanvi Transport Company Packers and Movers in {city}
        </h1>

        <p>
          <strong>Packers and Movers in {city}</strong> with extensive experience and professional expertise.
          We understand you are looking for reliable and efficient relocation services in {city}.
        </p>

        <p>
          <strong>Tanvi Transport Company</strong> proudly stands as one of the most trusted Packers and Movers in {city},
          handling both household and commercial relocations. Our years of dedicated service and experience make us a
          preferred choice for clients across the region.
        </p>

        <h2 style={{ fontSize: 22, marginTop: 22 }}>Packers and Movers in {city}</h2>
        <p>
          <strong>Movers and Packers in {city}</strong> — we emphasize thorough training for our packing staff and
          technicians, following international safety and handling standards. We specialize in household goods
          relocation and offer dependable services trusted by multinational companies, private organizations,
          embassies, government agencies, and individual clients.
        </p>

        <h3 style={{ marginTop: 22 }}>Keyword:</h3>
        <ul>
          <li>Packers and Movers in {city}</li>
          <li>Movers and Packers in {city}</li>
          <li>Packing and Moving Services in {city}</li>
          <li>Warehouse Services in {city}</li>
          <li>Household Goods Shifting Services in {city}</li>
          <li>Office Shifting Services in {city}</li>
          <li>Home Relocation Services in {city}</li>
          <li>Car Transportation Services in {city}</li>
          <li>Bike Transportation Services in {city}</li>
          <li>Loading and Unloading Services in {city}</li>
          <li>Top Packers and Movers in {city}</li>
          <li>Best Packing and Moving Company in {city}</li>
        </ul>

        <p style={{ marginTop: 22 }}>
          Our main mission at Packers and Movers in {city} is <strong>providing exceptional service</strong>.
          <strong> Tanvi Transport Company — {city}</strong> ensures smooth relocations from {city} to other major
          cities across India. Fully insured, we guarantee a safe and hassle-free moving experience. Our name has
          become synonymous with reliability and trust in {city}.
        </p>

        <p style={{ marginTop: 22 }}>
          For any queries or more information, please contact us:
          <br />
          <b>Email:</b> tanvitransportcompany@gmail.com
          <br />
          <b>Phone:</b> +91-6901244444, +91-9864535143
        </p>
      </section>

      {/* 3) Region grid again for interlinking */}
      <section style={{ background: "#f7f7f7", padding: "10px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <RegionsGrid />
        </div>
      </section>
    </div>
  );
}
