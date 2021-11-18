import React from 'react'

import { useTranslation } from 'react-i18next'
import { ms } from 'react-native-size-matters'
import { StackNavigator, StackScreen, TopTabNavigator, TopTabScreen } from '~/screens/components/Navigators'

import { Conversations } from '~/screens/pages'
import { NAVIGATION, theme } from '~/constants'
import Recording from '~/screens/pages/Conversations/components/VideoCapture'
import { VideoPlayer } from '../VideoPlayer'
import { Studio, Bookmarked } from '../pages'
import { Button } from '~/components'
import { styles } from './styles'

const TopTabNav = () => {
  const { t } = useTranslation()

  return (
    <TopTabNavigator
      initialRouteName={NAVIGATION.SCREEN.LIBRARY}
      swipeEnabled={false}
      tabBarOptions={{
        activeTintColor: theme.darkGreenColor,
        inactiveTintColor: theme.darkGrey,
        labelStyle: {
          textTransform: 'capitalize',
          fontFamily: 'Mulish-Bold',
          fontSize: ms(11)
        },
        indicatorStyle: {
          backgroundColor: theme.darkGreenColor
        }
      }}
    >
      <TopTabScreen
        options={{ title: t('components_Library') }}
        name={NAVIGATION.SCREEN.LIBRARY}
        component={Conversations}
      />
      <TopTabScreen
        options={{ title: t('components_Conversations_Studio') }}
        name={NAVIGATION.SCREEN.STUDIO}
        component={Studio}
      />
      <TopTabScreen
        options={{ title: t('components_Bookmark') }}
        name={NAVIGATION.SCREEN.BOOKMARKED}
        component={Bookmarked}
      />
    </TopTabNavigator>
  )
}

const ConversationsStackScreen = () => {
  const { t } = useTranslation()

  return (
    <StackNavigator>
      <StackScreen
        name={NAVIGATION.SCREEN.HOME}
        component={TopTabNav}
        options={({ navigation }) => ({
          headerTitleAlign: 'center',
          title: t('components_Conversations'),
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0
          },
          headerRight: () => (
            <Button
              message={t('components_Post_Create')}
              type={theme.buttons.types.TEXT}
              THEME={theme.buttons.primary}
              viewStyle={styles.button}
              onPress={() => navigation.navigate(NAVIGATION.SCREEN.STUDIO)}
            />
          )
        })}
      />
      <StackScreen
        name={NAVIGATION.SCREEN.VIDEOPLAYER}
        component={VideoPlayer}
        options={{ headerTitleAlign: 'center', title: t('components_Comversations_Video_Player') }}
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

export default ConversationsStackScreen
