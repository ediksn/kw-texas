/** @format */

import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { appReducer } from './app'
import { videoReducer } from './reducers'

const rootReducer = combineReducers({
  app: appReducer,
  videos: videoReducer
})

const middlewares = [thunk]

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>
