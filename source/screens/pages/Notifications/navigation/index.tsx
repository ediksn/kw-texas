import React from 'react'

import { StackNavigator, StackScreen } from '~/screens/components/Navigators'
// import { StoryBook } from '../pages/StoryBook'
import { Notifications } from '~/screens/pages'
import { NAVIGATION } from '~/constants'
import { useBackButtonMinimize } from '~/hooks'

const SettingsStackScreen = () => {
  useBackButtonMinimize()
  return (
    <StackNavigator>
      <StackScreen
        options={{
          header: () => null
        }}
        name={NAVIGATION.SCREEN.NOTIFICATIONS}
        component={Notifications}
      />
      {/* <StackScreen
        name={NAVIGATION.SCREEN.STORYBOOK}
        component={StoryBook}
        options={{
          header: () => null,
          title: t('components_StoryBook')
        }}
      /> */}
    </StackNavigator>
  )
}

export default SettingsStackScreen
