import React from 'react'
import { Text, Image, View, ViewStyle, ImageSourcePropType } from 'react-native'
import { styles } from './styles'

interface Props {
  img: ImageSourcePropType
  title: string
  author: string
  visits: number
  likes: number
  backgroundColor?: string
  textColor: string
  style?: ViewStyle
}
const VideoCard = ({ img, title, author, visits, likes, backgroundColor, textColor, style }: Props) => {
  return (
    <View style={[styles.container, { backgroundColor }, style]}>
      <Image source={img} style={styles.img} />
      <Text style={[styles.title, { color: textColor }]}>{title}</Text>
      <View style={styles.statisticsContainer}>
        <Text style={[styles.statisticsText, { color: textColor }]}> {author} </Text>
        <Text style={[styles.statisticsText, { color: textColor }]}> {visits} visitas</Text>
        <Text style={[styles.statisticsText, { color: textColor }]}> {likes} Likes </Text>
      </View>
    </View>
  )
}

export default VideoCard
