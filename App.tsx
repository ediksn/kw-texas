/** @format */

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NAVIGATION } from '~/source/constants/navigation';
import { Home, Settings } from '~/source/screens';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen options={{ title: 'Home' }} name={NAVIGATION.SCREEN.HOME} component={Home} />
        <Tab.Screen options={{ title: 'Settings' }} name={NAVIGATION.SCREEN.SETTINGS} component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
