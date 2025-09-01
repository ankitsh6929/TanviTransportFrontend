import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [mode, setMode] = useState("login"); // "login" | "register"
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminToggle, setAdminToggle] = useState(false);
  const [msg, setMsg] = useState("");

  const { login, register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");

    if (mode === "register") {
      const res = await register(name, email, password);
      if (res.ok) {
        setMsg("Registered successfully!");
        navigate("/");
      } else setMsg(res.error);
    } else {
      // login
      const res = await login(email, password);
      if (res.ok) {
        setMsg("Logged in!");
        if (adminToggle) navigate("/admin");
        else navigate("/");
      } else setMsg(res.error);
    }
  };

  return (
    <div
      style={{
        maxWidth: 440,
        margin: "40px auto",
        padding: 24,
        borderRadius: 16,
        background: "#fff",
        boxShadow: "0 8px 30px rgba(2,6,23,0.08)",
      }}
    >
      <div style={{ display: "flex", gap: 8, marginBottom: 18 }}>
        <button
          onClick={() => setMode("login")}
          style={{
            flex: 1,
            padding: "10px 12px",
            borderRadius: 10,
            border: "1px solid #e6ebf5",
            fontWeight: 800,
            background: mode === "login" ? "#0B5ED7" : "#fff",
            color: mode === "login" ? "#fff" : "#0B5ED7",
          }}
        >
          Login
        </button>
        <button
          onClick={() => setMode("register")}
          style={{
            flex: 1,
            padding: "10px 12px",
            borderRadius: 10,
            border: "1px solid #e6ebf5",
            fontWeight: 800,
            background: mode === "register" ? "#0B5ED7" : "#fff",
            color: mode === "register" ? "#fff" : "#0B5ED7",
          }}
        >
          Register
        </button>
      </div>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {mode === "register" && (
          <input
            type="text"
            placeholder="Full Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />
        )}

        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Password (min 6 chars)"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        {mode === "login" && (
          <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#334155" }}>
            <input type="checkbox" checked={adminToggle} onChange={(e) => setAdminToggle(e.target.checked)} />
            Login as Admin
          </label>
        )}

        <button
          type="submit"
          style={{
            background: "linear-gradient(135deg, #0B5ED7, #4F46E5)",
            color: "#fff",
            padding: "12px 16px",
            border: "none",
            borderRadius: 10,
            fontWeight: 800,
          }}
        >
          {mode === "register" ? "Create account" : "Login"}
        </button>
      </form>

      {msg && (
        <div style={{ marginTop: 12, fontWeight: 700, color: msg.includes("failed") ? "#dc2626" : "#16a34a" }}>
          {msg}
        </div>
      )}

      <div style={{ marginTop: 14, fontSize: 13, color: "#64748b" }}>
        Tip: Default admin — <b>admin@ttc.com</b> / <b>Admin@123</b>
      </div>
    </div>
  );
}

const inputStyle = {
  display: "block",
  width: "100%",
  padding: 12,
  borderRadius: 10,
  border: "1px solid #e6ebf5",
  boxShadow: "0 2px 8px rgba(2,6,23,0.04)",
  fontSize: 16,
};
