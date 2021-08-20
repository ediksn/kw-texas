import React, { useState } from 'react'
import { Text, View } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { verticalScale } from 'react-native-size-matters'
import { Video } from '~/components'
import { useDeviceWidth } from '~/hooks'
import { styles } from './styles'
import PromptBox from '../PromptBox'

interface ItemProps {
  index: number
}

const entries = [{ title: 'Video' }, { title: 'Video' }, { title: 'Video' }]

const renderItem = ({ index }: ItemProps) => (
  <Video indexKey={index} uri='https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'>
    <PromptBox />
  </Video>
)

const PromtRecording = () => {
  const DEVICE_WIDTH = useDeviceWidth() - 20
  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <>
      <Text style={styles.title}>Prompt Recording</Text>
      <View style={styles.promptRecordingView}>
        <Carousel
          data={entries}
          renderItem={renderItem}
          onSnapToItem={index => setActiveSlide(index)}
          sliderWidth={DEVICE_WIDTH}
          itemWidth={DEVICE_WIDTH - 50}
        />
      </View>
      <Pagination
        dotsLength={entries.length}
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
