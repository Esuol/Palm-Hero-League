import {tabsState, refreshState, areaState} from '../state/common';
import { SETTAB, TabPrame, PULLREFRESH, SELECTAREA } from '../action/common';

export const tabReducer =  function (state = tabsState, action: {type: string; data: TabPrame}) {
    switch(action.type) {
            case SETTAB:
                return {
                    title: action.data.title,
                    key: action.data.key,
                };
            default:
                return state;
    }
};

export const refreshReducer =  (state = refreshState, action: {type: string; data: boolean}) => {
    switch(action.type) {
            case PULLREFRESH:
                return {
                    refreshState: action.data
                };
            default:
                return state;
    }
};

export const areaReducer =  (state = areaState, action: {type: string; data: boolean}) => {
    switch(action.type) {
            case SELECTAREA:
                return {
                    areaState: action.data
                };
            default:
                return state;
    }
};
