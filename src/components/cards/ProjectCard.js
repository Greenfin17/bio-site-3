// ProjectCard.js

import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = ({ item }) => (
  <div className='card my-2' id={item.index}>
    <div className='card-body'>
      <p className='card-text project-title'>{item.title}</p>
      <img className='img-container' src={item.screenshot} alt={item.altText} />
      <p className='card-text technologies'>{item.description}</p>
      <div className = 'card-links'>
        <ul className='site-link-github'>
        <li className='card-text url'><a href={item.url}>
            Site Link<img className='site-link' src='https://storage.googleapis.com/tech-bucket/link.png' /></a></li>
        <li className='card-text githubUrl'><a href={item.githubUrl}>
            GitHub<img className='github-link' src='https://storage.googleapis.com/tech-bucket/Git-Hub.svg' /></a></li>
        </ul>
      </div>
    </div>
  </div>
);

ProjectCard.propTypes = {
  item: PropTypes.object
};

export default ProjectCard;
