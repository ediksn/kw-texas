import React from 'react'
import { View } from 'react-native'
import { Button, Input } from '~/components'
import { styles } from './styles'

export const Login = () => (
  <View style={styles.containerView}>
    <Input title='Username' value='' onChangeText={() => null} required error={false} />
    <Input title='Password' value='' onChangeText={() => null} required error={false} />

    <View style={styles.buttonView}>
      <Button />
      <Button />
    </View>
  </View>
)
