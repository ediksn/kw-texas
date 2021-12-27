import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { ActivityIndicator, FlatList, Keyboard, KeyboardAvoidingView, SafeAreaView, Text, View } from 'react-native'
import moment from 'moment'
import { Icon, PostInfo } from '~/components'
import { styles } from './styles'
import { authorPost, avatarPost, datePost, IS_IOS, theme } from '~/constants'
import { PostInterface } from '~/interfaces/postInterface'
import { RootState } from '~/store'
import Avatar from '~/components/Avatar'
import HeaderPostView from '~/components/HeaderPostView'
import PostComment from '~/components/PostComment'
import MakeCommentBar from '~/components/MakeCommentBar'
import { CommentInterface } from '~/interfaces/commentInterface'
import { homeActions, toastActions } from '~/store/actions'

const PostView = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const { goBack } = navigation
  const selectedPost: PostInterface | undefined = useSelector((state: RootState) => state.home.comments.selectedPost)
  const selectedPostComments: CommentInterface[] = useSelector(
    (state: RootState) => state.home.comments.selectedPostComments
  )
  const loadingComments: boolean = useSelector((state: RootState) => state.home.comments.loadingComments)
  const limit: number = useSelector((state: RootState) => state.home.comments.limit)
  const limitDefault: number = useSelector((state: RootState) => state.home.comments.limitDefault)
  const activeAccount: number = useSelector((state: RootState) => state.usrProfile.activeAccount)
  const usrData: any = useSelector((state: RootState) => state.usrProfile.profiles[activeAccount])
  const [commentsCount, setCommentsCount] = useState(selectedPostComments.length)
  const [callOnScrollEnd, setCallOnScrollEnd] = useState(false)
  const [keyboardOpen, setKeyboardOpen] = useState(false)

  const leftButton = <Icon name='arrow-left-icon' size={16.5} />
  const renderItemComment = ({ item }: { item: CommentInterface }) => {
    return <PostComment key={item.id} item={item} />
  }
  const onSubmitComment = async (comment: string) => {
    const res: any = await dispatch(homeActions.addCommentPost(comment, selectedPost?.id))
    if (res) {
      setCommentsCount(commentsCount + 1)
      dispatch(toastActions.showSuccessToast(t('components_PostView_Comment_added')))
    } else {
      dispatch(toastActions.showErrorToast(t('components_PostView_Comment_not_added')))
    }
  }
  const onEndReached = () => dispatch(homeActions.getCommentsOfPost(selectedPost.id, limit + 10, true))

  if (!selectedPost) {
    goBack()
    return null
  }

  useEffect(() => {
    setCommentsCount(selectedPost.repliesCount)
  }, [selectedPost])

  const keyboardDidShow = () => {
    setKeyboardOpen(true)
  }
  const keyboardDidHide = () => {
    setKeyboardOpen(false)
  }

  useEffect(() => {
    dispatch(homeActions.getCommentsOfPost(selectedPost.id, limitDefault))
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow)
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide)
    return () => {
      keyboardDidShowListener.remove()
      keyboardDidHideListener.remove()
    }
  }, [])

  const ListFooterComponent = () => {
    if (!loadingComments) {
      return null
    }
    return <ActivityIndicator color={theme.post.green} size={20} />
  }

  const { creatorfirstName, createdAt, creatorLastName, creatorPhoto, groupInfo } = selectedPost
  const author = `${creatorfirstName} ${creatorLastName}`
  const date = moment(createdAt).format('MM/DD/YY')
  const ANDROID_PADDING = keyboardOpen ? 0 : 40

  return (
    <SafeAreaView style={styles.wrapper}>
      <HeaderPostView style={styles.header} leftButton={leftButton} onClickLeft={goBack}>
        <View style={styles.avatarBox}>
          <Avatar testID={avatarPost} uri={creatorPhoto} />
          <View style={styles.info}>
            <Text testID={authorPost} style={styles.name}>
              {author}
            </Text>
            <Text numberOfLines={1} ellipsizeMode='tail' testID={datePost} style={styles.date}>{`${t(
              'components_Post_Posted'
            )} ${date} | ${groupInfo?.name}`}</Text>
          </View>
        </View>
      </HeaderPostView>
      <KeyboardAvoidingView
        behavior={IS_IOS ? 'padding' : 'height'}
        keyboardVerticalOffset={IS_IOS ? 40 : ANDROID_PADDING}
        style={styles.content}
      >
        <FlatList
          data={selectedPostComments}
          renderItem={renderItemComment}
          onEndReached={() => setCallOnScrollEnd(true)}
          onMomentumScrollEnd={() => {
            if (callOnScrollEnd) {
              onEndReached()
            }
            setCallOnScrollEnd(false)
          }}
          style={styles.containerComments}
          contentContainerStyle={styles.children}
          ListHeaderComponent={
            <PostInfo post={selectedPost} commentsCount={commentsCount} customContainerStyle={styles.postContainer} />
          }
          ListFooterComponent={ListFooterComponent}
        />
        <MakeCommentBar keyboardOpen={keyboardOpen} usrData={usrData} onSubmitComment={onSubmitComment} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default PostView
