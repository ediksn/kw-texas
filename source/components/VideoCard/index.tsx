import React from 'react'
import { Text, Image, View, ViewStyle, ImageSourcePropType } from 'react-native'
import { styles } from './styles'

interface Props {
  img: ImageSourcePropType
  title: string
  author: string
  visits: number
  likes: number
  style?: ViewStyle
}
const VideoCard = ({ img, title, author, visits, likes, style }: Props) => {
  return (
    <View style={[styles.container, style]}>
      <Image source={img} style={styles.img} />
      <View style={styles.wrapper}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.statisticsContainer}>
          <Text style={styles.authorText}>
            by <Text style={styles.authorName}>{author}</Text>
          </Text>
          <Text style={styles.statisticsText}>{visits} views</Text>
          <Text style={styles.statisticsText}>{likes} likes</Text>
        </View>
      </View>
    </View>
  )
}

export default VideoCard
