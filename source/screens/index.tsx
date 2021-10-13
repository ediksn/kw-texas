import React, { memo, useLayoutEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import { useSelector, useDispatch } from 'react-redux'
import { NAVIGATION } from '~/constants/navigation'
import { TabNavigator, TabScreen } from './components/Navigators'
import { Login, Notifications, Groups } from './pages'
import SettingsStackScreen from './pages/Settings/navigation'
import { RootState } from '~/store'
import { Spinner } from '~/components'
import { loginActions } from '~/store/actions'
import { Storage, STORAGE_CONSTANTS } from '~/utils/storage'
import { theme } from '~/constants/theme'
import Profile from './pages/Settings/pages/Profile'
import CustomTabBar from '~/components/CustomTabBar'
import HomeStackScreen from './pages/Home/navigation'

const TabNavigation = () => {
  const usrData: any = useSelector((state: RootState) => state.usrProfile.profiles[0])
  return (
    <TabNavigator
      initialRouteName={NAVIGATION.SCREEN.HOME}
      tabBarOptions={{
        activeTintColor: theme.darkGreenColor,
        inactiveTintColor: theme.greenColor,
        showLabel: false,
        labelStyle: {
          textTransform: 'capitalize',
          fontFamily: 'Mulish-Bold'
        }
      }}
    >
      <TabScreen
        options={{
          tabBarIcon: ({ focused }) => <CustomTabBar focused={focused} name='home-icon' />
        }}
        name={NAVIGATION.SCREEN.HOME}
        component={HomeStackScreen}
      />
      <TabScreen
        options={{
          tabBarIcon: ({ focused }) => <CustomTabBar focused={focused} name='groups-icon' />
        }}
        name={NAVIGATION.SCREEN.GROUPS}
        component={Groups}
      />
      <TabScreen
        options={{
          tabBarIcon: ({ focused }) => <CustomTabBar focused={focused} name='notifications-icon' />
        }}
        name={NAVIGATION.SCREEN.NOTIFICATIONS}
        component={Notifications}
      />
      <TabScreen
        options={{
          tabBarIcon: ({ focused }) => <CustomTabBar focused={focused} name='moremenu-icon' />
        }}
        name={NAVIGATION.SCREEN.SETTINGS}
        component={SettingsStackScreen}
      />
      <TabScreen
        options={{
          tabBarIcon: ({ focused }) => <CustomTabBar focused={focused} imageURL={usrData?.photo_url} />
        }}
        name={NAVIGATION.SCREEN.PROFILE}
        component={Profile}
      />
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
      {isLogged ? (
        <SafeAreaView style={{ flex: 1 }} edges={['top', 'left', 'right']}>
          <TabNavigation />
        </SafeAreaView>
      ) : (
        <Login />
      )}
    </Spinner>
  )
}

export const Screens = memo(() => (
  <SafeAreaProvider>
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  </SafeAreaProvider>
))
