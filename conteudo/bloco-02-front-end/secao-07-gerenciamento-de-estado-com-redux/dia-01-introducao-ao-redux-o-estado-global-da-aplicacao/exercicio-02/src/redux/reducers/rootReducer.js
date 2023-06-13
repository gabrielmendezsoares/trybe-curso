import { combineReducers } from 'redux';
import togglerReducer from './togglerReducer';

const rootReducer = combineReducers({ togglerReducer });

export default rootReducer;
