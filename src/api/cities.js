import axios from 'axios';
import { localData } from 'config';


export default {
  getCities() {
    return new Promise((resolve, reject) => {
      axios.get(localData.cities)
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
