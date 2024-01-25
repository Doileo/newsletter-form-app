import React, { useState } from 'react';
import Header from './components/Header';
import FeaturesList from './components/FeaturesList';
import NewsletterForm from './components/NewsletterForm';
import SuccessMessage from './components/SuccessMessage';

export default function App() {
  const [submitted, setSubmitted] = useState(false);

  const handleDismiss = () => {
    // Handle dismissal by updating state to show the main page
    setSubmitted(false);
  };

  return (
    <div className="main-container">
      {!submitted ? (
        <>
          <Header />
          <FeaturesList />
          <NewsletterForm setSubmitted={setSubmitted} />
        </>
      ) : (
        <SuccessMessage  onDismiss={handleDismiss}/>
      )}
    </div>
  );
}



