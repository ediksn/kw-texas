import React from 'react'
import { useTranslation } from 'react-i18next'
import { StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Header, Icon } from '~/components'
import { NAVIGATION } from '~/constants'
import { StackNavigator, StackScreen } from '~/screens/components/Navigators'
import { RootState } from '~/store'
import { Home } from '..'
import { styles } from './styles'
import Avatar from '~/components/Avatar'
import { IS_IOS } from '~/constants/statis'
import { homeActions } from '~/store/actions'

const HomeHeader = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const activeAccount: number = useSelector((state: RootState) => state.usrProfile.activeAccount)
  const usrData: any = useSelector((state: RootState) => state.usrProfile.profiles[activeAccount])

  const startDropDown = () => {
    dispatch(homeActions.showDropDown())
    if (!IS_IOS) {
      StatusBar.setBackgroundColor('#2B2B33FF')
      StatusBar.setBarStyle('light-content')
    }
  }

  const leftButton = (
    <View style={styles.leftButtonContainer}>
      <Avatar
        uri={
          usrData?.photo || typeof usrData?.photo !== 'undefined'
            ? `https://avatar.kwconnect.com/${usrData?.assigneeId}.jpeg`
            : ''
        }
        avatarStyle={styles.avatar}
        avatarDefaultStyle={styles.avatarDefault}
      />
      <TouchableOpacity onPress={() => startDropDown()}>
        <Text style={styles.text}>{t('components_NewPost_Share_today')} </Text>
      </TouchableOpacity>
    </View>
  )

  const rightButton = (
    <View style={styles.rightButtonContainer}>
      <TouchableOpacity style={styles.search}>
        <Icon name='search-icon' size={20} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.chat}>
        <Icon name='bookmark-icon' size={20} />
      </TouchableOpacity>
    </View>
  )

  return {
    header: () => <Header style={styles.container} leftButton={leftButton} rightButton={rightButton} />
  }
}

const HomeStackScreen = () => (
  <StackNavigator>
    <StackScreen options={HomeHeader} name={NAVIGATION.SCREEN.HOME} component={Home} />
  </StackNavigator>
)

export default HomeStackScreen
