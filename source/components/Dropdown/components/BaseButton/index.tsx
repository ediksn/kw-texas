import React, { memo } from 'react'
import { TouchableOpacity, ViewStyle } from 'react-native'
import { useButtonPressDecorator } from '~/hooks'

interface Props {
  onPress?: () => void
  disabled?: boolean
  children?: any
  isLoading?: boolean
  style: ViewStyle[]
}

const BaseButton = memo(({ onPress = () => {}, disabled, children, isLoading, style }: Props) => {
  const { handlePress, isLoaderVisible } = useButtonPressDecorator(onPress, isLoading)

  return (
    <TouchableOpacity onPress={handlePress} disabled={disabled || isLoaderVisible} style={style}>
      {children}
    </TouchableOpacity>
  )
})

export default BaseButton
