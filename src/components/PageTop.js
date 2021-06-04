// PageTop.js
// Adjusting for branch commented-code2

import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar';
import Portrait from './Portrait';

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
