import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './styles'
import { PromptVideoInterface } from '~/interfaces/promptVideoInterface'

const PromptBox = ({ item: PromptVideoInterface }) => (
  <View style={styles.boxView}>
    <Image style={styles.avatar} resizeMode='contain' source={{ uri: item.person.imageUrl }} />
    <View style={styles.promptDesc}>
      <Text style={styles.promptName}>{`${item.person.firstName} ${item.person.lastName}`}</Text>
      <Text style={styles.promptRole}>{item.roles[0].name}</Text>
    </View>
    <Text style={styles.topicTitle}>{item.topics[0].title}</Text>
  </View>
)

export default PromptBox
