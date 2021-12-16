import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Text } from 'react-native'
import { Header, Icon } from '~/components'
import { NAVIGATION, theme } from '~/constants'
import { StackNavigator, StackScreen } from '~/screens/components/Navigators'
import { ProfileDetail } from '..'
import { styles } from './styles'

const ProfileDetailHeader = () => {
  const { t } = useTranslation()
  const { goBack } = useNavigation()
  const titleText = t('components_Profile')

  const rightButton = <Text style={styles.textStyle}>{t('components_NewPost_Edit')}</Text>

  const leftButton = <Icon name='arrow-back' size={theme.fonts.LARGE_SIZE} />

  const onClickLeft = () => {
    goBack()
  }

  return {
    header: () => {
      return (
        <Header
          title={titleText}
          leftButton={leftButton}
          onClickLeft={onClickLeft}
          rightButton={rightButton}
          style={styles.container}
        />
      )
    }
  }
}

const ProfileStackScreen = () => {
  return (
    <StackNavigator>
      <StackScreen options={ProfileDetailHeader} name={NAVIGATION.SCREEN.PROFILE} component={ProfileDetail} />
    </StackNavigator>
  )
}

export default ProfileStackScreen
