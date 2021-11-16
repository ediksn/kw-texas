import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import {
  bmReducer,
  loginReducer,
  videoReducer,
  homeReducer,
  promptVideoReducer,
  uploadVideoReducer,
  usrProfileReducer,
  toastReducer
} from '~/store/reducers'

export default function createTestStore() {
  const store = createStore(
    combineReducers({
      login: loginReducer,
      videos: videoReducer,
      promptVideos: promptVideoReducer,
      library: videoReducer,
      bookmarked: bmReducer,
      home: homeReducer,
      uploadVideo: uploadVideoReducer,
      usrProfile: usrProfileReducer,
      toast: toastReducer
    }),
    applyMiddleware(thunk)
  )
  return store
}
