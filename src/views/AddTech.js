// AddTech.js

import React from 'react';
import PropTypes from 'prop-types';
import TechForm from '../components/forms/TechForm';

const AddTech = ({
  setTechArr
}) => (
  <div className='tech-forms-view'>
    <TechForm
        setTechArr={setTechArr} />
  </div>
);

AddTech.propTypes = {
  setTechArr: PropTypes.func
};

export default AddTech;
