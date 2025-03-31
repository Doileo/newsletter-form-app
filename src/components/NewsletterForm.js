import React, { useState } from "react";

export default function NewsletterForm({ setIsSubmitted }) {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isRecomputing, setIsRecomputing] = useState(false);

  const validateEmail = (input) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);

  // Handle email input change
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsRecomputing(true);

    setTimeout(() => {
      setIsValidEmail(validateEmail(newEmail));
      setIsRecomputing(false);
    }, 500); // Delay to simulate "re-computing"
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
              Valid email required{" "}
              {isRecomputing && (
                <span className="loading-dots">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </span>
              )}
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
