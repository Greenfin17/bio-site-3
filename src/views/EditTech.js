// EditTech.js

import React from 'react';
import PropTypes from 'prop-types';
import TechForm from '../components/forms/TechForm';

const EditTech = ({
  techArr,
  setTechArr
}) => (
  <div className='tech-forms-view'>
    { techArr.map((techObj, key) => <TechForm
        key={key}
        tech={techObj}
        setTechArr={setTechArr} />) }
  </div>
);

EditTech.propTypes = {
  techArr: PropTypes.array,
  setTechArr: PropTypes.func
};

export default EditTech;
