import React from 'react'
import { useTranslation } from 'react-i18next'
import { TouchableOpacity, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { Header, Icon } from '~/components'
import { homeActions } from '~/store/actions'
import { RootState } from '~/store'
import { styles } from './styles'

const BookmarkedHeader = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const navigation = useNavigation()
  const limit: number = useSelector((state: RootState) => state.home.posts.limit)

  const leftButton = (handleGoBack: any) => (
    <View style={styles.bookmarkedLeftButtonContainer}>
      <TouchableOpacity onPress={handleGoBack}>
        <Icon name='arrow-left-icon' size={18} color='#282B33' />
      </TouchableOpacity>
    </View>
  )

  const rightButton = (
    <View style={styles.bookmarkedRightButtonContainer}>
      <TouchableOpacity>
        <Icon name='search-icon' size={18} color='#282B33' />
      </TouchableOpacity>
    </View>
  )

  const handleGoBack = () => {
    dispatch(homeActions.getPosts(limit))
    navigation.goBack()
  }

  return (
    <Header
      style={styles.container}
      titleStyle={styles.title}
      leftButton={leftButton(handleGoBack)}
      title={t('Bookmark')}
      rightButton={rightButton}
    />
  )
}

export default BookmarkedHeader
