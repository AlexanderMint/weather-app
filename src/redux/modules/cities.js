import api from 'api/cities';

// constants
const GET_CITIES_REQUEST = 'GET_CITIES_REQUEST';
const GET_CITIES_SUCCESS = 'GET_CITIES_SUCCESS';
const GET_CITIES_FAIL = 'GET_CITIES_FAIL';

// actions creators
export function getCities(userID) {
  return (dispatch) => {
    dispatch({
      type: GET_CITIES_REQUEST
    });

    api.getCities(userID)
      .then((cities) => {
        dispatch({
          type: GET_CITIES_SUCCESS,
          payload: {
            cities
          }
        });
      })
      .catch((errors) => {
        console.error(errors);

        dispatch({
          type: GET_CITIES_FAIL
        });
      });
  };
}


// reducer
export default function (state = [], action) {
  switch (action.type) {

    case GET_CITIES_SUCCESS:
      return [...state, ...action.payload.cities];

    case GET_CITIES_FAIL:
      return [...state, ...[]];

    default:
      return state;
  }
}
