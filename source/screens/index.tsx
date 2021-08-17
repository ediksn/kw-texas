import React, { memo, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { useTranslation } from 'react-i18next'
import { useSelector, useDispatch } from 'react-redux'
import { NAVIGATION } from '~/constants/navigation'
import { TabNavigator, TabScreen } from './components/Navigators'
import { Login } from './pages'
import SettingsStackScreen from './pages/Settings/navigation'
import { RootState } from '~/store'
import HomeStackScreen from './pages/Home/navigation'
import { Icon, Spinner } from '~/components'
import { loginActions } from '~/store/actions'
import { Storage, STORAGE_CONSTANTS } from '~/utils/storage'

const TabNavigation = () => {
  const { t } = useTranslation()

  return (
    <TabNavigator
      initialRouteName={NAVIGATION.SCREEN.HOME}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => <Icon route={route.name} color={color} />
      })}
    >
      <TabScreen options={{ title: t('Conversations') }} name={NAVIGATION.SCREEN.HOME} component={HomeStackScreen} />
      <TabScreen options={{ title: t('Settings') }} name={NAVIGATION.SCREEN.SETTINGS} component={SettingsStackScreen} />
    </TabNavigator>
  )
}

const RootNavigation = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(async () => {
      const storageIsLogged = await Storage.isLogged()

      if (storageIsLogged) {
        const { LOGIN } = STORAGE_CONSTANTS
        const storageLogin = await Storage.get({ key: LOGIN.SESSION })
        dispatch(loginActions.setUser(storageLogin.id_token))
      }
      setLoading(false)
    }, 500)
  }, [])

  const { isLogged } = useSelector((store: RootState) => store.login)

  if (loading) return <Spinner isLoading={loading} message='KW: Connect' />

  if (isLogged) return <TabNavigation />

  return <Login />
}

export const Screens = memo(() => (
  <NavigationContainer>
    <RootNavigation />
  </NavigationContainer>
))
