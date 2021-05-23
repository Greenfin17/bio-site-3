// ProjectCard.js

import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = ({ item }) => (
  <div className='card my-2' style={ width: '8rem' } id={item.index}>
    <div className='card-body'>
      <p className='card-text project-title'>{item.title}</p>
      <img className='img-container' src={item.screenshot} alt={item.altText} />
      <p className='card-text technologies'>Technologies: {item.technologiesUsed}</p>
      <p className='card-text url'><a href={item.url}>Site Link</a></p>
      <p className='card-text githubUrl'><a href={item.githubUrl}>GitHub</a></p>
    </div>
  </div>
);

ProjectCard.propTypes = {
  item: PropTypes.object
};

export default projectCard;
