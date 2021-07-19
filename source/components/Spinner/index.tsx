import React, { memo, useMemo } from 'react'
import { Text, View, ViewStyle } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import ClipLoader from 'react-spinners/ClipLoader'
import { styles } from './styles'

interface Props {
  isLoading?: boolean
  message?: string
  color?: string
  size?: number
  styleView?: ViewStyle
}

const Spinner = ({ isLoading = false, message, color = '#ce011f', size = 150, styleView }: Props) => {
  const Message = () =>
    useMemo(
      () => (
        <>
          {message && (
            <View style={styles.messageView}>
              <Text>{message}</Text>
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
          <ClipLoader color={color} loading={isLoading} size={moderateScale(size)} />
          <Message />
        </View>
      )}
    </>
  )
}

export default memo(Spinner)
