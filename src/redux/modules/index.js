import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { pendingTasksReducer as pendingTasks } from 'react-redux-spinner';
import cities from 'redux/modules/cities';


export default combineReducers({
  routing: routerReducer,
  pendingTasks,
  cities
});
