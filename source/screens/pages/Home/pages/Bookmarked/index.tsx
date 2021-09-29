/** @format */

import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Spinner, VideoList } from '~/components'
import { VideoInterface } from '~/interfaces/videoInterfaces'
import { RootState } from '~/store/index'
import { bookmarkedActions, videoActions } from '~/store/actions'

import { styles } from './styles'
import { NAVIGATION } from '~/constants'

interface Props {
  navigation: any
}

export const Bookmarked = ({ navigation }: Props) => {
  const dispatch = useDispatch()
  const videos: VideoInterface[] = useSelector((state: RootState) => state.bookmarked.searchScriptMeeting)
  const loading: boolean = useSelector((state: RootState) => state.bookmarked.isLoading)
  const page: number = useSelector((state: RootState) => state.bookmarked.page)

  const onRefresh = () => {
    dispatch(bookmarkedActions.refreshVideosBm())
  }

  useEffect(() => {
    dispatch(bookmarkedActions.getVideosBm(page))
  }, [])

  const onEndReached = () => {
    dispatch(bookmarkedActions.getVideosBm(page))
  }

  const postBookmarked = (libraryId: number, videoId: number, bookmarked: boolean) => {
    dispatch(videoActions.bookmarkVideo(libraryId, videoId, !bookmarked))
  }

  return (
    <SafeAreaView style={styles.container}>
      <Spinner isLoading={loading && videos.length === 0}>
        <VideoList
          testID='bookmarked-videolist'
          navigation={navigation}
          onPressNavigateTo={NAVIGATION.SCREEN.VIDEOPLAYER}
          data={videos}
          keyExtractor={(item: VideoInterface) => item.id.toString()}
          refreshing={loading}
          postBookmarked={postBookmarked}
          onRefresh={onRefresh}
          onEndReached={onEndReached}
        />
      </Spinner>
    </SafeAreaView>
  )
}
