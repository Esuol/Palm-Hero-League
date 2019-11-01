import initalState from '../state/common';
import { SETTAB, TabPrame } from '../action/common';

export default function (state = initalState, action: {type: string; data: TabPrame}) {
    switch(action.type) {
            case SETTAB:
                return {
                    title: action.data.title,
                    type: action.data.type,
                };
            default:
                return state;
    }
}
