import React from "react";
import mobileIllustration from "../images/illustration-sign-up-mobile.png";

export default function Header() {
  return (
    <div>
        <img src={mobileIllustration} alt="A graphic." />
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
    </div>
  );
}
