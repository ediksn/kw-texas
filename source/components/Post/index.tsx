import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import threeDotsMock from 'assets/images/threeDots.png'
import { useTranslation } from 'react-i18next'
import { styles } from './styles'
import avatarMock from './__mocks__/avatarNinaRoyals.png'
import { Button } from '~/components'
import { theme } from '~/constants'
import { PostInterface } from '~/interfaces/postInterface'

const Post = ({ post }: { post: PostInterface }) => {
  const { author, date, content, likes, comments, shares } = post
  const [showMore, setShowMore] = useState(false)
  const { t } = useTranslation()

  const Header = () => (
    <View style={styles.header}>
      <Image style={styles.avatar} resizeMode='center' source={avatarMock} />
      <View style={styles.info}>
        <Text style={styles.name}>{author?.name.toUpperCase()}</Text>
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
        <Text style={styles.infoNumber}>{likes > 0 ? `${likes} ${t('likes')}` : ''}</Text>
        <View style={styles.commentsSharesBox}>
          <Text style={[styles.infoNumber, styles.comments]}>{comments > 0 ? `${comments} ${t('comments')}` : ''}</Text>
          <Text style={styles.infoNumber}>{shares > 0 ? `${shares} ${t('shares')}` : ''}</Text>
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
          color: theme.texts.green
        }}
        viewStyle={styles.button}
      />
      <Button
        message={t('Comment')}
        type={theme.buttons.types.TEXT}
        icon={{
          name: 'comment-icon',
          color: theme.texts.green
        }}
        viewStyle={styles.button}
      />
      <Button
        message={t('Share')}
        type={theme.buttons.types.TEXT}
        icon={{
          name: 'share-icon',
          color: theme.texts.green
        }}
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
