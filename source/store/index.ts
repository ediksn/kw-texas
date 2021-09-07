import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { loginReducer, videoReducer, promptVideoReducer, bmReducer, homeReducer } from './reducers'

const rootReducer = combineReducers({
  login: loginReducer,
  videos: videoReducer,
  promptVideos: promptVideoReducer,
  library: videoReducer,
  bookmarked: bmReducer,
  home: homeReducer
})

const middlewares = [thunk]

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>
