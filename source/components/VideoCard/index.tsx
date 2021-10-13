import React from 'react'
import { Text, Image, View, ViewStyle, GestureResponderEvent, TouchableOpacity } from 'react-native'
import save_button from 'assets/images/save_btn.png'
import save_buttonw from 'assets/images/save_btnw.png'
import { useDispatch, useSelector } from 'react-redux'
import { styles } from './styles'
import connect_thumbnail from '../../../assets/images/connect_thumbnail.png'
import Tag from './components/Tag'
import { RootState } from '~/store'
import { VideoInterface } from '~/interfaces/videoInterfaces'
import bmVideoActions from '~/store/actions/bmVideoActions'

interface Props {
  testID: string
  img: string
  title: string
  firstName: string
  lastName: string
  visits: number
  likes: number
  id: number
  postBookmarked: (libraryId: number, videoId: number, bookmarked: boolean) => void
  style?: ViewStyle
  tags: any
  onPress?: (event: GestureResponderEvent) => void
}

const VideoCard = ({
  testID,
  img,
  title,
  firstName,
  lastName,
  visits,
  likes,
  id,
  postBookmarked,
  tags,
  style,
  onPress
}: Props) => {
  const dispatch = useDispatch()
  const storedVideo = useSelector((state: RootState) => {
    const library: VideoInterface[] = state.library.searchScriptMeeting
    const libraryId = library.findIndex((element: VideoInterface) => element.id === id)
    const bookmarked = library[libraryId]?.bookmarked !== undefined ? library[libraryId]?.bookmarked : true
    return { libraryId, bookmarked }
  })

  const getBookmarked = () => {
    postBookmarked(storedVideo.libraryId, id, storedVideo.bookmarked)
    setTimeout(() => {
      dispatch(bmVideoActions.refreshVideosBm())
    }, 200)
  }

  const renderTags = () => {
    let lenghtTags = 0
    let nextTags = 0

    return tags.map((hashTag: any, index: number) => {
      const { tag } = hashTag

      lenghtTags += tag.length

      if (lenghtTags < 22) {
        return <Tag key={tag} title={tag} />
      }

      nextTags += 1
      if (index + 1 === tags.length) return <Tag key={tag} title={`+${nextTags}`} />
      return null
    })
  }

  return (
    <TouchableOpacity testID={testID} onPress={onPress}>
      <View style={[styles.container, style]}>
        <Image source={img ? { uri: img } : connect_thumbnail} style={styles.img} />
        <View style={styles.wrapper}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.statisticsContainer}>
            <Text style={styles.authorText}>
              by <Text style={styles.authorName}>{`${firstName} ${lastName}`}</Text>
            </Text>
            <Text style={styles.statisticsText}>{visits} views</Text>
            <Text style={styles.statisticsText}>{likes} likes</Text>
          </View>
        </View>
        <View style={styles.tagContainerView}>
          <View style={styles.tagItemView}>{renderTags()}</View>
          {storedVideo.bookmarked && (
            <TouchableOpacity style={styles.bookmarkedIcon} onPress={getBookmarked}>
              <Image resizeMode='contain' source={save_button} />
            </TouchableOpacity>
          )}
          {!storedVideo.bookmarked && (
            <TouchableOpacity style={styles.bookmarkedIcon} onPress={getBookmarked}>
              <Image resizeMode='contain' source={save_buttonw} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default VideoCard
