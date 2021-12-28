import React, { useState, useRef, useCallback, useEffect } from 'react'
import moment from 'moment'
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight, Linking } from 'react-native'
import { useTranslation } from 'react-i18next'
import { moderateScale } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { styles } from './styles'
import { Button, Dropdown, PostMedia } from '~/components'
import { avatarPost, NAVIGATION, theme } from '~/constants'
import { Link, PostInterface } from '~/interfaces/postInterface'
import Icon from '../Icon'
import { useUnRichContent } from '~/hooks'
import { OptionInterface } from '../../interfaces/groupInterface'
import { authorPost, datePost, dotsOptionsPost, contentPost, buttonPost } from '../../constants/testIds'
import { homeActions, toastActions } from '~/store/actions'
import Avatar from '../Avatar'

interface PostProps {
  post: PostInterface
  onPostPress: (post: PostInterface) => void
}

const Post = ({ post, onPostPress }: PostProps) => {
  const {
    id,
    isUserCreatorOfThePost,
    createdAt,
    creatorfirstName,
    creatorLastName,
    creatorPhoto,
    content,
    likesCount,
    repliesCount,
    userHasAlreadyBookmarked,
    groupInfo,
    userHasAlreadyLiked,
    detail
  } = post
  const [userHasAlreadyBookmarkedLocal, setUserHasAlreadyBookmarkedLocal] = useState(userHasAlreadyBookmarked)
  const author = `${creatorfirstName.toUpperCase()} ${creatorLastName.toUpperCase()}`
  const date = moment(createdAt).format('MM/DD/YY')
  const shares = 0
  const MAX_LINES = 5
  const contentText = useUnRichContent(content)
  const [showMore, setShowMore] = useState(false)
  const [showDropDown, setShowDropDown] = useState(false)
  const [numberOfLines, setNumberOfLines] = useState<number | undefined>()
  const [hasShowLessMore, setHasShowLessMore] = useState(false)
  const [likes, setLikes] = useState(likesCount)
  const { t } = useTranslation()
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const buttonRef = useRef<any>()
  const [selectedOption, setSelectedOption] = useState<OptionInterface>()
  const [liked, setLiked] = useState(userHasAlreadyLiked)

  const addMoreText = useCallback(
    (event: any) => {
      if (event.nativeEvent.lines.length > MAX_LINES && !showMore) {
        setHasShowLessMore(true)
      }
    },
    [showMore]
  )

  useEffect(() => {
    if (hasShowLessMore) {
      setNumberOfLines(showMore ? undefined : MAX_LINES)
    }
  }, [hasShowLessMore, showMore])

  useEffect(() => {
    const { likesCount: likesNumber, userHasAlreadyLiked: hasLiked, userHasAlreadyBookmarked: hasBookmarked } = post
    setLikes(likesNumber)
    setLiked(hasLiked)
    setUserHasAlreadyBookmarkedLocal(hasBookmarked)
  }, [post])

  const getLikesCommentsSharesText = (count: number, text: string) => {
    if (count > 0) {
      return `${count} ${count === 1 ? text.slice(0, text.length - 1) : text}`
    }

    return ''
  }

  const handleEdit = () => {
    setShowDropDown(false)
    navigation.navigate(NAVIGATION.SCREEN.NEWPOST, { editMode: true, idPost: id, groupId: groupInfo.id })
  }

  const handleDelete = async () => {
    setShowDropDown(false)
    const res: any = await dispatch(homeActions.deletePost(id))
    if (res) {
      dispatch(toastActions.showSuccessToast('home_post_toast_message_deleted'))
    } else {
      dispatch(toastActions.showErrorToast('Something went wrong'))
    }
  }

  const handleFlag = async () => {
    setShowDropDown(false)
    const res: any = await dispatch(homeActions.flag(id))
    if (res) {
      dispatch(toastActions.showSuccessToast('home_post_toast_message_flagged'))
    } else {
      dispatch(toastActions.showErrorToast('Something went wrong'))
    }
  }

  const handleBookmark = async () => {
    setShowDropDown(false)
    setUserHasAlreadyBookmarkedLocal(true)
    const res: any = await dispatch(homeActions.addBookmark(id))
    if (res) {
      dispatch(toastActions.showSuccessToast('home_post_toast_message_added_bookmark'))
    } else {
      dispatch(toastActions.showErrorToast('Something went wrong'))
    }
  }

  const handleRemoveBookmark = async () => {
    setShowDropDown(false)
    setUserHasAlreadyBookmarkedLocal(false)
    const res: any = await dispatch(homeActions.removeBookmark(id))
    if (res) {
      dispatch(toastActions.showSuccessToast('home_post_toast_message_removed_bookmark'))
    } else {
      dispatch(toastActions.showErrorToast('Something went wrong'))
    }
  }

  const handleLikePost = () => {
    let likesUpdated
    if (!liked) {
      dispatch(homeActions.addLike(id))
      likesUpdated = likes + 1
    } else {
      dispatch(homeActions.removeLike(id))
      likesUpdated = likes - 1
    }
    setLiked(!liked)
    setLikes(likesUpdated)
  }

  const handleOpenLink = async (url: string) => {
    const canOpen = await Linking.canOpenURL(url)
    if (canOpen) {
      await Linking.openURL(url)
    }
  }

  const optionsPost = () => {
    const myOptions = [
      {
        key: '1',
        handleOption: () => handleEdit(),
        title: t('components_NewPost_Edit')
      },
      {
        key: '2',
        handleOption: () => handleDelete(),
        title: t('components_NewPost_Delete')
      },
      {
        key: '3',
        handleOption: () => {},
        title: t('components_NewPost_Save_Post')
      }
    ]
    const options = [
      {
        key: '1',
        handleOption: () => (userHasAlreadyBookmarkedLocal ? handleRemoveBookmark() : handleBookmark()),
        title: userHasAlreadyBookmarkedLocal ? t('components_Home_Remove_Bookmark') : t('components_Home_Bookmark_Post')
      },
      {
        key: '2',
        handleOption: () => handleFlag(),
        title: t('components_Home_Flag_Post')
      }
    ]

    return isUserCreatorOfThePost ? myOptions : options
  }

  const HorizontalLine = () => <View style={styles.horizontalLine} />

  const Buttons = () => (
    <View style={styles.buttons}>
      <Button
        testID={buttonPost}
        message={t('components_Post_Like')}
        type={theme.buttons.types.TEXT}
        icon={{
          name: liked ? 'like-filled-icon' : 'like-icon',
          size: moderateScale(20),
          color: theme.post.green
        }}
        fontSize={theme.fonts.SMALL_SIZE}
        viewStyle={styles.button}
        onPress={handleLikePost}
      />
      <Button
        testID={buttonPost}
        message={t('components_Post_Comment')}
        type={theme.buttons.types.TEXT}
        onPress={() => onPostPress(post)}
        icon={{
          name: 'comment-icon',
          size: moderateScale(20),
          color: theme.post.green
        }}
        fontSize={theme.fonts.SMALL_SIZE}
        viewStyle={styles.button}
      />
      <Button
        testID={buttonPost}
        message={t('components_Post_Share')}
        type={theme.buttons.types.TEXT}
        icon={{
          name: 'share-icon',
          size: moderateScale(20),
          color: theme.post.green
        }}
        fontSize={theme.fonts.SMALL_SIZE}
        viewStyle={styles.button}
      />
    </View>
  )

  return (
    <View style={[styles.container]}>
      <View>
        <View style={styles.header}>
          <View style={styles.avatarBox}>
            <Avatar testID={avatarPost} uri={creatorPhoto} />
            <View style={styles.info}>
              <Text testID={authorPost} style={styles.name}>
                {author}
              </Text>
              <Text numberOfLines={1} ellipsizeMode='tail' testID={datePost} style={styles.date}>{`${t(
                'components_Post_Posted'
              )} ${date} | ${groupInfo.name}`}</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.touchableArea}
            testID={dotsOptionsPost}
            ref={buttonRef}
            onPress={() => setShowDropDown(!showDropDown)}
          >
            <Icon name='threedots-icon' size={5} color={theme.post.dotsColor} />
          </TouchableOpacity>
          <Dropdown
            buttonRef={buttonRef}
            isVisible={showDropDown}
            onRequestClose={() => setShowDropDown(false)}
            onSelectOption={setSelectedOption}
            options={optionsPost()}
            selectedOption={selectedOption}
          />
        </View>
        <View style={styles.body}>
          <View style={styles.content}>
            <Text
              testID={contentPost}
              style={styles.contentText}
              numberOfLines={numberOfLines}
              onTextLayout={addMoreText}
              ellipsizeMode='clip'
            >
              {contentText}
            </Text>
            {hasShowLessMore && (
              <TouchableOpacity onPress={() => setShowMore(!showMore)}>
                <Text style={styles.showMore}>Show {showMore ? 'less' : 'more'}</Text>
              </TouchableOpacity>
            )}
          </View>
          {detail?.links?.length && detail?.links?.length > 0 && (
            <View testID='links' style={styles.links}>
              {detail?.links?.map((link: Link, i: number) => (
                <TouchableHighlight
                  key={`key${0 + i}`}
                  onPress={() => handleOpenLink(link.url)}
                  underlayColor='transparent'
                  style={styles.linkWrapper}
                >
                  <Text style={styles.linkText}>{link.url}</Text>
                </TouchableHighlight>
              ))}
            </View>
          )}
        </View>
        <PostMedia post={post} />
        <View style={styles.body}>
          <View style={styles.infoNumbers}>
            <Text style={styles.infoNumber}>{getLikesCommentsSharesText(likes, t('components_Post_likes'))}</Text>
            <TouchableWithoutFeedback onPress={() => onPostPress(post)}>
              <View style={styles.commentsSharesBox}>
                <Text style={[styles.infoNumber, shares > 0 ? styles.comments : null]}>
                  {getLikesCommentsSharesText(repliesCount, t('components_Post_comments'))}
                </Text>
                <Text style={styles.infoNumber}>{getLikesCommentsSharesText(shares, t('components_Post_shares'))}</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
      <HorizontalLine />
      <Buttons />
    </View>
  )
}

export default Post
