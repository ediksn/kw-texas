import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import threeDotsMock from 'assets/images/threeDots.png'
import likeButton from 'assets/images/like_btn.png'
import commentButton from 'assets/images/comment_btn.png'
import shareButton from 'assets/images/share_btn.png'
import { styles } from './styles'
import mockPost from './__mocks__/mockPost'
import avatarMock from './__mocks__/avatarNinaRoyals.png'
import { Button } from '~/components'
import { theme } from '~/constants'

const Card = () => {
  const { author, date, content } = mockPost
  const [showMore, setShowMore] = useState(false)

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
    <View style={styles.content}>
      <Text numberOfLines={showMore ? content.length : 5} ellipsizeMode='tail'>
        {content}
      </Text>
      <TouchableOpacity onPress={() => setShowMore(!showMore)}>
        <Text style={styles.showMore}>{showMore ? 'Less' : 'Show'} More</Text>
      </TouchableOpacity>
    </View>
  )

  const Buttons = () => (
    <View style={styles.buttons}>
      <Button type={theme.buttons.types.TEXT} icon={likeButton} />
      <Button type={theme.buttons.types.TEXT} icon={commentButton} />
      <Button type={theme.buttons.types.TEXT} icon={shareButton} />
    </View>
  )

  return (
    <View style={styles.container}>
      <Header />
      <Content />
      <Buttons />
    </View>
  )
}

export default Card
