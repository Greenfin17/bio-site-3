// TechForm.js
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
import {
  getTechnologies,
  updateTechnology,
  addTechnology,
  deleteTechnology
} from '../../helpers/data/technologies';

const TechFormElement = style(Form)`
  width: 40rem;
  margin: 40px auto 10px;
  border-bottom: 2px dotted blue;
`;

const DisplayLabel = style(Label)`
  display: block;
`;

const TechForm = ({
  tech,
  setTechArr
}) => {
  const [techObj, setTechObj] = useState({
    firebaseKey: tech ? tech.firebaseKey : '',
    name: tech ? tech.name : '',
    url: tech ? tech.url : '',
    techUrl: tech ? tech.techUrl : '',
    show: tech ? tech.show : false
  });

  const handleInputChange = (e) => {
    setTechObj((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleDelete = () => {
    deleteTechnology(techObj.firebaseKey).then(() => getTechnologies()
      .then((localTechArr) => setTechArr(localTechArr)));
  };

  const handleShowHide = (e) => {
    const show = (e.target.value === 'true');
    setTechObj((prevState) => ({
      ...prevState,
      [e.target.name]: show
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tech) {
      updateTechnology(techObj.firebaseKey, techObj).then((techArr) => {
        setTechArr(techArr);
      });
    } else {
      addTechnology(techObj).then((techArr) => {
        setTechArr(techArr);
      });
    }
  };

  return (
    <TechFormElement onSubmit={handleSubmit}>
      <FormGroup>
        <Label for='name'>Name</Label>
        <Input type='text' name='name'
          onChange={handleInputChange} placeholder='Enter Tech Name'
          value={techObj.name} />
      </FormGroup>
      <FormGroup>
        <Label for='url'>Icon URL</Label>
        <Input type='text' name='url' placeholder='Enter Tech Icon Url'
          onChange={handleInputChange} value={techObj.url} />
      </FormGroup>
      <FormGroup>
        <Label for='techUrl'>Tech URL</Label>
        <Input type='text' name='techUrl' placeholder='Enter Tech Url'
          onChange={handleInputChange} value={techObj.techUrl} />
      </FormGroup>
      <FormGroup>
        <DisplayLabel for='show'>Display?</DisplayLabel>
        <select name='show' defaultValue={techObj.show}
          onChange={handleShowHide} >
          <option value={true}>Show</option>
          <option value={false}>Hide</option>
        </select>
      </FormGroup>
      <Button type='submit'>Submit</Button>
      <Button type='button' color='danger'
        onClick={handleDelete}>Delete</Button>
    </TechFormElement>
  );
};

TechForm.propTypes = {
  tech: PropTypes.object,
  setTechArr: PropTypes.func
};

export default TechForm;
