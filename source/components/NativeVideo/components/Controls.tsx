import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { styles } from './styles'

interface Props {
  paused: boolean
  onPress: () => void
}

const Controls = ({ paused, onPress }: Props) => (
  <TouchableOpacity onPress={onPress} style={styles.iconView}>
    <Text style={styles.icon}>{paused ? 'PLAY' : 'STOP'}</Text>
  </TouchableOpacity>
)

export default Controls
