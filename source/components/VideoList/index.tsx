import React from 'react'
import { View, ViewStyle, FlatList } from 'react-native'
import { VideoCard } from '..'
import { styles } from './styles'

interface Props {
  data: any[]
  keyExtractor: (item: any, index: number) => string
  onRefresh?: () => void
  refreshing?: boolean
  onEndReached?: () => void
  style?: ViewStyle
}
const VideoList = ({ data, keyExtractor, onRefresh, refreshing, onEndReached, style }: Props) => {
  const renderVideoComponent = ({ item }: { item: any }) => (
    <VideoCard img={item.img} title={item.title} author={item.author} visits={item.visits} likes={item.likes} />
  )
  return (
    <View style={[styles.container, style]}>
      <FlatList
        renderItem={renderVideoComponent}
        data={data}
        keyExtractor={keyExtractor}
        refreshing={refreshing}
        onRefresh={onRefresh}
        onEndReached={onEndReached}
        onEndReachedThreshold={2}
      />
    </View>
  )
}

export default VideoList
