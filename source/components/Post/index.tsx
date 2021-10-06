import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import threeDotsMock from 'assets/images/threeDots.png'
import likesButton from 'assets/images/likes_btn.png'
import commentButton from 'assets/images/comment_btn.png'
import shareButton from 'assets/images/share_btn.png'
import { useTranslation } from 'react-i18next'
import { styles } from './styles'
import mockPost from './__mocks__/mockPost'
import avatarMock from './__mocks__/avatarNinaRoyals.png'
import { Button } from '~/components'
import { theme } from '~/constants'

const Post = () => {
  const { author, date, content, likes, comments, shares } = mockPost
  const [showMore, setShowMore] = useState(false)
  const { t } = useTranslation()

  const Header = () => (
    <View style={styles.header}>
      <Image style={styles.avatar} resizeMode='center' source={avatarMock} />
      <View style={styles.info}>
        <Text style={styles.name}>{author.name.toUpperCase()}</Text>
        <Text>{date}</Text>
      </View>
      <TouchableOpacity onPress={() => null}>
        <Image style={styles.threeDots} resizeMode='center' source={threeDotsMock} />
      </TouchableOpacity>
    </View>
  )

  const Content = () => (
    <View>
      <Text numberOfLines={showMore ? content.length : 5} ellipsizeMode='tail'>
        {content}
      </Text>
      <TouchableOpacity onPress={() => setShowMore(!showMore)}>
        <Text style={styles.showMore}>{showMore ? 'Less' : 'Show'} More</Text>
      </TouchableOpacity>
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
      <Button message={t('Like')} type={theme.buttons.types.TEXT} icon={likesButton} viewStyle={styles.button} />
      <Button message={t('Comment')} type={theme.buttons.types.TEXT} icon={commentButton} viewStyle={styles.button} />
      <Button message={t('Share')} type={theme.buttons.types.TEXT} icon={shareButton} viewStyle={styles.button} />
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
