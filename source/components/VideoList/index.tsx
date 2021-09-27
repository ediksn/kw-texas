import React from 'react'
import { View, ViewStyle, FlatList } from 'react-native'
import { videoCardComponent } from '~/constants'
import { VideoInterface } from '~/interfaces/videoInterfaces'
import { VideoCard } from '..'
import { styles } from './styles'

interface Props {
  ListHeaderComponent?: any
  navigation: any
  onPressNavigateTo: string
  data: any[]
  keyExtractor: (item: any, index: number) => string
  testID: string
  refreshing?: boolean
  style?: ViewStyle
  onRefresh?: () => void
  onEndReached?: () => void
}
const VideoList = ({
  ListHeaderComponent,
  navigation,
  onPressNavigateTo,
  data,
  keyExtractor,
  testID,
  refreshing,
  style,
  onRefresh,
  onEndReached
}: Props) => {
  const renderVideoComponent = ({ item }: { item: VideoInterface }) => (
    <VideoCard
      testID={videoCardComponent}
      img={item.imageUrl}
      title={item.title}
      firstName={item.agents[0].firstName}
      lastName={item.agents[0].lastName}
      visits={item.views}
      likes={item.likesDetail.likes}
      tags={item.scripts[0].hashtags}
      onPress={() =>
        navigation.navigate(onPressNavigateTo, {
          title: item.title,
          uri: item.videoUrl,
          videoLikes: item.likesDetail.likes,
          saved: item.bookmarked,
          liked: item.liked,
          id: item.id
        })
      }
    />
  )

  return (
    <View style={[styles.container, style]}>
      <FlatList
        ListHeaderComponent={ListHeaderComponent || null}
        testID={testID}
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
