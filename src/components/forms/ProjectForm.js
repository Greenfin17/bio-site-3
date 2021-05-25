// ProjectForm.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from 'styled-components';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';
import { updateProject } from '../../helpers/data/projects';

const ProjectFormElement = style(Form)`
  width: 52rem;
  margin: 40px auto 10px;
  border-bottom: 2px dotted blue;
`;

const DisplayLabel = style(Label)`
  display: block;
`;

const ProjectForm = ({ project, setProjects }) => {
  const [projectObj, setProjectObj] = useState({
    title: project.title || '',
    description: project.description || '',
    firebaseKey: project.firebaseKey || '',
    technologiesUsed: project.technologiesUsed || '',
    screenshot: project.screenshot || '',
    altText: project.altText || '',
    url: project.url || '',
    githubUrl: project.githubUrl || '',
    available: project.available || false,
  });

  const handleInputChange = (e) => {
    console.warn(e.target.name);
    setProjectObj((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProject(projectObj.firebaseKey, projectObj).then((projectArr) => {
      setProjects(projectArr);
      console.warn(projectObj);
    });
  };

  return (
    <ProjectFormElement onSubmit={handleSubmit}>
      <FormGroup>
        <Label for='title'>Title</Label>
        <Input type='text' name='title'
          onChange={handleInputChange} placeholder='Enter a title'
          value={projectObj.title} />
      </FormGroup>
      <FormGroup>
        <Label for='description'>Description</Label>
        <Input type='text' name='description' placeholder='Enter a description'
          onChange={handleInputChange} value={projectObj.description} />
      </FormGroup>
      <FormGroup>
        <Label for='technologiesUsed'>Technologies</Label>
        <Input type='text' name='technologiesUsed' placeholder='Comma list of technologies'
          onChange={handleInputChange} value={projectObj.technologiesUsed} />
      </FormGroup>
      <FormGroup>
        <Label for='screenshot'>Screenshot Url</Label>
        <Input type='text' name='screenshot' placeholder='Url of screenshot'
          onChange={handleInputChange} value={projectObj.screenshot} />
      </FormGroup>
      <FormGroup>
        <Label for='altText'>Alternate text for image</Label>
        <Input type='text' name='altText' placeholder='Alternate text for screenshot'
          onChange={handleInputChange} value={projectObj.altText} />
      </FormGroup>
      <FormGroup>
        <Label for='url'>Deploy Url</Label>
        <Input type='text' name='url' placeholder='Url of deployed site'
          onChange={handleInputChange} value={projectObj.url} />
      </FormGroup>
      <FormGroup>
        <Label for='githubUrl'>Github Url</Label>
        <Input type='text' name='githubUrl' placeholder='Github Url'
          onChange={handleInputChange} value={projectObj.githubUrl} />
      </FormGroup>
      <FormGroup>
        <DisplayLabel for='available'>Display?</DisplayLabel>
        <select name='available' defaultValue={projectObj.available}
          onChange={handleInputChange} >
          <option value='true'>Show</option>
          <option value='false'>Hide</option>
        </select>
      </FormGroup>
      <Button type='submit'>Submit</Button>
    </ProjectFormElement>
  );
};

ProjectForm.propTypes = {
  project: PropTypes.object,
  setProjects: PropTypes.func
};

export default ProjectForm;
