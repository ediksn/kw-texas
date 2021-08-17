import React, { memo, useLayoutEffect, useState } from 'react'
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
  const { LOGIN } = STORAGE_CONSTANTS
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  useLayoutEffect(() => {
    setTimeout(async () => {
      const storageIsLogged = await Storage.isLogged()

      if (storageIsLogged) {
        const storageLogin = await Storage.get({ key: LOGIN.SESSION })
        dispatch(loginActions.setUser(storageLogin.id_token))
      }
      setLoading(false)
    })
  }, [dispatch])

  const { isLogged } = useSelector((store: RootState) => store.login)

  return (
    <Spinner isLoading={loading} message='KW: Connect'>
      {isLogged ? <TabNavigation /> : <Login />}
    </Spinner>
  )
}

export const Screens = memo(() => (
  <NavigationContainer>
    <RootNavigation />
  </NavigationContainer>
))
