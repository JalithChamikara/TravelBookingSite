// components/HowItWorks.js
import React from "react";
import sideImg from '../img/side-img.png';
import video from '../img/video.mp4';

function HowItWorks() {
  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <p>These are the simple procedures that will make your purchesing process super easy <br />
      and smooth. And will help you to get your flight easily.</p>
      <div className="steps-container">
        <div className="steps-block">
          <img className="side-img" src={sideImg} alt="Side" />
          <div className="steps">
            <div className="step">
              <span>1</span>
              <p>Search Flights</p>
            </div>
            <div className="step">
              <span>2</span>
              <p>Fill Contact Form</p>
            </div>
            <div className="step">
              <span>3</span>
              <p>Choose Your Airline</p>
            </div>
            <div className="step">
              <span>4</span>
              <p>Booking in 10 Minutes!</p>
            </div>
          </div>
        </div>
        <div className="video">
          <video width="100%" height="400" controls>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
