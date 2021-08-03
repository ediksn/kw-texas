/** * @format */

import React, { memo } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { NAVIGATION } from '~/constants/navigation'
import { StackNavigator, StackScreen, TabNavigator, TabScreen } from './components/Navigators'
import { Login, Home } from './pages'
import SettingsStackScreen from './pages/Settings/navigation'

const screenOptions = {
  header: () => null
}

const TabNavigation = () => {
  return (
    <TabNavigator initialRouteName='Home'>
      <TabScreen options={{ title: 'Home' }} name={NAVIGATION.SCREEN.HOME} component={Home} />
      <TabScreen options={{ title: 'Settings' }} name={NAVIGATION.SCREEN.SETTINGS} component={SettingsStackScreen} />
    </TabNavigator>
  )
}

const StackNavigation = () => {
  const test = false

  return (
    <StackNavigator>
      {test ? (
        <StackScreen options={screenOptions} name={NAVIGATION.SCREEN.LOGIN} component={Login} />
      ) : (
        <StackScreen options={screenOptions} name={NAVIGATION.SCREEN.MAIN} component={TabNavigation} />
      )}
    </StackNavigator>
  )
}

export const Screens = memo(() => (
  <NavigationContainer>
    <StackNavigation />
  </NavigationContainer>
))
