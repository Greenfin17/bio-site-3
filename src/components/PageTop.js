// PageTop.js

import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar';
import Portrait from './Portrait';

/*
const SelfImage = styled.img`
  height: 150px;
  width: auto;
  display: block;
  margin: 50px auto 20px;
`;
*/

const PageTop = ({
  isAdmin,
}) => (
  <div className='page-top'>
    <NavBar
      isAdmin={isAdmin}
    />
    <Portrait />
  </div>
);

PageTop.propTypes = {
  isAdmin: PropTypes.bool,
};

export default PageTop;
