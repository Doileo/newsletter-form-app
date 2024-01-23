import React, { useState } from 'react';

export default function NewsletterForm({ setSubmitted }) {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const validateEmail = (input) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateEmail(email);

    if (isValid) {
      // Call the function from props to update App.js state
      setSubmitted(true);
    } else {
      // Update state to indicate invalid email
      setIsValidEmail(false);
    }
  };

  const handleEmailChange = (e) => {
    // Reset validation status when the user types
    setIsValidEmail(true);
    setEmail(e.target.value);
  };

  return (
    <div className={`form-container ${!isValidEmail ? 'invalid-input' : ''}`}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className={`label-field ${!isValidEmail ? 'invalid-input' : ''}`}>
          Email address
        </label>
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
          {!isValidEmail && <p className="error-message">Valid email required</p>}
        </div>
        <button type="submit">Subscribe to the monthly newsletter</button>
      </form>
    </div>
  );
}


