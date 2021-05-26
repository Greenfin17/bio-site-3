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

export default getTechnologies;
