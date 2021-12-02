import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { View, FlatList, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { theme } from '~/constants'
import { styles } from './styles'
import { PostInterface } from '~/interfaces/postInterface'
import { RootState } from '~/store'
import { getUsrProfileActions, homeActions } from '~/store/actions'
import { useBackButtonMinimize } from '~/hooks'
import { Spinner, Button, Icon, Post } from '~/components'

export const Home = () => {
  const dispatch = useDispatch()
  const usr: any = useSelector((state: RootState) => state.login.user)
  const posts: PostInterface[] = useSelector((state: RootState) => state.home.posts.data)
  const limitDefault: number = useSelector((state: RootState) => state.home.posts.limitDefault)
  const limit: number = useSelector((state: RootState) => state.home.posts.limit)
  const loading: boolean = useSelector((state: RootState) => state.home.posts.isLoading)
  const hasMoreLoading: boolean = useSelector((state: RootState) => state.home.posts.hasMoreLoading)
  const kwuId: number = usr?.kwuid
  useBackButtonMinimize()
  const { t } = useTranslation()

  useEffect(() => {
    dispatch(getUsrProfileActions.getUsrProfile(kwuId))
    dispatch(homeActions.getPosts(limitDefault))
  }, [dispatch])
  const renderPost = ({ item }: { item: PostInterface }) => <Post post={item} />
  const keyExtractor = (post: PostInterface) => post.id.toString()
  const onRefresh = () => dispatch(homeActions.getPosts(limit))
  const onEndReached = () => dispatch(homeActions.getPosts(limit + 10, true))

  const NoPost = () => (
    <View style={styles.noPostWrapper}>
      <Icon name='message-icon' size={55} color={theme.backgroundDark} />
      <Text style={styles.noPostMessage} testID='no_post_message'>
        {t('components_Home_No_post_message')}
      </Text>
      <Text style={styles.noPostMessage2} testID='no_post_message2'>
        {t('components_Home_No_post_message2')}
      </Text>
      <Button
        message={t('components_Home_Create_new_post')}
        viewStyle={styles.button}
        textStyle={styles.buttonText}
        testID='create_new_post_button'
      />
    </View>
  )

  return (
    <View style={styles.container}>
      <FlatList
        renderItem={renderPost}
        data={posts}
        keyExtractor={keyExtractor}
        refreshing={loading}
        onRefresh={onRefresh}
        onEndReached={onEndReached}
        onEndReachedThreshold={1}
        ListEmptyComponent={(!loading && NoPost) || <></>}
        style={styles.list}
        showsVerticalScrollIndicator={posts?.length > 0}
        contentContainerStyle={styles.contentListStyle}
        ListFooterComponent={<Spinner isLoading={hasMoreLoading} size={30} color='#3D424D' />}
      />
    </View>
  )
}
