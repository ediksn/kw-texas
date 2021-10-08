import React, { useEffect } from 'react'
import { SafeAreaView, View, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { styles } from './styles'
import Post from '~/components/Post'
import { PostInterface } from '~/interfaces/postInterface'
import { RootState } from '~/store'
import { getUsrProfileActions, homeActions } from '~/store/actions'

export const Home = () => {
  const dispatch = useDispatch()
  const usr: any = useSelector((state: RootState) => state.login.user)
  const usrProfile: any = useSelector((state: RootState) => state.usrProfile.profiles)
  const posts: PostInterface[] = useSelector((state: RootState) => state.home.posts.data)
  const limitDefault: number = useSelector((state: RootState) => state.home.posts.limitDefault)
  const limit: number = useSelector((state: RootState) => state.home.posts.limit)
  const loading: boolean = useSelector((state: RootState) => state.home.posts.isLoading)
  const usrId: number = usr?.kwuid

  useEffect(() => {
    if (usrProfile.length === 0) dispatch(getUsrProfileActions.getUsrProfile(usrId))
    dispatch(homeActions.getPosts(limitDefault))
  }, [])

  const renderPost = ({ item }: { item: PostInterface }) => <Post post={item} />
  const keyExtractor = (post: PostInterface) => post.id.toString()
  const onRefresh = () => dispatch(homeActions.getPosts(limit))
  const onEndReached = () => dispatch(homeActions.getPosts(limit + 10))

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          renderItem={renderPost}
          data={posts}
          keyExtractor={keyExtractor}
          refreshing={loading}
          onRefresh={onRefresh}
          onEndReached={onEndReached}
          onEndReachedThreshold={1}
        />
      </View>
    </SafeAreaView>
  )
}
