// comment for creation of story task
import React, { useEffect, useState } from 'react'
import { Image, KeyboardAvoidingView, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNetInfo } from '@react-native-community/netinfo'
import kw from 'assets/images/kw-logo.png'
import connect from 'assets/images/connect-logo.png'
import illustration from 'assets/images/login-illustration.png'
import Modal from 'react-native-modal'
import { Button, Input, Spinner } from '~/components'
import {
  connectLogo,
  forgotButton,
  illustrationLogo,
  IS_IOS,
  kwLogo,
  passwordInput,
  signinButton,
  theme,
  usernameInput
} from '~/constants'
import { styles } from './styles'
import { FORM } from '~/constants/form'
import { loginActions } from '~/store/actions'
import { ErrorInterface } from '~/interfaces/errorInterface'
import { RootState } from '~/store'
import { loginErrors } from '~/functions'

export const Login = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const netInfo = useNetInfo()
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

  const NoConnection = () => (
    <SafeAreaView>
      <View style={styles.noConnectionContainer}>
        <Text style={styles.noConnectionText}>{t('No internet connection')}</Text>
      </View>
    </SafeAreaView>
  )

  return (
    <>
      <Modal isVisible={!netInfo.isConnected} style={styles.noConnectionModal}>
        <NoConnection />
      </Modal>
      <SafeAreaView style={styles.containerView}>
        <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={IS_IOS ? 50 : 0}>
          <View style={styles.topContainer}>
            <View style={styles.logo}>
              <Image testID={kwLogo} source={kw} resizeMode='contain' resizeMethod='resize' style={styles.kw} />
              <Image
                testID={connectLogo}
                source={connect}
                resizeMode='contain'
                resizeMethod='resize'
                style={styles.connect}
              />
            </View>
            <View style={styles.inputsView}>
              <Input
                testID={usernameInput}
                title={t('Username')}
                placeholder={t('Enter your username...')}
                disabled={!netInfo.isConnected || false}
                empty={usernameEmptyFlag}
                error={errorFlag}
                value={username}
                onChangeText={setUsername}
                style={styles.input}
              />
              <Input
                testID={passwordInput}
                title={t('Password')}
                type={FORM.FIELDS_TYPES.PASSWORD}
                placeholder={t('Enter password...')}
                disabled={!netInfo.isConnected || false}
                empty={passwordEmptyFlag}
                error={errorFlag}
                value={password}
                onChangeText={setPassword}
                style={styles.input}
              />
              {errorFlag && errorMessage && <Text style={styles.textMessage}>{t(errorMessage)}</Text>}
              <Spinner isLoading={loading} styleView={styles.spinner} size={30}>
                <Button
                  testID={signinButton}
                  viewStyle={styles.button}
                  textStyle={styles.textBold}
                  message={t('Log In')}
                  onPress={handleLogin}
                  disabled={!netInfo.isConnected || false}
                />
              </Spinner>
              <Button
                testID={forgotButton}
                viewStyle={styles.button}
                textStyle={styles.textRegular}
                message={t('Forgot Password')}
                type={theme.buttons.types.TEXT}
                disabled={!netInfo.isConnected || false}
              />
            </View>
          </View>
          <View style={styles.illustrationContainer}>
            <Image
              testID={illustrationLogo}
              source={illustration}
              resizeMode='contain'
              resizeMethod='resize'
              style={styles.illustration}
            />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  )
}
