import React from "react";

export default function SuccessMessage({ onDismiss }) {
  return (
    <section className="success-container">
      <img
        src="/images/icon-success.png"
        alt=""
        className="success-icon"
        aria-hidden="true"
      />
      <h2 className="success-header">Thanks for subscribing!</h2>
      <p className="success-message">
        A confirmation email has been sent to{" "}
        <span className="strong">your email</span>. Please open it and click the
        button inside to confirm your subscription.
      </p>
      <button
        onClick={onDismiss}
        className="success-btn"
        aria-label="Dismiss message"
      >
        Dismiss message
      </button>
    </section>
  );
}
