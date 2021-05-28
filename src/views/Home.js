// Homes.js

import React from 'react';
import PropTypes from 'prop-types';
import Projects from '../components/section/Projects';
import Technologies from '../components/section/Technologies';
import Footer from '../components/section/Footer';

const Home = ({
  projects,
  techArr
}) => (
    <div className='home-page'>
    <div className='fullPage' id='bioPage'>
    <h2 id='about-heading'>About Me</h2>
    <p>I am a musician and long time learner in all things computing.
      I enjoy the logic of programming and find immersion in code somehow relaxing.
      When COVID-19 raged and there were no live performances, I took the opportunity to enroll
      at the Nashville Software School. As a mountain climber climbs a peak because it is there
      and must be conquered, when a coding challenge is in front of me, I must figure out a solution and I cannot rest until I have found one.</p>
    </div>
    <Technologies techArr={techArr} />
    <Projects projects={projects} />
    <Footer />
  </div>
);

Home.propTypes = {
  projects: PropTypes.array,
  techArr: PropTypes.array
};

export default Home;
