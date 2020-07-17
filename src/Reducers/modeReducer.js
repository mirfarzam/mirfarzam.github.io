import initialState from './initialState'
import {MAKE_DARK_MODE, MAKE_LIGHT_MODE} from "../Actions/actionTypes";

export default function mode(state = initialState.mode, action) {
    console.log(action.type);
    return (action.type === MAKE_DARK_MODE) ? "night" : "day";
}