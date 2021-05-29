// Footer.js

import React from 'react';

const Footer = () => (
  <footer className='page-footer'>
    <ul className='ul-contact-footer'>
      <li><i className='fa fa-envelope' aria-hidden='true'></i>
        <a href="mailto:jmaple177@gmail.com">jmaple177@gmail.com</a></li>
      <li><i className='fab fa-github'></i>
        <a href='https://github.com/Greenfin17'>Github</a></li>
      <li><i className='fab fa-linkedin-in'></i>
        <a href='https://www.linkedin.com/in/john-maple-84590643'>LinkedIn</a></li>
    </ul>
    <div className='footer-flaticon'>
      <div className='flaticon'>
        Icons made by <a href='https://www.flaticon.com/authors/pixel-perfect' title='Pixel perfect'>Pixel perfect</a> from <a href='https://www.flaticon.com/' title='Flaticon'>www.flaticon.com</a>
      </div>
    </div>
  </footer>
);

export default Footer;
