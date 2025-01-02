// components/Header.js
import React from "react";
import logo from '../img/logo.png';

function Header() {
  const toggleMenu = () => {
    const dropdownMenu = document.querySelector(".dropdownMenu");
    const menuIcon = document.querySelector("#menu-icon");
    dropdownMenu.classList.toggle("open");
    if (dropdownMenu.classList.contains("open")) {
      menuIcon.classList.remove("bx-menu");
      menuIcon.classList.add("bx-x");
    } else {
      menuIcon.classList.remove("bx-x");
      menuIcon.classList.add("bx-menu");
    }
  };

  return (
    <header>
      <a href="#" className="logo">
        <img src={logo} alt="Logo" />
      </a>
      <ul className="navmenu">
        <li><a href="#">Home</a></li>
        <li><a href="#">AboutUs</a></li>
        <li><a href="#">Agents</a></li>
        <li><a href="#">Blog</a></li>
      </ul>
      <div className="search-box">
        <input type="text" className="search-box" placeholder="Search" />
        <i className="fas fa-search"></i>
      </div>
      <ul className="navmenu">
        <li><a href="#">SignIn</a></li>
        <li><a href="#">SignUp</a></li>
      </ul>
      <div className="nav-icon" onClick={toggleMenu}>
        <div className="bx bx-menu" id="menu-icon"></div>
      </div>
      <div className="dropdownMenu">
        <li><a href="#">Home</a></li>
        <li><a href="#">AboutUs</a></li>
        <li><a href="#">Agents</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">SignIn</a></li>
        <li><a href="#">SignUp</a></li>
      </div>
    </header>
  );
}

export default Header;
