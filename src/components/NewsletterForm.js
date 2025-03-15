import React, { useState } from "react";

export default function NewsletterForm({ setIsSubmitted }) {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const validateEmail = (input) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);

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
        <label htmlFor="email"> Email address</label>
        <div className="input-field-container">
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setIsValidEmail(true);
            }}
            placeholder="email@company.com"
            required
            aria-describedby="email-error"
            autoComplete="email"
            className={`input-field ${!isValidEmail ? "invalid" : ""}`}
          />
          {!isValidEmail && (
            <p id="email-error" className="error-message">
              Valid email required
            </p>
          )}
        </div>
        <button type="submit" aria-label="Subscribe to the newsletter">
          Subscribe
        </button>
      </form>
    </section>
  );
}
