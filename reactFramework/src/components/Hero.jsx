// components/Hero.js
import React from "react";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Explore the World Together <br /> with Premium Travel</h1>
        <p>Get up to 50% Discount</p>
        <div className="button-wrapper">
          <button className="book-button">
            <p>Book Now</p>
            <span className="icon"><i className="fas fa-arrow-right"></i></span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
