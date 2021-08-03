/** @format */

import React from 'react'
import { NAVIGATION } from '~/constants'

import { StackNavigator, StackScreen, TabNavigator, TabScreen } from '~/screens/components/Navigators'
import { Home } from '../../Home'
import SettingsStackScreen from '../../Settings/navigation'
import { Login } from '../index'

// From Here

const TabNavigation = () => {
  return (
    <TabNavigator initialRouteName='Home'>
      <TabScreen options={{ title: 'Home' }} name={NAVIGATION.SCREEN.HOME} component={Home} />
      <TabScreen options={{ title: 'Settings' }} name={NAVIGATION.SCREEN.SETTINGS} component={SettingsStackScreen} />
    </TabNavigator>
  )
}

// To here

const LoginStackScreen = () => {
  return (
    <StackNavigator>
      <StackScreen name='Login' options={{ headerTitleAlign: 'center' }} component={Login} />
      <StackScreen name='NAVIGATION.SCREEN.MAIN' options={{ headerTitleAlign: 'center' }} component={TabNavigation} />
    </StackNavigator>
  )
}

export default LoginStackScreen
