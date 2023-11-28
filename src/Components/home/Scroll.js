import React from 'react';
import './home.css';
export const Scroll = () => {
  return (
    // ----------------HOME SCROLLING DOWN-----------------
    <div>
      <a href="#about" className="mouse__wrapper">
        <div class="scrolldowns">
        <span className="wheel"></span>
          <div class="chevrons">
            <div class="chevrondown"></div>
            <div class="chevrondown"></div>
          </div>
        </div>
      </a>
    </div>
  );
};
