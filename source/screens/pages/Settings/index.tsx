/** @format */

import React from 'react'
import { SafeAreaView } from 'react-native'

import logout_btn from 'assets/images/logout_btn.png'
import profile_btn from 'assets/images/profile_btn.png'
import { useDispatch } from 'react-redux'
import { styles } from './styles'
import ListButton from '~/components/ListButton'
import { loginActions } from '~/store/actions'
import { NAVIGATION } from '~/constants'

interface Props {
  navigation: any
}

export const Settings = ({ navigation }: Props) => {
  const dispatch = useDispatch()

  const handleLogOut = () => dispatch(loginActions.logOut())

  return (
    <SafeAreaView style={styles.container}>
      <ListButton
        title='StoryBook'
        icon={null}
        onPress={() => navigation.navigate(NAVIGATION.SCREEN.STORYBOOK)}
        arrow
      />
      <ListButton title='Profile' icon={logout_btn} onPress={() => null} arrow />
      <ListButton title='Log Out' icon={profile_btn} onPress={handleLogOut} arrow />
    </SafeAreaView>
  )
}
