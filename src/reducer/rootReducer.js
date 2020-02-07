import { combineReducers } from 'redux';
import screenSizeReducer from './screenSizeReducer';
import projectReducer from './projectReducer';

export default combineReducers({
    screenSizeReducer,
    projectReducer,
   });