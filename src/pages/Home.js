import React, { useState } from "react";
import loadingImg from "../assets/loading.jpg";
import luggageImg from "../assets/luggage.jpg";
import bikeImg from "../assets/bike.jpg";
import carImg from "../assets/car.jpg";
import loadinghomeImg from "../assets/loadinghomepage.jpg";
import insuranceImg from "../assets/insurance.jpg";
import warehousehomeImg from "../assets/warehousehome.jpg";
import transportationImg from "../assets/transportation.jpg";
import packingMovingImg from "../assets/packingMoving.jpg";
import "./Home.css";
import RegionsGrid from "./RegionsGrid";
import ProfileFeaturesSection from "./ProfileFeaturesSection";
import HomeCarousel from "../components/HomeCarousel";



const serviceTabs = [
  { 
    key: "loading", 
    label: "Loading Unloading", 
    img: loadinghomeImg, 
    desc: "Expert team for fast and careful handling of goods during loading and unloading.", 
    fullDesc: "Our expert loading and unloading services ensure that your goods are handled carefully and transported with maximum safety. We use modern equipment and trained professionals to speed up the process without compromising on care."
  },
  { 
    key: "packing", 
    label: "Packing Moving", 
    img: packingMovingImg, 
    desc: "Secure packing and safe moving by professionals across India.", 
    fullDesc: "We offer secure, high-quality packing services using premium materials tailored for all types of items. Our packing experts take care of fragile, bulky, and specialized goods to make your move seamless and damage-free."
  },
  { 
    key: "local", 
    label: "Local Shifting", 
    img: loadingImg, 
    desc: "Local relocation for homes, offices, and shops with minimum hassle.", 
    fullDesc: "Whether moving within the city or nearby areas, our local shifting service provides quick and efficient relocation that fits your schedule and budget."
  },
  { 
    key: "car", 
    label: "Car Carriers", 
    img: carImg, 
    desc: "Specialized closed car transport for guaranteed safety.", 
    fullDesc: "Our closed car carrier service ensures your vehicle reaches safely without exposure to weather or road hazards, backed by insurance and professional handling."
  },
  { 
    key: "bike", 
    label: "Bike Transportation", 
    img: bikeImg, 
    desc: "Bike transportation with modern carriers and packaging.", 
    fullDesc: "Specialized carriers and packing for bike transportation, ensuring the safety and condition of your two-wheeler during transit."
  },
  { 
    key: "transport", 
    label: "Transportation", 
    img: transportationImg, 
    desc: "All types of goods logistics and transport services.", 
    fullDesc: "Comprehensive logistics solutions for all kinds of goods, with end-to-end tracking and support."
  },
  { 
    key: "warehouse", 
    label: "Warehouse", 
    img: warehousehomeImg, 
    desc: "Secure and climate-controlled warehousing for goods.", 
    fullDesc: "Our warehousing facilities offer secure, climate-controlled storage spaces with easy access and inventory management."
  },
  { 
    key: "insurance", 
    label: "Insurance", 
    img: insuranceImg, 
    desc: "Protect your goods with full risk cover and easy claims.", 
    fullDesc: "We provide full insurance coverage for your belongings during transit, with simple claims procedures for your peace of mind."
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("loading");
  const [expandedTab, setExpandedTab] = useState(null); // Track which tab is expanded

  const tabData = serviceTabs.find(t => t.key === activeTab);

  const toggleReadMore = () => {
    if (expandedTab === activeTab) {
      setExpandedTab(null); // Collapse if already expanded
    } else {
      setExpandedTab(activeTab); // Expand current tab
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #e3f2fd 0%, #ffffff 100%)",
        minHeight: "100vh",
      }}
    >
      {/* HERO (new) */}
      <section className="hero-wrapper">
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="eyebrow">Pan-India Packers & Movers</div>
            <h1>Move with <span className="accent">TTC</span> — Safe. Fast. Insured.</h1>
            <p>
              Household, office, factory, and vehicle relocation handled by trained
              professionals. Transparent pricing, end-to-end care.
            </p>
            <div className="hero-actions">
              <a className="btn-primary" href="/quote">Get a Free Quote</a>
              <a className="btn-ghost" href="/contact">Talk to an Expert</a>
            </div>
            <div className="trust-row">
              <div>★★★★★ Trusted by 10,000+ moves</div>
              <div>24/7 Support</div>
              <div>All-India Coverage</div>
            </div>
          </div>
          <div className="hero-art hero-banner">
            <img src={luggageImg} alt="Car Carrier" />
          </div>
        </div>
      </section>



      {/* Service Tabs Section */}
      <section
        style={{
          margin: "20px auto 40px",
          maxWidth: 1100,
          background: "#fff",
          boxShadow: "0 8px 24px rgba(25, 118, 210, 0.15)",
          borderRadius: 12,
          padding: 30,
        }}
      >
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          {serviceTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                setActiveTab(tab.key);
                setExpandedTab(null); // Reset expanded state on tab change
              }}
              style={{
                background: activeTab === tab.key ? "#1976D2" : "#e9f3ff",
                color: activeTab === tab.key ? "#fff" : "#1976D2",
                minWidth: 120,
                padding: "12px 14px",
                borderRadius: 6,
                border: "none",
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: activeTab === tab.key ? "0 0 8px #1976d23c" : "none",
                transition: "all 0.25s ease",
              }}
              onMouseOver={(e) => {
                if (activeTab !== tab.key) e.currentTarget.style.background = "#bbdefb";
              }}
              onMouseOut={(e) => {
                if (activeTab !== tab.key) e.currentTarget.style.background = "#e9f3ff";
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Service Display */}
        <div
          style={{
            marginTop: 36,
            display: "flex",
            gap: 26,
            alignItems: "flex-start",
          }}
        >
          <img
            src={tabData.img}
            alt="service"
            style={{ width: 180, borderRadius: 8, boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}
          />
          <div style={{ maxWidth: 700 }}>
            <h2 style={{ fontWeight: "bold", fontSize: 28 }}>
              {tabData.label}
            </h2>
            <p style={{ fontSize: 18 }}>
              {expandedTab === activeTab ? tabData.fullDesc : tabData.desc}
            </p>
            <button
              onClick={toggleReadMore}
              style={{
                marginTop: 18,
                padding: "11px 32px",
                borderRadius: 6,
                background: "#fff",
                color: "#1976D2",
                fontWeight: 600,
                border: "2px solid #1976D2",
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(25, 118, 210, 0.2)",
                transition: "all 0.3s ease",
                fontSize: 16,
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "#1976D2";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.color = "#1976D2";
              }}
            >
              {expandedTab === activeTab ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </section>

      <ProfileFeaturesSection />
      <HomeCarousel />
      <RegionsGrid />
    </div>
  );
}
