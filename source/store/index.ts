/** @format */

import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
  // reducers
})

const middlewares = [thunk]

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))
