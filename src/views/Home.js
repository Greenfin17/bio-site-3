// Homes.js

import React from 'react';

import self from '../images/Self.jpg';
import html from '../graphics/HTML5_Logo.svg';
import css from '../graphics/css-3.png';
import javascript from '../graphics/javascript-seeklogo.com.svg';
import gitHub from '../graphics/Git-Hub.svg';

const Home = () => (
    <>
    <nav className='projects-nav' id='top'>
    <h1 >John Maple</h1>
    <ul id='navLinks'>
      <li><a id='navToBio' to='/bioPage/'>Bio</a></li>
      <li><a id='navToTechnologies' href='/technologiesPage'>Technologies</a></li>
      <li><a id='navToProjects' href='/projects-heading'>Projects</a></li>
    </ul>
    </nav>
    <section className='portrait'>
      <img src={self} alt='Image of myself, John Maple' />
    </section>

    <div className='fullPage' id='bioPage'>
    <h2>About Me</h2>
    <p>I am a musician and long time learner in all things computing. I enjoy the logic of programming and find
      immersion in code somehow relaxing. As COVID-19 rages and there are no live performances,
      I have taken the opportunity to enroll at the Nashville Software School. Where this will lead me
      on a practical level, I do not know. But I will know more in the end!</p>
    </div>
    <div className='fullPage' id='technologiesPage'>
    <h2>Technologies</h2>
    <ul className='technologies'>
      <li><img src={html} /></li>
      <li><img src={css} /></li>
      <li><img src={javascript} /></li>
      <li><img src={gitHub} /></li>
    </ul>
    </div>
    <h2 id='projects-heading'>Projects</h2>
    <div className='fullPage d-flex flex-wrap justify-content-around' id='projects-page'></div>

    <footer className='page-footer'>
    <div>Icons made by <a href='https://www.flaticon.com/authors/pixel-perfect' title='Pixel perfect'>Pixel perfect</a> from <a href='https://www.flaticon.com/' title='Flaticon'>www.flaticon.com</a></div>
    </footer>`;
  </>
);

export default Home;
