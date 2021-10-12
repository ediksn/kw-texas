import React, { memo } from 'react'
import { View, Image } from 'react-native'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import Icomoon from '~/selection.json'
import { styles } from './styles'

const Icon = createIconSetFromIcoMoon(Icomoon)

interface Props {
  focused: boolean
  name?: string
  imageURL?: string
}
const CustomTabBar = ({ name, focused, imageURL }: Props) => {
  return (
    <View style={styles(focused).container}>
      <View style={styles(focused).selectedBar} />
      {name ? (
        <Icon name={name} size={21} style={styles(focused).icon} />
      ) : (
        <Image style={styles(focused).photo} resizeMode='cover' resizeMethod='resize' source={{ uri: imageURL }} />
      )}
    </View>
  )
}

export default memo(CustomTabBar)
