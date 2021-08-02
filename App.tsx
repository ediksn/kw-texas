import React from 'react'
import { SafeAreaView, LogBox } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import setI18nConfig from '~/i18n'
import StackNavigation from '~/screens/stackNavigation'

// handy to turn off yellow box for testing purposes
LogBox.ignoreAllLogs(false)

const App = () => {
  setI18nConfig()
  return (
    <NavigationContainer>
      <StackNavigation />
      <SafeAreaView />
    </NavigationContainer>
  )
}

export default App
