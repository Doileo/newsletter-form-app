import React from "react";
import mobileIllustration from "../images/illustration-sign-up-mobile.png";
import desktopIllustration from "../images/illustration-sign-up-desktop.png";

export default function Header() {
  return (
    <header className="hero">
      <picture>
        <source srcSet={desktopIllustration} media="(min-width:768px" />
        <img
          src={mobileIllustration}
          alt="Illustration of signing up."
          className="hero--image"
        />
      </picture>
      <div className="hero--text-container">
        <h1 className="hero--header">Stay updated!</h1>
        <p className="hero--text">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
      </div>
    </header>
  );
}
