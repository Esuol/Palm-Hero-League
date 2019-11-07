import {combineReducers} from 'redux';
import {tabReducer, refreshReducer, areaReducer} from './common';

const reducers = combineReducers({
    tabReducer,
    refreshReducer,
    areaReducer
});

export default reducers;
