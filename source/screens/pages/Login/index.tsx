import React, { useState } from 'react'
import { View } from 'react-native'
import { useDispatch } from 'react-redux'
import { Button, Input, Spinner } from '~/components'
import { theme } from '~/constants'
import { styles } from './styles'
import { FORM } from '~/constants/form'
import { loginActions } from '~/store/actions'

export const Login = () => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    setLoading(true)
    await dispatch(loginActions.logIn({ username, password }))
    setLoading(false)
  }

  return (
    <View style={styles.containerView}>
      <Input
        testID='username-input'
        title='Username'
        required
        error={false}
        value={username}
        onChangeText={setUsername}
      />
      <Input
        testID='password-input'
        title='Password'
        type={FORM.FIELDS_TYPES.PASSWORD}
        required
        error={false}
        value={password}
        onChangeText={setPassword}
      />

      <View style={styles.buttonView}>
        <Spinner isLoading={loading} size={30}>
          <Button testID='signin-button' message='Sign In' onPress={handleLogin} />
        </Spinner>
        <Button testID='forgot-button' message='Forgot Password' type={theme.buttons.types.TEXT} />
      </View>
    </View>
  )
}
