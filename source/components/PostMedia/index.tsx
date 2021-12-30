import { Image, ImageBackground, Text, View } from 'react-native'
import React from 'react'
import EmptyImage from 'assets/images/no-image.png'
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
        <ImageBackground
          source={EmptyImage}
          imageStyle={{ opacity: 0.5 }}
          style={styles.emptyBigMedia}
          resizeMode='center'
        >
          <Image source={{ uri: firstImage?.url }} style={thirdImage ? styles.bigMediaBottomMargin : styles.bigMedia} />
        </ImageBackground>
      ) : null}
      {secondImage && (
        <View style={styles.smallMediaRow}>
          {!thirdImage ? (
            <ImageBackground
              imageStyle={{ opacity: 0.5 }}
              source={EmptyImage}
              style={[styles.smallMedia, styles.leftMedia]}
              resizeMode='center'
            >
              <Image source={{ uri: firstImage?.url }} style={[styles.smallMedia, styles.leftMedia]} />
            </ImageBackground>
          ) : null}
          <ImageBackground
            source={EmptyImage}
            resizeMode='center'
            imageStyle={{ opacity: 0.5 }}
            style={[styles.smallMedia, thirdImage ? styles.leftMedia : styles.rightMedia]}
          >
            <Image
              source={{ uri: secondImage?.url }}
              style={[styles.smallMedia, thirdImage ? styles.leftMedia : styles.rightMedia]}
            />
          </ImageBackground>
          {moreImages ? (
            <ImageBackground
              style={[styles.smallMedia]}
              imageStyle={{ opacity: 0.5 }}
              source={EmptyImage}
              resizeMode='center'
            >
              <ImageBackground
                style={[styles.smallMedia, styles.opacityImage]}
                imageStyle={{ opacity: 0.5 }}
                source={{ uri: thirdImage?.url }}
              >
                <View style={styles.coverTextContainer}>
                  <Text style={styles.coverText}>+ {moreImagesCount}</Text>
                </View>
              </ImageBackground>
            </ImageBackground>
          ) : thirdImage ? (
            <ImageBackground
              imageStyle={{ opacity: 0.5 }}
              source={EmptyImage}
              style={[styles.smallMedia, styles.rightMedia]}
              resizeMode='center'
            >
              <Image source={{ uri: thirdImage?.url }} style={[styles.smallMedia, styles.rightMedia]} />
            </ImageBackground>
          ) : null}
        </View>
      )}
    </View>
  )
}

export default Index
