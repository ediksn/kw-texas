import React, { memo, useMemo } from 'react'
import { View } from 'react-native'
import ClipLoader from 'react-spinners/ClipLoader'
import { styles } from './styles'

export interface Props {
  isLoading: boolean
  message: string
  color: string
  size: number
  styleView: object
  style: object
}

export const Spinner = memo(
  ({ isLoading = false, message, color = '#ce011f', size = 150, styleView, style }: Props) => {
    const Message = useMemo(() => message && <View style={styles.messageView}>{message}</View>, [message])

    return (
      isLoading && (
        <View style={[styles.containerView, styleView]}>
          <ClipLoader color={color} loading={isLoading} css={style} size={size} />
          <Message />
        </View>
      )
    )
  }
)
