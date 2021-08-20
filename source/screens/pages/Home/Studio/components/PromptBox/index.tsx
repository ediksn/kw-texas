import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './styles'

const PromptBox = () => (
  <View style={styles.boxView}>
    <Image
      style={styles.avatar}
      resizeMode='contain'
      source={{ uri: 'https://headquarters.kw.com/wp-content/uploads/2019/12/Jason_A.png' }}
    />
    <View style={styles.promptDesc}>
      <Text style={styles.promptName}>Josan Abrams</Text>
      <Text style={styles.promptRole}>Working With Buyers</Text>
    </View>
    <Text style={styles.topicTitle}>Lead Generation, Working With Sellers</Text>
  </View>
)

export default PromptBox
