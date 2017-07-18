import axios from 'axios';
import { weatherAPI } from 'config';


export default {
  getCurrentWeather(cityID) {
    return new Promise((resolve, reject) => {
      axios.get(`${weatherAPI.host}weather?id=${cityID}&appid=${weatherAPI.key}`)
        .then((response) => {
          if (response.data) {
            resolve(response.data);
          } else {
            reject(response.data.errors);
          }
        })
        .catch(error => reject(error));
    });
  }
};
