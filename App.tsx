import React from 'react'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Home, Settings } from '~/screens'

const Tab = createBottomTabNavigator()

const App = () => (
  <NavigationContainer>
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Settings' component={Settings} />
    </Tab.Navigator>
    <SafeAreaView />
  </NavigationContainer>
)

export default App
