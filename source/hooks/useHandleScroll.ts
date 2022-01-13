import { useState, useRef, useCallback } from 'react'
import { NativeSyntheticEvent, NativeScrollEvent, LayoutAnimation } from 'react-native'

const useHandleScroll = () => {
  const [scrolled, setScrolled] = useState(true)

  const scrollOffset = useRef(0)

  const handleScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>, scrolling: boolean) => {
      const CustomLayoutLinear = {
        duration: 200,
        create: { type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity },
        update: { type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity },
        delete: { type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity }
      }
      const currentOffset = event.nativeEvent.contentOffset.y
      let direction = 'up'
      if (scrollOffset.current > currentOffset) {
        if (scrolling) {
          direction = 'up'
        }
      } else if (scrollOffset.current < currentOffset) {
        if (scrolling) {
          direction = 'down'
        }
      }

      const isActionButtonVisible = direction === 'up' && currentOffset < 30
      if (isActionButtonVisible !== scrolled) {
        LayoutAnimation.configureNext(CustomLayoutLinear)
        setScrolled(isActionButtonVisible)
      }
      scrollOffset.current = currentOffset
    },
    [scrolled]
  )

  return { handleScroll, scrolled }
}

export default useHandleScroll
