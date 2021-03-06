import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { homeReducer } from "../ducks/home";
import { jobReducer } from '../ducks/job';
import { toastReducer } from '../ducks/toast';

const composeEnhancers = compose;

const rootReducer = combineReducers({
    home: homeReducer,
    toast: toastReducer,
    job: jobReducer,
});

const enhancer = composeEnhancers(applyMiddleware(thunk));
export function createTestStore() {
    return createStore(rootReducer, enhancer);
}
