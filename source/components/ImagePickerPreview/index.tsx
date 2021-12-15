import React, { useEffect, useRef } from 'react'
import { ScrollView, View } from 'react-native'
import { UploadImageInterface } from '~/interfaces/uploadImageInterface'
import { styles } from './styles'
import { TEST_IDS } from '~/constants'
import ImageBox from '../ImageBox'

interface Props {
  images: UploadImageInterface[]
  handleDelete: (image: UploadImageInterface) => void
}

const ImagePickerPreview = ({ images, handleDelete }: Props) => {
  const scrollViewRef = useRef<ScrollView>(null)

  useEffect(() => {
    scrollViewRef?.current?.scrollToEnd()
  }, [images])

  return (
    <View>
      <ScrollView
        ref={scrollViewRef}
        testID={TEST_IDS.GENERAL_COMPONENTS.IMAGE_PICKER_PREVIEW_ID}
        horizontal
        style={styles.container}
      >
        <ImageBox images={images} handleDelete={handleDelete} />
      </ScrollView>
    </View>
  )
}

export default ImagePickerPreview
