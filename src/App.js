import React, { useState } from 'react';
import Header from './components/Header';
import FeaturesList from './components/FeaturesList';
import NewsletterForm from './components/NewsletterForm';
import SuccessMessage from './components/SuccessMessage';

export default function App() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="main-container">
      {!submitted ? (
        <>
          <Header />
          <FeaturesList />
          <NewsletterForm setSubmitted={setSubmitted} />
        </>
      ) : (
        <SuccessMessage />
      )}
    </div>
  );
}



