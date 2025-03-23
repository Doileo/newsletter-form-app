import React from "react";
import FeaturesList from "./FeaturesList";
import NewsletterForm from "./NewsletterForm";

export default function Header({ setIsSubmitted }) {
  return (
    <header className="hero">
      <picture>
        <source
          srcSet="/images/illustration-sign-up-desktop.png"
          media="(min-width:768px)"
        />
        <img
          src="/images/illustration-sign-up-mobile.png"
          alt="Illustration of signing up."
          className="hero--image"
        />
      </picture>

      <div className="hero--content">
        <div className="hero--text-container">
          <h1 className="hero--header">Stay updated!</h1>
          <p className="hero--text">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
        </div>

        {/* Pass setIsSubmitted to NewsletterForm */}
        <div className="features-newsletter-container">
          <FeaturesList />
          <NewsletterForm setIsSubmitted={setIsSubmitted} />
        </div>
      </div>
    </header>
  );
}
