// EditProjects.js

import React from 'react';
import PropTypes from 'prop-types';
import ProjectForm from '../components/forms/ProjectForm';

const EditProjects = ({
  projects,
  setProjects
}) => (
  <div className='project-forms-view'>
    { projects.map((projectObj, key) => <ProjectForm
        key={key}
        project={projectObj}
        setProjects={setProjects} />) }
  </div>
);

EditProjects.propTypes = {
  projects: PropTypes.array,
  setProjects: PropTypes.func
};

export default EditProjects;
