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
  postBookmarked: (libraryId: number, videoId: number, bookmarked: boolean) => void
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
  postBookmarked,
  onRefresh,
  onEndReached
}: Props) => {
  const renderVideoComponent = ({ item }: { item: VideoInterface }) => {
    return (
      <VideoCard
        testID={videoCardComponent}
        img={item.imageUrl}
        title={item.title}
        firstName={item.agents[0].firstName}
        lastName={item.agents[0].lastName}
        visits={item.views}
        likes={item.likesDetail.likes}
        tags={item.scripts[0].hashtags}
        id={item.id}
        postBookmarked={postBookmarked}
        onPress={() =>
          navigation.navigate(onPressNavigateTo, {
            id: item.id,
            videos: data
          })
        }
      />
    )
  }

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
