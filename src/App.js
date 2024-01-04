import React from "react"
import Header from "./components/Header"
import FeaturesList from "./components/FeaturesList"
import NewsletterForm from "./components/NewsletterForm"
import SuccessMessage from "./components/SuccessMessage"

export default function App() {
  return (
    <div>
      <Header />
      <FeaturesList />
      <NewsletterForm />
      <SuccessMessage />
    </div>
  )
}

