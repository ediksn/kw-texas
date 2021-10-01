import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNetInfo } from '@react-native-community/netinfo'

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
  const netInfo = useNetInfo()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorFlag, setErrorFlag] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const error: ErrorInterface = useSelector((state: RootState) => state.login.error)

  const handleLogin = async () => {
    if (username && password) {
      setLoading(true)
      await dispatch(loginActions.logIn({ username, password }))
      setLoading(false)
    } else {
      setErrorFlag(true)
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
  }, [username, password])

  const NoConnection = () => (
    <SafeAreaView style={styles.notch}>
      <View style={styles.noConnectionContainer}>
        <Text style={styles.noConnectionText}>{t('No internet connection')}</Text>
      </View>
    </SafeAreaView>
  )

  return (
    <>
      {!netInfo.isConnected && <NoConnection />}
      <SafeAreaView style={[styles.containerView, !netInfo.isConnected && { backgroundColor: 'rgba(0,0,0,.2)' }]}>
        <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={IS_IOS ? 50 : 0}>
          <View style={styles.inputsView}>
            <Input
              testID={usernameInput}
              title={t('Username')}
              required
              disabled={!netInfo.isConnected || false}
              error={errorFlag}
              value={username}
              onChangeText={setUsername}
            />
            <Input
              testID={passwordInput}
              title={t('Password')}
              type={FORM.FIELDS_TYPES.PASSWORD}
              required
              disabled={!netInfo.isConnected || false}
              error={errorFlag}
              value={password}
              onChangeText={setPassword}
            />
          </View>
          {errorFlag && errorMessage && (
            <TextMessage style={styles.textMessage} type='error' message={t(errorMessage)} />
          )}
          <View style={styles.buttonView}>
            <Spinner isLoading={loading} size={30}>
              <Button
                testID={signinButton}
                message={t('Sign In')}
                onPress={handleLogin}
                disabled={!netInfo.isConnected || false}
              />
            </Spinner>
            <Button
              testID={forgotButton}
              message={t('Forgot Password')}
              type={theme.buttons.types.TEXT}
              disabled={!netInfo.isConnected || false}
            />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  )
}
