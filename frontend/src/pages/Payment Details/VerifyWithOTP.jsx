import React, { useState } from "react";
import Navbar from "../components/Navbar";

export default function VerifyOtp({ onVerify, phone }) {
  // add phone prop for real-world use!
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    // Only allow digits and max 4 chars
    const value = e.target.value.replace(/\D/g, "");
    setOtp(value.slice(0, 4));
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (otp.length !== 4) {
      setError("Please enter a 4-digit OTP code.");
      return;
    }
    setLoading(true);
    try {
      // POST to your backend to verify
      const response = await fetch("/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, code: otp }),
      });
      const result = await response.json();
      setLoading(false);
      if (result.status === "approved") {
        onVerify(otp);
      } else {
        setError("Incorrect OTP. Please try again.");
      }
    } catch (err) {
      setLoading(false);
      setError("There was a problem verifying your OTP.");
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="otp-modal"
        style={{
          background: "#fff",
          maxWidth: 400,
          margin: "40px auto",
          padding: 32,
          borderRadius: 12,
          boxShadow: "0 4px 20px rgba(0,0,0,0.13)",
        }}
      >
        <h2 style={{ marginBottom: 12 }}>Verify OTP</h2>
        <p style={{ color: "#666", marginBottom: 22 }}>
          Please enter the 4-digit code sent to your mobile or email.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            inputMode="numeric"
            autoFocus
            style={{
              width: "100%",
              padding: "12px 20px",
              fontSize: "1.2rem",
              textAlign: "center",
              letterSpacing: 7,
              border: error ? "2px solid #e74c3c" : "1px solid #ccc",
              borderRadius: 8,
              outline: "none",
              marginBottom: 12,
            }}
            value={otp}
            onChange={handleChange}
            maxLength={4}
            placeholder="••••"
            disabled={loading}
          />
          {error && (
            <div style={{ color: "#e74c3c", marginBottom: 10 }}>{error}</div>
          )}
          <button
            type="submit"
            style={{
              width: "100%",
              background: "#4CC790",
              color: "#fff",
              padding: "12px 0",
              fontWeight: "bold",
              fontSize: "1.09rem",
              border: "none",
              borderRadius: 8,
              marginTop: 10,
              cursor: loading ? "wait" : "pointer",
            }}
            disabled={loading}
          >
            {loading ? "Verifying..." : "Verify"}
          </button>
        </form>
      </div>
    </>
  );
}
