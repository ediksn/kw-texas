import React from 'react'
import { Image, Text, View } from 'react-native'

import { styles } from './styles'

interface Props {
  data: any
}

const Header = ({ data }: Props) => {
  const userData = data[0]

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        {userData?.photo_url ? (
          <Image style={styles.photo} resizeMode='cover' resizeMethod='resize' source={{ uri: userData?.photo_url }} />
        ) : (
          <Text style={styles.avatarText}>{`${userData?.first_name?.substr(0, 1)}${userData?.last_name?.substr(
            0,
            1
          )}`}</Text>
        )}
      </View>
      <Text style={styles.name} numberOfLines={2}>
        {userData?.name}
      </Text>
    </View>
  )
}

export default Header
