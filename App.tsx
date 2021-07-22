import React from 'react'
import { SafeAreaView, LogBox } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NAVIGATION } from '~/constants/navigation'
import { Home, Settings } from '~/screens'

// handy to turn off yellow box for testing purposes
LogBox.ignoreAllLogs(false)

const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen options={{ title: 'Home' }} name={NAVIGATION.SCREEN.HOME} component={Home} />
        <Tab.Screen options={{ title: 'Settings' }} name={NAVIGATION.SCREEN.SETTINGS} component={Settings} />
      </Tab.Navigator>
      <SafeAreaView />
    </NavigationContainer>
  )
}

export default App
