import React from 'react'
import { View, ViewStyle, FlatList } from 'react-native'
import { Video } from '~/interfaces/videoInterfaces'
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
  const renderVideoComponent = ({ item }: { item: Video }) => (
    <VideoCard
      img={item.imageUrl}
      title={item.title}
      author={item.publishedBy}
      visits={item.views}
      likes={item.likesDetail.likes}
    />
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
        onEndReachedThreshold={1}
      />
    </View>
  )
}

export default VideoList
