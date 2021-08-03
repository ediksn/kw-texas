import React, { memo } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTranslation } from 'react-i18next'
import { NAVIGATION } from '~/constants'
import { Home, Settings } from '~/screens'

const TabNavigator = () => {
  const Tab = createBottomTabNavigator()
  const { t } = useTranslation()

  return (
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen options={{ title: t('Conversations') }} name={NAVIGATION.SCREEN.HOME} component={Home} />
      <Tab.Screen options={{ title: t('Settings') }} name={NAVIGATION.SCREEN.SETTINGS} component={Settings} />
    </Tab.Navigator>
  )
}

export default memo(TabNavigator)
