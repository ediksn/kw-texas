import React, { useState, useCallback, useEffect } from 'react'
import { View, Text, TouchableOpacity, ViewStyle, TouchableHighlight, Linking } from 'react-native'
import { useTranslation } from 'react-i18next'
import { moderateScale } from 'react-native-size-matters'
import { useDispatch } from 'react-redux'
import { styles } from './styles'
import { Button, PostMedia } from '~/components'
import { theme } from '~/constants'
import { Link, PostInterface } from '~/interfaces/postInterface'
import { useUnRichContent } from '~/hooks'
import { contentPost, buttonPost } from '../../constants/testIds'
import { homeActions } from '~/store/actions'

interface PostInfoProps {
  post: PostInterface
  commentsCount: number
  customContainerStyle?: ViewStyle
}

interface ButtonsProps {
  handleLikePost: () => void
  liked: boolean
}

const Buttons = ({ liked, handleLikePost }: ButtonsProps) => {
  const { t } = useTranslation()
  return (
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
}

const PostInfo = ({ post, commentsCount, customContainerStyle }: PostInfoProps) => {
  const { id, content, likesCount, userHasAlreadyLiked, detail } = post
  const shares = 0
  const MAX_LINES = 5
  const contentText = useUnRichContent(content)
  const [showMore, setShowMore] = useState(false)
  const [numberOfLines, setNumberOfLines] = useState<number | undefined>()
  const [hasShowLessMore, setHasShowLessMore] = useState(false)
  const [likes, setLikes] = useState(likesCount)
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const [liked, setLiked] = useState(userHasAlreadyLiked)

  const addMoreText = useCallback(
    (event: any) => {
      if (event.nativeEvent.lines.length > MAX_LINES && !showMore) {
        setHasShowLessMore(true)
      }
    },
    [showMore]
  )

  const handleOpenLink = async (url: string) => {
    const canOpen = await Linking.canOpenURL(url)
    if (canOpen) {
      await Linking.openURL(url)
    }
  }

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

  const HorizontalLine = () => <View style={styles.horizontalLine} />

  return (
    <View style={styles.container}>
      <View>
        <View style={[styles.body, contentText ? customContainerStyle : {}]}>
          <View style={contentText ? styles.content : {}}>
            {contentText ? (
              <Text
                testID={contentPost}
                style={styles.contentText}
                numberOfLines={numberOfLines}
                onTextLayout={addMoreText}
                ellipsizeMode='clip'
              >
                {contentText}
              </Text>
            ) : null}
            {hasShowLessMore && (
              <TouchableOpacity onPress={() => setShowMore(!showMore)}>
                <Text style={styles.showMore}>
                  {showMore ? t('components_Post_ShowLess') : t('components_Post_ShowMore')}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <PostMedia post={post} withTopMargin={false} />
        <View style={styles.body}>
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
          <View style={styles.infoNumbers}>
            <Text style={styles.infoNumber}>{getLikesCommentsSharesText(likes, t('components_Post_likes'))}</Text>
            <View style={styles.commentsSharesBox}>
              <Text style={[styles.infoNumber, shares > 0 ? styles.comments : null]}>
                {getLikesCommentsSharesText(commentsCount, t('components_Post_comments'))}
              </Text>
              <Text style={styles.infoNumber}>{getLikesCommentsSharesText(shares, t('components_Post_shares'))}</Text>
            </View>
          </View>
        </View>
      </View>
      <HorizontalLine />
      <Buttons liked={liked} handleLikePost={handleLikePost} />
      <HorizontalLine />
    </View>
  )
}

export default PostInfo
