import React, { memo } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NAVIGATION } from '~/constants'
import { Home, Settings } from '~/screens'

const TabNavigator = () => {
  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen options={{ title: 'Home' }} name={NAVIGATION.SCREEN.HOME} component={Home} />
      <Tab.Screen options={{ title: 'Settings' }} name={NAVIGATION.SCREEN.SETTINGS} component={Settings} />
    </Tab.Navigator>
  )
}

export default memo(TabNavigator)
