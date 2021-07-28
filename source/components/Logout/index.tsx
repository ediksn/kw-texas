/** @format */

import React from 'react'
import { Text, TouchableHighlight, View } from 'react-native'

import { styles } from './styles'

const Logout = () => {
  return (
    <View style={styles.container}>
      <TouchableHighlight>
        <Text style={styles.text}>Log Out</Text>
      </TouchableHighlight>
    </View>
  )
}

export default Logout
