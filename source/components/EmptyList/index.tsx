import React from 'react'
import { useTranslation } from 'react-i18next'
import { Image, Text, View, ImageStyle } from 'react-native'
import { styles } from './styles'

interface Props {
  title: string
  icon: any
  iconStyle: ImageStyle
}

const EmptyList = ({ title, icon, iconStyle }: Props) => {
  const { t } = useTranslation()

  return (
    <View style={styles.container}>
      <Image source={icon} style={iconStyle} />
      <Text style={styles.text}>{t(title)}</Text>
    </View>
  )
}

export default EmptyList
