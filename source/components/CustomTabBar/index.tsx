import React, { memo } from 'react'
import { View, Image, ImageStyle } from 'react-native'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import { useDispatch } from 'react-redux'
import Icomoon from '~/selection.json'
import { toastActions } from '~/store/actions'
import { styles } from './styles'

const Icon = createIconSetFromIcoMoon(Icomoon)

interface Props {
  focused: boolean
  name?: string
  PNG?: any
  imageURL?: string
  imageStyle?: ImageStyle
}
const CustomTabBar = ({ name, focused, PNG, imageURL, imageStyle }: Props) => {
  const dispatch = useDispatch()
  const onLayout = (event: any) => dispatch(toastActions.storeMenuHeight(event.nativeEvent.layout.height))

  return (
    <View onLayout={onLayout} style={styles(focused).container}>
      <View style={styles(focused).selectedBar} />
      {name ? (
        <Icon name={name} size={23} style={styles(focused).icon} />
      ) : PNG ? (
        <Image style={[imageStyle]} resizeMode='contain' resizeMethod='auto' source={PNG} />
      ) : (
        <Image style={[imageStyle]} resizeMode='cover' resizeMethod='resize' source={{ uri: imageURL }} />
      )}
    </View>
  )
}

export default memo(CustomTabBar)
