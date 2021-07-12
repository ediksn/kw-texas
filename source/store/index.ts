import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    //reducers
}) 

const middlewares = [thunk];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

