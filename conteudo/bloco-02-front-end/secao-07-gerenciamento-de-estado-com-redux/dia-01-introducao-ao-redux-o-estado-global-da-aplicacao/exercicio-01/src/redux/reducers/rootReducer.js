import { combineReducers } from 'redux';
import colorReducer from './colorReducer';

const rootReducer = combineReducers({ colorReducer });

export default rootReducer;
