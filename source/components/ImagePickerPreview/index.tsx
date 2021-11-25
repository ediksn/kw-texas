import React, { useEffect, useMemo, useRef } from 'react'
import { Image, ScrollView, TouchableOpacity, View } from 'react-native'
import Cross from 'assets/images/cross.png'
import { UploadImageInterface } from '~/interfaces/uploadImageInterface'
import { styles } from './styles'
import { TEST_IDS } from '~/constants'

interface Props {
  images: UploadImageInterface[]
  handleDelete: (image: UploadImageInterface) => void
}

const ImagePickerPreview = ({ images, handleDelete }: Props) => {
  const scrollViewRef = useRef<ScrollView>(null)
  useEffect(() => {
    scrollViewRef?.current?.scrollToEnd()
  }, [images])

  const ImageBox = () =>
    useMemo(
      () => (
        <>
          {images.map((image: UploadImageInterface, index: number) => (
            <View key={image.fileName}>
              <Image
                testID={TEST_IDS.IMAGE_PICKER_PREVIEW.IMAGE_ID + index}
                source={{ uri: image.uri }}
                style={styles.image}
              />
              <TouchableOpacity style={styles.crossContainer} onPress={() => handleDelete(image)}>
                <Image source={Cross} style={styles.cross} />
              </TouchableOpacity>
            </View>
          ))}
        </>
      ),
      [images]
    )
  return (
    <View>
      <ScrollView
        ref={scrollViewRef}
        testID={TEST_IDS.GENERAL_COMPONENTS.IMAGE_PICKER_PREVIEW_ID}
        horizontal
        style={styles.container}
      >
        <ImageBox />
      </ScrollView>
    </View>
  )
}

export default ImagePickerPreview
