import React, { memo } from 'react'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import Icomoon from '~/selection.json'

interface Props {
  name: string
  size?: number
  color?: string
  testID?: string
}

const IcoMoon = createIconSetFromIcoMoon(Icomoon)

const Icon = ({ name, size = 10, color = '#000000', testID }: Props) => (
  <IcoMoon testID={testID} name={name} size={size} style={{ color }} />
)

export default memo(Icon)
