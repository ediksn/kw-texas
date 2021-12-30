import { useSelector } from 'react-redux'
import React, { memo } from 'react'
import { RootState } from '~/store'
import { TabNavigator, TabScreen } from '~/screens/components/Navigators'
import { NAVIGATION, theme } from '~/constants'
import CustomTabBar from '~/components/CustomTabBar'
import HomeFilled from '../../../assets/images/home-filled.png'
import HomeUnfilled from '../../../assets/images/home-unfilled.png'
import { styles } from '~/screens/styles'
import HomeStackScreen from '~/screens/pages/Home/navigation'
import GroupsFilled from '../../../assets/images/groups-filled.png'
import GroupsUnfilled from '../../../assets/images/groups-unfilled.png'
import { Groups } from '~/screens/pages'
import CalendarFilled from '../../../assets/images/calendar-filled.png'
import CalendarUnfilled from '../../../assets/images/calendar-unfilled.png'
import EventsStackScreen from '~/screens/pages/Events/navigation'
import EventsFilled from '../../../assets/images/events-filled.png'
import EventsUnfilled from '../../../assets/images/events-unfilled.png'
import NotificationsStackScreen from '~/screens/pages/Notifications/navigation'
import ProfileStackScreen from '~/screens/pages/Profile/navigation'

const TabNavigation = memo(() => {
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
        name={NAVIGATION.SCREEN.EVENTS}
        component={EventsStackScreen}
      />
      <TabScreen
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabBar focused={focused} PNG={focused ? EventsFilled : EventsUnfilled} imageStyle={styles.events} />
          )
        }}
        name={NAVIGATION.SCREEN.NOTIFICATIONS}
        component={NotificationsStackScreen}
      />
      <TabScreen
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabBar focused={focused} imageURL={usrData?.photo} imageStyle={styles.photo} />
          )
        }}
        name={NAVIGATION.SCREEN.PROFILE}
        component={ProfileStackScreen}
      />
    </TabNavigator>
  )
})

export default memo(TabNavigation)
