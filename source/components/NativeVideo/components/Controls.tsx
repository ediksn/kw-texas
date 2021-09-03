import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { styles } from './styles'
import playButton from '../assets/images/play_button.png'
import stopButton from '../assets/images/stop_button.png'

interface Props {
  paused: boolean
  onPress: () => void
}

const Controls = ({ paused, onPress }: Props) => (
  <TouchableOpacity onPress={onPress} style={styles.iconView}>
    <Image source={paused ? playButton : stopButton} style={styles.icon} />
  </TouchableOpacity>
)

export default Controls
