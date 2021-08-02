import { useMemo } from 'react'
import { Platform, Dimensions } from 'react-native'

const window = Dimensions.get('window')

export const useDeviceWidth = () => useMemo(() => window.width, [window.width])

export const useDeviceHeight = () => useMemo(() => window.height, [window.height])

export const useIsIosPlatform = () => useMemo(() => Platform.OS === 'ios', [Platform.OS])
