import React, { useState } from "react";
import Navbar from "../../components/Navbar";

export default function CheckoutTabs() {
  const [activeTab, setActiveTab] = useState("card");
  const [flowStep, setFlowStep] = useState("form");

  function handleSubmit(e) {
    e.preventDefault();
    if (activeTab === "cod") {
      setFlowStep("checkoutSuccess");
    } else if (activeTab === "card") {
      setFlowStep("otp");
    } else if (activeTab === "dragonpay") {
      setFlowStep("success");
    }
  }

  // When OTP is verified:
  function handleOtpSuccess() {
    setFlowStep("success");
  }
  // When PaymentSuccess on Dragonpay is closed, go to Dragonpay link:
  function handleDragonpayContinue() {
    setFlowStep("dragonpay");
    // You may redirect here instead, e.g., window.location = "https://dragonpay.ph/...";
  }
  // For all forms: when success/checkoutSuccess is closed, go back to start or home
  function handleReturnHome() {
    setFlowStep("form");
    setActiveTab("card");
  }

  // -- Render logic --
  if (flowStep === "checkoutSuccess") {
    return (
      <>
        <Navbar />
        <div className="ml-20 lg:ml-72 min-h-screen flex items-center justify-center bg-base-200">
          <CheckoutSuccess onClose={handleReturnHome} />
        </div>
      </>
    );
  }
  if (flowStep === "otp") {
    return (
      <>
        <Navbar />
        <div className="ml-20 lg:ml-72 min-h-screen flex items-center justify-center bg-base-200">
          <VerifyOtp onVerify={handleOtpSuccess} />
        </div>
      </>
    );
  }
  if (flowStep === "success") {
    // For dragonpay, show special "Continue" button
    if (activeTab === "dragonpay") {
      return (
        <>
          <Navbar />
          <div className="ml-20 lg:ml-72 min-h-screen flex items-center justify-center bg-base-200">
            <PaymentSuccess
              onClose={handleDragonpayContinue}
              buttonLabel="CONTINUE TO DRAGONPAY"
            />
          </div>
        </>
      );
    }
    // For card/otp, normal
    return (
      <>
        <Navbar />
        <div className="ml-20 lg:ml-72 min-h-screen flex items-center justify-center bg-base-200">
          <PaymentSuccess onClose={handleReturnHome} />
        </div>
      </>
    );
  }
  if (flowStep === "dragonpay") {
    // Simulating redirect; you may replace with <Redirect/> or direct window.location below
    window.location.href = "https://dragonpay.ph/";
    return (
      <>
        <Navbar />
        <div className="ml-20 lg:ml-72 min-h-screen flex items-center justify-center">
          <div>Redirecting to DragonPay...</div>
        </div>
      </>
    );
  }

  // -- Main form UI --
  return (
    <>
      <Navbar />
      <div
        className="ml-20 lg:ml-72 min-h-screen bg-base-200 flex items-center justify-center p-4"
        style={{
          maxWidth: "100vw",
          overflowX: "hidden",
          boxSizing: "border-box",
        }}
      >
        <div
          className="modal-content"
          style={{
            background: "#fff",
            borderRadius: "12px",
            padding: "24px",
            maxWidth: "600px",
            width: "100%",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            boxSizing: "border-box",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "16px",
              textAlign: "center",
            }}
          >
            Payment Details
          </h2>
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
          {activeTab === "card" && <CardForm onSubmit={handleSubmit} />}
          {activeTab === "cod" && <CODForm onSubmit={handleSubmit} />}
          {activeTab === "dragonpay" && (
            <DragonpayForm onSubmit={handleSubmit} />
          )}
        </div>
      </div>
    </>
  );
}

// --- Individual tabs and shared components ---

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

// Card Payment Form
function CardForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <div style={{ margin: "12px 0", fontSize: "14px" }}>
        <span style={{ fontWeight: "bold" }}>Card type</span>
        <span style={{ marginLeft: 10 }}>
          <span style={{ fontWeight: "bold", margin: "0 6px" }}>
            MasterCard
          </span>
          <span style={{ fontWeight: "bold", margin: "0 6px" }}>Visa</span>
          <span style={{ fontWeight: "bold", margin: "0 6px" }}>RuPay</span>
          <span style={{ color: "#007bff", marginLeft: 6, cursor: "pointer" }}>
            See all
          </span>
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
      <Summary />
      <button className="confirm-btn" type="submit" style={buttonStyle}>
        ₱ CHECKOUT
      </button>
    </form>
  );
}

// COD Form
function CODForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Address" style={inputStyle} required />
      <input type="text" placeholder="Region" style={inputStyle} required />
      <div style={{ display: "flex", gap: "8px" }}>
        <input type="text" placeholder="0000" style={inputStyle} required />
        <input
          type="text"
          placeholder="City Name"
          style={inputStyle}
          required
        />
      </div>
      <input type="text" placeholder="(+63)" style={inputStyle} required />
      <Summary />
      <button className="confirm-btn" type="submit" style={buttonStyle}>
        ₱ CHECKOUT
      </button>
    </form>
  );
}

// Dragonpay Form
function DragonpayForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <Summary />
      <button className="confirm-btn" type="submit" style={buttonStyle}>
        ₱ CONTINUE TO DRAGONPAY
      </button>
    </form>
  );
}

function Summary() {
  return (
    <div
      className="checkout-summary"
      style={{ margin: "18px 0", fontSize: "14px" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "8px",
        }}
      >
        <span>Subtotal</span> <span>₱0.00</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "8px",
        }}
      >
        <span>Shipping</span> <span>₱0.00</span>
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
        <span>Total (Tax incl.)</span> <span>₱0.00</span>
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
  padding: "14px 0",
  width: "100%",
  fontWeight: "bold",
  fontSize: "16px",
  marginTop: "16px",
  cursor: "pointer",
  transition: "background 0.2s",
};

// Modal components
function CheckoutSuccess({ onClose }) {
  return (
    <div
      className="success-modal"
      style={{
        background: "#fff",
        borderRadius: "12px",
        padding: "32px",
        maxWidth: "400px",
        width: "90%",
        textAlign: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <h2
        style={{
          fontSize: "24px",
          marginBottom: "16px",
          color: "#4CC790",
        }}
      >
        Checkout Success!
      </h2>
      <p
        style={{
          marginBottom: "24px",
          color: "#666",
        }}
      >
        Your order has been processed and confirmed.
      </p>
      <button
        onClick={onClose}
        style={{
          ...buttonStyle,
          background: "#4CC790",
          color: "#fff",
        }}
      >
        OK
      </button>
    </div>
  );
}

function VerifyOtp({ onVerify }) {
  return (
    <div
      className="otp-modal"
      style={{
        background: "#fff",
        borderRadius: "12px",
        padding: "32px",
        maxWidth: "400px",
        width: "90%",
        textAlign: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>Verify OTP</h2>
      <input type="text" placeholder="Enter OTP" style={inputStyle} />
      <button
        onClick={onVerify}
        style={{
          ...buttonStyle,
          background: "#4CC790",
          color: "#fff",
        }}
      >
        Verify
      </button>
    </div>
  );
}

function PaymentSuccess({ onClose, buttonLabel = "CONFIRM PAYMENT" }) {
  return (
    <div
      className="success-modal"
      style={{
        background: "#fff",
        borderRadius: "12px",
        padding: "32px",
        maxWidth: "400px",
        width: "90%",
        textAlign: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <h2
        style={{
          fontSize: "24px",
          marginBottom: "16px",
          color: "#4CC790",
        }}
      >
        Payment Success!
      </h2>
      <p
        style={{
          marginBottom: "24px",
          color: "#666",
        }}
      >
        Your payment has been confirmed.
      </p>
      <button
        onClick={onClose}
        style={{
          ...buttonStyle,
          background: "#4CC790",
          color: "#fff",
        }}
      >
        {buttonLabel}
      </button>
    </div>
  );
}
