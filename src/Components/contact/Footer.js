import React from 'react';
import './footer.css';
import myLogo from '../../assets/myLogo.png';
import GoogleMap from './GoogleMap';
export const Footer = () => {
  return (
    <section className="container section">
      <div className="map">
        <h5 className="location-title animate-charcter">
          {' '}
          <i class="fa-solid fa-location-dot"> </i> Location:
        </h5>
        {/* ---------------------CALLING GOOGLE MAP--------------------- */}
        <GoogleMap></GoogleMap>
      </div>
      {/* --------------------------FOOTER-------------------------- */}
      <footer class="footer-section">
        <div class="container">
          <div class="footer-cta pt-5 pb-5">
            <div class="row">
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="fas fa-map-marker-alt"></i>
                  <div class="cta-text">
                    <h4>Find Me</h4>
                    <span>Refah 6, Herat, Afghanistan</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="fas fa-phone"></i>
                  <div class="cta-text">
                    <h4>Call Me</h4>
                    <span>93 731062846</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="far fa-envelope-open"></i>
                  <div class="cta-text">
                    <h4>Mail Me</h4>
                    <span>HodaMadadi5@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-content pt-5 pb-5">
            <div class="row">
              <div class="col-xl-4 col-lg-4 mb-50">
                <div class="footer-widget">
                  <div class="footer-logo">
                    <a href="index.html">
                      <img src={myLogo} class="img-fluid" alt="logo"></img>
                    </a>
                  </div>
                  <div class="footer-text">
                    <p>
                      A front end web developer with entry-level experience from
                      Herat, Afghanistan.
                    </p>
                  </div>
                  <div class="footer-social-icon">
                    <span>Follow Me</span>
                    <a href="https://www.facebook.com/Hoda846" target="_blank">
                      <i class="fa-brands fa-facebook fa-lg fab facebook-bg  shadows fa-bounce"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/pinklady.rm"
                      target="_blank"
                    >
                      <i class="fa-brands fa-instagram fa-lg fab instagram-bg shadows fa-bounce"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/Hoda-Madadi"
                      target="_blank"
                    >
                      <i class="fa-brands fa-linkedin fa-lg fab linkedin-bg shadows fa-bounce"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li>
                      <a href="#home">Home</a>
                    </li>
                    <li>
                      <a href="#about">About</a>
                    </li>
                    <li>
                      <a href="#education">Education</a>
                    </li>
                    <li>
                      <a href="#skill">Skills</a>
                    </li>
                    <li>
                      <a href="#myProject">Project</a>
                    </li>
                    <li>
                      <a href="#contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <h3>Hoda Madadi</h3>
                  </div>
                  <div class="footer-text mb-25">
                    <p>Front-End Develooer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright-area">
          <div class="container">
            <div class="row">
              <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                <div class="copyright-text">
                  <p>
                    &copy; 2023 by Hoda Madadi. All Right Reserved.{' '}
                    <a href="mailto:hodamadadi5@gmail.com">Hoda</a>
                  </p>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div class="footer-menu">
                  <ul>
                    <li>
                      <a href="#home">Home</a>
                    </li>
                    <li>
                      <a href="#about">About</a>
                    </li>
                    <li>
                      <a href="#education">Education</a>
                    </li>
                    <li>
                      <a href="#skill">Skills</a>
                    </li>
                    <li>
                      <a href="#contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};
