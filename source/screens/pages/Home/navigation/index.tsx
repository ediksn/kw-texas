import React from 'react'

import { useTranslation } from 'react-i18next'
import { StackNavigator, StackScreen, TopTabNavigator, TopTabScreen } from '~/screens/components/Navigators'
import { Home } from '~/screens/pages'
import { NAVIGATION, theme } from '~/constants'
import { Studio } from '../Studio'
import { Button } from '~/components'
import { styles } from './styles'

const TopTabNav = () => {
  const { t } = useTranslation()

  return (
    <TopTabNavigator
      initialRouteName={NAVIGATION.SCREEN.HOME}
      tabBarOptions={{
        activeTintColor: theme.darkGreenColor,
        inactiveTintColor: theme.darkGrey,
        labelStyle: {
          textTransform: 'capitalize',
          fontFamily: 'Mulish-Bold'
        },
        indicatorStyle: {
          backgroundColor: theme.darkGreenColor
        }
      }}
    >
      <TopTabScreen options={{ title: t('Library') }} name={NAVIGATION.SCREEN.LIBRARY} component={Home} />
      <TopTabScreen options={{ title: t('Studio') }} name={NAVIGATION.SCREEN.STUDIO} component={Studio} />
      <TopTabScreen options={{ title: t('Saved') }} name={NAVIGATION.SCREEN.SAVED} component={Studio} />
    </TopTabNavigator>
  )
}

const HomeStackScreen = () => {
  const { t } = useTranslation()
  return (
    <StackNavigator>
      <StackScreen
        name={NAVIGATION.SCREEN.HOME}
        component={TopTabNav}
        options={({ navigation }) => ({
          headerTitleAlign: 'center',
          title: t('Conversations'),
          headerRight: () => (
            <Button
              message={t('Create')}
              type={theme.buttons.types.TEXT}
              THEME={theme.buttons.primary}
              viewStyle={styles.button}
              onPress={() => navigation.navigate(NAVIGATION.SCREEN.STUDIO)}
            />
          )
        })}
      />
    </StackNavigator>
  )
}

export default HomeStackScreen
