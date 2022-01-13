import React from 'react'
import { Image } from 'react-native'
import CheckBoxMarked from 'assets/images/checkbox-marked.png'
import CheckBoxUnMarked from 'assets/images/checkbox-unmarked.png'
import { styles } from './styles'

interface CheckBoxInterface {
  marked?: boolean
}

const CheckBox = ({ marked }: CheckBoxInterface) => (
  <Image source={marked ? CheckBoxMarked : CheckBoxUnMarked} style={styles.checkBoxImage} />
)

export default CheckBox
