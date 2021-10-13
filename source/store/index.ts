import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  bmReducer,
  promptVideoReducer,
  loginReducer,
  videoReducer,
  uploadVideoReducer,
  homeReducer,
  usrProfileReducer
} from './reducers'

const rootReducer = combineReducers({
  login: loginReducer,
  promptVideos: promptVideoReducer,
  library: videoReducer,
  bookmarked: bmReducer,
  home: homeReducer,
  uploadVideo: uploadVideoReducer,
  usrProfile: usrProfileReducer
})

const middlewares = [thunk]

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>
