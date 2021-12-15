import React, { memo } from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import Cross from 'assets/images/cross.png'
import { TEST_IDS } from '~/constants'
import { UploadImageInterface } from '~/interfaces/uploadImageInterface'
import { styles } from './styles'

interface Props {
  images: UploadImageInterface[]
  handleDelete: (image: UploadImageInterface) => void
}

const ImageBox = memo(({ images, handleDelete }: Props) => (
  <View style={styles.container}>
    {images.map((image: UploadImageInterface, index: number) => {
      if (!image) {
        return null
      }
      return (
        <View key={image?.fileName || image?.id}>
          <Image
            testID={TEST_IDS.IMAGE_PICKER_PREVIEW.IMAGE_ID + index}
            source={{ uri: image.uri || image.url }}
            style={styles.image}
          />
          <TouchableOpacity style={styles.crossContainer} onPress={() => handleDelete(image)}>
            <Image source={Cross} style={styles.cross} />
          </TouchableOpacity>
        </View>
      )
    })}
  </View>
))

export default ImageBox
