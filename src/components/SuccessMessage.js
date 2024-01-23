import React from 'react';
import successIcon from '../images/icon-success.png';

export default function SuccessMessage() {
  return (
    <div className="success--container">
      <img src={successIcon} alt="A success icon." className="success--icon" />
      <h2 className="success--header">Thanks for subscribing!</h2>
      <p className="success--message">
        A confirmation email has been sent to{' '}
        <span className="strong">ash@loremcompany.com</span>. Please open it and click the button
        inside to confirm your subscription.
      </p>
      <button>Dismiss message</button>
    </div>
  );
}

