import React, { useCallback } from 'react'
import GroupsUnfilled from 'assets/images/groups-unfilled.png'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { styles } from './styles'
import { getUsrProfileActions } from '~/store/actions'

interface Props {
  index: number
  image: string
  name: string
  rol: string
  isDefault: boolean
  setChangingAccount: (state: boolean) => void
}
const AccountRow = ({ index, image, name, rol, isDefault, setChangingAccount }: Props) => {
  const dispatch = useDispatch()
  const handleOnChangeAccount = useCallback(() => {
    setChangingAccount(true)
    dispatch(getUsrProfileActions.changeAccount(index))
  }, [])
  return (
    <TouchableOpacity style={styles.container} onPress={handleOnChangeAccount}>
      <View style={styles.leftSubcontainer}>
        <Image source={{ uri: image }} style={styles.avatar} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.role}>
            <Image source={GroupsUnfilled} resizeMode='contain' resizeMethod='resize' style={styles.icon} />
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
