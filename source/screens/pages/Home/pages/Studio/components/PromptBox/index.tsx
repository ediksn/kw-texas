import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './styles'

const PromptBox = ({ item }: any) => {
  const { person, roles, topics } = item
  return (
    <View style={styles.boxView}>
      <Image style={styles.avatar} resizeMode='contain' source={{ uri: person.imageUrl }} />
      <View style={styles.promptDesc}>
        <Text style={styles.promptName}>{`${person.firstName} ${person.lastName}`}</Text>
        <Text style={styles.promptRole}>{roles[0].name}</Text>
      </View>
      <Text style={styles.topicTitle}>{topics[0].title}</Text>
    </View>
  )
}
export default PromptBox
