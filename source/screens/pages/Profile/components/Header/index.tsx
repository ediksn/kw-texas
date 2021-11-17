import React from 'react'
import { Image, Text, View } from 'react-native'
import GroupsUnfilled from 'assets/images/groups-unfilled.png'
import DefaultAvatar from 'assets/images/default-avatar.png'
import { ProfileInterface } from '~/interfaces/usrInterface'
import { styles } from './styles'

interface Props {
  userData: ProfileInterface
}

const Header = ({ userData }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        {userData?.photo ? (
          <Image style={styles.photo} resizeMode='cover' resizeMethod='resize' source={{ uri: userData?.photo }} />
        ) : (
          <Image style={styles.defaultAvatar} resizeMode='contain' resizeMethod='resize' source={DefaultAvatar} />
        )}
      </View>
      <Text style={styles.name} numberOfLines={2}>
        {userData.name}
      </Text>
      <View style={styles.role2}>
        {!userData.isPersonal && (
          <Image source={GroupsUnfilled} resizeMode='contain' resizeMethod='resize' style={styles.icon2} />
        )}

        <Text style={styles.subtitle}>{userData.isPersonal ? 'Personal' : userData.role}</Text>
      </View>
    </View>
  )
}

export default Header
