import React, { useEffect, useRef, useState } from 'react'
import { View, Text, Animated, Easing, Image } from 'react-native'
import { useDispatch } from 'react-redux'
import { verticalScale } from 'react-native-size-matters'
import ExtraDimensions from 'react-native-extra-dimensions-android'
import { useTranslation } from 'react-i18next'
import { toastActions } from '~/store/actions'
import { TOAST_TYPE } from './constants'
import styles from './styles'
import { IS_IOS } from '../../constants/statis'
import { ToastProps } from '../../interfaces/toastInterface'
import toastSuccess from '~/../assets/images/toastSuccess.png'
import toastError from '~/../assets/images/toastError.png'
import { TEST_IDS } from '~/constants'

const Toast = ({ open, title, type, menuHeight }: ToastProps) => {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const softNavBarHeight = (!IS_IOS && ExtraDimensions.getSoftMenuBarHeight()) || 0
  const animatedTranslation = useRef(new Animated.Value(60)).current
  const androidOffset = softNavBarHeight > 0 ? softNavBarHeight / 2 : 0
  const iOSOffset = 30
  const bottomOffset = !IS_IOS ? androidOffset : iOSOffset
  const translationValue = verticalScale(menuHeight + bottomOffset)
  const [transitioning, setTransitioning] = useState(false)

  const TOAST_ICONS = {
    [TOAST_TYPE.SUCCESS]: (
      <Image testID={TEST_IDS.TOAST.ICON_ID} style={styles.icon} resizeMode='contain' source={toastSuccess} />
    ),
    [TOAST_TYPE.ERROR]: (
      <Image testID={TEST_IDS.TOAST.ICON_ID} style={styles.icon} resizeMode='contain' source={toastError} />
    )
  }

  const handleClose = () => {
    setTransitioning(false)
    dispatch(toastActions.hideToast())
  }

  const animateToastOut = () => {
    Animated.timing(animatedTranslation, {
      toValue: 60,
      duration: 200,
      easing: Easing.in(Easing.ease),
      useNativeDriver: true
    }).start(handleClose)
  }

  useEffect(() => {
    const unsubscribe = () => {
      if (open) {
        animateToastOut()
      }
    }
    return unsubscribe
  }, [open])

  const animateToastIn = () => {
    Animated.timing(animatedTranslation, {
      toValue: -translationValue,
      duration: 200,
      easing: Easing.in(Easing.ease),
      useNativeDriver: true
    }).start(() => {
      setTimeout(animateToastOut, 3000)
    })
  }

  useEffect(() => {
    if (open) {
      setTransitioning(true)
      animateToastIn()
    }
  }, [open])

  const ToastIcon = () => TOAST_ICONS[type || TOAST_TYPE.SUCCESS]

  const ToastComponent = (
    <View style={styles.centeredView} testID={TEST_IDS.GENERAL_COMPONENTS.TOAST_ID}>
      <Animated.View style={[styles.container, { transform: [{ translateY: animatedTranslation }] }]}>
        <ToastIcon />

        <Text style={styles.title} testID={TEST_IDS.TOAST.TITLE_ID}>
          {t(title)}
        </Text>
      </Animated.View>
    </View>
  )

  return !IS_IOS ? ToastComponent : transitioning ? ToastComponent : null
}

export default Toast
