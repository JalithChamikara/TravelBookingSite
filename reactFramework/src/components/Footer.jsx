// components/Footer.js
import React from "react";

import img1 from '../img/img1.png';
import img2 from '../img/img2.png';
import img3 from '../img/img3.png';
import img4 from '../img/img4.png';
import img5 from '../img/img5.png';
import img6 from '../img/img6.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatio</p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Submit Article</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Freebies</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul>
              <li><a href="#">(888) 231 4522 258</a></li>
              <li><a href="#">3129 Doctors Drive...</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Gallery Showcase</h4>
            <div className="social-links">
              <img src={img1} alt="Gallery Image" />
              <img src={img2} alt="Gallery Image" />
              <img src={img3} alt="Gallery Image" />
              <img src={img4} alt="Gallery Image" />
              <img src={img5} alt="Gallery Image" />
              <img src={img6} alt="Gallery Image" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
