import React from 'react'

import { useTranslation } from 'react-i18next'
import { StackNavigator, StackScreen } from '~/screens/components/Navigators'
// import { StoryBook } from '../pages/StoryBook'
import { Settings } from '~/screens/pages'
import { NAVIGATION } from '~/constants'
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
          header: () => null
        }}
        name={NAVIGATION.SCREEN.CONVERSATIONS}
        component={ConversationsStackScreen}
      />
      {/* <StackScreen
        name={NAVIGATION.SCREEN.STORYBOOK}
        component={StoryBook}
        options={{
          header: () => null,
          title: t('Storybook')
        }}
      /> */}
    </StackNavigator>
  )
}

export default SettingsStackScreen
