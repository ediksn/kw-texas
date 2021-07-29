/** @format */

import React from 'react'
import { GestureResponderEvent, Image, Text, TouchableHighlight, View } from 'react-native'
import { useTranslation } from 'react-i18next'

import arrow_btn from 'assets/images/arrow_btn.png'
import { styles } from './styles'

interface Props {
  title: string
  icon: any
  arrow: boolean
  onPress: (event: GestureResponderEvent) => void
}

const ListButton = ({ title, icon, onPress, arrow }: Props) => {
  const { t } = useTranslation()

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <TouchableHighlight onPress={onPress}>
          <Image style={styles.logoutBtn} resizeMode='contain' source={icon} />
        </TouchableHighlight>
        <Text style={styles.text}>{t(title)}</Text>
      </View>
      {arrow && (
        <View>
          <Image style={styles.arrowBtn} resizeMode='center' source={arrow_btn} />
        </View>
      )}
    </View>
  )
}

export default ListButton
