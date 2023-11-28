import React from 'react';
import './App.css';
import Navbar from './Components/navbar/Navbar';
import { Home } from './Components/home/Home';
import { About } from './Components/about/About';
import { Education } from './Components/education/Education';
import Skill from './Components/skills/Skill';
import Language from './Components/language/Language';
import { Contact } from './Components/contact/Contact';
import Project from './Components/project/Project';
import { Footer } from './Components/contact/Footer';
const App = () => {
  return (
    <div>
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Education></Education>
      <Skill></Skill>
      <Language></Language>
      <Project></Project>
      <Contact></Contact>
      <Footer></Footer>
      <a id="back-to-top" href="#home">
        <i class="fa-solid fa-arrow-up"></i>
      </a>
    </div>
  );
};
export default App;
