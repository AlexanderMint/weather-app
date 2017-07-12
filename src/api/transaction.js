import axios from 'axios';
import { api } from 'config';


export default {
  getTransaction(transactionID) {
    return new Promise((resolve, reject) => {
      axios.get(`${api.paths.transactions}${transactionID}`)
        .then((response) => {
          if (response.data.status) {
            resolve(response.data.transaction);
          } else {
            reject(response.data.errors);
          }
        })
        .catch(error => reject(error));
    });
  }
};
