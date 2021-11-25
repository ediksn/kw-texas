import React, { useEffect } from 'react'
import { LogBox, StatusBar } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import { Provider } from 'react-redux'

import setI18nConfig from '~/i18n'
import { Screens } from './screens'
import { store } from './store'
import { IS_IOS, theme } from '~/constants'

// handy to turn off yellow box for testing purposes
LogBox.ignoreAllLogs(false)

const App = () => {
  setI18nConfig()

  useEffect(() => {
    SplashScreen.hide()
    if (!IS_IOS) {
      StatusBar.setBackgroundColor(theme.backgrounds.whiteBackground)
      StatusBar.setBarStyle('dark-content')
    }
  }, [])

  return (
    <Provider store={store}>
      <Screens />
    </Provider>
  )
}

export default App
