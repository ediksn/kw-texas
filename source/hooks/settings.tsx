import { useFocusEffect } from '@react-navigation/native'
import { useCallback } from 'react'
import { Platform, Dimensions, BackHandler, StatusBar } from 'react-native'

const window = Dimensions.get('window')

export const useDeviceWidth = () => window.width

export const useDeviceHeight = () => window.height

export const useIsIosPlatform = () => Platform.OS === 'ios'

export const useStatusBarHeight = () => StatusBar.currentHeight || 0

export const useBackButtonMinimize = () => {
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        BackHandler.exitApp()
        return true
      }

      BackHandler.addEventListener('hardwareBackPress', onBackPress)

      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress)
    }, [])
  )
}
