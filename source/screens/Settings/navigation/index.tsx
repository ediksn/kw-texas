/** @format */

import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import Storybook from '../storybook'
import { Settings } from '~/screens'

const SettingsStack = createStackNavigator()

const SettingsStackScreen = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name='Settings' options={{ headerTitleAlign: 'center' }} component={Settings} />
      <SettingsStack.Screen name='StoryBooks' component={Storybook} />
    </SettingsStack.Navigator>
  )
}

export default SettingsStackScreen
