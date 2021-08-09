import React from 'react'

import { useTranslation } from 'react-i18next'
import { scale } from 'react-native-size-matters'
import { StackNavigator, StackScreen } from '~/screens/components/Navigators'
import { Home } from '~/screens/pages'
import { NAVIGATION, theme } from '~/constants'
import { Studio } from '../Studio'
import { Button } from '~/components'

const HomeStackScreen = () => {
  const { t } = useTranslation()
  return (
    <StackNavigator>
      <StackScreen
        name={NAVIGATION.SCREEN.HOME}
        component={Home}
        options={({ navigation }) => ({
          headerTitleAlign: 'center',
          title: t('Conversations'),
          headerRight: () => (
            <Button
              message={t('Create')}
              type={theme.buttons.types.TEXT}
              THEME={theme.buttons.primary}
              viewStyle={{ width: scale(80) }}
              onPress={() => navigation.navigate(NAVIGATION.SCREEN.STUDIO)}
            />
          )
        })}
      />
      <StackScreen
        name={NAVIGATION.SCREEN.STUDIO}
        component={Studio}
        options={{ headerTitleAlign: 'center', title: t('Studio') }}
      />
    </StackNavigator>
  )
}

export default HomeStackScreen
