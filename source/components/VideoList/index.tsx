import React from 'react'
import { SafeAreaView, ViewStyle, FlatList } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
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
    <VideoCard
      img={item.img}
      title={item.title}
      author={item.author}
      visits={item.visits}
      likes={item.likes}
      style={{ margin: moderateScale(4) }}
    />
  )
  return (
    <SafeAreaView style={[styles.container, style]}>
      <FlatList
        renderItem={renderVideoComponent}
        data={data}
        keyExtractor={keyExtractor}
        refreshing={refreshing}
        onRefresh={onRefresh}
        onEndReached={onEndReached}
        onEndReachedThreshold={2}
      />
    </SafeAreaView>
  )
}

export default VideoList
