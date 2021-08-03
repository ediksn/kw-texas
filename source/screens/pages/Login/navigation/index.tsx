/** @format */

import React from 'react'
import { NAVIGATION } from '~/constants'

import { StackNavigator, StackScreen } from '~/screens/components/Navigators'
import { Login } from '../index'

const LoginStackScreen = () => {
  return (
    <StackNavigator>
      <StackScreen name={NAVIGATION.SCREEN.LOGIN} component={Login} />
    </StackNavigator>
  )
}

export default LoginStackScreen
