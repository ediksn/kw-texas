import React from 'react'
import { LogBox } from 'react-native'
import { Provider } from 'react-redux'

import setI18nConfig from '~/i18n'
import { Screens } from './screens'
import { store } from './store'

// handy to turn off yellow box for testing purposes
LogBox.ignoreAllLogs(false)

const App = () => {
  setI18nConfig()
  return (
    <Provider store={store}>
      <Screens />
    </Provider>
  )
}

export default App
