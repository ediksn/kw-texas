import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import mockPost from './__mocks__/mockPost'
import avatarMock from './__mocks__/avatarNinaRoyals.png'
import threeDotsMock from './__mocks__/threeDots.png'

const Card = () => {
  const { author, date } = mockPost

  const Header = () => (
    <View style={styles.header}>
      <Image style={styles.avatar} resizeMode='center' source={avatarMock} />
      <View style={styles.info}>
        <Text style={styles.name}>{author.name.toUpperCase()}</Text>
        <Text>{date}</Text>
      </View>
      <TouchableOpacity onPress={() => null}>
        <Image style={styles.threeDots} resizeMode='center' source={threeDotsMock} />
      </TouchableOpacity>
    </View>
  )

  return (
    <View style={styles.container}>
      <Header />
    </View>
  )
}

export default Card
