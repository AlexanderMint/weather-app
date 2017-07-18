import { pendingTask, begin, end } from 'react-redux-spinner';
import api from 'api/weather';

// constants
const GET_CURRENT_WEATHER_REQUEST = 'GET_CURRENT_WEATHER_REQUEST';
const GET_CURRENT_WEATHER_SUCCESS = 'GET_CURRENT_WEATHER_SUCCESS';
const GET_CURRENT_WEATHER_FAIL = 'GET_CURRENT_WEATHER_FAIL';

// actions creators
export function getCurrentWeather(cityID) {
  return (dispatch) => {
    dispatch({
      type: GET_CURRENT_WEATHER_REQUEST,
      [pendingTask]: begin
    });

    api.getCurrentWeather(cityID)
      .then((currentWeather) => {
        dispatch({
          type: GET_CURRENT_WEATHER_SUCCESS,
          payload: {
            current: currentWeather,
            [pendingTask]: end
          }
        });
      })
      .catch((errors) => {
        try {
          dispatch({
            type: GET_CURRENT_WEATHER_FAIL,
            [pendingTask]: end
          });
        /* eslint-disable no-empty */
        } catch (e) {}
        /* eslint-enable no-empty */

        throw new Error(errors);
      });
  };
}


// reducer
const initialState = {
  current: {}
};

export default function (state = initialState, action) {
  switch (action.type) {

    case GET_CURRENT_WEATHER_SUCCESS:
      return { ...state, ...action.payload };

    case GET_CURRENT_WEATHER_FAIL:
      return { ...state, current: {} };

    default:
      return state;
  }
}
