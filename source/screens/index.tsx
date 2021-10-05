import React, { memo, useLayoutEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import { useSelector, useDispatch } from 'react-redux'
import HomeUnfocused from 'assets/images/homeUnfocused.png'
import HomeFocused from 'assets/images/homeFocused.png'
import CommunityFocused from 'assets/images/communityFocused.png'
import CommunityUnfocused from 'assets/images/communityUnfocused.png'
import MenuFocused from 'assets/images/menuFocused.png'
import MenuUnfocused from 'assets/images/menuUnfocused.png'
import NotificationsFocused from 'assets/images/notificationsFocused.png'
import NotificationsUnfocused from 'assets/images/notificationsUnfocused.png'
import { NAVIGATION } from '~/constants/navigation'
import { StackNavigator, TabNavigator, TabScreen, StackScreen } from './components/Navigators'
import { Home, Login, Notifications, Groups } from './pages'
import SettingsStackScreen from './pages/Settings/navigation'
import Recording from '~/screens/pages/Conversations/components/VideoCapture'
import { RootState } from '~/store'
import { Spinner } from '~/components'
import { getUsrProfileActions, loginActions } from '~/store/actions'
import { Storage, STORAGE_CONSTANTS } from '~/utils/storage'
import { theme } from '~/constants/theme'
import Profile from './pages/Settings/pages/Profile'
import CustomTabBar from '~/components/CustomTabBar'

const TabNavigation = () => {
  const usrData: any = useSelector((state: RootState) => state.usrProfile.profiles[0])
  const TabStackScreen = () => (
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
          tabBarIcon: ({ focused }) => (
            <CustomTabBar focused={focused} focusedIcon={HomeFocused} unfocusedIcon={HomeUnfocused} />
          )
        }}
        name={NAVIGATION.SCREEN.HOME}
        component={Home}
      />
      <TabScreen
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabBar focused={focused} focusedIcon={CommunityFocused} unfocusedIcon={CommunityUnfocused} />
          )
        }}
        name={NAVIGATION.SCREEN.GROUPS}
        component={Groups}
      />
      <TabScreen
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabBar focused={focused} focusedIcon={NotificationsFocused} unfocusedIcon={NotificationsUnfocused} />
          )
        }}
        name={NAVIGATION.SCREEN.NOTIFICATIONS}
        component={Notifications}
      />
      <TabScreen
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabBar focused={focused} focusedIcon={MenuFocused} unfocusedIcon={MenuUnfocused} />
          )
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

  return (
    <StackNavigator>
      <StackScreen
        options={{
          header: () => null
        }}
        name={NAVIGATION.SCREEN.TAB}
        component={TabStackScreen}
      />
      <StackScreen
        options={{
          header: () => null
        }}
        name={NAVIGATION.SCREEN.RECORDING}
        component={Recording}
      />
    </StackNavigator>
  )
}

const RootNavigation = () => {
  const { LOGIN } = STORAGE_CONSTANTS
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const usr: any = useSelector((state: RootState) => state.login.user)
  const usrId: number = usr?.kwuid

  useLayoutEffect(() => {
    dispatch(getUsrProfileActions.getUsrProfile(usrId))
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
