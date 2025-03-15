import React from "react";
import iconList from "../images/icon-list.png";

// Sample data for features
const featuresData = [
  {
    description: "Product discovery and building what matters",
  },
  {
    description: "Measuring to ensure updates are a success",
  },
  {
    description: "And much more!",
  },
];

export default function FeaturesList() {
  return (
    <section className="features-list-container">
      {featuresData.map((feature, index) => (
        <div className="feature-item" key={index}>
          <img
            src={iconList}
            alt=""
            className="feature--icon"
            aria-hidden="true"
          />
          <p className="feature--description">{feature.description}</p>
        </div>
      ))}
    </section>
  );
}
