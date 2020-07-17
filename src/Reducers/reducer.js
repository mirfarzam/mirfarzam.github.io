import { CHANGE_MODE } from "../Actions/action";

function changeModeReducer(state, action){
    if (action.type === CHANGE_MODE) {
        return {
            mode: action.mode
        };
    } else {
        return state;
    }
}

export default changeModeReducer;