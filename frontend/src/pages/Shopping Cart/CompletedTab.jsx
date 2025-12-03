import React, { useState } from "react";
import Navbar from "../components/Navbar";

// Dummy avatar and QR for demo (replace with your own images)
const avatarStyle = {
  width: 60,
  height: 60,
  borderRadius: 8,
  background: "#e82a2a",
  display: "inline-block",
  marginRight: 16,
};
const qrStyle = {
  width: 68,
  height: 68,
  borderRadius: 8,
  background: "#f4f4f4",
  display: "inline-block",
};

export default function OrderCompleteCard() {
  return (
    <div
      style={{ background: "#f8fafc", minHeight: "100vh", padding: "28px 0" }}
    >
      {/* Tabs Row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 35,
          fontWeight: "bold",
          fontSize: "1.05rem",
          padding: "10px 45px 2px",
          borderBottom: "1px solid #eaeaea",
          background: "#fff",
        }}
      >
        <Tab active>COMPLETE</Tab>
        <Tab>INITIAL PAYMENTS</Tab>
        <Tab>FINAL PAYMENTS</Tab>
        <Tab>PRODUCTS</Tab>
      </div>

      {/* Order Summary Row */}
      <div
        style={{
          background: "#fff",
          margin: "26px 45px 0",
          borderRadius: 8,
          boxShadow: "0 2px 12px rgba(0,0,0,.07)",
          display: "flex",
          alignItems: "center",
          padding: "18px 40px",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={avatarStyle}></div>
          <div>
            <div
              style={{
                fontWeight: "bold",
                fontSize: 16,
                color: "#0F4786",
                marginBottom: 2,
              }}
            >
              USERNAME{" "}
              <span
                style={{ color: "#888", fontWeight: "normal", fontSize: 13 }}
              >
                @username
              </span>
            </div>
            <div
              style={{
                fontSize: 16,
                color: "#222",
                marginBottom: 2,
                marginTop: 3,
              }}
            >
              Pre-Made Vtuber Models
            </div>
          </div>
        </div>
        <div style={{ color: "#0f4786", fontWeight: "bold", fontSize: 15 }}>
          STATUS: <span style={{ color: "#4CC790" }}>COMPLETE</span>
        </div>
        <div style={{ fontWeight: "bold", fontSize: "20px", color: "#003870" }}>
          ₱180,000.00
        </div>
      </div>

      {/* Order Details Card */}
      <div
        style={{
          background: "#fff",
          margin: "30px 45px 0",
          borderRadius: "12px",
          boxShadow: "0 6px 18px rgba(0,0,0,.08)",
          display: "flex",
          padding: "36px 46px 40px",
          position: "relative",
        }}
      >
        {/* Left section with details */}
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "#0F4786",
              marginBottom: "14px",
            }}
          >
            ORDER DETAILS
            <span style={{ fontSize: 13, color: "#888", marginLeft: 10 }}>
              ORDERID: 153245236231
            </span>
          </div>
          <div
            style={{ fontSize: "1.1rem", color: "#003870", marginBottom: 10 }}
          >
            COMMISSION TYPE:{" "}
            <span style={{ color: "#222" }}>3D Modeling with Rigging</span>
          </div>
          <div style={{ color: "#003870", marginBottom: 4 }}>
            COMMISSIONEE:&nbsp;
            <span style={{ color: "#222" }}>CLIENT_USERNAME</span>
            &nbsp;|&nbsp;
            <span style={{ color: "#4CC790" }}>@username</span>
            &nbsp;
            <span style={{ fontSize: 14, color: "#222" }}>✉️ 🛎️</span>
          </div>
          <div style={{ color: "#003870", marginBottom: 4 }}>
            INITIAL AMOUNT PAID:
          </div>
          <div style={{ color: "#003870", marginBottom: 4 }}>
            MODE OF PAYMENT:
          </div>
          <div style={{ color: "#003870", marginBottom: 4 }}>
            FINAL AMOUNT PAID:
          </div>
          <div style={{ color: "#003870", marginBottom: 4 }}>
            MODE OF PAYMENT:
          </div>
          <div style={{ color: "#003870", marginBottom: 4 }}>
            DELIVERY METHOD:
          </div>
          <div style={{ color: "#003870", marginBottom: 4 }}>
            FINAL PAYMENT:
          </div>
        </div>
        {/* Right section: QR and receipt code */}
        <div
          style={{ minWidth: 130, textAlign: "right", alignSelf: "flex-start" }}
        >
          <div>
            <span
              style={{
                background: "#1bc3ca",
                color: "#fff",
                borderRadius: 50,
                padding: "8px 15px",
                fontWeight: "bold",
                fontSize: 17,
                marginRight: 6,
              }}
            >
              C
            </span>
            <span style={{ color: "#888", fontWeight: "bold", fontSize: 14 }}>
              RECEIPT
            </span>
            <span
              style={{
                color: "#222",
                fontWeight: "bold",
                fontSize: 12,
                marginLeft: 4,
              }}
            >
              153245236231
            </span>
          </div>
          <div style={{ marginTop: 8 }}>
            {/* Replace this with your actual QR image */}
            <div style={qrStyle}>
              <span
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "center",
                  paddingTop: 18,
                  color: "#aaa",
                }}
              >
                QR
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Tab component for navigation bar
function Tab({ active, children }) {
  return (
    <span
      style={{
        color: active ? "#0F4786" : "#bbb",
        borderBottom: active ? "3px solid #4CC790" : "none",
        paddingBottom: active ? 5 : 0,
        cursor: active ? "default" : "pointer",
      }}
    >
      {children}
    </span>
  );
}
