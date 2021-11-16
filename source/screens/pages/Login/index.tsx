import React, { useCallback, useEffect, useState } from 'react'
import { Image, ImageBackground, KeyboardAvoidingView, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNetInfo } from '@react-native-community/netinfo'
import ReactNativeBiometrics from 'react-native-biometrics'
import kw from 'assets/images/kw-logo.png'
import illustration from 'assets/images/login-illustration.png'
import Modal from 'react-native-modal'
import { Button, Input, Spinner } from '~/components'
import { illustrationLogo, IS_IOS, kwLogo, passwordInput, signinButton, usernameInput } from '~/constants'
import { illustrationHeight, styles } from './styles'
import { FORM } from '~/constants/form'
import { loginActions } from '~/store/actions'
import { ErrorInterface } from '~/interfaces/errorInterface'
import { RootState } from '~/store'
import { loginErrors } from '~/functions'
import BiometricModal from '~/components/BiometricModal'
import { Storage, STORAGE_CONSTANTS } from '~/utils/storage'
import BiometricPermission from '~/components/BiometricPermission'
import { useDeviceHeight } from '~/hooks'

export const Login = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const netInfo = useNetInfo()

  const { BIOMETRIC } = STORAGE_CONSTANTS

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorFlag, setErrorFlag] = useState(false)
  const [usernameEmptyFlag, setUsernameEmptyFlag] = useState(false)
  const [passwordEmptyFlag, setPasswordEmptyFlag] = useState(false)
  const [biometryAllowed, setBiometryAllowed] = useState(false)
  const [biometryTypeState, setBiometryTypeState] = useState('')
  const [allowModal, setAllowModal] = useState(false)
  const [loginDisabled, setLoginDisabled] = useState(true)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const [biometricPosition, setBiometricPosition] = useState(0)
  const [showIllustration, setShowIllustration] = useState(false)
  const screenHeight = useDeviceHeight()

  const error: ErrorInterface = useSelector((state: RootState) => state.login.error)
  const user = useSelector((state: RootState) => state.login.user)

  const NoConnection = () => (
    <SafeAreaView>
      <View style={styles.noConnectionContainer}>
        <Text style={styles.noConnectionText}>{t('No internet connection')}</Text>
      </View>
    </SafeAreaView>
  )

  const handleLogin = async () => {
    if (username && password) {
      setLoading(true)
      await dispatch(loginActions.logIn({ username, password }))
    } else {
      setErrorFlag(true)
      if (username === '') setUsernameEmptyFlag(true)
      if (password === '') setPasswordEmptyFlag(true)
      setErrorMessage(null)
    }
  }

  useEffect(() => {
    if (biometryAllowed && biometryTypeState !== '' && biometryTypeState !== 'none') {
      if (screenHeight - illustrationHeight < biometricPosition) setShowIllustration(false)
      else if (biometricPosition > 0) setShowIllustration(true)
    } else if (biometryTypeState === 'none') setShowIllustration(true)
  }, [biometricPosition, biometryTypeState])

  useEffect(() => {
    if (user !== null) {
      if (biometryTypeState !== '') {
        Storage.get({ key: BIOMETRIC.PERMISSION }).then((result: any) => {
          if (result == null) {
            setAllowModal(true)
          } else {
            dispatch(loginActions.afterLogin())
            setLoading(false)
          }
        })
      } else {
        dispatch(loginActions.afterLogin())
        setLoading(false)
      }
    }
  }, [user])

  useEffect(() => {
    if (error?.error != null) {
      setLoading(false)
      setErrorFlag(true)
      setErrorMessage(loginErrors(error.error))
    }
  }, [error])

  useEffect(() => {
    setErrorFlag(false)
    setUsernameEmptyFlag(false)
    setPasswordEmptyFlag(false)
    setLoginDisabled(!username.length && !password.length)
  }, [username, password])

  useEffect(() => {
    ReactNativeBiometrics.isSensorAvailable().then(({ biometryType }: any) => {
      Storage.get({ key: BIOMETRIC.PERMISSION }).then((permission: any) => {
        if (permission?.ALLOWED === true) {
          setBiometryAllowed(true)
        }
        if (biometryType !== undefined) setBiometryTypeState(biometryType)
        ReactNativeBiometrics.biometricKeysExist().then(result => {
          if (result.keysExist) {
            if (Storage.getCredentials()) {
              ReactNativeBiometrics.deleteKeys()
            }
          }
        })
      })
      if (biometryTypeState === '') setBiometryTypeState('none')
    })
  }, [])

  const handleLoginFromBiometry = useCallback(async () => {
    const permission = await Storage.get({ key: BIOMETRIC.PERMISSION })
    if (permission.ALLOWED === true) {
      const options = { promptMessage: t('Sign in') }
      const result = await ReactNativeBiometrics.simplePrompt(options)
      if (result.success) {
        const credentials = await Storage.getCredentials()
        if (credentials) {
          setLoading(true)
          await dispatch(loginActions.logIn({ username: credentials.username, password: credentials.password }))
        }
      }
    }
  }, [t, dispatch])

  const handleCloseModal = () => {
    dispatch(loginActions.afterLogin())
    setLoading(false)
    setAllowModal(false)
  }

  const handleDenyBiometry = () => {
    Storage.save({ key: BIOMETRIC.PERMISSION, value: { ALLOWED: false } })
    handleCloseModal()
  }

  const handleAllowBiometry = async () => {
    setAllowModal(false)
    Storage.save({ key: BIOMETRIC.PERMISSION, value: { ALLOWED: true } })
    await ReactNativeBiometrics.createKeys()
    await ReactNativeBiometrics.createSignature({
      promptMessage: 'Sign in',
      payload: JSON.stringify({
        username,
        password
      })
    })
    Storage.saveCredentials({ username, password })
    dispatch(loginActions.afterLogin())
    setLoading(false)
  }

  return (
    <>
      <Modal isVisible={netInfo.isConnected === false} style={styles.noConnectionModal}>
        <NoConnection />
      </Modal>
      <SafeAreaView style={styles.containerView}>
        <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={IS_IOS ? 50 : 0}>
          <View style={styles.topContainer}>
            <View style={styles.logo}>
              <Image testID={kwLogo} source={kw} resizeMode='contain' resizeMethod='resize' style={styles.kw} />
              <Text style={styles.connect}>{t('CONNECT')}</Text>
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
                  disabled={!netInfo.isConnected || loginDisabled}
                />
              </Spinner>
            </View>
          </View>
          {!!biometryTypeState && biometryAllowed && (
            <BiometricModal
              onAuth={handleLoginFromBiometry}
              biometryType={biometryTypeState}
              setBiometricPosition={setBiometricPosition}
            />
          )}
        </KeyboardAvoidingView>
        <BiometricPermission
          biometryType={biometryTypeState}
          isVisible={allowModal}
          onNo={handleDenyBiometry}
          onRequestClose={handleCloseModal}
          onYes={handleAllowBiometry}
        />
        {showIllustration && (
          <ImageBackground
            testID={illustrationLogo}
            resizeMode='contain'
            resizeMethod='resize'
            source={illustration}
            style={styles.illustration}
          />
        )}
      </SafeAreaView>
    </>
  )
}
