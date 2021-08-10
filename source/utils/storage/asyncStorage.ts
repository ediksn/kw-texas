import AsyncStorage from '@react-native-community/async-storage'
import { STORAGE_CONSTANTS } from '~/utils/storage'

interface StorageProps {
  key: string
  value?: object
}

export default {
  isLogged: async () => {
    const { LOGIN } = STORAGE_CONSTANTS

    try {
      const sessionStorage = await AsyncStorage.getItem(`@storage_Connect.${LOGIN.SESSION}`)

      if (sessionStorage) {
        const session = JSON.parse(sessionStorage)
        return session.isLogged
      }
    } catch (error) {
      return false
    }

    return false
  },
  save: async ({ key, value }: StorageProps) => {
    try {
      const keyStorage = await AsyncStorage.getItem(`@storage_Connect.${key}`)

      if (keyStorage) {
        const oldValues = JSON.parse(keyStorage)
        const newValues = JSON.stringify({ ...oldValues, value })
        await AsyncStorage.setItem(`@storage_Connect.${key}`, newValues)
        return true
      }
    } catch (error) {
      return false
    }

    return false
  },
  remove: async ({ key }: StorageProps) => {
    try {
      await AsyncStorage.removeItem(`@storage_Connect.${key}`)
      return true
    } catch (error) {
      return false
    }
  }
}
