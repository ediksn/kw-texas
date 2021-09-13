import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { bmReducer, loginReducer, videoReducer } from '~/store/reducers'

export default function createTestStore() {
  const store = createStore(
    combineReducers({
      login: loginReducer,
      library: videoReducer,
      bookmarked: bmReducer
    }),
    applyMiddleware(thunk)
  )
  return store
}
