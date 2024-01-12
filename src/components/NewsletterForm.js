import React, { useState } from 'react';
import SuccessMessage from './SuccessMessage';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const validateEmail = (input) => {
    // Simple email validation logic
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateEmail(email)) {
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
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="email@company.com"
            required
            className={`input-field ${!isValidEmail ? 'invalid-input' : ''}`}
          />
          {!isValidEmail && <p className="error-message">Valid email required</p>}
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
