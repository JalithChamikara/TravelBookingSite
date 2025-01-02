// components/BookingSection.js
import React from "react";

function BookingSection() {
  return (
    <div className="class-wrap">
      <div className="tabss">
        <button className="tab">Business Class</button>
        <button className="tab">First Class</button>
      </div>
      <div className="flight-search">
        <div className="search-wrap">
          <div className="ticket-type">
            <button className="ticket-btn">One Way</button>
            <button className="ticket-btn">Round Trip</button>
            <button className="ticket-btn">Multicity</button>
          </div>
          <form className="search-form">
            <div className="form-group">
              <label htmlFor="departure">Departure City</label>
              <span className="icon"><i className="fas fa-plane-departure"></i></span>
              <input type="text" id="departure" placeholder="Pakistan" />
            </div>
            <div className="form-group">
              <label htmlFor="arrival">Arrival City</label>
              <span className="icon"><i className="fas fa-plane-arrival"></i></span>
              <input type="text" id="arrival" placeholder="Dubai" />
            </div>
            <div className="form-group">
              <label htmlFor="departure-date">Departure Date</label>
              <span className="icon"><i className="fas fa-calendar-alt"></i></span>
              <input type="date" id="departure-date" />
            </div>
            <div className="form-group">
              <label htmlFor="arrival-date">Arrival Date</label>
              <span className="icon"><i className="fas fa-calendar-alt"></i></span>
              <input type="date" id="arrival-date" />
            </div>
            <div className="form-group">
              <label htmlFor="passengers">Passengers</label>
              <span className="icon"><i className="fas fa-user"></i></span>
              <input type="number" id="passengers" min="1" value="1" />
            </div>
            <div className="searchbtn-wrapper">
              <button className="book-button">
                <p>Search Flight</p>
                <span className="icon-search"><i className="fas fa-search"></i></span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookingSection;
