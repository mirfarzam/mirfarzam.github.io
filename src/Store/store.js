import {createStore, applyMiddleware} from "redux";
import {defaultState} from "../Reducers/defaultState";
import {CHANGE_MODE} from "../Actions/action";
import {createLogger} from "redux-logger";

export const store = createStore(
    function reducer(state = defaultState, action) {
        switch(action.type) {
            case CHANGE_MODE :
                return {
                    ...state,
                    mode: action.mode
                };
            default:
                return state;
        }
    },
    applyMiddleware(createLogger())
);