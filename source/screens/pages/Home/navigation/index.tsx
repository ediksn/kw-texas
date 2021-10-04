import React from 'react'

import { useTranslation } from 'react-i18next'
import { ms } from 'react-native-size-matters'
import { StackNavigator, StackScreen, TopTabNavigator, TopTabScreen } from '~/screens/components/Navigators'

import { Home } from '~/screens/pages'
import { NAVIGATION, theme } from '~/constants'
import { VideoPlayer } from '../VideoPlayer'
import { Studio, Bookmarked } from '../pages'
import { Button, Header } from '~/components'
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
      <TopTabScreen options={{ title: t('Library') }} name={NAVIGATION.SCREEN.LIBRARY} component={Home} />
      <TopTabScreen options={{ title: t('Studio') }} name={NAVIGATION.SCREEN.STUDIO} component={Studio} />
      <TopTabScreen options={{ title: t('Bookmarked') }} name={NAVIGATION.SCREEN.BOOKMARKED} component={Bookmarked} />
    </TopTabNavigator>
  )
}

const HomeStackScreen = () => {
  const { t } = useTranslation()

  const righButton = (navigation: any) => (
    <>
      <Button
        message={t('dou')}
        type={theme.buttons.types.TEXT}
        THEME={theme.buttons.primary}
        viewStyle={styles.button}
        onPress={() => navigation.navigate(NAVIGATION.SCREEN.STUDIO)}
      />
      <Button
        message={t('Create')}
        type={theme.buttons.types.TEXT}
        THEME={theme.buttons.primary}
        viewStyle={styles.button}
        onPress={() => navigation.navigate(NAVIGATION.SCREEN.STUDIO)}
      />
    </>
  )
  const leftButton = () => (
    <>
      <Button
        message={t('dou')}
        type={theme.buttons.types.TEXT}
        THEME={theme.buttons.primary}
        viewStyle={styles.button}
      />
      <Button
        message={t('Create')}
        type={theme.buttons.types.TEXT}
        THEME={theme.buttons.primary}
        viewStyle={styles.button}
      />
    </>
  )

  const homeHeader = (props: any) => {
    const { navigation } = props
    return {
      header: () => {
        return <Header leftButton={leftButton()} title='' rightButton={righButton(navigation)} />
      }
    }
  }
  return (
    <StackNavigator>
      <StackScreen name={NAVIGATION.SCREEN.HOME} component={TopTabNav} options={homeHeader} />
      <StackScreen
        name={NAVIGATION.SCREEN.VIDEOPLAYER}
        component={VideoPlayer}
        options={{ headerTitleAlign: 'center', title: t('Video Player') }}
      />
    </StackNavigator>
  )
}

export default HomeStackScreen
