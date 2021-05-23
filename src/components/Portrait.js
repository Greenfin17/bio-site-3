// Portrait.js

import React from 'react';
import style from 'styled-components';
import self from '../images/Self-Bross-2016.jpg';

const SelfImage = style.img`
  margin-top: 50px;
  height: 100px;
  width: auto;
`;

const Portrait = () => (
    <section className='portrait'>
      <SelfImage src={self} alt='Image of myself, John Maple' />
    </section>
);

export default Portrait;
