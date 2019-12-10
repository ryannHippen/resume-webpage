import { combineReducers } from 'redux';
import GameSearchReducer from '../reducer/GameSearchReducer';
import UserReducer from '../reducer/UserReducer';

export default combineReducers({
    GameSearchReducer,
    UserReducer,
   });