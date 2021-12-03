import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Text, View, ViewStyle, ActivityIndicator } from 'react-native'
import { styles } from './styles'

interface Props {
  isLoading?: boolean
  message?: string
  color?: string
  size?: 'large' | 'small'
  styleView?: ViewStyle
  children?: object
}

const Spinner = ({ isLoading = false, message, color = '#ce011f', size = 'large', styleView, children }: Props) => {
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
      {isLoading ? (
        <View style={[styles.containerView, styleView]}>
          <ActivityIndicator size={size} color={color} />
          <Message />
        </View>
      ) : (
        children
      )}
    </>
  )
}

export default memo(Spinner)
