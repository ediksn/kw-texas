import React, { useState } from 'react'
import { KeyboardAvoidingView, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, Input, Spinner } from '~/components'
import { forgotButton, IS_IOS, passwordInput, signinButton, theme, usernameInput } from '~/constants'
import { styles } from './styles'
import { FORM } from '~/constants/form'
import { loginActions } from '~/store/actions'
import { ErrorInterface } from '~/interfaces/errorInterface'
import { RootState } from '~/store'
import TextMessage from '~/components/TextMessage'

export const Login = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const error: ErrorInterface = useSelector((state: RootState) => state.login.error)

  const handleLogin = async () => {
    setLoading(true)
    await dispatch(loginActions.logIn({ username, password }))
    setLoading(false)
  }

  return (
    <SafeAreaView style={styles.containerView}>
      <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={IS_IOS ? 50 : 0}>
        {error.error && (
          <TextMessage
            style={styles.textMessage}
            type='error'
            message={t('There was an issue logging you in, please try again')}
          />
        )}
        <View style={styles.inputsView}>
          <Input
            testID={usernameInput}
            title={t('Username')}
            required
            error={false}
            value={username}
            onChangeText={setUsername}
          />
          <Input
            testID={passwordInput}
            title={t('Password')}
            type={FORM.FIELDS_TYPES.PASSWORD}
            required
            error={false}
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.buttonView}>
          <Spinner isLoading={loading} size={30}>
            <Button testID={signinButton} message={t('Sign In')} onPress={handleLogin} />
          </Spinner>
          <Button testID={forgotButton} message={t('Forgot Password')} type={theme.buttons.types.TEXT} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
