/** @format */

// import React, { useEffect, useState } from 'react'
import React, { useEffect } from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import { useTranslation } from 'react-i18next'
// import { useDispatch, useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { styles } from './styles'
// import { VideoList } from '~/components'
// import { Video } from '~/interfaces/videoInterfaces'
import { videoActions } from '~/store/actions'
// import { RootState } from '~/store/index'

export const Home = () => {
  const dispatch = useDispatch()
  // const videos = useSelector((state: RootState) => state.videos)
  const { t } = useTranslation()
  // const [refresing, setRefreshing] = useState(false)
  // const onRefresh = () => {
  //   setRefreshing(true)
  // }
  useEffect(() => {
    dispatch(videoActions.getVideos())
  }, [])
  // const onEndReached = () => {
  // }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.text}>
        <Text>{t('Conversations')}</Text>
      </View>
      {/* <VideoList
        data={videos}
        keyExtractor={(item: Video) => item.id.toString()}
        refreshing={refresing}
        onRefresh={onRefresh}
        onEndReached={onEndReached}
      /> */}
    </SafeAreaView>
  )
}
