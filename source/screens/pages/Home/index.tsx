/** @format */

import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { styles } from './styles'
import { VideoInterface } from '~/interfaces/videoInterfaces'
import { videoActions } from '~/store/actions'
import { RootState } from '~/store/index'
import { Spinner, VideoList } from '~/components'

export const Home = () => {
  const dispatch = useDispatch()
  const videos: VideoInterface[] = useSelector((state: RootState) => state.videos.searchScriptMeeting)
  const loading: boolean = useSelector((state: RootState) => state.videos.isLoading)
  const page: number = useSelector((state: RootState) => state.videos.page)
  const onRefresh = () => {
    dispatch(videoActions.refreshVideos())
  }

  useEffect(() => {
    dispatch(videoActions.getVideos(page))
  }, [])

  const onEndReached = () => {
    dispatch(videoActions.getVideos(page))
  }
  return (
    <SafeAreaView style={styles.container}>
      <Spinner isLoading={loading && videos.length === 0}>
        <VideoList
          data={videos}
          keyExtractor={(item: VideoInterface) => item.id.toString()}
          refreshing={loading}
          onRefresh={onRefresh}
          onEndReached={onEndReached}
        />
      </Spinner>
    </SafeAreaView>
  )
}
