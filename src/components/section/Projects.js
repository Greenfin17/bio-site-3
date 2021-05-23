// Projects.js

import React, { useState, useEffect } from 'react';
import getProjects from '../../helpers/data/projects';
import ProjectCard from '../cards/ProjectCard';

const Projects = () => {
  const [projectArr, setProjectArr] = useState([]);

  useEffect(() => {
    getProjects().then((projects) => setProjectArr(projects));
  }, []);

  return (
    <>
      <h2 id='projects-heading'>Projects</h2>
      <div className='fullPage d-flex justify-content-around' id='projects-section'>
      { projectArr.map((project, key) => project.available
        && <ProjectCard item={project} key={key} />)
      }
      </div>
    </>
  );
};

export default Projects;
