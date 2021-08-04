/** @format */

import React from 'react'
import { SafeAreaView } from 'react-native'

import logout_btn from 'assets/images/logout_btn.png'
import { useDispatch } from 'react-redux'
import { styles } from './styles'
import ListButton from '~/components/ListButton'
import { logout } from '~/store/app'
import { NAVIGATION } from '~/constants'

interface Props {
  navigation: any
}

export const Settings = ({ navigation }: Props) => {
  const dispatch = useDispatch()
  return (
    <SafeAreaView style={styles.container}>
      <ListButton
        title='StoryBook'
        icon={null}
        onPress={() => navigation.navigate(NAVIGATION.SCREEN.STORYBOOK)}
        arrow
      />
      <ListButton title='Log Out' icon={logout_btn} onPress={() => dispatch(logout())} arrow />
    </SafeAreaView>
  )
}
