import React from "react";
import successIcon from "../images/icon-success.png";

export default function SuccessMessage({ onDismiss }) {
  return (
    <section className="success-container">
      <img src={successIcon} alt="" className="success-icon" aria-hidden true />
      <h2 className="success-header">Thanks for subscribing!</h2>
      <p className="success-message">
        A confirmation email has been sent to{" "}
        <span className="strong">your email</span>. Please open it and click the
        button inside to confirm your subscription.
      </p>
      <button onClick={onDismiss} aria-label="Dismiss message">
        Dismiss
      </button>
    </section>
  );
}
