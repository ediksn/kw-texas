import AsyncStorage from '@react-native-community/async-storage'
import CryptoJS from 'crypto-js'
import Config from 'react-native-config'
import { STORAGE_CONSTANTS } from '~/utils/storage'

interface StorageProps {
  key: string
  value?: object
}

interface CredentialsInterface {
  username: string
  password: string
}

export default {
  isLogged: async () => {
    const { LOGIN } = STORAGE_CONSTANTS

    try {
      const sessionStorage = await AsyncStorage.getItem(`@storage_Connect.${LOGIN.SESSION}`)

      if (sessionStorage) {
        const session = JSON.parse(sessionStorage)
        return session.id_token
      }
    } catch (error) {
      return false
    }

    return false
  },
  save: async ({ key, value }: StorageProps) => {
    try {
      const keyStorage = await AsyncStorage.getItem(`@storage_Connect.${key}`)
      let newValues = null

      if (keyStorage) {
        const oldValues = JSON.parse(keyStorage)
        newValues = { ...oldValues, value }
      } else {
        newValues = value
      }
      await AsyncStorage.setItem(`@storage_Connect.${key}`, JSON.stringify(newValues))
      return true
    } catch (error) {
      return false
    }
  },
  remove: async ({ key }: StorageProps) => {
    try {
      await AsyncStorage.removeItem(`@storage_Connect.${key}`)
      return true
    } catch (error) {
      return false
    }
  },
  get: async ({ key }: StorageProps) => {
    try {
      const keyStorage = await AsyncStorage.getItem(`@storage_Connect.${key}`)

      if (keyStorage) return JSON.parse(keyStorage)
      return null
    } catch (error) {
      return null
    }
  },
  saveCredentials: async ({ username, password }: CredentialsInterface) => {
    const { BIOMETRIC } = STORAGE_CONSTANTS
    try {
      if (username && password) {
        const encryptedPassword = CryptoJS.AES.encrypt(password, Config.ENCRYPTION_KEY).toString()
        await AsyncStorage.setItem(
          `@storage_Connect.${BIOMETRIC.CREDENTIALS}`,
          JSON.stringify({ username, password: encryptedPassword })
        )
        return true
      }
      return false
    } catch (error) {
      return false
    }
  },
  getCredentials: async () => {
    const { BIOMETRIC } = STORAGE_CONSTANTS
    try {
      const keyStorage = await AsyncStorage.getItem(`@storage_Connect.${BIOMETRIC.CREDENTIALS}`)
      if (keyStorage) {
        const { username, password } = JSON.parse(keyStorage)
        const bytes = CryptoJS.AES.decrypt(password, Config.ENCRYPTION_KEY)
        const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8)
        return { username, password: decryptedPassword }
      }
      return null
    } catch (error) {
      return null
    }
  }
}
