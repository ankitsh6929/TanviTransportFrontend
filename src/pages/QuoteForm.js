import React, { useState } from "react";

const accent = "#1976D2";
const accentSoft = "#e3f2fd";
const borderRadius = "14px";
const boxShadow = "0 4px 24px #a3c2f7a8";

export default function QuoteForm() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "",
    typeOfMove: "", fromAddress: "", toAddress: "",
    date: "", description: "", instructions: ""
  });
  const [response, setResponse] = useState("");
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    fetch('/api/inquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(data => setResponse(data.message));
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: accentSoft
    }}>
      <form
        onSubmit={handleSubmit}
        style={{
          padding: "38px 32px 32px 32px",
          background: "#fff",
          borderRadius: borderRadius,
          boxShadow: boxShadow,
          maxWidth: 420,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "22px"
        }}
      >
        <h1 style={{
          color: accent,
          marginBottom: 10,
          fontWeight: "bold",
          fontSize: "2rem",
          letterSpacing: "0.5px",
          textAlign: "center"
        }}>
          <span role="img" aria-label="truck">🚚</span> Request Your Move Quote
        </h1>
        
        <Input name="name" value={form.name} onChange={handleChange} label="Your Name*" />
        <Input name="phone" value={form.phone} onChange={handleChange} label="Phone*" />
        <Input name="email" value={form.email} onChange={handleChange} label="Email*" type="email" />
        
        <div style={{ position: "relative" }}>
          <label htmlFor="typeOfMove" style={{ fontSize: 15, fontWeight: 500, color: "#555" }}>Type of Move*</label>
          <select
            name="typeOfMove"
            id="typeOfMove"
            value={form.typeOfMove}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px 12px",
              borderRadius: "10px",
              border: "1.5px solid #cce6fa",
              fontSize: 16,
              background: accentSoft,
              marginTop: "6px"
            }}
          >
            <option value="">Select</option>
            <option>Household</option>
            <option>Office</option>
            <option>Car</option>
            <option>Bike</option>
            <option>Parcel</option>
            <option>Warehouse</option>
          </select>
        </div>
        
        <Input name="fromAddress" value={form.fromAddress} onChange={handleChange} label="Moving From (Address/City)*" />
        <Input name="toAddress" value={form.toAddress} onChange={handleChange} label="Moving To (Address/City)*" />
        <Input name="date" value={form.date} onChange={handleChange} label="Preferred Moving Date*" type="date" />
        
        <TextArea name="description" value={form.description} onChange={handleChange} label="Description of Goods" />
        <TextArea name="instructions" value={form.instructions} onChange={handleChange} label="Special Instructions" />

        <button 
          type="submit"
          style={{
            marginTop: "16px",
            background: accent,
            color: "#fff",
            fontWeight: "bold",
            fontSize: 18,
            padding: "14px",
            border: "none",
            borderRadius: "10px",
            boxShadow: "0 2px 8px #a3c2f788",
            cursor: "pointer",
            transition: "background 0.2s"
          }}
        >
          🚛 Request Quote
        </button>
        {response && (
          <div style={{
            marginTop: 12, 
            padding: "10px", 
            background: "#eaffea", 
            color: "#066c21", 
            borderRadius: "8px", 
            textAlign: "center"
          }}>
            {response}
          </div>
        )}
      </form>
    </div>
  );
}

// Modern input component with floating label
function Input({ label, ...props }) {
  return (
    <div style={{ position: "relative", marginBottom: "2px" }}>
      <label style={{
        position: "absolute",
        top: "-10px",
        left: "16px",
        background: "#fff",
        padding: "2px 6px",
        borderRadius: "16px",
        fontSize: 14,
        color: "#1976D2",
        fontWeight: 500,
        transition: "0.15s"
      }}>{label}</label>
      <input
        {...props}
        required={label.includes("*")}
        style={{
          width: "100%",
          padding: "13px 14px",
          fontSize: 16,
          border: "1.5px solid #cee6f8",
          borderRadius: "10px",
          background: accentSoft,
          marginTop: "14px",
          transition: "border 0.2s",
        }}
      />
    </div>
  );
}

// Modern textarea with floating label
function TextArea({ label, ...props }) {
  return (
    <div style={{ position: "relative" }}>
      <label style={{
        position: "absolute",
        top: "-10px",
        left: "16px",
        background: "#fff",
        padding: "2px 6px",
        borderRadius: "16px",
        fontSize: 14,
        color: "#1976D2",
        fontWeight: 500,
        transition: "0.15s"
      }}>{label}</label>
      <textarea
        {...props}
        rows={3}
        style={{
          width: "100%",
          padding: "10px 14px",
          fontSize: 15,
          border: "1.5px solid #cee6f8",
          borderRadius: "10px",
          background: accentSoft,
          marginTop: "13px",
          transition: "border 0.2s",
          fontFamily: "inherit"
        }}
      />
    </div>
  );
}
