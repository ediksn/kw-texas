import React from 'react'
import { View } from 'react-native'
import { Button, Input } from '~/components'
import { theme } from '~/constants'
import { styles } from './styles'
import { FORM } from '~/constants/form'

interface Props {
  navigation: any
}

export const Login = ({ navigation }: Props) => (
  <View style={styles.containerView}>
    <Input title='Username' required error={false} />
    <Input title='Password' type={FORM.FIELDS_TYPES.PASSWORD} required error={false} />

    <View style={styles.buttonView}>
      <Button message='Sign In' onPress={() => navigation.navigate('NAVIGATION.SCREEN.HOME')} />
      <Button message='Forgot Password' type={theme.buttons.types.TEXT} />
    </View>
  </View>
)
