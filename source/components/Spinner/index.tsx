import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
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
  const Message = () => {
    const { t } = useTranslation()
    return (
      <>
        {message && (
          <View style={styles.messageView}>
            <Text style={styles.messageText}>{t(message)}</Text>
          </View>
        )}
      </>
    )
  }

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
