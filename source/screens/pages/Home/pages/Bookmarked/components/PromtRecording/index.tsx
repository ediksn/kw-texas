import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { verticalScale } from 'react-native-size-matters'
import { useDispatch, useSelector } from 'react-redux'
import { Video } from '~/components'
import { useDeviceWidth } from '~/hooks'
import { styles } from './styles'
import PromptBox from '../PromptBox'
import { promptVideoActions } from '~/store/actions'
import { RootState } from '~/store/index'
import { PromptVideoInterface } from '~/interfaces/promptVideoInterface'

interface ItemProps {
  item: PromptVideoInterface
  index: number
}

const PromtRecording = () => {
  const DEVICE_WIDTH = useDeviceWidth() - 20
  const [activeSlide, setActiveSlide] = useState(0)
  const dispatch = useDispatch()
  const page: number = useSelector((state: RootState) => state.promptVideos.page)
  const getSoloScripts: PromptVideoInterface[] = useSelector((state: RootState) => state.promptVideos.getSoloScripts)

  useEffect(() => {
    dispatch(promptVideoActions.getPromptVideos(page))
  }, [])

  const renderItem = ({ item, index }: ItemProps) => {
    return (
      <Video indexKey={index} uriPreview={item.person.imageUrl} uri={item.videoUrl} hasActive={index === activeSlide}>
        <PromptBox item={item} />
      </Video>
    )
  }

  return (
    <>
      <Text style={styles.title}>Prompt Recording</Text>
      <View style={styles.promptRecordingView}>
        <Carousel
          data={getSoloScripts}
          renderItem={renderItem}
          onSnapToItem={index => setActiveSlide(index)}
          sliderWidth={DEVICE_WIDTH}
          itemWidth={DEVICE_WIDTH}
        />
      </View>
      <Pagination
        dotsLength={getSoloScripts.length}
        activeDotIndex={activeSlide}
        containerStyle={{ marginTop: verticalScale(-80) }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: '#212529'
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </>
  )
}

export default PromtRecording
