import React, { useCallback } from 'react'
import GroupsUnfilled from 'assets/images/groups-unfilled.png'
import { Image, Text, TouchableOpacity, View, ImageStyle } from 'react-native'
import { useDispatch } from 'react-redux'
import { styles } from './styles'
import { getUsrProfileActions } from '~/store/actions'
import Avatar from '~/components/Avatar'

interface Props {
  index: number
  image: any
  name: string
  rol: string
  isDefault: boolean
  setChangingAccount: (state: boolean) => void
  containerImage: any
  styleImage: ImageStyle
}
const AccountRow = ({ index, image, name, rol, isDefault, setChangingAccount, containerImage, styleImage }: Props) => {
  const dispatch = useDispatch()
  const handleOnChangeAccount = useCallback(() => {
    setChangingAccount(true)
    dispatch(getUsrProfileActions.changeAccount(index))
  }, [])

  return (
    <TouchableOpacity style={styles.container} onPress={handleOnChangeAccount}>
      <View style={styles.leftSubcontainer}>
        <View style={containerImage}>
          <Avatar
            uri={image}
            avatarStyle={styleImage}
            avatarDefaultStyle={styleImage}
            initialsViewStyle={styles.initials}
            forceInitials
          />
        </View>
        <View>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.role}>
            {isDefault ? (
              <Image source={GroupsUnfilled} resizeMode='contain' resizeMethod='resize' style={styles.icon} />
            ) : null}

            <Text style={styles.roleText}>{rol}</Text>
          </View>
        </View>
      </View>
      {isDefault && (
        <View style={styles.defaultTag}>
          <Text style={styles.defaultTagText}>Default</Text>
        </View>
      )}
    </TouchableOpacity>
  )
}

export default AccountRow
