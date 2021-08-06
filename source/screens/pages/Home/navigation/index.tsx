import React from 'react'

import { useTranslation } from 'react-i18next'
import { StackNavigator, StackScreen } from '~/screens/components/Navigators'
import { Home } from '~/screens/pages'
import { NAVIGATION } from '~/constants'
import { Studio } from '../Studio'

const HomeStackScreen = () => {
  const { t } = useTranslation()
  return (
    <StackNavigator>
      <StackScreen
        name={NAVIGATION.SCREEN.HOME}
        component={Home}
        options={{ headerTitleAlign: 'center', title: t('Conversations') }}
      />
      <StackScreen
        name={NAVIGATION.SCREEN.STUDIO}
        component={Studio}
        options={{ headerTitleAlign: 'center', title: t('Studio') }}
      />
    </StackNavigator>
  )
}

export default HomeStackScreen
