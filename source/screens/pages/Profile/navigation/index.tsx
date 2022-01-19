import React from 'react'

import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import { Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { StackNavigator, StackScreen } from '~/screens/components/Navigators'
import { NAVIGATION, theme } from '~/constants'
import Profile from '..'
import AccountHeader from '../components/AccounHeader'
import { ProfileDetail } from '../pages/ProfileDetail'
import { styles } from './styles'
import { Icon } from '~/components'
import { ProfileEdit } from '../pages/ProfileEdit'
import { toastActions, getUsrProfileActions } from '~/store/actions'
import { ProfileDetailInterface, ProfileInterface } from '~/interfaces/usrInterface'
import { RootState } from '~/store'
import { usrProfileService } from '~/services'

const ProfileStackScreen = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const activeAccount: number = useSelector((state: RootState) => state.usrProfile.activeAccount)
  const usrData: ProfileInterface = useSelector((state: RootState) => state.usrProfile.profiles[activeAccount])
  const rightButton = <Text style={styles.textStyle}>{t('components_NewPost_Edit')}</Text>
  const leftButton = <Icon name='arrow-back' size={theme.fonts.BIG_SIZE} />
  const rightButtonEdit = <Text style={styles.textStyle}>{t('components_Conversations_Save')}</Text>
  const lefttButtonEdit = <Text style={styles.textStyle}>{t('components_Profile_cancel')}</Text>

  const onClickLeft = () => {
    navigation.navigate(NAVIGATION.SCREEN.PROFILE, { screen: NAVIGATION.SCREEN.PROFILE })
  }

  const onClickRight = () => {
    navigation.navigate(NAVIGATION.SCREEN.PROFILEEDIT)
  }

  const onClickLeftEdit = () => {
    navigation.navigate(NAVIGATION.SCREEN.PROFILE, { screen: NAVIGATION.SCREEN.PROFILEDETAIL })
  }

  const onClickRightEdit = async () => {
    const { profileDetail } = usrData
    const { first_name, last_name } = profileDetail
    if (first_name && first_name.length > 0 && last_name && last_name.length > 0) {
      usrProfileService
        .updateProfile(profileDetail)
        .then((newProfile: ProfileDetailInterface) => {
          dispatch(toastActions.showSuccessToast('components_Profile_updated_message'))
          dispatch(getUsrProfileActions.updateProfile(newProfile, activeAccount))
          navigation.navigate(NAVIGATION.SCREEN.PROFILE, { screen: NAVIGATION.SCREEN.PROFILEDETAIL })
        })
        .catch(() => {
          dispatch(toastActions.showErrorToast('request_error'))
        })
    }
  }

  return (
    <StackNavigator initialRouteName={NAVIGATION.SCREEN.PROFILE}>
      <StackScreen
        options={AccountHeader(t('components_Account_Account'))}
        name={NAVIGATION.SCREEN.PROFILE}
        component={Profile}
      />
      <StackScreen
        options={AccountHeader(t('components_Profile'), leftButton, rightButton, onClickLeft, onClickRight)}
        name={NAVIGATION.SCREEN.PROFILEDETAIL}
        component={ProfileDetail}
      />
      <StackScreen
        options={AccountHeader(
          t('components_Profile'),
          lefttButtonEdit,
          rightButtonEdit,
          onClickLeftEdit,
          onClickRightEdit
        )}
        name={NAVIGATION.SCREEN.PROFILEEDIT}
        component={ProfileEdit}
      />
    </StackNavigator>
  )
}

export default ProfileStackScreen
