import React from 'react';
import './home.css';
import './header.css';
import { Header } from './Header';
import { Scroll } from './Scroll';
export const Home = () => {
  return (
    // --------------HOME TITLES & PROFILE---------------------
    <section className="home container" id="home">
      <div className="intro">
        <div class="box">
          <div class="spin-container">
            <div class="shape">
              <div class="bd"></div>
            </div>
          </div>
        </div>
        <main class="container-text">
          <p>Hello 👋 I'm</p>
          <div className="content">
            <h1 className="home__name">hoda Madadi</h1>
            <h1 className="home__name">hoda Madadi</h1>
          </div>
          <section class="animation">
            <div class="first">
              <div>
                Front-End Developer <i class="fa-solid fa-laptop-code"></i>
              </div>
            </div>
            <div class="second">
              <div>
                Web Developer <i class="fa-solid fa-code"></i>
              </div>
            </div>
          </section>
        </main>
        {/* ----------HEADER COMPONENT--------------- */}
        <Header></Header>
        <a href="#contact">
          <button className="btn-button">Lets Talk</button>
        </a>
        {/*----------SCROLLING COMPONENT---------------*/}
        <Scroll></Scroll>
      </div>
    </section>
  );
};
