import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Login } from './Login'
import { NAVIGATION } from '~/constants'
import { TabNavigator } from '~/components'

const StackNavigation = () => {
  const RootStack = createStackNavigator()

  return (
    <RootStack.Navigator headerMode='none'>
      <RootStack.Screen name={NAVIGATION.SCREEN.LOGIN} component={Login} />
      <RootStack.Screen name={NAVIGATION.SCREEN.MAIN} component={TabNavigator} />
    </RootStack.Navigator>
  )
}

export default StackNavigation
