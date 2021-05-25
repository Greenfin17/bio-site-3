// projecst.js

import axios from 'axios';
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
  axios.patch(`${dbUrl}/projects/${firebaseKey}.json`, projectObj)
    .then(() => getProjects().then((projectsArr) => {
      resolve(projectsArr);
    }))
    .catch((error) => reject(error));
});

export {
  updateProject, getProjects
};
