import React from 'react'

import { useTranslation } from 'react-i18next'
import { StackNavigator, StackScreen } from '~/screens/components/Navigators'
import { NAVIGATION } from '~/constants'
import { useBackButtonMinimize } from '~/hooks'
import Profile from '..'
import { Header } from '~/components'
import { styles } from './styles'

const AccountHeader = () => {
  const { t } = useTranslation()

  return {
    header: () => {
      return <Header style={styles.container} title={t('components_Account_Account')} />
    }
  }
}

const ProfileStackScreen = () => {
  useBackButtonMinimize()
  return (
    <StackNavigator>
      <StackScreen options={AccountHeader} name={NAVIGATION.SCREEN.PROFILE} component={Profile} />
    </StackNavigator>
  )
}

export default ProfileStackScreen
