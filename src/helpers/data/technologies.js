// technologies.js

import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getTechnologies = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/tech.json`)
    .then((response) => {
      const projectsArr = Object.values(response.data);
      if (response.data) {
        resolve(projectsArr);
      } else resolve([]);
    }).catch((error) => reject(error));
});

const updateTechnology = (firebaseKey, techObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/tech/${firebaseKey}.json`, techObj, {
    headers: {
      provider: 'google',
      authed: {
        uid: 'ZrPQw19aW7PxyysLeHFP7eq4vQf1'
      }
    }
  })
    .then(() => getTechnologies().then((techArr) => {
      resolve(techArr);
    }))
    .catch((error) => reject(error));
});

const addTechnology = (techObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/tech.json`, techObj)
    .then((response) => {
      if (response.data) {
        const keyObj = { firebaseKey: response.data.name };
        axios.patch(`${dbUrl}/tech/${response.data.name}.json`, keyObj)
          .then(() => getTechnologies().then((techArr) => {
            resolve(techArr);
          }));
      } else resolve([]);
    })
    .catch((error) => reject(error));
});

const deleteTechnology = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/tech/${firebaseKey}.json`)
    .then(() => getTechnologies().then((techArr) => resolve(techArr)))
    .catch((error) => reject(error));
});

export {
  getTechnologies,
  updateTechnology,
  addTechnology,
  deleteTechnology
};
