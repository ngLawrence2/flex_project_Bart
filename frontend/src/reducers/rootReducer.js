import {combineReducers} from 'redux';
import sessionReducer from './session_reducer.js';
import sessionErrorReducer from './session_error_reducer.js';

const rootReducer = combineReducers({
  session: sessionReducer
});

export default rootReducer;
