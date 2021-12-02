import React, { useCallback, useEffect, useState } from 'react'
import { Image, Keyboard, KeyboardAvoidingView, Platform, Text, TouchableWithoutFeedback, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNetInfo } from '@react-native-community/netinfo'
import AndroidKeyboardAdjust from 'react-native-android-keyboard-adjust'
import ReactNativeBiometrics from 'react-native-biometrics'
import kw from 'assets/images/kw-logo.png'
import Modal from 'react-native-modal'
import { Button, Input } from '~/components'
import { IS_IOS, kwLogo, passwordInput, signinButton, usernameInput } from '~/constants'
import { styles } from './styles'
import { FORM } from '~/constants/form'
import { loginActions } from '~/store/actions'
import { ErrorInterface } from '~/interfaces/errorInterface'
import { RootState } from '~/store'
import { loginErrors } from '~/functions'
import BiometricModal from '~/components/BiometricModal'
import { Storage, STORAGE_CONSTANTS } from '~/utils/storage'
import BiometricPermission from '~/components/BiometricPermission'

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

  const error: ErrorInterface = useSelector((state: RootState) => state.login.error)
  const user = useSelector((state: RootState) => state.login.user)

  const NoConnection = () => (
    <SafeAreaView>
      <View style={styles.noConnectionContainer}>
        <Text style={styles.noConnectionText}>{t('error_Internet')}</Text>
      </View>
    </SafeAreaView>
  )

  const handleLogin = async () => {
    if (username && password) {
      setLoading(true)
      await dispatch(loginActions.logIn({ username, password }))
      Storage.saveCredentials({ username, password })
    } else {
      setErrorFlag(true)
      if (username === '') setUsernameEmptyFlag(true)
      if (password === '') setPasswordEmptyFlag(true)
      setErrorMessage(loginErrors('invalid_request'))
    }
  }

  useEffect(() => {
    if (Platform.OS === 'android') AndroidKeyboardAdjust.setAdjustPan()
  }, [])

  useEffect(() => {
    if (user !== null) {
      if (biometryTypeState !== '') {
        Storage.get({ key: BIOMETRIC.PERMISSION }).then((result: any) => {
          if (result == null) {
            setAllowModal(true)
            setLoading(false)
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
        else setBiometryTypeState('none')
        ReactNativeBiometrics.biometricKeysExist().then(async (result: any) => {
          if (result.keysExist) {
            if (await Storage.getCredentials()) {
              ReactNativeBiometrics.deleteKeys()
            }
          }
        })
      })
    })
  }, [])

  const handleLoginFromBiometry = useCallback(async () => {
    const permission = await Storage.get({ key: BIOMETRIC.PERMISSION })
    if (permission && permission.ALLOWED === true) {
      try {
        const options = { promptMessage: t('components_Login_Sign_in') }
        const result = await ReactNativeBiometrics.simplePrompt(options)
        if (result.success) {
          const credentials = await Storage.getCredentials()
          if (credentials) {
            setLoading(true)
            await dispatch(loginActions.logIn({ username: credentials.username, password: credentials.password }))
          }
        }
      } catch (e) {
        setBiometryAllowed(false)
        Storage.save({ key: BIOMETRIC.PERMISSION, value: { ALLOWED: false } })
      }
    }
  }, [t, dispatch])

  const handleCloseModal = async () => {
    dispatch(loginActions.afterLogin())
    setAllowModal(false)
  }

  const handleDenyBiometry = () => {
    Storage.save({ key: BIOMETRIC.PERMISSION, value: { ALLOWED: false } })
    handleCloseModal()
  }

  const handleAllowBiometry = async () => {
    setAllowModal(false)
    await ReactNativeBiometrics.createKeys()
    Storage.save({ key: BIOMETRIC.PERMISSION, value: { ALLOWED: true } })
    Storage.saveCredentials({ username, password })
    dispatch(loginActions.afterLogin())
    setLoading(false)
  }

  return (
    <>
      <Modal isVisible={netInfo.isConnected === false} style={styles.noConnectionModal}>
        <NoConnection />
      </Modal>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.containerView}>
          <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={IS_IOS ? 50 : 0}>
            <View style={styles.topContainer}>
              <View style={styles.logo}>
                <Image testID={kwLogo} source={kw} resizeMode='contain' resizeMethod='resize' style={styles.kw} />
                <Text style={styles.connect}>{t('components_Login_connect')}</Text>
              </View>
              <View style={styles.inputsView}>
                <Input
                  testID={usernameInput}
                  title={t('components_Login_Username')}
                  placeholder={t('components_Login_Enter_username')}
                  disabled={!netInfo.isConnected || false}
                  empty={usernameEmptyFlag}
                  error={errorFlag}
                  value={username}
                  onChangeText={setUsername}
                  style={styles.input}
                />
                <Input
                  testID={passwordInput}
                  title={t('components_Login_Password')}
                  type={FORM.FIELDS_TYPES.PASSWORD}
                  placeholder={t('components_Login_Enter_password')}
                  disabled={!netInfo.isConnected || false}
                  empty={passwordEmptyFlag}
                  error={errorFlag}
                  value={password}
                  onChangeText={setPassword}
                  style={styles.input}
                />
                {errorFlag && errorMessage && <Text style={styles.textMessage}>{t(errorMessage)}</Text>}
                <Button
                  testID={signinButton}
                  viewStyle={styles.button}
                  textStyle={styles.textBold}
                  message={t('Log In')}
                  onPress={handleLogin}
                  disabled={!netInfo.isConnected || loginDisabled}
                  loading={loading}
                />
              </View>
            </View>
            {!!biometryTypeState && biometryAllowed && (
              <BiometricModal onAuth={handleLoginFromBiometry} biometryType={biometryTypeState} />
            )}
          </KeyboardAvoidingView>
          <BiometricPermission
            biometryType={biometryTypeState}
            isVisible={allowModal}
            onNo={handleDenyBiometry}
            onRequestClose={handleCloseModal}
            onYes={handleAllowBiometry}
          />
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  )
}
