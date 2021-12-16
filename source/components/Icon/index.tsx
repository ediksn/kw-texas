import React, { memo } from 'react'
import { ViewStyle } from 'react-native'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import Icomoon from '~/selection.json'

interface Props {
  name: string
  size?: number
  color?: string
  testID?: string
  viewStyle?: ViewStyle
}

const IcoMoon = createIconSetFromIcoMoon(Icomoon)

const Icon = ({ name, size = 10, color = '#000000', testID, viewStyle }: Props) => (
  <IcoMoon testID={testID} name={name} size={size} style={[viewStyle, { color }]} />
)

export default memo(Icon)
