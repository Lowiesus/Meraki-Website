import React, { useState } from "react";

const avatarStyle = {
  width: 64,
  height: 64,
  borderRadius: 10,
  background: "#e82a2a",
  display: "inline-block",
  marginRight: 16,
};

export default function CompletedTab() {
  const [open, setOpen] = useState(true);

  return (
    <div
      style={{
        background: "#ffffff",
        minHeight: "100vh",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <section
        role="main"
        className="flex-1 ml-20 lg:ml-72 p-6 pr-0"
        style={{ boxSizing: "border-box" }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              color: "#0F4786",
              fontWeight: 800,
              fontSize: 18,
              marginBottom: 10,
              letterSpacing: 1,
            }}
          >
            MY PAYMENTS
          </div>

          <div
            style={{
              display: "flex",
              gap: 28,
              alignItems: "center",
              borderBottom: "1px solid #e6eef8",
              paddingBottom: 12,
              marginBottom: 18,
              background: "#fff",
            }}
          >
            <button
              style={{
                color: "#0F4786",
                fontWeight: 800,
                background: "transparent",
                border: "none",
                padding: 0,
                borderBottom: "3px solid #0F4786",
                height: 36,
                textTransform: "uppercase",
                fontSize: 13,
                letterSpacing: 1,
                cursor: "pointer",
              }}
            >
              COMPLETE
            </button>
            <button
              style={{
                color: "#94a3b8",
                background: "transparent",
                border: "none",
                padding: 0,
                height: 36,
                textTransform: "uppercase",
                fontSize: 13,
                letterSpacing: 1,
                cursor: "pointer",
              }}
            >
              INITIAL PAYMENTS
            </button>
            <button
              style={{
                color: "#94a3b8",
                background: "transparent",
                border: "none",
                padding: 0,
                height: 36,
                textTransform: "uppercase",
                fontSize: 13,
                letterSpacing: 1,
                cursor: "pointer",
              }}
            >
              FINAL PAYMENTS
            </button>
            <button
              style={{
                color: "#94a3b8",
                background: "transparent",
                border: "none",
                padding: 0,
                height: 36,
                textTransform: "uppercase",
                fontSize: 13,
                letterSpacing: 1,
                cursor: "pointer",
              }}
            >
              PRODUCTS
            </button>
          </div>

          <div
            style={{ borderRadius: 10, overflow: "visible", marginBottom: 18 }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 18,
                background: "#fff",
                padding: "14px 18px",
                borderRadius: 10,
                boxShadow: "0 6px 18px rgba(3,25,49,0.06)",
                border: "1px solid rgba(15,47,91,0.04)",
              }}
            >
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 12,
                  marginRight: 6,
                  display: "inline-block",
                  background: "#e6eef8",
                }}
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  minWidth: 0,
                  flex: 1,
                }}
              >
                <div style={avatarStyle} />
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div
                    style={{
                      fontSize: 14,
                      color: "#0b3a6a",
                      fontWeight: 800,
                    }}
                  >
                    USERNAME{" "}
                    <span
                      style={{
                        color: "#94a3b8",
                        fontWeight: 500,
                        marginLeft: 8,
                      }}
                    >
                      @username
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: 15,
                      color: "#0b2b4a",
                      marginTop: 8,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    Pre-Made VTuber Models
                  </div>
                </div>
                <div style={{ textAlign: "right", minWidth: 200 }}>
                  <div
                    style={{
                      fontSize: 12,
                      color: "#94a3b8",
                      marginBottom: 6,
                    }}
                  >
                    STATUS:{" "}
                    <span
                      style={{
                        color: "#0F4786",
                        fontWeight: 800,
                        marginLeft: 6,
                      }}
                    >
                      ONGOING
                    </span>
                  </div>
                  <div
                    style={{
                      fontWeight: 800,
                      fontSize: 18,
                      color: "#0b2b4a",
                    }}
                  >
                    ₱180,000.00
                  </div>
                </div>
                <button
                  onClick={() => setOpen((v) => !v)}
                  aria-label="toggle details"
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#0F4786",
                    cursor: "pointer",
                    padding: 8,
                    marginLeft: 8,
                    transform: open ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 180ms ease",
                    fontSize: 16,
                    flexShrink: 0,
                  }}
                >
                  ▼
                </button>
              </div>
            </div>
          </div>

          {open && (
            <div
              style={{
                background: "#f8fafc",
                borderRadius: 12,
                padding: 28,
                boxShadow: "0 12px 30px rgba(15,47,91,0.06)",
                border: "1px solid rgba(15,47,91,0.03)",
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: 24,
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ flex: "1 1 620px", minWidth: 0 }}>
                  <div
                    style={{
                      color: "#0F4786",
                      fontWeight: 800,
                      fontSize: 22,
                      marginBottom: 8,
                    }}
                  >
                    ORDER DETAILS
                  </div>
                  <div
                    style={{
                      color: "#94a3b8",
                      fontSize: 13,
                      marginBottom: 14,
                    }}
                  >
                    ORDER# 1532425135321
                  </div>

                  <div
                    style={{
                      color: "#0F4786",
                      fontWeight: 800,
                      marginBottom: 10,
                    }}
                  >
                    COMMISSION TYPE:{" "}
                    <span style={{ color: "#0b2b4a", fontWeight: 600 }}>
                      3D Modeling with Rigging
                    </span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      color: "#0b5fb8",
                      marginBottom: 16,
                    }}
                  >
                    <div style={{ fontWeight: 700 }}>COMMISSIONER:</div>
                    <div style={{ color: "#0b66b2", fontWeight: 700 }}>
                      CLIENT_USERNAME
                    </div>
                    <div style={{ color: "#94a3b8" }}>|</div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        color: "#94a3b8",
                      }}
                    >
                      <div>@username</div>
                      <button
                        style={{
                          height: 36,
                          width: 36,
                          borderRadius: 8,
                          border: "1px solid rgba(15,47,91,0.05)",
                          background: "#fff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#0f66c2",
                          cursor: "pointer",
                        }}
                        aria-label="message"
                      >
                        ✉️
                      </button>
                      <button
                        style={{
                          height: 36,
                          width: 36,
                          borderRadius: 8,
                          border: "1px solid rgba(15,47,91,0.05)",
                          background: "#fff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#0f66c2",
                          cursor: "pointer",
                        }}
                        aria-label="notify"
                      >
                        🔔
                      </button>
                    </div>
                  </div>

                  <div style={{ color: "#0b3a6a", lineHeight: 1.8 }}>
                    <div>
                      <strong>INITIAL AMOUNT PAID:</strong> —
                    </div>
                    <div>
                      <strong>MODE OF PAYMENT:</strong> —
                    </div>
                    <div>
                      <strong>FINAL AMOUNT PAID:</strong> —
                    </div>
                    <div>
                      <strong>MODE OF PAYMENT:</strong> —
                    </div>
                    <div>
                      <strong>DELIVERY METHOD:</strong> —
                    </div>
                    <div>
                      <strong>FINAL PAYMENT:</strong> —
                    </div>
                  </div>
                </div>

                <div style={{ width: 180, minWidth: 160, textAlign: "right" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "flex-end",
                      gap: 12,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        textAlign: "right",
                      }}
                    >
                      <span
                        style={{
                          background: "#1bc3ca",
                          color: "#fff",
                          borderRadius: 50,
                          padding: "8px 12px",
                          fontWeight: "bold",
                          fontSize: 17,
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        aria-hidden
                      >
                        C
                      </span>
                      <div
                        style={{
                          display: "inline-block",
                          verticalAlign: "middle",
                        }}
                      >
                        <div
                          style={{
                            color: "#888",
                            fontWeight: 700,
                            fontSize: 13,
                          }}
                        >
                          RECEIPT
                        </div>
                        <div
                          style={{
                            color: "#222",
                            fontWeight: 800,
                            fontSize: 12,
                            marginTop: 6,
                          }}
                        >
                          1532425135321
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        background: "#fff",
                        padding: 8,
                        borderRadius: 8,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg
                        width="88"
                        height="88"
                        viewBox="0 0 88 88"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        aria-label="QR code placeholder"
                      >
                        <rect width="88" height="88" rx="8" fill="#f4f4f4" />
                        <text
                          x="50%"
                          y="50%"
                          dominantBaseline="middle"
                          textAnchor="middle"
                          fill="#bbb"
                          fontSize="14"
                        >
                          QR
                        </text>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
