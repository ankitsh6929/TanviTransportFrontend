import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "", email: "", mobile: "", date: "", from: "", to: "", requirement: "", captcha: ""
  });
  const [captcha] = useState("82015");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };
  const handleReset = () => {
    setForm({
      name: "", email: "", mobile: "", date: "",
      from: "", to: "", requirement: "", captcha: ""
    });
    setSubmitted(false);
  };

  return (
    <div style={{
      flex: 1,
      minWidth: "320px",
      background: "#fff",
      borderRadius: "22px",
      boxShadow: "0 6px 24px #e3effb",
      padding: "36px 28px",
      marginBottom: 40
    }}>
      <h1 style={{
        textAlign: "center",
        fontWeight: "bold",
        color: "#222",
        marginBottom: "7px"
      }}>Contact Us</h1>

      <div style={{
        textAlign: "center", marginBottom: "15px", fontSize: "17px", color: "#707070"
      }}>
        24/7 Customer Care Service No:<br />
        <span style={{ color: "#1976D2", fontWeight: "bold", fontSize: "21px" }}>
          6901244444 &nbsp; | &nbsp; 9864535143
        </span>
      </div>

      <div style={{
        textAlign: "center", fontWeight: "bold", fontSize: "19px", margin: "22px 0 10px 0", color: "#1976D2"
      }}>
        Get in Touch!
      </div>

      {submitted &&
        <div style={{
          color: "#27ae60", marginBottom: "18px", fontWeight: "bold", textAlign: "center"
        }}>
          Thank you! Your inquiry has been received.
        </div>
      }

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
        {/* Row 1 */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required style={inputStyle} />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required style={inputStyle} type="email" />
          <input name="from" value={form.from} onChange={handleChange} placeholder="From (city)" required style={inputStyle} />
          <textarea name="requirement" value={form.requirement} onChange={handleChange} placeholder="Requirement" style={{ ...inputStyle, minHeight: "40px", flex: "2 1 180px", resize: "vertical" }} required />
        </div>

        {/* Row 2 */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <input name="mobile" value={form.mobile} onChange={handleChange} placeholder="Mobile No" required style={inputStyle} type="tel" />
          <input name="date" value={form.date} onChange={handleChange} placeholder="dd-mm-yyyy" style={inputStyle} type="date" />
          <input name="to" value={form.to} onChange={handleChange} placeholder="To (city)" required style={inputStyle} />
        </div>

        {/* Captcha */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px", marginTop: "6px" }}>
          <div style={captchaStyle}>{captcha.split("").join(" ")}</div>
          <input name="captcha" value={form.captcha} onChange={handleChange} placeholder="Copy digits" required style={{ ...inputStyle, width: "75px" }} />
          <small style={{ color: "#555" }}>copy the digits from the image into this box</small>
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "18px", justifyContent: "center", marginTop: "8px" }}>
          <button type="submit" style={btnStyle} disabled={form.captcha !== captcha || !form.captcha}>Submit</button>
          <button type="button" style={{ ...btnStyle, background: "#eee", color: "#1976D2" }} onClick={handleReset}>Reset</button>
        </div>
      </form>

      {/* Extra Contact Info */}
      <div style={{ marginTop: "28px", textAlign: "center", color: "#909090" }}>
        <b>Email:</b> tanvitransportcompany@gmail.com<br />
        <b>Office:</b> No. 7 Golapi Market, Guwahati Assam 781001
      </div>
    </div>
  );
}

const inputStyle = {
  flex: "1 1 160px",
  padding: "12px",
  fontSize: "16px",
  borderRadius: "6px",
  border: "1.3px solid #c3c3c3",
  outline: "none",
  boxShadow: "0 1px 10px #f7f7f7",
  minWidth: "125px"
};

const captchaStyle = {
  background: "#d2ffb0",
  color: "#222",
  fontWeight: "bold",
  borderRadius: "6px",
  padding: "8px 22px",
  fontSize: "23px",
  textAlign: "center",
  letterSpacing: "4px"
};

const btnStyle = {
  background: "#FFC107",
  color: "#222",
  padding: "12px 38px",
  borderRadius: "7px",
  border: "none",
  fontWeight: "bold",
  fontSize: "17px",
  boxShadow: "0 3px 14px #f7e4d1",
  cursor: "pointer"
};
