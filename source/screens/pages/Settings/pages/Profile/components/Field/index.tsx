/** @format */

import React from 'react'
import { Text, View } from 'react-native'

import { styles } from './styles'

interface Props {
  title: string
  value: any
  arr: any
}

const Field = ({ title, value, arr }: Props) => {
  if (value) {
    return (
      <View style={styles.field}>
        <Text style={styles.subtitle}>{title}</Text>
        <Text style={styles.description}>{value}</Text>
      </View>
    )
  }

  if (arr) {
    return (
      <View style={styles.field}>
        <Text style={styles.subtitle}>{title}</Text>

        {arr.map((role: any) => (
          <>
            <Text key={role} style={styles.description}>
              {role}
            </Text>
          </>
        ))}
      </View>
    )
  }

  return null
}

export default Field
