// AddProject.js

import React from 'react';
import PropTypes from 'prop-types';
import ProjectForm from '../components/forms/ProjectForm';

const AddProject = ({
  setProjects
}) => (
  <div className='project-forms-view'>
    <ProjectForm
        setProjects={setProjects} />
  </div>
);

AddProject.propTypes = {
  setProjects: PropTypes.func
};

export default AddProject;
