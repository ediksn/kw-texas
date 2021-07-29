/** @format */

import React from 'react'
import { Text, TouchableHighlight, View } from 'react-native'
import { useTranslation } from 'react-i18next'

import { styles } from './styles'

const Logout = () => {
  const { t } = useTranslation()

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={() => null}>
        <Text style={styles.text}>{t('Log Out')}</Text>
      </TouchableHighlight>
    </View>
  )
}

export default Logout
