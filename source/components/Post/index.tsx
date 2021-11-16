import React, { useState, useRef, useCallback, useEffect } from 'react'
import moment from 'moment'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useTranslation } from 'react-i18next'
import { moderateScale } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { styles } from './styles'
import { Button, Dropdown } from '~/components'
import { avatarPost, NAVIGATION, theme } from '~/constants'
import { PostInterface } from '~/interfaces/postInterface'
import Icon from '../Icon'
import { useUnRichContent } from '~/hooks'
import { OptionInterface } from '../../interfaces/groupInterface'
import { authorPost, datePost, dotsOptionsPost, contentPost, buttonPost } from '../../constants/testIds'
import { homeActions, toastActions } from '~/store/actions'

const Post = ({ post }: { post: PostInterface }) => {
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
    groupId
  } = post
  const author = `${creatorfirstName.toUpperCase()} ${creatorLastName.toUpperCase()}`
  const date = moment(createdAt).format('MM/DD/YY')
  const shares = 0
  const MAX_LINES = 5
  const contentText = useUnRichContent(content)
  const [showMore, setShowMore] = useState(false)
  const [showDropDown, setShowDropDown] = useState(false)
  const [numberOfLines, setNumberOfLines] = useState<number | undefined>()
  const [hasShowLessMore, setHasShowLessMore] = useState(false)
  const { t } = useTranslation()
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const buttonRef = useRef<any>()
  const [selectedOption, setSelectedOption] = useState<OptionInterface>()

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

  const getLikesCommentsSharesText = (count: number, text: string) => {
    if (count > 0) {
      return `${count} ${count === 1 ? text.slice(0, text.length - 1) : text}`
    }

    return ''
  }

  const handleEdit = () => {
    setShowDropDown(false)
    navigation.navigate(NAVIGATION.SCREEN.NEWPOST, { editMode: true, idPost: id, groupId })
  }

  const handleDelete = async () => {
    const res: any = await dispatch(homeActions.deletePost(id))
    if (res) {
      dispatch(toastActions.showSuccessToast('home_post_toast_message_deleted'))
    } else {
      dispatch(toastActions.showErrorToast('Something went wrong'))
    }
  }

  const handleBookmark = async () => {
    const res: any = await dispatch(homeActions.addBookmark(id))
    if (res) {
      dispatch(toastActions.showSuccessToast('home_post_toast_message_added_bookmark'))
    } else {
      dispatch(toastActions.showErrorToast('Something went wrong'))
    }
  }

  const handleRemoveBookmark = async () => {
    const res: any = await dispatch(homeActions.removeBookmark(id))
    if (res) {
      dispatch(toastActions.showSuccessToast('home_post_toast_message_removed_bookmark'))
    } else {
      dispatch(toastActions.showErrorToast('Something went wrong'))
    }
  }

  const optionsPost = () => {
    const myOptions = [
      {
        key: '1',
        handleOption: () => handleEdit(),
        title: t('Edit')
      },
      {
        key: '2',
        handleOption: () => handleDelete(),
        title: t('Delete')
      },
      {
        key: '3',
        handleOption: () => {},
        title: t('Save Post')
      }
    ]
    const options = [
      {
        key: '1',
        handleOption: () => (userHasAlreadyBookmarked ? handleRemoveBookmark() : handleBookmark()),
        title: userHasAlreadyBookmarked ? t('Remove from Bookmark') : t('Bookmark a post')
      },
      {
        key: '2',
        handleOption: () => {},
        title: t('Flag a post')
      }
    ]

    return isUserCreatorOfThePost ? myOptions : options
  }

  const HorizontalLine = () => <View style={styles.horizontalLine} />

  const Buttons = () => (
    <View style={styles.buttons}>
      <Button
        testID={buttonPost}
        message={t('Like')}
        type={theme.buttons.types.TEXT}
        icon={{
          name: 'like-icon',
          size: moderateScale(20),
          color: theme.post.green
        }}
        fontSize={theme.fonts.SMALL_SIZE}
        viewStyle={styles.button}
      />
      <Button
        testID={buttonPost}
        message={t('Comment')}
        type={theme.buttons.types.TEXT}
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
        message={t('Share')}
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
            <Image testID={avatarPost} style={styles.avatar} resizeMode='cover' source={{ uri: creatorPhoto }} />
            <View style={styles.info}>
              <Text testID={authorPost} style={styles.name}>
                {author}
              </Text>
              <Text testID={datePost} style={styles.date}>{`${t('Posted')} ${date}`}</Text>
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
          <View style={styles.infoNumbers}>
            <Text style={styles.infoNumber}>{getLikesCommentsSharesText(likesCount, t('likes'))}</Text>
            <View style={styles.commentsSharesBox}>
              <Text style={[styles.infoNumber, shares > 0 ? styles.comments : null]}>
                {getLikesCommentsSharesText(repliesCount, t('comments'))}
              </Text>
              <Text style={styles.infoNumber}>{getLikesCommentsSharesText(shares, t('shares'))}</Text>
            </View>
          </View>
        </View>
      </View>
      <HorizontalLine />
      <Buttons />
    </View>
  )
}

export default Post
