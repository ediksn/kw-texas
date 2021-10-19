import React, { useState } from 'react'
import moment from 'moment'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useTranslation } from 'react-i18next'
import { moderateScale } from 'react-native-size-matters'
import { styles } from './styles'
import { Button } from '~/components'
import { theme } from '~/constants'
import { PostInterface } from '~/interfaces/postInterface'
import Icon from '../Icon'

const Post = ({ post }: { post: PostInterface }) => {
  const { createdAt, creatorfirstName, creatorLastName, creatorPhoto, content, likesCount, repliesCount } = post
  const author = `${creatorfirstName.toUpperCase()} ${creatorLastName.toUpperCase()}`
  const date = moment(createdAt).fromNow()
  const shares = 0
  const parseContent = content.slice(0, 1) === '{' ? JSON.parse(content) : content
  const contentText = Array.isArray(parseContent.blocks) ? parseContent.blocks[0].text : content
  const [showMore, setShowMore] = useState(false)
  const [hasShowLessMore, setHasShowLessMore] = useState(false)
  const { t } = useTranslation()

  const addMoreText = (event: any) => {
    setHasShowLessMore(event.nativeEvent.lines.length > 5)
  }

  const getLikesCommentsSharesText = (count: number, text: string) => {
    if (count > 0) {
      return `${count} ${count === 1 ? text.slice(0, text.length - 1) : text}`
    }

    return ''
  }

  const Header = () => (
    <View style={styles.header}>
      <View style={styles.avatarBox}>
        <Image style={styles.avatar} resizeMode='cover' source={{ uri: creatorPhoto }} />
        <View style={styles.info}>
          <Text style={styles.name}>{author}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => null}>
        <Icon name='threedots-icon' size={25} color={theme.post.dotsColor} />
      </TouchableOpacity>
    </View>
  )

  const Content = () => (
    <View style={styles.body}>
      <View style={styles.content}>
        <Text
          style={styles.contentText}
          numberOfLines={showMore ? contentText.length : 5}
          ellipsizeMode='clip'
          onTextLayout={addMoreText}
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
  )

  const HorizontalLine = () => <View style={styles.horizontalLine} />

  const Buttons = () => (
    <View style={styles.buttons}>
      <Button
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
        <Header />
        <Content />
      </View>
      <HorizontalLine />
      <Buttons />
    </View>
  )
}

export default Post
