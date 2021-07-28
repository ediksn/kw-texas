import React from 'react'
import { ListRenderItem, SafeAreaView, ViewStyle } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { styles } from './styles'

interface Props {
  renderItem: ListRenderItem<any>
  data: any[]
  keyExtractor: (item: any, index: number) => string
  style?: ViewStyle
}
const VideoList = ({ renderItem, data, keyExtractor, style }: Props) => {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <FlatList renderItem={renderItem} data={data} keyExtractor={keyExtractor} />
    </SafeAreaView>
  )
}

export default VideoList
