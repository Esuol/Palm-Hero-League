import {combineReducers} from 'redux';
import {tabReducer, refreshReducer} from './common';

const reducers = combineReducers({
    tabReducer,
    refreshReducer
});

export default reducers;
