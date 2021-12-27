import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { View, FlatList, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { theme, NAVIGATION } from '~/constants'
import { styles } from './styles'
import { PostInterface } from '~/interfaces/postInterface'
import { RootState } from '~/store'
import { getUsrProfileActions, homeActions } from '~/store/actions'
import { useBackButtonMinimize } from '~/hooks'
import { Spinner, Icon, Post } from '~/components'

const EmptyPostsBookmarked = (t: any) => (
  <View style={styles.noPostWrapper}>
    <Icon name='bookmark-icon' size={56} color={theme.backgroundDark} />
    <Text style={styles.noPostMessage} testID='no_post_message_bookmark'>
      {t('No post message bookmark')}
    </Text>
    <Text style={styles.noPostMessage2} testID='no_post_sub_message_bookmark'>
      {t('No post sub message bookmark')}
    </Text>
  </View>
)

const Bookmarks = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const usr: any = useSelector((state: RootState) => state.login.user)
  const bookmarkedPosts: PostInterface[] = useSelector((state: RootState) => state.home.bookmarkedPosts.data)
  const limitDefault: number = useSelector((state: RootState) => state.home.bookmarkedPosts.limitDefault)
  const limit: number = useSelector((state: RootState) => state.home.bookmarkedPosts.limit)
  const isLoading: boolean = useSelector((state: RootState) => state.home.bookmarkedPosts.isLoading)
  const hasMoreLoading: boolean = useSelector((state: RootState) => state.home.bookmarkedPosts.hasMoreLoading)
  const usrId: number = usr?.kwuid
  useBackButtonMinimize()
  const { t } = useTranslation()
  const onPostView = (post: PostInterface) => {
    dispatch(homeActions.selectPost(post))
    navigation.navigate(NAVIGATION.SCREEN.POSTVIEW)
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(getUsrProfileActions.getUsrProfile(usrId))
      dispatch(homeActions.getBookmarkedPosts({ limit: limitDefault, isLoading: !bookmarkedPosts.length }))
    })

    return unsubscribe
  }, [navigation, dispatch])
  const renderPost = ({ item }: { item: PostInterface }) => <Post post={item} onPostPress={onPostView} />
  const keyExtractor = (post: PostInterface) => post.id.toString()
  const onRefresh = () => dispatch(homeActions.getBookmarkedPosts({ limit, isLoading: true }))
  const onEndReached = () => dispatch(homeActions.getBookmarkedPosts({ limit: limit + 10, hasMoreLoading: true }))

  return (
    <View style={styles.container}>
      <FlatList
        renderItem={renderPost}
        data={bookmarkedPosts}
        keyExtractor={keyExtractor}
        refreshing={isLoading}
        onRefresh={onRefresh}
        onEndReached={onEndReached}
        onEndReachedThreshold={1}
        ListEmptyComponent={EmptyPostsBookmarked(t)}
        showsVerticalScrollIndicator={bookmarkedPosts?.length > 0}
        ListFooterComponent={<Spinner isLoading={hasMoreLoading} size='small' color='#3D424D' />}
        style={styles.list}
        contentContainerStyle={styles.contentListStyle}
      />
    </View>
  )
}

export default Bookmarks
