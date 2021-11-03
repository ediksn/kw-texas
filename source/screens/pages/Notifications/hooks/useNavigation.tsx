import React, { Dispatch, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NotificationsFilled from 'assets/images/calendar-filled.png'
import { Post } from '~/components'
import EmptyList from '~/components/EmptyList'
import { useBackButtonMinimize } from '~/hooks'
import { PostInterface } from '~/interfaces/postInterface'
import { styles } from '~/screens/pages/Notifications/styles'
import { RootState } from '~/store'
import { getUsrProfileActions, homeActions } from '~/store/actions'

const useNotification = (): {
  dispatch: Dispatch<any>
  usr: any
  usrProfile: any
  posts: PostInterface[]
  limitDefault: number
  limit: number
  loading: boolean
  usrId: number
  renderEvents: ({ item }: { item: PostInterface }) => JSX.Element
  keyExtractor: (post: PostInterface) => string
  onRefresh: () => void
  onEndReached: () => void
  emptyNotifications: () => JSX.Element
} => {
  const dispatch = useDispatch()
  const usr: any = useSelector((state: RootState) => state.login.user)
  const usrProfile: any = useSelector((state: RootState) => state.usrProfile.profiles)
  const posts: PostInterface[] = []
  const limitDefault: number = useSelector((state: RootState) => state.home.posts.limitDefault)
  const limit: number = useSelector((state: RootState) => state.home.posts.limit)
  const loading: boolean = useSelector((state: RootState) => state.home.posts.isLoading)
  const usrId: number = usr?.kwuid

  useBackButtonMinimize()

  useEffect(() => {
    if (usrProfile.length === 0) dispatch(getUsrProfileActions.getUsrProfile(usrId))
    dispatch(homeActions.getPosts(limitDefault))
  }, [])

  const renderEvents = ({ item }: { item: PostInterface }) => <Post post={item} />
  const keyExtractor = (post: PostInterface) => post.id.toString()
  const onRefresh = () => {
    dispatch(homeActions.getPosts(limit))
  }
  const onEndReached = () => {
    dispatch(homeActions.getPosts(limit + 10))
  }

  const emptyNotifications = () => {
    const title = 'No Events To Display'
    return <EmptyList title={title} icon={NotificationsFilled} iconStyle={styles.iconStyle} />
  }
  return {
    usr,
    usrId,
    usrProfile,
    posts,
    limitDefault,
    limit,
    loading,
    dispatch,
    renderEvents,
    keyExtractor,
    onEndReached,
    onRefresh,
    emptyNotifications
  }
}

export default useNotification
