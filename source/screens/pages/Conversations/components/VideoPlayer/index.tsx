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
import { VideoInterface } from '~/interfaces/videoInterfaces'
import { videoActions } from '~/store/actions'
import bmVideoActions from '~/store/actions/bmVideoActions'
import { RootState } from '~/store'

interface Props {
  libraryId: number
  video: VideoInterface
}

const VideoPlayer = ({ libraryId, video }: Props) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(0)
  const [bookmarked, setBookmarked] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const bookmarkedLoading: boolean = useSelector((state: RootState) => {
    const libraryVideos: VideoInterface[] = state.library.searchScriptMeeting
    const bookmarkedVideo = libraryVideos.find(element => element.id === video.id)
    const isBookmarked = bookmarkedVideo?.bookmarked
    return isBookmarked || false
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

  useEffect(() => {
    dispatch(bmVideoActions.refreshVideosBm())
  }, [bookmarkedLoading])

  const getBookmarked = () => {
    setBookmarked(!bookmarked)
    dispatch(videoActions.bookmarkVideo(libraryId, video.id, !bookmarked))
  }

  const getLike = () => {
    if (liked) {
      setLikes(likes - 1)
      dispatch(videoActions.dislikeVideo(libraryId, video.id))
    } else {
      setLikes(likes + 1)
      dispatch(videoActions.likeVideo(libraryId, video.id))
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
            <Text> {t('error_Video')} </Text>
          </View>
        )}
        {isLoading && !error && (
          <View style={styles.loadingContainer}>
            <Spinner isLoading={isLoading} />
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
            {bookmarked && (
              <TouchableOpacity onPress={getBookmarked}>
                <Image style={styles.saveBtn} resizeMode='contain' source={save_button} />
              </TouchableOpacity>
            )}
            {!bookmarked && (
              <TouchableOpacity onPress={getBookmarked}>
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
