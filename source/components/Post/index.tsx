import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useTranslation } from 'react-i18next'
import { styles } from './styles'
import mockPost from './__mocks__/mockPost'
import avatarMock from './__mocks__/avatarNinaRoyals.png'
import { Button } from '~/components'
import { theme } from '~/constants'
import Icon from '../Icon'

const Post = () => {
  const { author, date, content, likes, comments, shares } = mockPost
  const [showMore, setShowMore] = useState(false)
  const { t } = useTranslation()

  const Header = () => (
    <View style={styles.header}>
      <View style={styles.avatarBox}>
        <Image style={styles.avatar} resizeMode='center' source={avatarMock} />
        <View style={styles.info}>
          <Text style={styles.name}>{author.name.toUpperCase()}</Text>
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
        <Text style={styles.contentText} numberOfLines={showMore ? content.length : 5} ellipsizeMode='clip'>
          {content}
        </Text>
        <TouchableOpacity onPress={() => setShowMore(!showMore)}>
          <Text style={styles.showMore}>Show {showMore ? 'less' : 'more'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.infoNumbers}>
        <Text style={styles.infoNumber}>{likes.number > 0 ? `${likes.number} ${t('likes')}` : ''}</Text>
        <View style={styles.commentsSharesBox}>
          <Text style={[styles.infoNumber, styles.comments]}>
            {comments.number > 0 ? `${comments.number} ${t('comments')}` : ''}
          </Text>
          <Text style={styles.infoNumber}>{shares.number > 0 ? `${shares.number} ${t('shares')}` : ''}</Text>
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
          color: theme.post.green
        }}
        fontSize={theme.fonts.SMALL_SIZE}
        viewStyle={styles.button}
      />
    </View>
  )

  return (
    <View style={[styles.container]}>
      <Header />
      <Content />
      <HorizontalLine />
      <Buttons />
    </View>
  )
}

export default Post
