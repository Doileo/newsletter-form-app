import React, { useState } from 'react';

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
      console.log('Form submitted successfully. Email:', email);
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
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="email@company.com"
            required
          />
          <button type="submit">Subscribe to monthly newsletter</button>
          {!isValidEmail && <p style={{ color: 'red' }}>Valid email required</p>}
        </form>
      ) : (
         <p>Form submitted successfully! Email: {email}</p>
      )}
    </div>
  );
}
