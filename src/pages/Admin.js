import React from "react";
import { useAuth } from "../context/AuthContext";

export default function Admin() {
  const { user } = useAuth();

  return (
    <div style={{ maxWidth: 1100, margin: "40px auto", padding: "0 14px" }}>
      <h1 style={{ fontWeight: 800, color: "#0B5ED7" }}>Admin Dashboard</h1>
      <p style={{ color: "#475569" }}>
        Welcome, <b>{user?.name || user?.email}</b>. You have admin privileges.
      </p>

      <div
        style={{
          marginTop: 20,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 16,
        }}
      >
        <div style={card}>Total Enquiries (demo)</div>
        <div style={card}>Daily Moves (demo)</div>
        <div style={card}>Active Regions (demo)</div>
      </div>
    </div>
  );
}

const card = {
  background: "#fff",
  padding: 18,
  borderRadius: 12,
  boxShadow: "0 8px 20px rgba(2,6,23,0.06)",
  fontWeight: 700,
  color: "#0f172a",
};
