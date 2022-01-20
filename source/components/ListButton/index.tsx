/** @format */

import React from 'react'
import { GestureResponderEvent, Image, Text, TouchableOpacity, View } from 'react-native'
import { useTranslation } from 'react-i18next'
import { Icon } from '~/components'
import { styles } from './styles'
import { theme } from '~/constants'

interface Props {
  title: string
  icon: any
  arrow: boolean
  svg?: boolean
  svgTitle?: string
  svgSize?: number
  svgColor?: string
  onPress: (event: GestureResponderEvent) => void
}

const ListButton = ({ title, icon, onPress, arrow, svg, svgTitle, svgSize, svgColor }: Props) => {
  const { t } = useTranslation()

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          {svg && (
            <View style={styles.logoutBtn}>
              <Icon name={svgTitle ?? ''} size={svgSize} color={svgColor} />
            </View>
          )}
          {icon && <Image style={styles.logoutBtn} resizeMode='contain' source={icon} />}
          <Text style={styles.textWithBtn}>{t(title)}</Text>
        </View>
        {arrow && (
          <View>
            <Icon name='arrow-right' size={20} color={theme.darkGrey} />
          </View>
        )}
      </View>
    </TouchableOpacity>
  )
}

export default ListButton
