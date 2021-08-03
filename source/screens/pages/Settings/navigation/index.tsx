/** @format */

import React from 'react'

import { StackNavigator, StackScreen } from '~/screens/components/Navigators'
import Storybook from '../storybook'
import { Settings } from '~/screens/pages'
import { Login } from '../../Login'

const SettingsStackScreen = () => {
  return (
    <StackNavigator>
      <StackScreen name='Settings' options={{ headerTitleAlign: 'center' }} component={Settings} />
      <StackScreen name='StoryBooks' component={Storybook} />
      <StackScreen name='Login' component={Login} />
    </StackNavigator>
  )
}

export default SettingsStackScreen
