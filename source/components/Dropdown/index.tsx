import React, { memo, useCallback, useRef, useEffect, useState } from 'react'
import { Animated, FlatList, Keyboard, Modal, Text, TouchableWithoutFeedback, View } from 'react-native'
import getAccessoryMenuPopUpPosition from './utils'
import BaseButton from './components/BaseButton'
import { Icon } from '~/components'
import { styles } from './styles'
import { useDeviceHeight } from '../../hooks/settings'
import { OptionInterface } from '~/interfaces/groupInterface'
import { theme } from '~/constants'

const keyExtractor = (item: any, index: any) => {
  return item.key || index
}

interface Props {
  buttonRef: any
  isVisible: boolean
  onRequestClose: () => void
  onSelectOption: (item: OptionInterface) => void
  options: OptionInterface[]
  selectedOption: any
  width?: number
  center?: boolean
  right?: number
  top?: number
  dropdonwHeader?: any
}

const Dropdown = memo(
  ({
    buttonRef = null,
    isVisible = false,
    onRequestClose = () => {},
    onSelectOption = () => {},
    options = [],
    selectedOption = null,
    width,
    center = false,
    right,
    top,
    dropdonwHeader = null
  }: Props) => {
    const ANIMATION_IN_DURATION = 150
    const ANIMATION_OUT_DURATION = 100
    const INITIAL_OPACITY = 0
    const INITIAL_SCALE = 0.75
    const SCREEN_HEIGHT = useDeviceHeight()
    const [currentIsVisible, setCurrentIsVisible] = useState(isVisible)
    const [dropdownPosXY, setDropdownPosXY] = useState([0, -SCREEN_HEIGHT])
    const contextRef = useRef<any>()
    const animationOpacity = useRef(new Animated.Value(INITIAL_OPACITY))
    const animationScale = useRef(new Animated.Value(INITIAL_SCALE))

    const containerPaddingVertical = 4
    const itemHeight = 40
    const getContainerMaxHeight = (optionsNumber: number) => {
      const containerMaxHeight = 248
      return containerMaxHeight < optionsNumber * itemHeight
        ? containerMaxHeight + (itemHeight + containerPaddingVertical) / 2
        : containerMaxHeight
    }

    const handleRunAnimationShow = useCallback(() => {
      animationOpacity.current.setValue(INITIAL_OPACITY)
      animationScale.current.setValue(INITIAL_SCALE)

      Animated.parallel([
        Animated.timing(animationOpacity.current, {
          duration: ANIMATION_IN_DURATION,
          toValue: 1,
          useNativeDriver: false
        }),
        Animated.timing(animationScale.current, {
          duration: ANIMATION_IN_DURATION,
          toValue: 1,
          useNativeDriver: false
        })
      ]).start()
    }, [])

    const handleRunAnimationHide = useCallback(() => {
      Animated.timing(animationOpacity.current, {
        duration: ANIMATION_OUT_DURATION,
        toValue: INITIAL_OPACITY,
        useNativeDriver: false
      }).start(onRequestClose)
    }, [onRequestClose])

    useEffect(() => {
      Keyboard.dismiss()
      setCurrentIsVisible(isVisible)

      if (!isVisible) {
        setDropdownPosXY([0, -SCREEN_HEIGHT])
        return
      }

      buttonRef?.current?.measure((...buttonCoords: any[]) => {
        contextRef?.current?.measure((...contextCoords: any[]) => {
          const scale = animationScale?.current?.__getValue()
          const positionXY = getAccessoryMenuPopUpPosition({ buttonCoords, contextCoords, scale, right, top })
          setDropdownPosXY(positionXY)
          handleRunAnimationShow()
        })
      })
    }, [handleRunAnimationShow, buttonRef, isVisible, currentIsVisible])

    const handleSelect = useCallback(
      item => {
        return () => {
          onSelectOption(item)
          handleRunAnimationHide()
          if (item.handleOption) item.handleOption()
        }
      },
      [handleRunAnimationHide, onSelectOption]
    )

    const handleRenderItem = useCallback(
      ({ item }) => {
        return (
          <BaseButton
            style={[styles.item, { height: itemHeight }, item.separated && styles.itemSeparated]}
            onPress={handleSelect(item)}
          >
            <>
              <Text
                allowFontScaling={false}
                style={[
                  styles.title,
                  item.color && { color: item.color, fontFamily: item.isTitle ? 'Mulish-Bold' : 'Mulish-Regular' }
                ]}
              >
                {item.title}
              </Text>

              {!selectedOption?.handleOption && selectedOption?.key === item.key && (
                <Icon name='check-icon' size={20} color={theme.darkGreenColor} />
              )}
            </>
          </BaseButton>
        )
      },
      [selectedOption, handleSelect]
    )

    return (
      <Modal visible={isVisible} transparent animationType='none' onRequestClose={onRequestClose}>
        <View style={styles.modal}>
          <TouchableWithoutFeedback onPress={onRequestClose}>
            <View style={styles.backdrop} />
          </TouchableWithoutFeedback>
          <Animated.View
            ref={contextRef}
            style={[
              styles.context,
              {
                width,
                top: dropdownPosXY[1],
                paddingVertical: containerPaddingVertical,
                opacity: animationOpacity.current,
                transform: [{ scale: animationScale.current }],
                maxHeight: getContainerMaxHeight(options.length || 0)
              },
              !center && { right: dropdownPosXY[0] }
            ]}
          >
            <FlatList
              data={options}
              keyExtractor={keyExtractor}
              ListHeaderComponent={dropdonwHeader}
              renderItem={handleRenderItem}
              persistentScrollbar
            />
          </Animated.View>
        </View>
      </Modal>
    )
  }
)

export default Dropdown
