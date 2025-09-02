import React, { useState } from "react";

const accent = "#1976D2";
const accentSoft = "#e3f2fd";
const borderRadius = "14px";
const boxShadow = "0 4px 24px #a3c2f7a8";

export default function QuoteForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    typeOfMove: "",
    fromAddress: "",
    toAddress: "",
    date: "",
    description: "",
    instructions: ""
  });
  const [response, setResponse] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponse("Sending...");

    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          mobile: form.phone,
          date: form.date,
          from: form.fromAddress,
          to: form.toAddress,
          requirement: `${form.typeOfMove}\n\nDescription: ${form.description}\nInstructions: ${form.instructions}`
        })
      });

      const data = await res.json();
      if (data.success) {
        setResponse("✅ Quote request sent successfully!");
        setForm({
          name: "",
          phone: "",
          email: "",
          typeOfMove: "",
          fromAddress: "",
          toAddress: "",
          date: "",
          description: "",
          instructions: ""
        });
      } else {
        setResponse("❌ Failed to send. Try again.");
      }
    } catch (err) {
      setResponse("⚠️ Something went wrong.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: accentSoft,
        padding: "20px" // ensures spacing on mobile
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          padding: "28px 24px",
          background: "#fff",
          borderRadius: borderRadius,
          boxShadow: boxShadow,
          maxWidth: 480,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "18px"
        }}
      >
        <h1
          style={{
            color: accent,
            marginBottom: 10,
            fontWeight: "bold",
            fontSize: "1.8rem",
            textAlign: "center"
          }}
        >
          🚚 Request a Quote
        </h1>

        <Input name="name" value={form.name} onChange={handleChange} label="Your Name*" />
        <Input name="phone" value={form.phone} onChange={handleChange} label="Phone*" />
        <Input name="email" value={form.email} onChange={handleChange} label="Email*" type="email" />

        <Select
          name="typeOfMove"
          value={form.typeOfMove}
          onChange={handleChange}
          label="Type of Move*"
          options={["Household", "Office", "Car", "Bike", "Parcel", "Warehouse"]}
        />

        <Input name="fromAddress" value={form.fromAddress} onChange={handleChange} label="Moving From (City/Address)*" />
        <Input name="toAddress" value={form.toAddress} onChange={handleChange} label="Moving To (City/Address)*" />
        <Input name="date" value={form.date} onChange={handleChange} label="Preferred Moving Date*" type="date" />

        <TextArea name="description" value={form.description} onChange={handleChange} label="Description of Goods" />
        <TextArea name="instructions" value={form.instructions} onChange={handleChange} label="Special Instructions" />

        <button
          type="submit"
          style={{
            background: accent,
            color: "#fff",
            fontWeight: "bold",
            fontSize: 18,
            padding: "14px",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer"
          }}
        >
          🚛 Request Quote
        </button>

        {response && (
          <div
            style={{
              marginTop: 8,
              padding: "10px",
              background: response.includes("✅") ? "#eaffea" : "#ffeaea",
              color: response.includes("✅") ? "#066c21" : "#a30000",
              borderRadius: "8px",
              textAlign: "center"
            }}
          >
            {response}
          </div>
        )}
      </form>
    </div>
  );
}

// Select Component
function Select({ label, options, ...props }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label style={{ fontSize: 15, fontWeight: 500, color: "#555" }}>{label}</label>
      <select
        {...props}
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
        {options.map((opt, i) => (
          <option key={i}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

// Input Component
function Input({ label, ...props }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label style={{ fontSize: 14, fontWeight: 500, color: "#1976D2" }}>{label}</label>
      <input
        {...props}
        required={label.includes("*")}
        style={{
          width: "100%",
          padding: "12px 14px",
          fontSize: 16,
          border: "1.5px solid #cee6f8",
          borderRadius: "10px",
          background: accentSoft,
          marginTop: "6px"
        }}
      />
    </div>
  );
}

// TextArea Component
function TextArea({ label, ...props }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label style={{ fontSize: 14, fontWeight: 500, color: "#1976D2" }}>{label}</label>
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
          marginTop: "6px",
          fontFamily: "inherit"
        }}
      />
    </div>
  );
}
