import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Login } from './Login'
import { NAVIGATION } from '~/constants'
import { TabNavigator } from '~/components'

const StackNavigation = () => {
  const RootStack = createStackNavigator()
  const isLoggedIn = false

  return (
    <RootStack.Navigator headerMode='none'>
      {isLoggedIn ? (
        <RootStack.Screen name={NAVIGATION.SCREEN.MAIN} component={TabNavigator} />
      ) : (
        <RootStack.Screen name={NAVIGATION.SCREEN.LOGIN} component={Login} />
      )}
    </RootStack.Navigator>
  )
}

export default StackNavigation
