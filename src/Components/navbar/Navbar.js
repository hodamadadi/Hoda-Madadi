import React from 'react';
import myLogo from '../../assets/myLogo.png';
import './navbar.css';
const Navbar = () => {
  return (
    <div>
      {/*Hamburger menu end*/}
      <input type="checkbox" id="navcheck"></input>
      <div class="nav-btn">
        <label htmlfor="navcheck">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      {/*Header start*/}
      <header class="header">
        <nav class="navbar">
          <h4>
            <img className="nav-pic" src={myLogo}></img>
            <a href="#" class="nav-logo">
              Hoda Madadi
            </a>
          </h4>
          {/*Navigation*/}
          <ul class="nav-menu">
            <li class="nav-item">
              <a href="#home" class="nav-link">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="#about" class="nav-link">
                About
              </a>
            </li>
            <li class="nav-item">
              <a href="#education" class="nav-link">
                Education
              </a>
            </li>
            <li class="nav-item">
              <a href="#skill" class="nav-link">
                Skills
              </a>
            </li>
            <li class="nav-item">
              <a href="#myProject" class="nav-link">
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a href="#contact" class="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      {/*Header start*/}
      {/*Backdrop start (for mobile menu only) */}
      <div class="backdrop"></div>
      {/*Backdrop end (for mobile menu only)*/}
    </div>
  );
};
export default Navbar;
