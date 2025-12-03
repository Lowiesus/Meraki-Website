import React, { useState, useEffect } from "react";

function Header() {
  return (
    <div
      style={{
        background: "#0F4786",
        color: "#fff",
        fontWeight: "bold",
        padding: "14px 20px",
        fontSize: 21,
        letterSpacing: "2px",
      }}
    >
      MERAKI SHOPPING CART
    </div>
  );
}

// Dummy commission progress data by order id
const mockProgressHistory = {
  1: [
    {
      id: 1,
      seller: "seller01",
      message: "has sent a COMMISSION REQUEST",
      date: "10:02 AM | Nov 10",
    },
    {
      id: 2,
      seller: "seller01",
      message: "has sent COMMISSION BREAKDOWN DETAILS",
      date: "2:02 PM | Nov 12",
      viewable: true,
    },
    {
      id: 3,
      seller: "seller01",
      message: "has started working on the commission",
      date: "3:45 AM | Nov 18",
    },
  ],
  2: [
    {
      id: 1,
      seller: "seller02",
      message: "has accepted your order",
      date: "8:00 AM | Dec 01",
    },
    {
      id: 2,
      seller: "seller02",
      message: "is awaiting payment from buyer",
      date: "9:00 AM | Dec 01",
    },
  ],
  3: [
    {
      id: 1,
      seller: "seller03",
      message: "has sent a DESIGN SKETCH",
      date: "10:12 AM | Nov 21",
      viewable: true,
    },
  ],
  4: [
    {
      id: 1,
      seller: "seller04",
      message: "has cancelled this order",
      date: "11:11 AM | Nov 22",
    },
  ],
};

// Status colors
const statusColors = {
  ONGOING: "#0080FF",
  "AWAITING PAYMENT": "#FFC300",
  "REQUEST SENT": "#0080FF",
  CANCELLED: "#FF0000",
};

// Dummy commissions data if backend is not available
const dummyCommissions = [
  {
    id: 1,
    sellerUsername: "seller01",
    title: "Pre-Made VTuber Models",
    type: "3D Modeling with Rigging",
    status: "ONGOING",
    price: 180000,
    orderNo: "1532425135321",
  },
  {
    id: 2,
    sellerUsername: "seller02",
    title: "Digital Anime Illustration",
    type: "Digital Anime Illustration",
    status: "AWAITING PAYMENT",
    price: 1000,
    orderNo: "1532425135322",
  },
  {
    id: 3,
    sellerUsername: "seller03",
    title: "Website Design",
    type: "Website Design",
    status: "REQUEST SENT",
    price: 10000,
    orderNo: "1532425135323",
  },
  {
    id: 4,
    sellerUsername: "seller04",
    title: "Anime Illustration",
    type: "Anime Illustration",
    status: "CANCELLED",
    price: 500,
    orderNo: "1532425135324",
  },
];

// Order details (with progress history)
function OrderDetails({ order }) {
  const [expanded, setExpanded] = useState(false);
  const progress = mockProgressHistory[order.id] || [];
  const visible =
    expanded || progress.length <= 1
      ? progress
      : [progress[progress.length - 1]];

  return (
    <div
      style={{
        background: "#fff",
        boxShadow: "0 2px 8px rgba(22,110,219,0.08)",
        borderRadius: 20,
        padding: "20px",
        margin: "8px 0 24px 0",
        maxWidth: "70%",
        border: "1.5px solid #91bbf0",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          color: "#005cbf",
          fontWeight: 700,
          fontSize: "clamp(16px, 4vw, 22px)",
          marginBottom: 0,
          letterSpacing: 1,
        }}
      >
        ORDER DETAILS
      </div>
      <div
        style={{
          fontSize: 13,
          color: "#888",
          margin: "3px 0 10px",
          wordBreak: "break-word",
        }}
      >
        ORDER#: {order.orderNo}
      </div>
      <div
        style={{
          fontWeight: "bold",
          fontSize: 16,
          marginBottom: 2,
          wordBreak: "break-word",
        }}
      >
        COMMISSION TYPE:{" "}
        <span style={{ fontWeight: "normal" }}>{order.type}</span>
      </div>
      <div style={{ marginBottom: 15, marginTop: 6, wordBreak: "break-word" }}>
        COMMISSIONER:{" "}
        <span style={{ color: "#005cbf", fontWeight: "bold" }}>
          CLIENT_USERNAME
        </span>{" "}
        | <span style={{ color: "#888" }}>@client_username</span>
        <span style={{ marginLeft: 16, color: "#005cbf" }}>
          <span
            style={{ marginRight: 8, fontSize: 19, verticalAlign: "middle" }}
          >
            ✉️
          </span>
          <span style={{ fontSize: 19, verticalAlign: "middle" }}>🔔</span>
        </span>
      </div>
      <div
        style={{
          border: "2px solid #96beff",
          borderRadius: 13,
          background: "#fafdff",
          padding: "14px 18px",
        }}
      >
        <div style={{ fontWeight: "700", fontSize: 16, marginBottom: 6 }}>
          Commission Progress
        </div>
        {progress.length > 1 && (
          <div
            onClick={() => setExpanded((v) => !v)}
            style={{
              color: "#4092f1",
              cursor: "pointer",
              fontSize: 13,
              marginBottom: 10,
              userSelect: "none",
              fontWeight: 500,
            }}
          >
            - CLICK TO VIEW PROGRESS HISTORY -
          </div>
        )}
        <div style={{ marginLeft: 10, maxWidth: "100%", overflow: "hidden" }}>
          {visible.map((item, idx) => (
            <div
              key={item.id}
              style={{
                marginBottom: expanded ? 16 : 8,
                display: "flex",
                alignItems: "flex-start",
                fontSize: 15,
                flexWrap: "wrap",
                gap: "6px",
                wordBreak: "break-word",
              }}
            >
              <span
                style={{
                  minWidth: 12,
                  minHeight: 12,
                  width: 12,
                  height: 12,
                  background:
                    idx === visible.length - 1 ? "#34ba47" : "#bbbbbb",
                  borderRadius: "50%",
                  display: "inline-block",
                  marginRight: 9,
                  marginTop: 4,
                  flexShrink: 0,
                }}
              />
              <span style={{ fontWeight: "bold", flexShrink: 0 }}>
                {item.seller}
              </span>
              <span
                style={{
                  color: "#2d2d2d",
                  fontWeight: 400,
                  flex: "1 1 auto",
                  minWidth: "120px",
                }}
              >
                {item.message}
              </span>
              <span
                style={{
                  fontSize: 12,
                  color: "#888",
                  flexShrink: 0,
                  whiteSpace: "nowrap",
                }}
              >
                {item.date}
              </span>
              {item.viewable && (
                <span
                  style={{
                    color: "#4092f1",
                    fontSize: 13,
                    cursor: "pointer",
                    flexShrink: 0,
                  }}
                  onClick={() => alert("Show details for this update.")}
                >
                  - view here -
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Main shopping cart with commissions
export default function ShoppingCart() {
  const [commissions, setCommissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [checkedIds, setCheckedIds] = useState([]);
  const [openOrderId, setOpenOrderId] = useState(null);

  // Load commissions from backend (simulate) or use dummy if offline
  useEffect(() => {
    // To use real backend, replace this with fetch("/api/commissions")
    setTimeout(() => {
      setCommissions(dummyCommissions);
      setLoading(false);
    }, 500);
  }, []);

  // Checkbox for payment selection
  const handleCheck = (id, checked) => {
    setCheckedIds((current) =>
      checked ? [...current, id] : current.filter((cid) => cid !== id)
    );
  };

  // Select single order (for details expansion)
  const handleSelectOrder = (order) => {
    setOpenOrderId(order.id === openOrderId ? null : order.id);
  };

  return (
    <div
      style={{
        background: "#eaf2fe",
        minHeight: "100vh",
        paddingBottom: "40px",
        width: "100%",
        overflowX: "hidden",
        boxSizing: "border-box",
      }}
      className="ml-20 lg:ml-72"
    >
      <Header />
      <div
        style={{
          display: "flex",
          gap: 32,
          margin: "28px 0 13px 20px",
          fontSize: 17,
          fontWeight: 500,
          flexWrap: "wrap",
        }}
      >
        <span
          style={{
            color: "#0080FF",
            borderBottom: "2px solid #0080FF",
            paddingBottom: 4,
          }}
        >
          COMMISSIONS
        </span>
        <span style={{ color: "#888" }}>PRODUCTS</span>
        <span style={{ color: "#888" }}>COMPLETED</span>
      </div>
      <div
        style={{
          margin: "0 20px",
          maxWidth: "calc(100% - 40px)",
          overflow: "hidden",
        }}
      >
        {loading ? (
          <div>Loading...</div>
        ) : (
          commissions.map((c) => (
            <div key={c.id} style={{ maxWidth: "100%", overflow: "hidden" }}>
              <div
                className={`commission-card ${c.status.toLowerCase()} ${
                  checkedIds.includes(c.id) ? "checked" : ""
                }`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  background: c.status === "CANCELLED" ? "#eaeaea" : "#FFF",
                  border: "1px solid #ddd",
                  borderRadius: 12,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  padding: "16px 12px",
                  marginBottom: 12,
                  position: "relative",
                  cursor: "pointer",
                  flexWrap: "wrap",
                  gap: "12px",
                  maxWidth: "100%",
                  boxSizing: "border-box",
                }}
                // Main display (click to open order details)
                onClick={() => handleSelectOrder(c)}
              >
                {/* Selection for checkout */}
                {c.status === "AWAITING PAYMENT" && (
                  <input
                    type="checkbox"
                    checked={checkedIds.includes(c.id)}
                    onChange={(e) => {
                      e.stopPropagation();
                      handleCheck(c.id, e.target.checked);
                    }}
                    className="card-checkbox"
                    style={{
                      width: 18,
                      height: 18,
                      flexShrink: 0,
                    }}
                  />
                )}

                {/* Seller's avatar (placeholder if not available) */}
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 8,
                    background: "#FF0000",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      color: "#fff",
                      fontWeight: "bold",
                      fontSize: 19,
                    }}
                  >
                    {c.sellerUsername[0].toUpperCase()}
                  </span>
                </div>
                {/* Seller info and commission */}
                <div
                  style={{
                    flex: "1 1 auto",
                    minWidth: "150px",
                    maxWidth: "100%",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "bold",
                      fontSize: 13,
                      wordBreak: "break-word",
                    }}
                  >
                    USERNAME |{" "}
                    <span
                      style={{
                        color: "#888",
                        fontWeight: "normal",
                        fontSize: 12,
                      }}
                    >
                      @{c.sellerUsername}
                    </span>
                  </div>
                  <div
                    style={{
                      fontWeight: "bold",
                      fontSize: 16,
                      margin: "7px 0 3px",
                      wordBreak: "break-word",
                    }}
                  >
                    {c.title}
                  </div>
                </div>
                {/* Status & Price */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    gap: "4px",
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      fontSize: 11,
                      color: "#999",
                      whiteSpace: "nowrap",
                    }}
                  >
                    STATUS:
                    <span
                      style={{
                        marginLeft: 6,
                        color: statusColors[c.status] || "#888",
                        fontWeight: "bold",
                      }}
                    >
                      {c.status}
                    </span>
                  </div>
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: 18,
                      color: "#111",
                      whiteSpace: "nowrap",
                    }}
                  >
                    ₱
                    {c.price.toLocaleString("en-PH", {
                      minimumFractionDigits: 2,
                    })}
                  </span>
                </div>
                {/* Arrow icon */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    pointerEvents: "auto",
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      fontSize: 22,
                      color: "#0080FF",
                      cursor: "pointer",
                      transform: openOrderId === c.id ? "rotate(180deg)" : "",
                      transition: "transform 0.19s",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectOrder(c);
                    }}
                  >
                    ▼
                  </span>
                </div>
              </div>
              {/* Expanded details (only below selected row) */}
              {openOrderId === c.id && <OrderDetails order={c} />}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
