import React, { memo, useMemo } from 'react'
import { View, ViewStyle } from 'react-native'
import ClipLoader from 'react-spinners/ClipLoader'
import { styles } from './styles'

export interface Props {
  isLoading?: boolean
  message?: string
  color?: string
  size?: number
  styleView?: ViewStyle
}

const Spinner = ({ isLoading = false, message, color = '#ce011f', size = 150, styleView }: Props) => {
  const Message = () => useMemo(() => <>{message && <View style={styles.messageView}>{message}</View>}</>, [message])

  return (
    <>
      {isLoading && (
        <View style={[styles.containerView, styleView]}>
          <ClipLoader color={color} loading={isLoading} size={size} />
          <Message />
        </View>
      )}
    </>
  )
}

export default memo(Spinner)
