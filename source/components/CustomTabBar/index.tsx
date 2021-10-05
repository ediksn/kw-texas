import React, { memo } from 'react'
import { View, Image, ImageSourcePropType } from 'react-native'
import { styles } from './styles'

interface Props {
  focused: boolean
  focusedIcon?: ImageSourcePropType
  unfocusedIcon?: ImageSourcePropType
  imageURL?: string
}
const CustomTabBar = ({ focused, focusedIcon, unfocusedIcon, imageURL }: Props) => {
  const Icon = () => {
    if (focusedIcon && unfocusedIcon)
      return (
        <>
          {focused ? (
            <Image source={focusedIcon} style={styles(focused).icon} />
          ) : (
            <Image source={unfocusedIcon} style={styles(focused).icon} />
          )}
        </>
      )
    return <></>
  }
  return (
    <View style={styles(focused).container}>
      <View style={styles(focused).selectedBar} />
      {imageURL ? (
        <Image style={styles(focused).photo} resizeMode='cover' resizeMethod='resize' source={{ uri: imageURL }} />
      ) : (
        <Icon />
      )}
    </View>
  )
}

export default memo(CustomTabBar)
