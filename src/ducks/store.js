import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { homeReducer } from "./home";
import { jobReducer } from './job';
import { toastReducer } from './toast';

const composeEnhancers = (process.env.REACT_APP_ENV_TYPE !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const rootReducer = combineReducers({
    home: homeReducer,
    toast: toastReducer,
    job: jobReducer,
});

const enhancer = composeEnhancers(applyMiddleware(thunk));
export default createStore(rootReducer, enhancer);
