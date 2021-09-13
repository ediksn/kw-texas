import React from 'react'
import { Image, Text, View } from 'react-native'

import { styles } from './styles'

interface Props {
  data: any
}

const Header = ({ data }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Image style={styles.photo} resizeMode='cover' resizeMethod='resize' source={{ uri: data[0]?.photo_url }} />
      </View>
      <Text style={styles.name} numberOfLines={2}>
        {data[0]?.name}
      </Text>
    </View>
  )
}

export default Header
