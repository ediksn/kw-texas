import React from 'react'
import { SafeAreaView } from 'react-native'
import VideoPlayerComponent from '../components/VideoPlayer'

export const VideoPlayer = ({ route }: any) => {
  const { title, uri, videoLikes, saved, liked } = route.params

  return (
    <SafeAreaView>
      <VideoPlayerComponent title={title} uri={uri} videoLikes={videoLikes} saved={saved} liked={liked} />
    </SafeAreaView>
  )
}
