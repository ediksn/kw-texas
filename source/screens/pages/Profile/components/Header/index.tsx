import React from 'react'
import { Image, Text, View } from 'react-native'
import GroupsUnfilled from 'assets/images/groups-unfilled.png'
import { ProfileInterface } from '~/interfaces/usrInterface'
import { styles } from './styles'
import Avatar from '~/components/Avatar'

interface Props {
  userData: ProfileInterface
}

const Header = ({ userData }: Props) => {
  return (
    <View style={styles.container}>
      <Avatar uri={userData?.photo} avatarStyle={styles.avatar} avatarDefaultStyle={styles.avatar} forceInitials />
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
