import React from 'react'

import { useTranslation } from 'react-i18next'
import { StackNavigator, StackScreen } from '~/screens/components/Navigators'
import { Home } from '~/screens/pages'
import { NAVIGATION, theme } from '~/constants'
import { Studio } from '../Studio'
import { VideoPlayer } from '../VideoPlayer'
import { Button } from '~/components'
import { styles } from './styles'

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
              viewStyle={styles.button}
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
      <StackScreen
        name={NAVIGATION.SCREEN.VIDEOPLAYER}
        component={VideoPlayer}
        options={{ headerTitleAlign: 'center', title: t('Video Player') }}
      />
    </StackNavigator>
  )
}

export default HomeStackScreen
