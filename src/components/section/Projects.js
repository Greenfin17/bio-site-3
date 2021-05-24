// Projects.js

import React from 'react';
import PropTypes from 'prop-types';
import ProjectCard from '../cards/ProjectCard';

const Projects = ({ projects }) => (
  <>
    <h2 id='projects-heading'>Projects</h2>
    <div className='fullPage d-flex justify-content-around' id='projects-section'>
    { projects.map((project, key) => project.available
      && <ProjectCard item={project} key={key} />)
    }
    </div>
  </>
);

Projects.propTypes = {
  projects: PropTypes.array
};

export default Projects;
