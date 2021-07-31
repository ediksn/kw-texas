import React from 'react'
import { SafeAreaView, LogBox } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import setI18nConfig from '~/i18n'
import { NAVIGATION } from '~/constants'
import { Home, Settings } from '~/screens'
import Storybook from '~/screens/Settings/storybook'

// handy to turn off yellow box for testing purposes
LogBox.ignoreAllLogs(false)

const SettingsStack = createStackNavigator()

const SettingsStackScreen = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name='Settings' options={{ headerTitleAlign: 'center' }} component={Settings} />
      <SettingsStack.Screen name='StoryBooks' component={Storybook} />
    </SettingsStack.Navigator>
  )
}

const Tab = createBottomTabNavigator()

const App = () => {
  setI18nConfig()
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen options={{ title: 'Home' }} name={NAVIGATION.SCREEN.HOME} component={Home} />
        <Tab.Screen options={{ title: 'Settings' }} name={NAVIGATION.SCREEN.SETTINGS} component={SettingsStackScreen} />
      </Tab.Navigator>
      <SafeAreaView />
    </NavigationContainer>
  )
}

export default App
