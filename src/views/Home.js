// Homes.js

import React from 'react';
import html from '../graphics/HTML5_Logo.svg';
import css from '../graphics/css-3.png';
import javascript from '../graphics/javascript-seeklogo.com.svg';
import gitHub from '../graphics/Git-Hub.svg';
import Projects from '../components/section/Projects';

const Home = () => (
    <div className='home-page'>
    <div className='fullPage' id='bioPage'>
    <h2 id='about-heading'>About Me</h2>
    <p>I am a musician and long time learner in all things computing.
      I enjoy the logic of programming and find immersion in code somehow relaxing.
      When COVID-19 raged and there were no live performances, I took the opportunity to enroll
      at the Nashville Software School. As a mountain climber climbs a peak because it is there
      and must be conquered, when a coding challenge is in front of me, I must figure out a solution and I cannot rest until I have found one.</p>
    </div>
    <div className='fullPage' id='technologiesPage'>
      <h2 id='technologies-heading'>Technologies</h2>
      <ul className='technologies'>
        <li><img src={html} /></li>
        <li><img src={css} /></li>
        <li><img src={javascript} /></li>
        <li><img src={gitHub} /></li>
      </ul>
    </div>
    <Projects />
    <footer className='page-footer'>
    <div>Icons made by <a href='https://www.flaticon.com/authors/pixel-perfect' title='Pixel perfect'>Pixel perfect</a> from <a href='https://www.flaticon.com/' title='Flaticon'>www.flaticon.com</a></div>
    </footer>`;
  </div>
);

export default Home;
