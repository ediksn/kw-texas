/** @format */

import React from 'react'
import { SafeAreaView } from 'react-native'

import logout_btn from 'assets/images/logout_btn.png'
import { styles } from './styles'
import ListButton from '~/components/ListButton'

interface Props {
  navigation: any
}

export const Settings = ({ navigation }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ListButton title='StoryBook' icon={null} onPress={() => navigation.navigate('StoryBooks')} arrow />
      <ListButton title='Log out' icon={logout_btn} onPress={() => navigation.navigate('Login')} arrow />
    </SafeAreaView>
  )
}
