import React from 'react';
import './header.css';
export const Header = () => {
  return (
    // ---------------HOME SOCIALS-----------------
    <div className="home__socials">
      <a
        href="https://www.instagram.com/pinklady.rm"
        className="home__social-link"
        target="_blank"
      >
        <i class="fa-brands fa-instagram fa-lg"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/Hoda-Madadi"
        className="home__social-link"
        target="_blank"
      >
        <i class="fa-brands fa-linkedin fa-lg"></i>
      </a>

      <a
        href="https://www.x.com/HodaMadadi"
        className="home__social-link"
        target="_blank"
      >
        <i class="fa-brands fa-x fa-lg"></i>
      </a>

      <a
        href="https://www.facebook.com/Hoda846"
        className="home__social-link"
        target="_blank"
      >
        <i class="fa-brands fa-facebook fa-lg"></i>
      </a>

      <a
        href="https://www.threads.net/pinklady.rm"
        className="home__social-link"
        target="_blank"
      >
        <i class="fa-brands fa-threads fa-lg"></i>
      </a>
    </div>
  );
};
export default Header;
