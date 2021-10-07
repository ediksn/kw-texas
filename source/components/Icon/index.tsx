import React, { memo } from 'react'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import Icomoon from 'assets/selection.json'

interface Props {
  name: string
  size?: number
  color?: string
}

const IcoMoon = createIconSetFromIcoMoon(Icomoon)

const Icon = ({ name, size = 10, color = '#000000' }: Props) => <IcoMoon name={name} size={size} style={{ color }} />

export default memo(Icon)
