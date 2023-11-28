import React from 'react';
import './about.css';
import photos from '../../assets/photos.jpg';
export const About = () => {
  return (
    <section className="about container section" id="about">
      {/*----------------ABOUT TITLES-----------------*/}
      <div className="about-me-title">
        <h4 className="animate-charcter section__title neon">
          About Me <i class="fa-regular fa-id-badge"></i>
        </h4>
        <p>Get To Know More</p>
      </div>

      {/*----------------SLIDER CONTROLS-----------------*/}
      <input
        type="radio"
        id="s-1"
        name="slider-control"
        checked="checked"
      ></input>
      <input type="radio" id="s-2" name="slider-control"></input>
      <input type="radio" id="s-3" name="slider-control"></input>
      <div class="js-slider">
        {/*---------------- SLIDE-1 ABOUT ME-----------------*/}
        <figure class="js-slider_item img-1 row">
          <div class="js-slider_img">
            <div className="about__container grid">
              <img src={photos} alt="" className="home__img about__img"></img>
              <div className="about__data grid">
                <div className="about__info">
                  <p>
                    I'm Bentolhoda Madadi, front-end developer with entry-level
                    experience. Interested fron-end technologies knowdgeable
                    with JS, CSS, HTML and React. As an intern, I'm very curious
                    about social media design, data collection, different
                    features of platform, learning everything about computer
                    science and its subcategories. I'm also actively in a team
                    working. I demonstrate dedication to making a positive
                    impact through my volunteer work in a team working.
                  </p>
                  <button href="#contact" className="btn-button bt">
                    Contact Me
                  </button>
                </div>
              </div>
            </div>
          </div>
          <figcaption class="wo-caption">
            <h4 class="wo-h4">
              <div class="c-label">Hoda Madadi</div>
            </h4>
            <ul class="wo-credit">
              <li>
                <span>page</span> <i class="fa-solid fa-1 fa-2x"></i>
              </li>
            </ul>
          </figcaption>
        </figure>
        {/*----------------SLIDE-2 LANGUAGE  CIRCLE BAR-----------------*/}
        <figure class="js-slider_item img-2">
          <div class="js-slider_img">
            <div class="wrapper">
              <div class="wrap">
                <div class="working-with-me">
                  <div class="work working-define">
                    <h6>
                      Interests <i class="fa-solid fa-award"></i>
                    </h6>
                    <ul class="working-text">
                      <li> Coding</li>
                      <li>Research</li>
                      <li>Study</li>
                      <li>Team Work</li>
                      <li>Design</li>
                      <li>Travel</li>
                      <li>Music</li>
                      <li>Exercise</li>
                    </ul>
                  </div>
                  <div class="work working-deploy">
                    <h6>
                      Characteristic
                      <i class="fa-solid fa-heart-circle-check"></i>
                    </h6>
                    <ul class="working-text">
                      <li>Responsible</li>
                      <li>Love learning</li>
                      <li>Creative</li>
                      <li>Good team work</li>
                      <li>Flexiable</li>
                      <li>Honest</li>
                      <li>Punctual</li>
                      <li>Trstworthy</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <figcaption class="wo-caption">
            <h4 class="wo-h4">Characteristic & Interests:</h4>
            <ul class="wo-credit">
              <li>
                <span>
                  Page <i class="fa-solid fa-3 fa-2x"></i>
                </span>
              </li>
            </ul>
          </figcaption>
        </figure>
        {/*----------------SLIDER NAV-----------------*/}
        <div class="js-slider_nav">
          <label class="js-slider_nav_item s-nav-1 prev" for="s-3"></label>
          <label class="js-slider_nav_item s-nav-1 next" for="s-2"></label>
          <label class="js-slider_nav_item s-nav-2 prev" for="s-1"></label>
          <label class="js-slider_nav_item s-nav-2 next" for="s-3"></label>
          <label class="js-slider_nav_item s-nav-3 prev" for="s-2"></label>
          <label class="js-slider_nav_item s-nav-3 next" for="s-1"></label>
        </div>
        <div class="js-slider_indicator">
          <div class="js-slider-indi indi-1"></div>
          <div class="js-slider-indi indi-2"></div>
        </div>
      </div>
    </section>
  );
};
export default About;
