/** @format */

import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { useBackButtonMinimize } from '~/hooks'

export const Notifications = () => {
  useBackButtonMinimize()
  return (
    <SafeAreaView>
      <Text>Notifications</Text>
    </SafeAreaView>
  )
}
