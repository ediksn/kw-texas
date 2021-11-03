/** @format */

import React from 'react'
import { SafeAreaView } from 'react-native'

import conversations from 'assets/images/conversations.png'
import ListButton from '~/components/ListButton'
import { NAVIGATION } from '~/constants'

import { styles } from './styles'

interface Props {
  navigation: any
}

export const Settings = ({ navigation }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      {__DEV__ && (
        <ListButton
          title='StoryBook'
          icon={null}
          onPress={() => navigation.navigate(NAVIGATION.SCREEN.STORYBOOK)}
          arrow
        />
      )}
      <ListButton
        title='Command Training'
        icon={conversations}
        onPress={() => navigation.navigate(NAVIGATION.SCREEN.CONVERSATIONS)}
        arrow
      />
    </SafeAreaView>
  )
}
