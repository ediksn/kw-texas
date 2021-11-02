import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { View, FlatList, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { theme } from '~/constants'
import { styles } from './styles'
import Post from '~/components/Post'
import { PostInterface } from '~/interfaces/postInterface'
import { RootState } from '~/store'
import { getUsrProfileActions, homeActions } from '~/store/actions'
import { useBackButtonMinimize } from '~/hooks'
import { Spinner, Button, Icon } from '~/components'

export const Home = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const usr: any = useSelector((state: RootState) => state.login.user)
  const posts: PostInterface[] = useSelector((state: RootState) => state.home.posts.data)
  const limitDefault: number = useSelector((state: RootState) => state.home.posts.limitDefault)
  const limit: number = useSelector((state: RootState) => state.home.posts.limit)
  const loading: boolean = useSelector((state: RootState) => state.home.posts.isLoading)
  const usrId: number = usr?.kwuid
  useBackButtonMinimize()
  const { t } = useTranslation()

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(getUsrProfileActions.getUsrProfile(usrId))
      dispatch(homeActions.getPosts(limitDefault))
    })

    return unsubscribe
  }, [navigation, dispatch])
  const renderPost = ({ item }: { item: PostInterface }) => <Post post={item} />
  const keyExtractor = (post: PostInterface) => post.id.toString()
  const onRefresh = () => dispatch(homeActions.getPosts(limit))
  const onEndReached = () => dispatch(homeActions.getPosts(limit + 10))

  const NoPost = () => (
    <View style={styles.noPostWrapper}>
      <Icon name='message-icon' size={55} color={theme.backgroundDark} />
      <Text style={styles.noPostMessage} testID='no_post_message'>
        {t('No post message')}
      </Text>
      <Text style={styles.noPostMessage2} testID='no_post_message2'>
        {t('No post message2')}
      </Text>
      <Button
        message={t('Create a new post')}
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
        ListEmptyComponent={NoPost}
        style={styles.list}
        contentContainerStyle={styles.contentListStyle}
        ListFooterComponent={<Spinner isLoading={loading} size={30} color='#3D424D' />}
      />
    </View>
  )
}
