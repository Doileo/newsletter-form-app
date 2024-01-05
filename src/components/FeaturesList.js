import React from 'react';

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
      <ul>
        {featuresData.map((feature, index) => (
          <li key={index}>
            <img src="../images/icon-list.png" alt="Icon" />
            <p>{feature.description}</p>
            </li>
        ))}
      </ul>
    </div>
  );
}
