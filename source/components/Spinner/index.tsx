import React, { memo, useMemo } from 'react'
import { Text, View, ViewStyle, ActivityIndicator } from 'react-native'
import { styles } from './styles'

interface Props {
  isLoading?: boolean
  message?: string
  color?: string
  size?: number
  styleView?: ViewStyle
}

const Spinner = ({ isLoading = false, message, color = '#ce011f', size = 70, styleView }: Props) => {
  const Message = () =>
    useMemo(
      () => (
        <>
          {message && (
            <View style={styles.messageView}>
              <Text style={styles.messageText}>{message}</Text>
            </View>
          )}
        </>
      ),
      [message]
    )

  return (
    <>
      {isLoading && (
        <View style={[styles.containerView, styleView]}>
          <ActivityIndicator size={size} color={color} />
          <Message />
        </View>
      )}
    </>
  )
}

export default memo(Spinner)
