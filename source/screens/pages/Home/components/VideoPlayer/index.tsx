import React, { useState } from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native'
import Video from 'react-native-video'
import { useTranslation } from 'react-i18next'

import like_button from 'assets/images/like_btn.png'
import like_buttonw from 'assets/images/like_btnw.png'
import save_button from 'assets/images/save_btn.png'
import save_buttonw from 'assets/images/save_btnw.png'
import link_button from 'assets/images/link_btn.png'

import { styles } from './styles'
import { Spinner } from '~/components'
import { videoService } from '~/services'

interface Props {
  id: number
  title: string
  uri: string
  videoLikes: number
  saved: boolean
  liked: boolean
}

const VideoPlayer = ({ id, title, uri, videoLikes, saved, liked }: Props) => {
  const { t } = useTranslation()
  const [likes, setlikes] = useState(videoLikes)
  const [clicked, setClicked] = useState(liked)
  const [save, setSave] = useState(saved)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  const getClicked = () => setClicked(!clicked)
  const getSaved = () => setSave(!save)

  const getLike = () => {
    videoService.postLike(id, liked)
    getClicked()
    if (clicked) {
      setlikes(likes - 1)
    } else {
      setlikes(likes + 1)
    }
  }

  return (
    <View>
      <View style={styles.videoContainer}>
        <Video
          source={{ uri }}
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
            <Spinner isLoading={isLoading} />
          </View>
        )}
      </View>
      <View style={styles.descContainer}>
        <Text style={styles.text}>{title}</Text>
        <View style={styles.btnView}>
          <View style={styles.leftGroup}>
            {clicked && (
              <TouchableOpacity onPress={getLike}>
                <Image style={styles.likeBtn} resizeMode='contain' source={like_button} />
              </TouchableOpacity>
            )}
            {!clicked && (
              <TouchableOpacity onPress={getLike}>
                <Image style={styles.likeBtn} resizeMode='contain' source={like_buttonw} />
              </TouchableOpacity>
            )}
            <Text style={styles.counter}>{likes}</Text>
          </View>
          <View style={styles.rightGroup}>
            {save && (
              <TouchableOpacity onPress={getSaved}>
                <Image style={styles.saveBtn} resizeMode='contain' source={save_button} />
              </TouchableOpacity>
            )}
            {!save && (
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
