import React from 'react'
import { NAVIGATION, theme } from '~/constants'
import { StackNavigator, StackScreen } from '~/screens/components/Navigators'
import { Home } from '..'
import Bookmarks from '../pages/Bookmarks'
import HomeHeader from './components/HomeHeader'
import BookmarkedHeader from './components/BookmarkedHeader'

const HomeStackScreen = () => (
  <StackNavigator>
    <StackScreen options={{ header: () => <HomeHeader /> }} name={NAVIGATION.SCREEN.HOME} component={Home} />
    <StackScreen
      options={{
        cardStyle: { backgroundColor: theme.greenLightColor },
        header: () => <BookmarkedHeader />
      }}
      name={NAVIGATION.SCREEN.BOOKMARKS}
      component={Bookmarks}
    />
  </StackNavigator>
)

export default HomeStackScreen
