import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'

interface Props {
  title: string
  description: string
}

const HeaderTitleBox = ({ title, description }: Props) => (
  <View>
    <Text style={styles.title}>{title}</Text>

    <Text style={styles.description}>{description}</Text>
  </View>
)

export default HeaderTitleBox
