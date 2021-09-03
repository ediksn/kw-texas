import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { bmReducer, loginReducer, videoReducer, uploadVideoReducer } from './reducers'

const rootReducer = combineReducers({
  login: loginReducer,
  library: videoReducer,
  bookmarked: bmReducer,
  uploadVideo: uploadVideoReducer
})

const middlewares = [thunk]

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>
