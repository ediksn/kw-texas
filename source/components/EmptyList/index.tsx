import React from 'react'
import { useTranslation } from 'react-i18next'
import { Image, Text, View } from 'react-native'
import { styles } from './styles'

interface Props {
  icon: any
  title: string
  subTitle?: string
  children?: any
}

const EmptyList = ({ icon, title, subTitle, children }: Props) => {
  const { t } = useTranslation()

  return (
    <View style={styles.container}>
      <View style={styles.containerTitles}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.title}>{t(title)}</Text>
        {subTitle && <Text style={styles.subTitle}>{t(subTitle)}</Text>}
      </View>

      {children}
    </View>
  )
}

export default EmptyList
