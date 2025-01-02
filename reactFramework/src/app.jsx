// App.js
import React from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import BookingSection from "./components/BookingSection.jsx";
import HowItWorks from "./components/body.jsx";
import Footer from "./components/Footer.jsx";
import "./styles.css";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <BookingSection />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;
