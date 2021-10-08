import React, { useEffect } from 'react'
import { SafeAreaView, View, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { styles } from './styles'
import Post from '~/components/Post'
import { PostInterface } from '~/interfaces/postInterface'
import { RootState } from '~/store'
import { getUsrProfileActions } from '~/store/actions'
import mockPost from '~/components/Post/__mocks__/mockPost'

export const Home = () => {
  const dispatch = useDispatch()
  const usr: any = useSelector((state: RootState) => state.login.user)
  const usrProfile: any = useSelector((state: RootState) => state.usrProfile.profiles)
  // const posts: PostInterface[] = useSelector((state: RootState) => state.home.posts.data)
  const posts: PostInterface[] = [mockPost, mockPost, mockPost, mockPost]
  const loading: boolean = useSelector((state: RootState) => state.home.posts.isLoading)
  const usrId: number = usr?.kwuid

  useEffect(() => {
    if (usrProfile.length === 0) dispatch(getUsrProfileActions.getUsrProfile(usrId))
  }, [])

  const renderPost = ({ item }: { item: PostInterface }) => <Post post={item} />
  const keyExtractor = (post: PostInterface) => post.id.toString()

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          renderItem={renderPost}
          data={posts}
          keyExtractor={keyExtractor}
          refreshing={loading}
          onRefresh={() => null}
          onEndReached={() => null}
          onEndReachedThreshold={1}
        />
      </View>
    </SafeAreaView>
  )
}
