import React from 'react';
import './education.css';
export const Education = () => {
  return (
    <section class="container section timeline-area" id="education">
      <div class="container">
        <div class="timelines">
          <h4 className="animate-charcter timeline-title">
            EDUCATION & EXPERIENCE <i class="fa-solid fa-user-graduate"></i>
          </h4>
        </div>
        <div class="all-timelines">
          {/* -------------------SINGLE TIMELINE----------------------- */}
          <div class="single-timeline d-flex-2">
            <div class="timeline-blank"></div>
            <div class="timeline-text d-flex-2">
              <span>
                <h6>
                  <i class="fa-solid fa-calendar-days"> </i> March 2022 -
                  present
                </h6>
                <span className="timeline-titles">Database</span>
                <span class="timeline-texts">
                  Bachelor's Degree in Computer Science in Herat University.
                </span>
                <span className="location-icon">
                  <i class="fa-solid fa-building-columns"></i> Herat University
                  <br></br>
                  <i class="fa-solid fa-location-dot"></i> Bagh Morad, Herat,
                  Afghanistan
                </span>
              </span>
              <div class="t-square"></div>
            </div>
          </div>
          {/* ------------------SINGLE TIMELINE---------------------- */}
          <div class="single-timeline d-flex-2">
            <div class="timeline-blank"></div>
            <div class="timeline-text d-flex-2">
              <span>
                <h6>
                  {' '}
                  <i class="fa-solid fa-calendar-days"> </i> April 2019 -
                  October 2021
                </h6>
                <span className="timeline-titles"> AIL Youth Leaders:</span>
                <span class="timeline-texts">
                  Afghan Institude of Learning (AIL).
                </span>
                <span className="location-icon">
                  <i class="fa-solid fa-location-dot"></i> District 6, Herat,
                  Afghanistan Herat, Afghanistan
                </span>
              </span>
              <div class="t-square"></div>
            </div>
          </div>
          {/* ------------------SINGLE TIMELINE------------------------*/}
          <div class="single-timeline d-flex-2">
            <div class="timeline-blank"></div>
            <div class="timeline-text d-flex-2">
              <span>
                <h6>
                  {' '}
                  <i class="fa-solid fa-calendar-days"> </i> October 2022 -
                  Present
                </h6>
                <span className="timeline-titles">Full Stack Development</span>{' '}
                <span class="timeline-texts">Code to Inspire (CTI).</span>
                <span className="location-icon">
                  <i class="fa-solid fa-location-dot"></i> Bagh Azadi Street,
                  Herat, Afghanistan
                </span>
              </span>
              <div class="t-square"></div>
            </div>
          </div>
          {/* -----------------------SINGLE TIMELINE----------------------- */}
          <div class="single-timeline d-flex-2">
            <div class="timeline-blank"></div>
            <div class="timeline-text d-flex-2">
              <span>
                <h6>
                  <i class="fa-solid fa-calendar-days"> </i> October 2022 -
                  April 2022
                </h6>
                <span className="timeline-titles"> JAVA</span>
                <span class="timeline-texts">Sayegh Course.</span>
                <span className="location-icon">
                  {' '}
                  <i class="fa-solid fa-location-dot "></i> Bagh Morad, Herat,
                  Afghanistan
                </span>
              </span>
              <div class="t-square"></div>
            </div>
          </div>
          {/* -----------------------SINGLE TIMELINE-------------------------- */}
          <div class="single-timeline d-flex-2">
            <div class="timeline-blank"></div>
            <div class="timeline-text d-flex-2">
              <span>
                <h6>
                  {' '}
                  <i class="fa-solid fa-calendar-days"> </i> March 2021 - May
                  2021
                </h6>
                <span className="timeline-titles"> ICDL</span>
                <span class="timeline-texts">TOEFL Academy.</span>
              </span>
              <div class="t-square"></div>
            </div>
          </div>
          {/* ---------------------------SINGLE TIMELINE--------------------*/}
          <div class="single-timeline d-flex-2">
            <div class="timeline-blank"></div>
            <div class="timeline-text d-flex-2">
              <span>
                <h6>
                  {' '}
                  <i class="fa-solid fa-calendar-days"> </i> April 2021{' '}
                </h6>
                <span className="timeline-titles">Marketing & Business:</span>
                <span class="timeline-texts"> Apex Academy.</span>
              </span>
              <div class="t-square"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Education;
