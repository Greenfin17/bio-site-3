// projecst.js

import axios from 'axios';
// import firebase from 'firebase';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/projects.json`)
    .then((response) => {
      const projectsArr = Object.values(response.data);
      if (response.data) {
        resolve(projectsArr);
      } else resolve([]);
    }).catch((error) => reject(error));
});

const updateProject = (firebaseKey, projectObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/projects/${firebaseKey}.json`, projectObj, {
    headers: {
      provider: 'google',
      authed: {
        uid: 'ZrPQw19aW7PxyysLeHFP7eq4vQf1'
      }
    }
  })
    .then(() => getProjects().then((projectsArr) => {
      resolve(projectsArr);
    }))
    .catch((error) => reject(error));
});

const addProject = (projectObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/projects.json`, projectObj)
    .then((response) => {
      if (response.data) {
        const keyObj = { firebaseKey: response.data.name };
        axios.patch(`${dbUrl}/projects/${response.data.name}.json`, keyObj)
          .then(() => getProjects().then((projectArr) => {
            resolve(projectArr);
          }));
      } else resolve([]);
    })
    .catch((error) => reject(error));
});

const deleteProject = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/projects/${firebaseKey}.json`)
    .then(() => getProjects().then((projectArr) => resolve(projectArr)))
    .catch((error) => reject(error));
});

export {
  updateProject, getProjects,
  addProject, deleteProject
};
