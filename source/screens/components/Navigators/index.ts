/** @format */

import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

const TopTab = createMaterialTopTabNavigator()

export const TopTabNavigator = TopTab.Navigator
export const TopTabScreen = TopTab.Screen

const Stack = createStackNavigator()

export const StackNavigator = Stack.Navigator
export const StackScreen = Stack.Screen

const Tab = createBottomTabNavigator()

export const TabNavigator = Tab.Navigator
export const TabScreen = Tab.Screen
