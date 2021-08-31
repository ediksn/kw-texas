/** @format */

import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Spinner, VideoList } from '~/components'
import { VideoInterface } from '~/interfaces/videoInterfaces'
import { RootState } from '~/store/index'
import { bmVideoActions } from '~/store/actions'

import { styles } from './styles'

export const Bookmarked = () => {
  const dispatch = useDispatch()
  const videos: VideoInterface[] = useSelector((state: RootState) => state.bmVideos.searchScriptMeetingBm)
  const loading: boolean = useSelector((state: RootState) => state.bmVideos.isLoading)
  const page: number = useSelector((state: RootState) => state.bmVideos.page)

  const onRefresh = () => {
    dispatch(bmVideoActions.refreshVideosBm())
  }

  useEffect(() => {
    dispatch(bmVideoActions.getVideosBm(page))
  }, [])

  const onEndReached = () => {
    dispatch(bmVideoActions.getVideosBm(page))
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
