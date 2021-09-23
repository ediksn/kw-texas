import React, { useEffect, useState } from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native'
import Video from 'react-native-video'
import { useTranslation } from 'react-i18next'

import like_button from 'assets/images/like_btn.png'
import like_buttonw from 'assets/images/like_btnw.png'
import save_button from 'assets/images/save_btn.png'
import save_buttonw from 'assets/images/save_btnw.png'
import link_button from 'assets/images/link_btn.png'

import { useDispatch, useSelector } from 'react-redux'
import { styles } from './styles'
import { Spinner } from '~/components'
import { RootState } from '~/store'
import { VideoInterface } from '~/interfaces/videoInterfaces'
import { videoActions } from '~/store/actions'

interface Props {
  backendId: number
}

const VideoPlayer = ({ backendId }: Props) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(0)
  const [bookmarked, setBookmarked] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const video = useSelector((state: RootState) => {
    const videos: VideoInterface[] = state.videos.searchScriptMeeting
    const storedId = videos.findIndex(element => element.id === backendId)
    const storedVideo = videos[storedId]
    return { ...storedVideo, storedId }
  })

  useEffect(() => {
    setBookmarked(video.bookmarked)
    setLiked(video.liked)
    setLikes(video.likesDetail.likes)
  }, [])

  useEffect(() => {
    setLiked(video.liked)
  }, [video.liked])

  useEffect(() => {
    setLikes(video.likesDetail.likes)
  }, [video.likesDetail.likes])

  const getSaved = () => setBookmarked(!bookmarked)

  const getLike = () => {
    if (liked) {
      dispatch(videoActions.dislikeVideo(video.storedId, backendId))
      setLikes(likes - 1)
    } else {
      dispatch(videoActions.likeVideo(video.storedId, backendId))
      setLikes(likes + 1)
    }
    setLiked(!liked)
  }

  return (
    <View>
      <View style={styles.videoContainer}>
        <Video
          source={{ uri: video?.videoUrl }}
          fullscreen={false}
          controls
          repeat
          resizeMode='cover'
          style={styles.video}
          onError={() => setError(true)}
          onLoadStart={() => setIsLoading(true)}
          onLoad={() => setIsLoading(false)}
        />
        {error && (
          <View style={styles.loadingContainer}>
            <Text> {t('Could not load the video')} </Text>
          </View>
        )}
        {isLoading && !error && (
          <View style={styles.loadingContainer}>
            <Spinner />
          </View>
        )}
      </View>
      <View style={styles.descContainer}>
        <Text style={styles.text}>{video?.title}</Text>
        <View style={styles.btnView}>
          <View style={styles.leftGroup}>
            {liked && (
              <TouchableOpacity onPress={getLike}>
                <Image style={styles.likeBtn} resizeMode='contain' source={like_button} />
              </TouchableOpacity>
            )}
            {!liked && (
              <TouchableOpacity onPress={getLike}>
                <Image style={styles.likeBtn} resizeMode='contain' source={like_buttonw} />
              </TouchableOpacity>
            )}
            <Text style={styles.counter}>{likes}</Text>
          </View>
          <View style={styles.rightGroup}>
            {video?.bookmarked && (
              <TouchableOpacity onPress={getSaved}>
                <Image style={styles.saveBtn} resizeMode='contain' source={save_button} />
              </TouchableOpacity>
            )}
            {!video?.bookmarked && (
              <TouchableOpacity onPress={getSaved}>
                <Image style={styles.saveBtn} resizeMode='contain' source={save_buttonw} />
              </TouchableOpacity>
            )}
            <TouchableOpacity>
              <Image resizeMode='contain' source={link_button} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default VideoPlayer
