import React, { useState } from "react";

export default function Loginpage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Validation logic
  function validate(values) {
    const errs = {};
    if (!values.email) {
      errs.email = "Email is required";
    } else {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regex.test(values.email)) {
        errs.email = "Invalid email format";
      }
    }

    if (!values.password) {
      errs.password = "Password is required";
    } else if (values.password.length < 6) {
      errs.password = "Password must be at least 6 characters";
    }
    return errs;
  }

  // Handle input
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  // Handle submit
  async function handleSubmit(e) {
    e.preventDefault();
    const vErrors = validate(form);
    if (Object.keys(vErrors).length > 0) {
      setErrors(vErrors);
      return;
    }
    setErrors({});
    setLoading(true);

    // Fake API call
    await new Promise((res) => setTimeout(res, 1200));

    setLoading(false);
    setSuccess(true);
    console.log("Login data submitted:", form);
  }

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "60px auto",
        padding: 20,
        fontFamily: "Arial, sans-serif",
        border: "1px solid #ddd",
        borderRadius: 8,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
      }}
    >
      <h2 style={{ textAlign: "center" }}>Login</h2>
      {success ? (
        <div
          style={{
            padding: 15,
            background: "#e6ffe6",
            border: "1px solid #b2ffb2",
            borderRadius: 6,
            marginTop: 20
          }}
        >
          ✅ Login successful!
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 16 }}>
            <label style={{ display: "block", marginBottom: 6 }}>Email</label>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              style={{
                padding: 8,
                width: "100%",
                border: "1px solid #ccc",
                borderRadius: 4
              }}
            />
            {errors.email && (
              <div style={{ color: "red", fontSize: 12 }}>{errors.email}</div>
            )}
          </div>

          <div style={{ marginBottom: 16 }}>
            <label style={{ display: "block", marginBottom: 6 }}>Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              style={{
                padding: 8,
                width: "100%",
                border: "1px solid #ccc",
                borderRadius: 4
              }}
            />
            {errors.password && (
              <div style={{ color: "red", fontSize: 12 }}>{errors.password}</div>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: 10,
              background: "#4cafef",
              color: "white",
              border: "none",
              borderRadius: 4,
              cursor: "pointer",
              fontSize: 16
            }}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      )}
    </div>
  );
}
