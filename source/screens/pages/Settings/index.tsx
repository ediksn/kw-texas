/** @format */

import React from 'react'
import { SafeAreaView } from 'react-native'

import logout_btn from 'assets/images/logout_btn.png'
import profile_btn from 'assets/images/profile_btn.png'
import conversations from 'assets/images/conversations.png'
import { useDispatch } from 'react-redux'
import ListButton from '~/components/ListButton'
import { loginActions } from '~/store/actions'
import { NAVIGATION } from '~/constants'

import { styles } from './styles'

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
      <ListButton
        title='Profile'
        icon={profile_btn}
        onPress={() => navigation.navigate(NAVIGATION.SCREEN.PROFILE)}
        arrow
      />
      <ListButton
        title='Command Training'
        icon={conversations}
        onPress={() => navigation.navigate(NAVIGATION.SCREEN.CONVERSATIONS)}
        arrow
      />
      <ListButton title='Log out' icon={logout_btn} onPress={handleLogOut} arrow={false} />
    </SafeAreaView>
  )
}
