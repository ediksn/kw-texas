import React from 'react'
import { SafeAreaView, LogBox } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import setI18nConfig from '~/i18n'
import { NAVIGATION } from '~/constants'
import { Home } from '~/screens'
import StackNavigation from '~/screens/stackNavigation'
import SettingsStackScreen from '~/screens/Settings/navigation'

// handy to turn off yellow box for testing purposes
LogBox.ignoreAllLogs(false)

const Tab = createBottomTabNavigator()

const App = () => {
  setI18nConfig()
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen options={{ title: 'Home' }} name={NAVIGATION.SCREEN.HOME} component={Home} />
        <Tab.Screen options={{ title: 'Settings' }} name={NAVIGATION.SCREEN.SETTINGS} component={SettingsStackScreen} />
      </Tab.Navigator>
      <StackNavigation />
      <SafeAreaView />
    </NavigationContainer>
  )
}

export default App
