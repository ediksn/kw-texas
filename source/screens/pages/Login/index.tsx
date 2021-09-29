import React, { useEffect, useState } from 'react'
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
import { loginErrors } from '~/functions'

export const Login = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorFlag, setErrorFlag] = useState(false)
  const [usernameEmptyFlag, setUsernameEmptyFlag] = useState(false)
  const [passwordEmptyFlag, setPasswordEmptyFlag] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const error: ErrorInterface = useSelector((state: RootState) => state.login.error)

  const handleLogin = async () => {
    if (username && password) {
      setLoading(true)
      await dispatch(loginActions.logIn({ username, password }))
      setLoading(false)
    } else {
      setErrorFlag(true)
      if (username === '') setUsernameEmptyFlag(true)
      if (password === '') setPasswordEmptyFlag(true)
      setErrorMessage(null)
    }
  }

  useEffect(() => {
    if (error?.error != null) {
      setErrorFlag(true)
      setErrorMessage(loginErrors(error.error))
    }
  }, [error])

  useEffect(() => {
    setErrorFlag(false)
    setUsernameEmptyFlag(false)
    setPasswordEmptyFlag(false)
  }, [username, password])

  return (
    <SafeAreaView style={styles.containerView}>
      <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={IS_IOS ? 50 : 0}>
        <View style={styles.inputsView}>
          <Input
            testID={usernameInput}
            title={t('Username')}
            required
            empty={usernameEmptyFlag}
            error={errorFlag}
            value={username}
            onChangeText={setUsername}
          />
          <Input
            testID={passwordInput}
            title={t('Password')}
            type={FORM.FIELDS_TYPES.PASSWORD}
            required
            empty={passwordEmptyFlag}
            error={errorFlag}
            value={password}
            onChangeText={setPassword}
          />
        </View>
        {errorFlag && errorMessage && <TextMessage style={styles.textMessage} type='error' message={t(errorMessage)} />}
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
