import { useFocusEffect } from '@react-navigation/native'
import { useCallback, useMemo } from 'react'
import { Platform, Dimensions, BackHandler } from 'react-native'

const window = Dimensions.get('window')

export const useDeviceWidth = () => useMemo(() => window.width, [window.width])

export const useDeviceHeight = () => useMemo(() => window.height, [window.height])

export const useIsIosPlatform = () => useMemo(() => Platform.OS === 'ios', [Platform.OS])

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
