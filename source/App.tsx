import React from 'react'
import { LogBox } from 'react-native'

import setI18nConfig from '~/i18n'
import { Screens } from './screens'

// handy to turn off yellow box for testing purposes
LogBox.ignoreAllLogs(false)

const App = () => {
  setI18nConfig()
  return <Screens />
}

export default App
