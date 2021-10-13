/** @format */

import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { useBackButtonMinimize } from '~/hooks'

export const Notifications = () => {
  useBackButtonMinimize()
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Notifications</Text>
    </SafeAreaView>
  )
}
