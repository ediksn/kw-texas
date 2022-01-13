import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { Header, Icon } from '~/components'
import { RootState } from '~/store'
import { styles } from './styles'
import { NAVIGATION } from '~/constants'
import { GroupInterface } from '~/interfaces/groupInterface'
import { homeActions } from '~/store/actions'

const leftButton = (handleGoBack: any) => (
  <View style={styles.bookmarkedLeftButtonContainer}>
    <TouchableOpacity onPress={handleGoBack}>
      <Icon name='arrow-left-icon' size={18} color='#282B33' />
    </TouchableOpacity>
  </View>
)

const rightButton = <Icon name='search-icon' size={18} color='#282B33' />
const secondRightButton = <Icon name='threedots-icon' size={18} color='#282B33' />

const CommunityDetailHeader = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const limit: number = useSelector((state: RootState) => state.home.posts.limit)
  const selectedCommunity: GroupInterface | undefined = useSelector(
    (state: RootState) => state.home.groups.selectedCommunity
  )
  const scrolled: boolean = useSelector((state: RootState) => state.home.groups.scrolled)

  const handleGoBack = () => {
    dispatch(homeActions.getPosts(limit))
    navigation.goBack()
  }

  return (
    <Header
      title={selectedCommunity?.name}
      avatarUrl={selectedCommunity?.icon?.url}
      style={styles.header}
      rightButton={rightButton}
      secondRightButton={secondRightButton}
      leftButton={leftButton(handleGoBack)}
      onClickLeft={() => navigation.navigate(NAVIGATION.SCREEN.HOME)}
      hiddenTitle={scrolled}
      renderAvatar
    />
  )
}

export default CommunityDetailHeader
