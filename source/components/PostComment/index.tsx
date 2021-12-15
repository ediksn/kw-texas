import React, { useCallback, useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import moment from 'moment'
import { styles } from './styles'
import Avatar from '~/components/Avatar'
import { CommentInterface } from '~/interfaces/commentInterface'
import { useUnRichContent } from '~/hooks'

const PostComment = ({ item }: { item: CommentInterface }) => {
  const {
    createdAt,
    creatorFirstName,
    creatorLastName,
    creatorPhoto,
    detail: { content }
  } = item
  const date = moment(createdAt).format('MM/DD/YY')
  const [numberOfLines, setNumberOfLines] = useState<number | undefined>()
  const [hasShowLessMore, setHasShowLessMore] = useState(false)
  const [showMore, setShowMore] = useState(false)
  const MAX_LINES = 5
  const contentText = useUnRichContent(content)

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

  return (
    <View style={styles.commentWrapper}>
      <View style={styles.commentAvatar}>
        <Avatar uri={creatorPhoto} />
      </View>
      <View style={styles.commentContent}>
        <View style={styles.commentBody}>
          <Text style={styles.commentAuthor}>{`${creatorFirstName} ${creatorLastName}`}</Text>
          <Text
            style={styles.commentText}
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
        <View style={styles.commentFooter}>
          <Text style={styles.commentDate}>{date}</Text>
          <View style={styles.commentActions}>
            <Text style={styles.commentLike}>Like</Text>
            <Text style={styles.commentComment}>Comment</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default PostComment
