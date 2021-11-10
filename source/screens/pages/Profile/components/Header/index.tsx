import React from 'react'
import { Image, Text, View } from 'react-native'
import { ProfileInterface } from '~/interfaces/usrInterface'

import { styles } from './styles'

interface Props {
  userData: ProfileInterface
}

const Header = ({ userData }: Props) => {
  console.log(userData)
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        {userData?.userProfile.photo ? (
          <Image style={styles.photo} resizeMode='cover' resizeMethod='resize' source={{ uri: userData?.photo }} />
        ) : (
          <Text style={styles.avatarText}>{`${userData?.userProfile.first_name?.substr(
            0,
            1
          )}${userData?.userProfile.last_name?.substr(0, 1)}`}</Text>
        )}
      </View>
      <Text style={styles.name} numberOfLines={2}>
        {userData?.userProfile.first_name} {userData?.userProfile.last_name}
      </Text>
      <Text style={styles.subtitle}>{userData.isDefault ? userData.name : userData.role}</Text>
    </View>
  )
}

export default Header
