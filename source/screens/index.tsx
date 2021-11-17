import React, { memo, useLayoutEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { useSelector, useDispatch } from 'react-redux'
import HomeUnfilled from 'assets/images/home-unfilled.png'
import HomeFilled from 'assets/images/home-filled.png'
import GroupsUnfilled from 'assets/images/groups-unfilled.png'
import GroupsFilled from 'assets/images/groups-filled.png'
import CalendarUnfilled from 'assets/images/calendar-unfilled.png'
import CalendarFilled from 'assets/images/calendar-filled.png'
import NotificationsUnfilled from 'assets/images/notifications-unfilled.png'
import NotificationsFilled from 'assets/images/notifications-filled.png'
import DefaultAvatar from 'assets/images/default-avatar.png'
import { NAVIGATION } from '~/constants/navigation'
import { TabNavigator, TabScreen, StackNavigator, StackScreen } from './components/Navigators'
import { Login, Groups } from './pages'
import SettingsStackScreen from './pages/Settings/navigation'
import { RootState } from '~/store'
import { Spinner, Toast } from '~/components'
import { loginActions } from '~/store/actions'
import { Storage, STORAGE_CONSTANTS } from '~/utils/storage'
import { theme } from '~/constants/theme'
import CustomTabBar from '~/components/CustomTabBar'
import HomeStackScreen from './pages/Home/navigation'
import { styles } from './styles'
import ProfileStackScreen from './pages/Profile/navigation'
import NewPost from './pages/Home/pages/NewPost'
import NotificationsStackScreen from './pages/Notifications/navigation'
import { ToastProps } from '~/interfaces/toastInterface'

const TabNavigation = () => {
  const activeAccount: number = useSelector((state: RootState) => state.usrProfile.activeAccount)
  const usrData: any = useSelector((state: RootState) => state.usrProfile.profiles[activeAccount])

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
          tabBarIcon: ({ focused }) => (
            <CustomTabBar focused={focused} PNG={focused ? HomeFilled : HomeUnfilled} imageStyle={styles.png} />
          )
        }}
        name={NAVIGATION.SCREEN.HOME}
        component={HomeStackScreen}
      />
      <TabScreen
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabBar focused={focused} PNG={focused ? GroupsFilled : GroupsUnfilled} imageStyle={styles.png} />
          )
        }}
        name={NAVIGATION.SCREEN.GROUPS}
        component={Groups}
      />
      <TabScreen
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabBar focused={focused} PNG={focused ? CalendarFilled : CalendarUnfilled} imageStyle={styles.png} />
          )
        }}
        name={NAVIGATION.SCREEN.NOTIFICATIONS}
        component={NotificationsStackScreen}
      />
      <TabScreen
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabBar
              focused={focused}
              PNG={focused ? NotificationsFilled : NotificationsUnfilled}
              imageStyle={styles.notifications}
            />
          )
        }}
        name={NAVIGATION.SCREEN.SETTINGS}
        component={SettingsStackScreen}
      />
      <TabScreen
        options={{
          tabBarIcon: ({ focused }) => {
            if (usrData?.photo && usrData?.photo !== undefined && usrData?.photo !== '')
              return <CustomTabBar focused={focused} imageURL={usrData.photo} imageStyle={styles.photo} />
            return <CustomTabBar focused={focused} PNG={DefaultAvatar} imageStyle={styles.defaultAvatar} />
          }
        }}
        name={NAVIGATION.SCREEN.PROFILE}
        component={ProfileStackScreen}
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
  const { open, title, type, menuHeight }: ToastProps = useSelector((store: RootState) => store.toast)

  return (
    <Spinner isLoading={loading} message='KW: Connect' styleView={styles.spinner}>
      {isLogged ? (
        <SafeAreaView style={{ flex: 1 }} edges={['top', 'left', 'right']}>
          <StackNavigator>
            <StackScreen options={{ header: () => null }} name='tabs' component={TabNavigation} />
            <StackScreen
              options={{
                cardStyle: { backgroundColor: '#F7F7F8' },
                header: () => null
              }}
              name={NAVIGATION.SCREEN.NEWPOST}
              component={NewPost}
            />
          </StackNavigator>
          <Toast open={open} title={title} type={type} menuHeight={menuHeight} />
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
