import React from 'react';
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
    description: "And much more!"
  },
];

export default function FeaturesList() {
  return (
    <div>
        {featuresData.map((feature, index) => (
          <div key={index}>
            <img src={iconList} alt="Icon" className="feature--icon" />
            <p>{feature.description}</p>
          </div>
        ))}
    </div>
  );
}
