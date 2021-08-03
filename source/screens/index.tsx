/** * @format */

import React, { memo } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { NAVIGATION } from '~/constants/navigation'
import { TabNavigator, TabScreen } from './components/Navigators'
import { Login } from './pages'
import SettingsStackScreen from './pages/Settings/navigation'
import { RootState } from '~/store'
import HomeStackScreen from './pages/Home/navigation'

const TabNavigation = () => {
  const { t } = useTranslation()
  return (
    <TabNavigator initialRouteName={NAVIGATION.SCREEN.HOME}>
      <TabScreen options={{ title: t('Conversations') }} name={NAVIGATION.SCREEN.HOME} component={HomeStackScreen} />
      <TabScreen options={{ title: t('Settings') }} name={NAVIGATION.SCREEN.SETTINGS} component={SettingsStackScreen} />
    </TabNavigator>
  )
}

const RootNavigation = () => {
  const isLogged = useSelector((store: RootState) => store.app.isLogged)
  if (isLogged) {
    return <TabNavigation />
  }
  return <Login />
}

export const Screens = memo(() => (
  <NavigationContainer>
    <RootNavigation />
  </NavigationContainer>
))
