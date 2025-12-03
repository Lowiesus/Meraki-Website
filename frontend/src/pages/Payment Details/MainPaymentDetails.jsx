import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CheckoutSuccess from "./CheckoutSuccess";
import PaymentSuccess from "./PaymentSuccess";
import VerifyOtp from "./VerifyOtp";

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
    return <CheckoutSuccess onClose={handleReturnHome} />;
  }
  if (flowStep === "otp") {
    return <VerifyOtp onVerify={handleOtpSuccess} />;
  }
  if (flowStep === "success") {
    // For dragonpay, show special "Continue" button
    if (activeTab === "dragonpay") {
      return (
        <PaymentSuccess
          onClose={handleDragonpayContinue}
          buttonLabel="CONTINUE TO DRAGONPAY"
        />
      );
    }
    // For card/otp, normal
    return <PaymentSuccess onClose={handleReturnHome} />;
  }
  if (flowStep === "dragonpay") {
    // Simulating redirect; you may replace with <Redirect/> or direct window.location below
    window.location.href = "https://dragonpay.ph/";
    return <div>Redirecting to DragonPay...</div>;
  }

  // -- Main form UI --
  return (
    <div className="modal-success">
      <div className="modal-content">
        <h2>Payment Details</h2>
        <div
          className="checkout-tabs"
          style={{ display: "flex", margin: "10px 0", gap: 8 }}
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
        {activeTab === "dragonpay" && <DragonpayForm onSubmit={handleSubmit} />}
      </div>
    </div>
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
        padding: "6px 10px",
        borderRadius: 6,
        cursor: active ? "default" : "pointer",
        fontWeight: active ? "bold" : "normal",
        outline: "none",
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
      <div style={{ margin: "8px 0" }}>
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
    <div className="checkout-summary" style={{ margin: "18px 0" }}>
      <div>
        Subtotal <span>₱</span>
      </div>
      <div>
        Shipping <span>₱</span>
      </div>
      <div>
        <b>Total (Tax incl.)</b> <span>₱</span>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "6px",
  margin: "6px 0",
  borderRadius: 4,
  border: "1px solid #ccc",
  fontSize: "1rem",
};

const buttonStyle = {
  background: "#FFD96A",
  color: "#333",
  border: "none",
  borderRadius: 20,
  padding: "12px 0",
  width: "100%",
  fontWeight: "bold",
  fontSize: "1.1rem",
  marginTop: "10px",
};

/* --- Replace these with your actual components with proper designs and behavior! --- */
function CheckoutSuccess({ onClose }) {
  return (
    <div className="success-modal">
      <h2>Checkout Success!</h2>
      <p>Your order has been processed and confirmed.</p>
      <button onClick={onClose}>OK</button>
    </div>
  );
}
function VerifyOtp({ onVerify }) {
  return (
    <div className="otp-modal">
      <h2>Verify OTP</h2>
      <input type="text" placeholder="Enter OTP" style={inputStyle} />
      <button onClick={onVerify}>Verify</button>
    </div>
  );
}
function PaymentSuccess({ onClose, buttonLabel = "CONFIRM PAYMENT" }) {
  return (
    <div className="success-modal">
      <h2>Payment Success!</h2>
      <p>Your payment has been confirmed.</p>
      <button onClick={onClose}>{buttonLabel}</button>
    </div>
  );
}

// --- Individual Forms Below ---

function CardForm() {
  return (
    <form>
      <div style={{ margin: "8px 0" }}>
        <span style={{ fontWeight: "bold" }}>Card type</span>
        <span style={{ marginLeft: 10 }}>
          {/* Logos placeholder. Replace with <img/>s */}
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

function CODForm() {
  return (
    <form>
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

function DragonpayForm() {
  return (
    <form>
      <Summary />
      <button className="confirm-btn" type="submit" style={buttonStyle}>
        ₱ CONTINUE TO DRAGONPAY
      </button>
    </form>
  );
}

function Summary() {
  return (
    <div className="checkout-summary" style={{ margin: "18px 0" }}>
      <div>
        Subtotal <span>₱</span>
      </div>
      <div>
        Shipping <span>₱</span>
      </div>
      <div>
        <b>Total (Tax incl.)</b> <span>₱</span>
      </div>
    </div>
  );
}

// const inputStyle = {
//   width: "100%",
//   padding: "6px",
//   margin: "6px 0",
//   borderRadius: 4,
//   border: "1px solid #ccc",
//   fontSize: "1rem",
// };

// const buttonStyle = {
//   background: "#FFD96A",
//   color: "#333",
//   border: "none",
//   borderRadius: 20,
//   padding: "12px 0",
//   width: "100%",
//   fontWeight: "bold",
//   fontSize: "1.1rem",
//   marginTop: "10px",
// };
