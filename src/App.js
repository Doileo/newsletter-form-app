import React, { useState } from "react";
import Header from "./components/Header";
import SuccessMessage from "./components/SuccessMessage";
import "./index.css";

export default function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <main className="main-container">
      {!isSubmitted ? (
        <Header setIsSubmitted={setIsSubmitted} />
      ) : (
        <SuccessMessage onDismiss={() => setIsSubmitted(false)} />
      )}
    </main>
  );
}
