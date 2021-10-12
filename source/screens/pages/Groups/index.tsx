/** @format */

import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { useBackButtonMinimize } from '~/hooks'

export const Groups = () => {
  useBackButtonMinimize()

  return (
    <SafeAreaView>
      <Text>Groups</Text>
    </SafeAreaView>
  )
}
