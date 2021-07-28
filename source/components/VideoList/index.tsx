import React from 'react'
import { SafeAreaView } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { styles } from './styles'

interface Props {
  renderItem: any
  data: []
}
const VideoList = ({ renderItem, data }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList renderItem={renderItem} data={data} />
    </SafeAreaView>
  )
}

export default VideoList
