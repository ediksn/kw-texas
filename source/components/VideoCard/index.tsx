import React from 'react'
import { Text, Image, View, ViewStyle, GestureResponderEvent, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import connect_thumbnail from '../../../assets/images/connect_thumbnail.png'

interface Props {
  img: string
  title: string
  firstName: string
  lastName: string
  visits: number
  likes: number
  style?: ViewStyle
  onPress?: (event: GestureResponderEvent) => void
}
const VideoCard = ({ img, title, firstName, lastName, visits, likes, style, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, style]}>
        <Image source={img ? { uri: img } : connect_thumbnail} style={styles.img} />
        <View style={styles.wrapper}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.statisticsContainer}>
            <Text style={styles.authorText}>
              by <Text style={styles.authorName}>{`${firstName} ${lastName}`}</Text>
            </Text>
            <Text style={styles.statisticsText}>{visits} views</Text>
            <Text style={styles.statisticsText}>{likes} likes</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default VideoCard
