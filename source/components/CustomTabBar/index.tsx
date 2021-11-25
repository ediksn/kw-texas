import React, { memo } from 'react'
import { View, Image, ImageStyle } from 'react-native'
import { useDispatch } from 'react-redux'
import { toastActions } from '~/store/actions'
import Avatar from '../Avatar'
import { styles } from './styles'

interface Props {
  focused: boolean
  PNG?: any
  imageURL?: string
  imageStyle?: ImageStyle
}
const CustomTabBar = ({ focused, PNG, imageURL, imageStyle }: Props) => {
  const dispatch = useDispatch()
  const onLayout = (event: any) => dispatch(toastActions.storeMenuHeight(event.nativeEvent.layout.height))

  return (
    <View onLayout={onLayout} style={styles(focused).container}>
      <View style={styles(focused).selectedBar} />
      {PNG ? (
        <Image style={[imageStyle]} resizeMode='contain' resizeMethod='auto' source={PNG} />
      ) : (
        <Avatar
          uri={imageURL}
          avatarStyle={imageStyle}
          avatarDefaultStyle={imageStyle}
          initialsViewStyle={styles(focused).initialsView}
          initialsStyle={styles(focused).initialsStyle}
        />
      )}
    </View>
  )
}

export default memo(CustomTabBar)
