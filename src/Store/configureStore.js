import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../Reducers/rootReducer';
import thunk from 'redux-thunk';

export default function configureStore() {
    return createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(thunk)
    );
}