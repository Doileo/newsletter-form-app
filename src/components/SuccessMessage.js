import React from 'react';
import successIcon from "../images/icon-success.png"

export default function SuccessMessage({ isVisible }) {
  return (
    <div className={`success-message ${isVisible ? '' : 'success-message-hiden'}`}>
      <img src={successIcon} alt="A success icon." className="success--icon" />
      <h2 className="success--header">Thanks for subscribing!</h2>
      <p className="success--message">
        A confirmation email has been sent to <span className="bold">ash@loremcompany.com</span>. Please open it and click the button inside to confirm your subscription.</p>
      <button className="success--button">Dismiss message</button>
    </div>
  );
}
