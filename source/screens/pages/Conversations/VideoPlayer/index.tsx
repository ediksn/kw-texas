import React from 'react'
import { SafeAreaView } from 'react-native'
import VideoPlayerComponent from '../components/VideoPlayer'

export const VideoPlayer = ({ route }: any) => {
  const { id } = route.params
  return (
    <SafeAreaView>
      <VideoPlayerComponent backendId={id} />
    </SafeAreaView>
  )
}
