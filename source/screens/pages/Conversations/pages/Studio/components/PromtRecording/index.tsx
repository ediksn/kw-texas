import React, { useState, useEffect, useRef } from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { verticalScale } from 'react-native-size-matters'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
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

interface Props {
  activeSlideSelected: number
}

const PromtRecording = ({ activeSlideSelected }: Props) => {
  const { t } = useTranslation()
  const DEVICE_WIDTH = useDeviceWidth() - 20
  const [activeSlide, setActiveSlide] = useState(0)
  const dispatch = useDispatch()
  const page: number = useSelector((state: RootState) => state.promptVideos.page)
  const getSoloScripts: PromptVideoInterface[] = useSelector((state: RootState) => state.promptVideos.getSoloScripts)
  const carouselRef = useRef<Carousel<any>>()

  useEffect(() => {
    dispatch(promptVideoActions.getPromptVideos(page))
  }, [])

  useEffect(() => {
    carouselRef.current?.snapToItem(activeSlideSelected, false)
    setActiveSlide(activeSlideSelected)
  }, [carouselRef, activeSlideSelected])

  const renderItem = ({ item, index }: ItemProps) => {
    return (
      <>
        <Video indexKey={index} uriPreview={item.person.imageUrl} uri={item.videoUrl} />
        <PromptBox item={item} />
      </>
    )
  }

  return (
    <SafeAreaView>
      <Text style={styles.title}>{t('components_Conversations_Prompt_Recording')}</Text>
      <View style={styles.promptRecordingView}>
        <Carousel
          ref={carouselRef}
          data={getSoloScripts}
          renderItem={renderItem}
          onSnapToItem={(index: any) => setActiveSlide(index)}
          sliderWidth={DEVICE_WIDTH}
          itemWidth={DEVICE_WIDTH}
          removeClippedSubviews={false}
        />
        <Pagination
          dotsLength={getSoloScripts.length}
          activeDotIndex={activeSlide}
          containerStyle={{ position: 'absolute', marginTop: verticalScale(290) }}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: '#212529'
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
    </SafeAreaView>
  )
}

export default PromtRecording
