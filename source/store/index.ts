import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  bmReducer,
  uploadFileReducer,
  promptVideoReducer,
  loginReducer,
  videoReducer,
  uploadVideoReducer,
  homeReducer,
  usrProfileReducer
} from './reducers'

const rootReducer = combineReducers({
  login: loginReducer,
  videos: videoReducer,
  promptVideos: promptVideoReducer,
  library: videoReducer,
  bookmarked: bmReducer,
  home: homeReducer,
  uploadVideo: uploadVideoReducer,
  usrProfile: usrProfileReducer,
  uploadFile: uploadFileReducer
})

const middlewares = [thunk]

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>
