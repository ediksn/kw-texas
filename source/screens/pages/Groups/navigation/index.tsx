import React from 'react'
import { NAVIGATION, theme } from '~/constants'
import { StackNavigator, StackScreen } from '~/screens/components/Navigators'
import { Groups } from '..'
import GroupsHeader from './components/GroupsHeader'
import CommunityDetailHeader from '~/screens/pages/Groups/navigation/components/CommunityDetailHeader'
import CommunityDetail from '~/screens/pages/Groups/pages/CommunityDetail'

const GroupsStackScreen = () => (
  <StackNavigator>
    <StackScreen options={{ header: () => <GroupsHeader /> }} name={NAVIGATION.SCREEN.GROUPS} component={Groups} />
    <StackScreen
      options={{
        cardStyle: { backgroundColor: theme.greenLightColor },
        header: () => <CommunityDetailHeader />
      }}
      name={NAVIGATION.SCREEN.COMMUNITYDETAIL}
      component={CommunityDetail}
    />
  </StackNavigator>
)

export default GroupsStackScreen
