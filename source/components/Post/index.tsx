import React, { useState } from 'react'
import moment from 'moment'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import threeDotsMock from 'assets/images/threeDots.png'
import { useTranslation } from 'react-i18next'
import { moderateScale } from 'react-native-size-matters'
import { styles } from './styles'
import { Button } from '~/components'
import { theme } from '~/constants'
import { PostInterface } from '~/interfaces/postInterface'

const Post = ({ post }: { post: PostInterface }) => {
  const { created_at, created_by, content, likes_count, replies_count } = post

  const getAvatar = () => {
    const { avatar } = created_by

    if (avatar.includes('//avatar')) return `https://avatar${avatar.split('//avatar')[1]}`

    return avatar
  }

  const author = `${created_by.first_name.toUpperCase()} ${created_by.last_name.toUpperCase()}`
  const date = moment(created_at).fromNow()
  const shares = 0
  const [showMore, setShowMore] = useState(false)
  const { t } = useTranslation()

  const Header = () => (
    <View style={styles.header}>
      <Image style={styles.avatar} resizeMode='cover' source={{ uri: getAvatar() }} />
      <View style={styles.info}>
        <Text style={styles.name}>{author}</Text>
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
      {content.length > 200 && (
        <TouchableOpacity onPress={() => setShowMore(!showMore)}>
          <Text style={styles.showMore}>{showMore ? 'Less' : 'Show'} More</Text>
        </TouchableOpacity>
      )}
      <View style={styles.infoNumbers}>
        <Text style={styles.infoNumber}>{likes_count > 0 ? `${likes_count} ${t('likes')}` : ''}</Text>
        <View style={styles.commentsSharesBox}>
          <Text style={[styles.infoNumber, styles.comments]}>
            {replies_count > 0 ? `${replies_count} ${t('comments')}` : ''}
          </Text>
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
          size: moderateScale(20),
          color: theme.texts.green
        }}
        viewStyle={styles.button}
      />
      <Button
        message={t('Comment')}
        type={theme.buttons.types.TEXT}
        icon={{
          name: 'comment-icon',
          size: moderateScale(20),
          color: theme.texts.green
        }}
        viewStyle={styles.button}
      />
      <Button
        message={t('Share')}
        type={theme.buttons.types.TEXT}
        icon={{
          name: 'share-icon',
          size: moderateScale(20),
          color: theme.texts.green
        }}
        viewStyle={styles.button}
      />
    </View>
  )

  return (
    <View style={[styles.container]}>
      <View style={styles.body}>
        <Header />
        <Content />
      </View>
      <HorizontalLine />
      <Buttons />
    </View>
  )
}

export default Post
