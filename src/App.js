import React, { useState } from "react";
import Header from "./components/Header";
import FeaturesList from "./components/FeaturesList";
import NewsletterForm from "./components/NewsletterForm";
import SuccessMessage from "./components/SuccessMessage";
import "./index.css";

export default function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <main className="main-container">
      {!isSubmitted ? (
        <>
          <Header />
          <FeaturesList />
          <NewsletterForm setIsSubmitted={setIsSubmitted} />
        </>
      ) : (
        <SuccessMessage onDismiss={() => setIsSubmitted(false)} />
      )}
    </main>
  );
}
