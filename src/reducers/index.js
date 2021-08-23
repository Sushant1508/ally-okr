import { combineReducers } from 'redux';
import { onLoadReducer } from './initialReducer';

const rootReducer = combineReducers({ okrList: onLoadReducer });

export default rootReducer;
