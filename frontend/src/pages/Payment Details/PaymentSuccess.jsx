export default function PaymentSuccessModal({ onClose }) {
  return (
    <div className="modal-success">
      <div className="modal-content">
        <h2>ORDER CHECKOUT</h2>
        <h4>Payment Success!</h4>
        <div className="success-circle">
          <span
            role="img"
            aria-label="success"
            style={{ fontSize: "3rem", color: "#4CC790" }}
          >
            ✔️
          </span>
        </div>
        <p>
          Payment successful — your transaction has been processed and
          confirmed.
        </p>
        <button className="confirm-btn" onClick={onClose}>
          CONFIRM PAYMENT
        </button>
      </div>
    </div>
  );
}
