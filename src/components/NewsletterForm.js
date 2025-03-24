import React, { useState } from "react";

export default function NewsletterForm({ setIsSubmitted }) {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const validateEmail = (input) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);

  // Function to handle email input change and validation
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValidEmail(validateEmail(newEmail)); // Only hide error if it's valid
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setIsSubmitted(true);
    } else {
      setIsValidEmail(false);
    }
  };

  return (
    <section className="form-container">
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="email">Email address</label>
        <div className="input-field-container">
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="email@company.com"
            required
            aria-describedby="email-error"
            autoComplete="email"
            className={`input-field ${!isValidEmail ? "invalid-input" : ""}`}
          />
          {!isValidEmail && (
            <p id="email-error" className="error-message">
              Valid email required
            </p>
          )}
        </div>
        <button type="submit" aria-label="Subscribe to the newsletter">
          Subscribe to monthly newsletter
        </button>
      </form>
    </section>
  );
}
