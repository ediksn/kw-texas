import React from 'react'
import { SafeAreaView } from 'react-native'
import { useSelector } from 'react-redux'
import { VideoInterface } from '~/interfaces/videoInterfaces'
import { RootState } from '~/store'
import VideoPlayerComponent from '../components/VideoPlayer'

export const VideoPlayer = ({ route }: any) => {
  const { id, videos } = route.params
  const storedId = videos.findIndex((element: VideoInterface) => element.id === id)
  const storedVideo = videos[storedId]

  const libraryId = useSelector((state: RootState) => {
    const library = state.library.searchScriptMeeting
    return library.findIndex((element: VideoInterface) => element.id === id)
  })

  return (
    <SafeAreaView>
      <VideoPlayerComponent libraryId={libraryId} video={storedVideo} />
    </SafeAreaView>
  )
}
