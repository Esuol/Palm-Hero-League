import {combineReducers} from 'redux';
import commonReducers from './common';

const reducers = combineReducers(
    commonReducers
);

export default reducers;
