import React from 'react'
import { StatusBar, Text, View, TouchableOpacity } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { IS_IOS } from '~/constants/statis'
import Avatar from '~/components/Avatar'
import { RootState } from '../../../../../../store/index'
import { homeActions } from '~/store/actions'
import { styles } from './styles'
import { Icon, Header } from '~/components'

const GroupsHeader = () => {
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
      <TouchableOpacity style={styles.bookmarkIcon} onPress={() => null}>
        <Icon name='add-icon' size={20} />
      </TouchableOpacity>
    </View>
  )

  return <Header style={styles.container} leftButton={leftButton} rightButton={rightButton} />
}

export default GroupsHeader
