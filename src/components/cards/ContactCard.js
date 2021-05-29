// ContactCard.js

import React from 'react';

const ContactCard = () => (
  <>
    <ul className='contact-info'>
      <li><i className='fa fa-envelope' aria-hidden='true'></i>
        <a href="mailto:jmaple177@gmail.com">jmaple177@gmail.com</a></li>
      <li><i className='fab fa-github'></i>
        <a href='https://github.com/Greenfin17'>Github</a></li>
      <li><i className='fab fa-linkedin-in'></i>
        <a href='https://www.linkedin.com/in/john-maple-84590643'>LinkedIn</a></li>
    </ul>
  </>
);

export default ContactCard;
