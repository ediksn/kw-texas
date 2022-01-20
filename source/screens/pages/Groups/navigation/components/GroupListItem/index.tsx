import React from 'react'
import { useTranslation } from 'react-i18next'
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { Icon } from '~/components'
import { GroupInterface } from '~/interfaces/groupInterface'
import { NAVIGATION, theme } from '~/constants'
import { styles } from './styles'
import EmptyImage from '../../../../../../../assets/images/emptyImage.png'
import { homeActions } from '~/store/actions'

const GroupListItem = ({ item }: { item: GroupInterface }) => {
  const { membersCount, name, icon } = item
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const { navigate } = useNavigation()

  const goToDetail = () => {
    dispatch(homeActions.selectCommunity(item))
    navigate(NAVIGATION.SCREEN.COMMUNITYDETAIL)
  }

  return (
    <View style={styles.itemContainer}>
      {icon?.url && (
        <TouchableWithoutFeedback onPress={goToDetail}>
          <Image source={{ uri: icon?.url }} style={styles.imageContainer} />
        </TouchableWithoutFeedback>
      )}
      {!icon?.url && (
        <TouchableWithoutFeedback onPress={goToDetail}>
          <Image source={EmptyImage} style={styles.imageContainer} />
        </TouchableWithoutFeedback>
      )}
      <View style={styles.labelContainer}>
        <Text style={styles.nameText}>{name}</Text>
        <View style={styles.textContainer}>
          <Icon name='groups' size={14} color={theme.darkGreenColor} />
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
