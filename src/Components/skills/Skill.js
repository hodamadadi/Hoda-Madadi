import React from 'react';
import './skill.css';
export const Skill = () => {
  return (
    <section className="container section" id="skill">
      <div class="row">
        <div class="col-md-12 text-center">
          <p className="education__befor-title">Explore My</p>
          <h4 className=" animate-charcter section__title">
            Skills <i class="fa-solid fa-code"></i>
          </h4>
        </div>
      </div>
      <div class="container">
        {/*------------------------SKILLS--------------------------*/}
        <div class="row">
          <div class="col">
            <ul class="skill">
              <li>
                <span class="greenline html"></span>
                <em>HTML</em>
              </li>
              <li>
                <span class="greenline css"></span>
                <em>CSS</em>
              </li>
              <li>
                <span class="greenline javascript"></span>
                <em>JAVASCRIPT</em>
              </li>
              <li>
                <span class="greenline react"></span>
                <em>REACT</em>
              </li>
              <li>
                <span class="greenline bootstrap"></span>
                <em>BOOTSTRAP</em>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skill;
