import React from 'react'
import { useTranslation } from 'react-i18next'
import { View, Text } from 'react-native'
import { styles } from './styles'

interface Props {
  title: string
  description: string
}

const HeaderTitleBox = ({ title, description }: Props) => {
  const { t } = useTranslation()

  return (
    <View>
      <Text style={styles.title}>{t(title)}</Text>

      <Text style={styles.description}>{t(description)}</Text>
    </View>
  )
}

export default HeaderTitleBox
