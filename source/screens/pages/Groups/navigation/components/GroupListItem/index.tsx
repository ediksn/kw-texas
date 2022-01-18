import React from 'react'
import { useTranslation } from 'react-i18next'
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native'
import { Icon } from '~/components'
import { GroupInterface } from '~/interfaces/groupInterface'
import { theme } from '~/constants'
import { styles } from './styles'
import EmptyImage from '../../../../../../../assets/images/emptyImage.png'

const GroupListItem = ({ item }: { item: GroupInterface }) => {
  const { membersCount, name, icon } = item
  const { t } = useTranslation()
  return (
    <View style={styles.itemContainer}>
      {icon?.url && <Image source={{ uri: icon?.url }} style={styles.imageContainer} />}
      {!icon?.url && <Image source={EmptyImage} style={styles.imageContainer} />}
      <View style={styles.labelContainer}>
        <Text style={styles.nameText}>{name}</Text>
        <View style={styles.textContainer}>
          <Icon name='people-icon' size={18} color={theme.darkGreenColor} />
          <Text style={styles.counterText}>
            {membersCount} {t('components_Group_participants')}
          </Text>
        </View>
      </View>
      <TouchableWithoutFeedback>
        <View style={styles.joinButton}>
          <Text style={styles.joinText}>{t('components_Group_join')}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

export default GroupListItem
