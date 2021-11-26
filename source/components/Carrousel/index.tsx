import React from 'react'
import { FlatList, FlatListProps, Image, ImageProps, ListRenderItem, Text, View } from 'react-native'
import { styles } from './styles'

interface Props extends FlatListProps<any> {
  title: string
  titleIcon: ImageProps
  testID: string
  renderItem: ListRenderItem<any>
  data: any
}

const EventsCarrousel = ({ title, titleIcon, testID, ...props }: Props) => {
  return (
    <>
      <View style={styles.titleStyle} testID={testID}>
        {titleIcon && <Image source={titleIcon} style={styles.icon} />}
        <Text style={styles.text}>{title}</Text>
      </View>
      <FlatList {...props} contentContainerStyle={styles.listContainer} />
    </>
  )
}

export default EventsCarrousel
