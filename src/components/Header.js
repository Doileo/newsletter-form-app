import React from "react";
import mobileIllustration from "../images/illustration-sign-up-mobile.png";

export default function Header() {
  return (
    <div className="hero">
        <img src={mobileIllustration} alt="A graphic." className="hero--image" />
        <h1 className="hero--header">Stay updated!</h1>
        <p className="hero--text">Join 60,000+ product managers receiving monthly updates on:</p>
    </div>
  );
}
