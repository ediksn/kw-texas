/** @format */

import React from 'react'
import { SafeAreaView } from 'react-native'
import { useSelector } from 'react-redux'

import { styles } from './styles'
import Recording from '../../components/VideoCapture'
import { RootState } from '~/store'

export const Studio = () => {
  const usr: any = useSelector((state: RootState) => state.login)

  return (
    <SafeAreaView style={styles.container}>
      <Recording usr={usr} />
    </SafeAreaView>
  )
}
