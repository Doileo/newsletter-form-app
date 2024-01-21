import React, { useState } from 'react';
import SuccessMessage from './SuccessMessage';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const validateEmail = (input) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateEmail(email);

    if (isValid) {
      // Update state to show success message
      setSubmitted(true);
    } else {
      // Update state to indicate invalid email
      setIsValidEmail(false);
    }
  };

  const handleEmailChange = (e) => {
    // Reset validation status when user types
    setIsValidEmail(true);
    setEmail(e.target.value);
  }; 
  
  return (
    <div>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
        <div className={`form-group ${!isValidEmail ? 'invalid-input' : ''}`}>
          <label htmlFor="email" className={`label-field ${!isValidEmail ? 'invalid-input' : ''}`}>Email address</label>
          <div className="input-field-container">
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="email@company.com"
            required
            autoComplete="email"
            className={`input-field ${!isValidEmail ? 'invalid-input' : ''}`}
          />
          {!isValidEmail && (
            <p className="error-message">Valid email required</p>
          )}
          </div>
        </div>
        <button type="submit">Subscribe to monthly newsletter</button>
      </form>
      ) : (
        // Render the SuccessMessage component only when the form is submitted
        <SuccessMessage isVisible={submitted} />
      )}
    </div>
  );
}
