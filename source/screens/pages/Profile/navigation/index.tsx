import React from 'react'

import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import { StackNavigator, StackScreen } from '~/screens/components/Navigators'
import { NAVIGATION } from '~/constants'
import Profile from '..'
import AccountHeader from '../components/AccounHeader'
import { ProfileDetail } from '../pages/ProfileDetail'

const ProfileStackScreen = () => {
  const { t } = useTranslation()
  const navigation = useNavigation()
  const onClickLeft = () => {
    navigation.navigate(NAVIGATION.SCREEN.PROFILE, { screen: NAVIGATION.SCREEN.PROFILE, initial: false })
  }

  return (
    <StackNavigator>
      <StackScreen
        options={AccountHeader(t('components_Account_Account'))}
        name={NAVIGATION.SCREEN.PROFILE}
        component={Profile}
      />
      <StackScreen
        options={AccountHeader(t('components_Profile'), true, true, onClickLeft)}
        name={NAVIGATION.SCREEN.PROFILEDETAIL}
        component={ProfileDetail}
      />
    </StackNavigator>
  )
}

export default ProfileStackScreen
