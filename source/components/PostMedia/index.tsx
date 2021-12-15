import { Image, ImageBackground, Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { PostInterface } from '~/interfaces/postInterface'
import { POST_PREVIEW_MEDIA_LENGTH } from '~/utils/constants'

interface PostMediaProps {
  post: PostInterface
  withTopMargin?: boolean
}

const Index = ({ post, withTopMargin = true }: PostMediaProps) => {
  const { detail } = post
  if (!detail || !detail?.attachments) {
    return null
  }

  const { attachments } = detail
  if (attachments.length === 0) {
    return null
  }

  const moreImages = attachments.length > POST_PREVIEW_MEDIA_LENGTH
  const onlyOneImage = attachments.length === 1
  const moreImagesCount = attachments.length - POST_PREVIEW_MEDIA_LENGTH
  const [firstImage, secondImage, thirdImage] = attachments
  const showBigMedia = thirdImage || onlyOneImage

  return (
    <View style={withTopMargin ? styles.mediaContainer : styles.mediaContainerWithOutTopMargin}>
      {showBigMedia ? (
        <Image source={{ uri: firstImage?.url }} style={thirdImage ? styles.bigMediaBottomMargin : styles.bigMedia} />
      ) : null}
      {secondImage && (
        <View style={styles.smallMediaRow}>
          {!thirdImage ? (
            <Image source={{ uri: firstImage?.url }} style={[styles.smallMedia, styles.leftMedia]} />
          ) : null}
          <Image
            source={{ uri: secondImage?.url }}
            style={[styles.smallMedia, thirdImage ? styles.leftMedia : styles.rightMedia]}
          />
          {moreImages ? (
            <ImageBackground
              style={[styles.smallMedia, styles.opacityImage]}
              imageStyle={{ opacity: 0.5 }}
              source={{ uri: thirdImage?.url }}
            >
              <View style={styles.coverTextContainer}>
                <Text style={styles.coverText}>+ {moreImagesCount}</Text>
              </View>
            </ImageBackground>
          ) : thirdImage ? (
            <Image source={{ uri: thirdImage?.url }} style={[styles.smallMedia, styles.rightMedia]} />
          ) : null}
        </View>
      )}
    </View>
  )
}

export default Index
