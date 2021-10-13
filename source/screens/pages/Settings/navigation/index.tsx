import React from 'react'

import { useTranslation } from 'react-i18next'
import { StackNavigator, StackScreen } from '~/screens/components/Navigators'
// import Storybook from '../storybook'
import { Settings } from '~/screens/pages'
import { NAVIGATION } from '~/constants'
import Profile from '../pages/Profile'
import ConversationsStackScreen from '../../Conversations/navigation'
import { useBackButtonMinimize } from '~/hooks'

const SettingsStackScreen = () => {
  const { t } = useTranslation()
  useBackButtonMinimize()
  return (
    <StackNavigator>
      <StackScreen
        options={{
          header: () => null,
          title: t('Settings')
        }}
        name={NAVIGATION.SCREEN.SETTINGS}
        component={Settings}
      />
      <StackScreen
        options={{
          header: () => null,
          title: t('Profile')
        }}
        name={NAVIGATION.SCREEN.PROFILE}
        component={Profile}
      />
      <StackScreen
        options={{
          header: () => null
        }}
        name={NAVIGATION.SCREEN.CONVERSATIONS}
        component={ConversationsStackScreen}
      />
      {/* <StackScreen
        name={NAVIGATION.SCREEN.STORYBOOK}
        component={Storybook}
        options={{ headerTitleAlign: 'center', title: t('Storybook') }}
      /> */}
    </StackNavigator>
  )
}

export default SettingsStackScreen
