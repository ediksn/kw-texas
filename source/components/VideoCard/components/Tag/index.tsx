import React, { memo } from 'react'
import { Text, View, ViewStyle } from 'react-native'
import { styles } from './styles'

interface Props {
  title?: string
  styleView?: ViewStyle
}

const Tag = ({ title, styleView }: Props) => (
  <View style={[styles.tagView, styleView]}>
    <Text style={styles.title}>{title}</Text>
  </View>
)

export default memo(Tag)
