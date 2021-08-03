/** @format */

import React from 'react'
import { GestureResponderEvent, Image, Text, TouchableOpacity, View } from 'react-native'
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
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Image style={styles.logoutBtn} resizeMode='contain' source={icon} />

          <Text style={[icon ? styles.textWithBtn : styles.textWithNoBtn]}>{t(title)}</Text>
        </View>
        {arrow && (
          <View>
            <Image style={styles.arrowBtn} resizeMode='center' source={arrow_btn} />
          </View>
        )}
      </View>
    </TouchableOpacity>
  )
}

export default ListButton
