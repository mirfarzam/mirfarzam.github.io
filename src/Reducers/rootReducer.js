import {combineReducers} from 'redux';
import mode from './modeReducer';

const rootReducer = combineReducers({
    mode
});

export default rootReducer;