import React from 'react'
import { View } from 'react-native'
import { Button, Input } from '~/components'
import { NAVIGATION, theme } from '~/constants'
import { styles } from './styles'

interface Props {
  navigation: any
}

export const Login = ({ navigation }: Props) => (
  <View style={styles.containerView}>
    <Input title='Username' value='' onChangeText={() => null} required error={false} />
    <Input title='Password' value='' onChangeText={() => null} required error={false} />

    <View style={styles.buttonView}>
      <Button message='Sign In' onPress={() => navigation.navigate(NAVIGATION.SCREEN.MAIN)} />
      <Button message='Forgot Password' type={theme.buttons.types.TEXT} />
    </View>
  </View>
)
