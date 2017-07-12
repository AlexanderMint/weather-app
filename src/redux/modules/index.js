import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { pendingTasksReducer as pendingTasks } from 'react-redux-spinner';


export default combineReducers({
  routing: routerReducer,
  pendingTasks
});
