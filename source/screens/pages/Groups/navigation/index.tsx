import React from 'react'
import { NAVIGATION } from '~/constants'
import { StackNavigator, StackScreen } from '~/screens/components/Navigators'
import { Groups } from '..'
import GroupsHeader from './components/GroupsHeader'

const GroupsStackScreen = () => (
  <StackNavigator>
    <StackScreen options={{ header: () => <GroupsHeader /> }} name={NAVIGATION.SCREEN.GROUPS} component={Groups} />
  </StackNavigator>
)

export default GroupsStackScreen
