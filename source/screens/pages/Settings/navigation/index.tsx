import React from 'react'

import { useTranslation } from 'react-i18next'
import { StackNavigator, StackScreen } from '~/screens/components/Navigators'
// import Storybook from '../storybook'
import { Settings } from '~/screens/pages'
import { NAVIGATION } from '~/constants'

const SettingsStackScreen = () => {
  const { t } = useTranslation()
  return (
    <StackNavigator>
      <StackScreen
        name={NAVIGATION.SCREEN.SETTINGS}
        component={Settings}
        options={{ headerTitleAlign: 'center', title: t('Settings') }}
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
