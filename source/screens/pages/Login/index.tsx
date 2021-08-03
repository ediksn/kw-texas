import React from 'react'
import { View } from 'react-native'
import { useDispatch } from 'react-redux'
import { Button, Input } from '~/components'
import { theme } from '~/constants'
import { styles } from './styles'
import { FORM } from '~/constants/form'

import { login } from '~/store/app'

export const Login = () => {
  const dispatch = useDispatch()
  return (
    <View style={styles.containerView}>
      <Input title='Username' required error={false} />
      <Input title='Password' type={FORM.FIELDS_TYPES.PASSWORD} required error={false} />

      <View style={styles.buttonView}>
        <Button message='Sign In' onPress={() => dispatch(login())} />
        <Button message='Forgot Password' type={theme.buttons.types.TEXT} />
      </View>
    </View>
  )
}
