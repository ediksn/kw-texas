import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { bmReducer, loginReducer, videoReducer, homeReducer } from '~/store/reducers'

export default function createTestStore() {
  const store = createStore(
    combineReducers({
      login: loginReducer,
      library: videoReducer,
      bookmarked: bmReducer,
      home: homeReducer
    }),
    applyMiddleware(thunk)
  )
  return store
}
