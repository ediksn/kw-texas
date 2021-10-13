/** @format */

import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { useBackButtonMinimize } from '~/hooks'

export const Groups = () => {
  useBackButtonMinimize()

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Communities</Text>
    </SafeAreaView>
  )
}
