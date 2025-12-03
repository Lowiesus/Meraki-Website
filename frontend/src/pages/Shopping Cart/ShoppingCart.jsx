import React, { useState, useEffect } from "react";
import cartPanel from "/Cart_Panel.png";

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

const statusColors = {
  ONGOING: "#0080FF",
  "AWAITING PAYMENT": "#FFC300",
  "REQUEST SENT": "#0080FF",
  CANCELLED: "#FF0000",
};

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
        background: "#ffffff",
        border: "1px solid #e9e9e9ff",
        borderRadius: 14,
        padding: 20,
        margin: "12px 0 24px 0",
        boxShadow: "0 12px 30px rgba(15,47,91,0.06)",
        boxSizing: "border-box",
      }}
    >
      <div style={{ marginBottom: 8 }}>
        <div
          style={{
            color: "#0F4786",
            fontWeight: 800,
            fontSize: 20,
            letterSpacing: 1,
          }}
        >
          ORDER DETAILS
        </div>
        <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 6 }}>
          ORDER# {order.orderNo}
        </div>
      </div>

      <div style={{ marginTop: 6, marginBottom: 10 }}>
        <div
          style={{
            fontSize: 13,
            color: "#0F4786",
            fontWeight: 800,
            marginBottom: 8,
          }}
        >
          COMMISSION TYPE:{" "}
          <span style={{ fontWeight: 600, color: "#0b2b4a" }}>
            {order.type}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: "#667085",
            marginBottom: 12,
          }}
        >
          <div style={{ fontWeight: 700, color: "#0f3a6a" }}>COMMISSIONER:</div>
          <div style={{ color: "#0b66b2", fontWeight: 700 }}>
            CLIENT_USERNAME
          </div>
          <div style={{ color: "#94a3b8" }}>|</div>
          <div style={{ color: "#94a3b8" }}>@username</div>

          <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
            <button
              aria-label="message"
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
            >
              ✉️
            </button>
            <button
              aria-label="notify"
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
            >
              🔔
            </button>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "relative",
          borderRadius: 12,
          padding: 14,
          background: "#fbfdff",
          border: "2px solid #cfe6ff",
        }}
      >
        <div style={{ fontWeight: 700, color: "#0b5fb8", marginBottom: 8 }}>
          Commission Progress
        </div>

        {progress.length > 1 && (
          <div
            onClick={() => setExpanded((v) => !v)}
            style={{
              color: "#3f8fe9",
              cursor: "pointer",
              fontSize: 13,
              marginBottom: 8,
              userSelect: "none",
              fontWeight: 600,
            }}
          >
            - CLICK TO VIEW PROGRESS HISTORY -
          </div>
        )}

        <div
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            width: 8,
            height: 8,
            borderRadius: 8,
            background: "#ff4bb6",
          }}
        />

        <div style={{ marginTop: 6 }}>
          {visible.map((item, idx) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "8px 6px",
              }}
            >
              <span
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 12,
                  background:
                    idx === visible.length - 1 ? "#34ba47" : "#bfc6d6",
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
              <div style={{ flex: "1 1 auto" }}>
                <div
                  style={{ fontWeight: 700, color: "#0b3a6a", marginBottom: 4 }}
                >
                  {item.seller}{" "}
                  <span style={{ fontWeight: 600, color: "#2b5f99" }}>
                    has sent updates on the commission
                  </span>
                </div>
                <div style={{ fontSize: 12, color: "#94a3b8" }}>
                  {item.date}
                </div>
              </div>

              {item.viewable && (
                <div
                  onClick={() => alert("Show details for this update.")}
                  style={{
                    color: "#3f8fe9",
                    fontSize: 13,
                    cursor: "pointer",
                    flexShrink: 0,
                  }}
                >
                  - view here -
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ShoppingCart() {
  const [commissions, setCommissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [checkedIds, setCheckedIds] = useState([]);
  const [openOrderId, setOpenOrderId] = useState(null);
  const [pressedId, setPressedId] = useState(null);
  const [activeTab, setActiveTab] = useState("card");
  const [flowStep, setFlowStep] = useState("form");

  useEffect(() => {
    setTimeout(() => {
      setCommissions(dummyCommissions);
      setLoading(false);
    }, 500);
  }, []);

  const handleCheck = (id, checked) => {
    setCheckedIds((current) =>
      checked ? [...current, id] : current.filter((cid) => cid !== id)
    );
  };

  const handleSelectOrder = (order) => {
    setOpenOrderId(order.id === openOrderId ? null : order.id);
  };

  const subtotal = commissions
    .filter((c) => checkedIds.includes(c.id))
    .reduce((s, c) => s + (c.price || 0), 0);

  function handlePaymentSubmit(e) {
    e.preventDefault();
    if (activeTab === "cod") {
      setFlowStep("checkoutSuccess");
    } else if (activeTab === "card") {
      setFlowStep("otp");
    } else if (activeTab === "dragonpay") {
      setFlowStep("success");
    }
  }
  function handleOtpSuccess() {
    setFlowStep("success");
  }
  function handleDragonpayContinue() {
    setFlowStep("dragonpay");
  }
  function handleReturnHome() {
    setFlowStep("form");
    setActiveTab("card");
    setCheckedIds([]);
  }

  return (
    <div
      style={{
        background: "#ffffff",
        minHeight: "100vh",
        width: "100%",
        overflowX: "hidden",
        boxSizing: "border-box",
      }}
      className="relative"
    >
      <div className="flex">
        <section
          role="main"
          className="flex-1 ml-20 lg:ml-72 p-6 pr-0 lg:pr-[396px]"
          style={{ boxSizing: "border-box" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 18,
            }}
          >
            <div
              style={{
                width: 4,
                height: 28,
                background: "#0F4786",
                borderRadius: 4,
              }}
            />
            <div>
              <div
                style={{
                  color: "#0F4786",
                  fontWeight: 700,
                  fontSize: 16,
                  letterSpacing: 1,
                }}
              >
                MERAKI SHOPPING CART
              </div>
              <div style={{ height: 6 }} />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: 24,
              alignItems: "center",
              borderBottom: "1px solid #e6eef8",
              paddingBottom: 12,
              marginBottom: 18,
            }}
          >
            <button
              type="button"
              onClick={() => {}}
              style={{
                color: "#0F4786",
                fontWeight: 700,
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
              COMMISSIONS
            </button>
            <button
              type="button"
              onClick={() => {}}
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
            style={{ margin: "0 4px", maxWidth: "100%", overflow: "hidden" }}
          >
            {loading ? (
              <div>Loading...</div>
            ) : (
              commissions.map((c) => (
                <div
                  key={c.id}
                  style={{ maxWidth: "100%", overflow: "hidden" }}
                >
                  <div
                    className={`commission-card ${c.status.toLowerCase()} ${
                      checkedIds.includes(c.id) ? "checked" : ""
                    }`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      background:
                        c.status === "CANCELLED" ? "#f3f4f6" : "#FFFFFF",
                      border: "1px solid #e6eef8",
                      borderRadius: 14,
                      padding: 18,
                      marginBottom: 16,
                      position: "relative",
                      cursor: "pointer",
                      gap: 16,
                      boxShadow: "0 6px 18px rgba(15,47,91,0.04)",
                      boxSizing: "border-box",
                    }}
                    onClick={() => handleSelectOrder(c)}
                  >
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 14 }}
                    >
                      {c.status === "AWAITING PAYMENT" ? (
                        <input
                          type="checkbox"
                          checked={checkedIds.includes(c.id)}
                          onChange={(e) => {
                            e.stopPropagation();
                            handleCheck(c.id, e.target.checked);
                          }}
                          className="card-checkbox"
                          style={{
                            width: 22,
                            height: 22,
                            flexShrink: 0,
                            borderRadius: 6,
                            accentColor: "#0F4786",
                          }}
                        />
                      ) : (
                        <div style={{ width: 22, height: 22 }} />
                      )}

                      <div
                        style={{
                          width: 72,
                          height: 72,
                          borderRadius: 10,
                          background: "#ff3b3b",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexShrink: 0,
                        }}
                      >
                        <span
                          style={{
                            color: "#fff",
                            fontWeight: "700",
                            fontSize: 20,
                            letterSpacing: 0.5,
                          }}
                        >
                          {c.sellerUsername[0].toUpperCase()}
                        </span>
                      </div>

                      <div style={{ minWidth: 0 }}>
                        <div
                          style={{
                            fontSize: 12,
                            color: "#0f3a6a",
                            fontWeight: 700,
                            marginBottom: 6,
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
                            @{c.sellerUsername}
                          </span>
                        </div>

                        <div
                          style={{
                            fontSize: 16,
                            fontWeight: 700,
                            color: "#0b2b4a",
                            marginBottom: 4,
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            maxWidth: 420,
                          }}
                        >
                          {c.title}
                        </div>

                        <div style={{ fontSize: 12, color: "#667085" }}>
                          {c.type}
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        gap: 8,
                        minWidth: 140,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                        }}
                      >
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSelectOrder(c);
                          }}
                          onMouseDown={() => setPressedId(c.id)}
                          onMouseUp={() => setPressedId(null)}
                          onMouseLeave={() => setPressedId(null)}
                          aria-label="toggle details"
                          style={{
                            background: "transparent",
                            border: "none",
                            color: "#0F4786",
                            cursor: "pointer",
                            padding: 6,
                            fontSize: 18,
                            transform: `${
                              openOrderId === c.id
                                ? "rotate(180deg)"
                                : "rotate(0deg)"
                            } ${
                              pressedId === c.id ? "scale(0.92)" : "scale(1)"
                            }`,
                            transition: "transform 180ms ease, color 120ms",
                            flexShrink: 0,
                          }}
                        >
                          ▼
                        </button>

                        <div
                          style={{
                            fontSize: 12,
                            color: "#94a3b8",
                            textAlign: "right",
                          }}
                        >
                          STATUS:
                          <span
                            style={{
                              marginLeft: 8,
                              color: statusColors[c.status] || "#888",
                              fontWeight: 800,
                              fontSize: 12,
                            }}
                          >
                            {c.status}
                          </span>
                        </div>
                      </div>

                      <div
                        style={{
                          fontWeight: 800,
                          fontSize: 18,
                          color: "#0b2b4a",
                        }}
                      >
                        ₱
                        {c.price.toLocaleString("en-PH", {
                          minimumFractionDigits: 2,
                        })}
                      </div>
                    </div>
                  </div>

                  {openOrderId === c.id && <OrderDetails order={c} />}
                </div>
              ))
            )}
          </div>
        </section>

        <div
          className="hidden lg:block fixed right-0 top-0 h-screen w-[371px] border-l border-[#e2e8f0] overflow-auto"
          style={{
            backgroundImage: `url(${cartPanel})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#ffffff",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "100%",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.92) 60%)",
            }}
          >
            <div
              style={{
                padding: 24,
                display: "flex",
                justifyContent: "center",
                backgroundImage: `url(${cartPanel})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundColor: "#ffffff",
                height: "100%",
              }}
            >
              <div
                style={{
                  width: 320,
                  position: "sticky",
                  top: 64,
                  background: "rgba(255,255,255,0.6)",
                  borderRadius: 12,
                  boxShadow: "0 8px 24px rgba(16,24,40,0.08)",
                  padding: 14,
                  border: "1px solid rgba(15,47,91,0.04)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 12,
                  }}
                >
                  <div style={{ fontWeight: 700, color: "#0f3a6a" }}>
                    Payment Details
                  </div>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      background: "#ff3b3b",
                      borderRadius: 8,
                    }}
                  />
                </div>

                <PaymentPanel
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                  flowStep={flowStep}
                  setFlowStep={setFlowStep}
                  onSubmit={handlePaymentSubmit}
                  onOtpSuccess={handleOtpSuccess}
                  onDragonpayContinue={handleDragonpayContinue}
                  onClose={handleReturnHome}
                  subtotal={subtotal}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PaymentPanel({
  activeTab,
  setActiveTab,
  flowStep,
  setFlowStep,
  onSubmit,
  onOtpSuccess,
  onDragonpayContinue,
  onClose,
  subtotal,
}) {
  if (flowStep === "checkoutSuccess") {
    return <CheckoutSuccess onClose={onClose} />;
  }
  if (flowStep === "otp") {
    return <VerifyOtp onVerify={onOtpSuccess} />;
  }
  if (flowStep === "success") {
    if (activeTab === "dragonpay") {
      return (
        <PaymentSuccess
          onClose={onDragonpayContinue}
          buttonLabel="CONTINUE TO DRAGONPAY"
        />
      );
    }
    return <PaymentSuccess onClose={onClose} />;
  }
  if (flowStep === "dragonpay") {
    if (typeof window !== "undefined") {
      window.location.href = "https://dragonpay.ph/";
    }
    return (
      <div style={{ textAlign: "center", padding: 8 }}>
        Redirecting to DragonPay...
      </div>
    );
  }

  return (
    <div>
      <div style={{ fontSize: 12, color: "#6b7280", marginBottom: 10 }}>
        Card type
      </div>

      <div
        className="checkout-tabs"
        style={{
          display: "flex",
          margin: "10px 0",
          gap: 8,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <TabButton
          active={activeTab === "cod"}
          onClick={() => setActiveTab("cod")}
        >
          COD Payment
        </TabButton>
        <TabButton
          active={activeTab === "card"}
          onClick={() => setActiveTab("card")}
        >
          Online Card Payment
        </TabButton>
        <TabButton
          active={activeTab === "dragonpay"}
          onClick={() => setActiveTab("dragonpay")}
        >
          Pay Via Dragonpay
        </TabButton>
      </div>

      {activeTab === "card" && (
        <CardForm onSubmit={onSubmit} subtotal={subtotal} />
      )}
      {activeTab === "cod" && (
        <CODForm onSubmit={onSubmit} subtotal={subtotal} />
      )}
      {activeTab === "dragonpay" && (
        <DragonpayForm onSubmit={onSubmit} subtotal={subtotal} />
      )}
    </div>
  );
}

function TabButton({ active, children, onClick }) {
  return (
    <button
      type="button"
      style={{
        background: active ? "#eee" : "#fff",
        border: active ? "2px solid #4CC790" : "1px solid #ccc",
        color: active ? "#4CC790" : "#888",
        padding: "8px 12px",
        borderRadius: 6,
        cursor: active ? "default" : "pointer",
        fontWeight: active ? "bold" : "normal",
        outline: "none",
        fontSize: "14px",
        whiteSpace: "nowrap",
      }}
      onClick={active ? undefined : onClick}
      disabled={active}
    >
      {children}
    </button>
  );
}

function CardForm({ onSubmit, subtotal }) {
  return (
    <form onSubmit={onSubmit}>
      <div style={{ margin: "8px 0", fontSize: "14px" }}>
        <span style={{ fontWeight: "bold" }}>Card type</span>
        <span style={{ marginLeft: 10 }}>
          <span style={{ fontWeight: "bold", margin: "0 6px" }}>
            MasterCard
          </span>
          <span style={{ fontWeight: "bold", margin: "0 6px" }}>Visa</span>
          <span style={{ fontWeight: "bold", margin: "0 6px" }}>RuPay</span>
        </span>
      </div>
      <input
        type="text"
        placeholder="Name on card"
        style={inputStyle}
        required
      />
      <input
        type="text"
        placeholder="1111 2222 3333 4444"
        style={inputStyle}
        maxLength={19}
        required
      />
      <div style={{ display: "flex", gap: "8px" }}>
        <input type="text" placeholder="mm/yy" style={inputStyle} required />
        <input
          type="text"
          placeholder="123"
          style={inputStyle}
          maxLength={4}
          required
        />
      </div>
      <Summary subtotal={subtotal} />
      <button className="confirm-btn" type="submit" style={buttonStyle}>
        ₱ CHECKOUT
      </button>
    </form>
  );
}

function CODForm({ onSubmit, subtotal }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Address" style={inputStyle} required />
      <input type="text" placeholder="Region" style={inputStyle} required />
      <div style={{ display: "flex", gap: "8px" }}>
        <input
          type="text"
          placeholder="Postal Code"
          style={inputStyle}
          required
        />
        <input
          type="text"
          placeholder="City Name"
          style={inputStyle}
          required
        />
      </div>
      <input type="text" placeholder="(+63)" style={inputStyle} required />
      <Summary subtotal={subtotal} />
      <button className="confirm-btn" type="submit" style={buttonStyle}>
        ₱ CHECKOUT
      </button>
    </form>
  );
}

function DragonpayForm({ onSubmit, subtotal }) {
  return (
    <form onSubmit={onSubmit}>
      <Summary subtotal={subtotal} />
      <button className="confirm-btn" type="submit" style={buttonStyle}>
        ₱ CONTINUE TO DRAGONPAY
      </button>
    </form>
  );
}

function Summary({ subtotal = 0 }) {
  const shipping = 0;
  const total = subtotal + shipping;
  return (
    <div
      className="checkout-summary"
      style={{ margin: "12px 0", fontSize: "14px" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "8px",
        }}
      >
        <span>Subtotal</span>
        <span>
          ₱{subtotal.toLocaleString("en-PH", { minimumFractionDigits: 2 })}
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "8px",
        }}
      >
        <span>Shipping</span>
        <span>
          ₱{shipping.toLocaleString("en-PH", { minimumFractionDigits: 2 })}
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontWeight: "bold",
          marginTop: "12px",
          paddingTop: "12px",
          borderTop: "1px solid #ddd",
        }}
      >
        <span>Total (Tax incl.)</span>
        <span>
          ₱{total.toLocaleString("en-PH", { minimumFractionDigits: 2 })}
        </span>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "8px 0",
  borderRadius: 6,
  border: "1px solid #ccc",
  fontSize: "14px",
  boxSizing: "border-box",
};

const buttonStyle = {
  background: "#FFD96A",
  color: "#333",
  border: "none",
  borderRadius: 20,
  padding: "12px 0",
  width: "100%",
  fontWeight: "bold",
  fontSize: "16px",
  marginTop: "12px",
  cursor: "pointer",
  transition: "background 0.2s",
};

function CheckoutSuccess({ onClose }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "12px",
        padding: "24px",
        width: "100%",
        textAlign: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ fontSize: "20px", marginBottom: "8px", color: "#4CC790" }}>
        Checkout Success!
      </h2>
      <p style={{ marginBottom: "12px", color: "#666" }}>
        Your order has been processed and confirmed.
      </p>
      <button
        onClick={onClose}
        style={{ ...buttonStyle, background: "#4CC790", color: "#fff" }}
      >
        OK
      </button>
    </div>
  );
}

function VerifyOtp({ onVerify }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "12px",
        padding: "24px",
        width: "100%",
        textAlign: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ fontSize: "20px", marginBottom: "12px" }}>Verify OTP</h2>
      <input type="text" placeholder="Enter OTP" style={inputStyle} />
      <button
        onClick={onVerify}
        style={{ ...buttonStyle, background: "#4CC790", color: "#fff" }}
      >
        Verify
      </button>
    </div>
  );
}

function PaymentSuccess({ onClose, buttonLabel = "CONFIRM PAYMENT" }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "12px",
        padding: "24px",
        width: "100%",
        textAlign: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ fontSize: "20px", marginBottom: "12px", color: "#4CC790" }}>
        Payment Success!
      </h2>
      <p style={{ marginBottom: "12px", color: "#666" }}>
        Your payment has been confirmed.
      </p>
      <button
        onClick={onClose}
        style={{ ...buttonStyle, background: "#4CC790", color: "#fff" }}
      >
        {buttonLabel}
      </button>
    </div>
  );
}
