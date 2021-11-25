import React, { useState } from 'react'
import { Image, ImageStyle, Text, TextStyle, View, ViewStyle } from 'react-native'
import DefaultAvatar from 'assets/images/default-avatar.png'
import { useSelector } from 'react-redux'
import { styles } from './styles'
import { useGetInitials } from '~/hooks'
import { ProfileInterface } from '~/interfaces/usrInterface'
import { RootState } from '~/store'

interface Props {
  uri?: any
  testID?: string
  avatarStyle?: ImageStyle
  avatarDefaultStyle?: ImageStyle
  initialsViewStyle?: ViewStyle
  initialsStyle?: TextStyle
  forceInitials?: boolean
}

const Avatar = ({
  uri,
  testID,
  avatarStyle,
  avatarDefaultStyle,
  initialsViewStyle,
  initialsStyle,
  forceInitials = false
}: Props) => {
  const profiles: ProfileInterface[] = useSelector((state: RootState) => state.usrProfile.profiles)
  const activeAccount: number = useSelector((state: RootState) => state.usrProfile.activeAccount)
  const currentProfile = (profiles && !!profiles.length && profiles[activeAccount]) || null
  const [imageError, setImageError] = useState(false)
  const uriOk = typeof uri !== 'undefined' && uri !== ''
  const imageOk = !imageError && uriOk

  return imageOk ? (
    <Image
      testID={testID}
      resizeMode='cover'
      source={{ uri }}
      style={[styles.avatar, avatarStyle]}
      onError={() => !imageError && setImageError(true)}
    />
  ) : !imageOk && forceInitials ? (
    <View style={[styles.initialsView, initialsViewStyle]}>
      <Text style={[styles.initials, initialsStyle]}>{useGetInitials(currentProfile?.name)}</Text>
    </View>
  ) : (
    <Image
      testID={testID}
      resizeMode='cover'
      source={DefaultAvatar}
      style={[styles.avatarDefault, avatarDefaultStyle]}
    />
  )
}

export default Avatar
