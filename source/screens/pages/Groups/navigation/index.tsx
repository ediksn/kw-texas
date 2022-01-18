import React from 'react'
import { useTranslation } from 'react-i18next'
import { NAVIGATION, theme } from '~/constants'
import { StackNavigator, StackScreen } from '~/screens/components/Navigators'
import { Groups } from '..'
import GroupsHeader from './components/GroupsHeader'
import CommunityDetailHeader from '~/screens/pages/Groups/navigation/components/CommunityDetailHeader'
import CommunityDetail from '~/screens/pages/Groups/pages/CommunityDetail'
import GroupInteresting from '../pages/GroupsInteresting'
import { Icon } from '~/components'

const GroupsStackScreen = () => {
  const { t } = useTranslation()
  return (
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
      <StackScreen
        options={{
          headerTitle: t('components_Group_interesting_you'),
          headerTitleContainerStyle: { alignItems: 'center' },
          headerTitleStyle: { color: theme.darkGreenColor, fontSize: theme.fonts.MEDIUM_SIZE },
          headerRight: () => <Icon name='search-icon' size={20} viewStyle={{ marginRight: 20 }} />,
          headerBackImage: () => <Icon name='arrow-back' size={20} />
        }}
        name={NAVIGATION.SCREEN.GROUPSINTERESTING}
        component={GroupInteresting}
      />
    </StackNavigator>
  )
}

export default GroupsStackScreen
