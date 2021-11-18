import React, { Dispatch, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NotificationsFilled from 'assets/images/calendar-filled.png'
import NotificationsUnFilled from 'assets/images/calendar-unfilled.png'
import moment from 'moment'
import { ImageSourcePropType } from 'react-native'
import { useTranslation } from 'react-i18next'
import EmptyList from '~/components/EmptyList'
import { useBackButtonMinimize } from '~/hooks'
import { styles } from '~/screens/pages/Notifications/styles'
import { RootState } from '~/store'
import { getUsrProfileActions, homeActions } from '~/store/actions'
import { EventsInterface } from '~/interfaces/eventsInterface'
import EventCard from '~/components/EventCard'

const useNotification = (): {
  url: ImageSourcePropType
  dispatch: Dispatch<any>
  usr: any
  usrProfile: any
  todayEvents: EventsInterface[]
  tomorrowEvents: EventsInterface[]
  limitDefault: number
  limit: number
  loading: boolean
  usrId: number
  renderEvents: ({ item }: { item: EventsInterface }) => JSX.Element
  keyExtractor: (event: EventsInterface) => string
  onRefresh: () => void
  onEndReached: () => void
  emptyNotifications: () => JSX.Element
  t: (text: string) => string
} => {
  const { t } = useTranslation()
  const eventDefault: EventsInterface = {
    id: 1,
    name: 'Online Event for KW Texas Agents',
    price: '',
    location: 'KW Texas',
    starts: moment(),
    ends: moment(),
    published: true,
    instructors: [],
    bookmarked: false,
    slug: ''
  }
  const url = NotificationsUnFilled
  const dispatch = useDispatch()
  const usr: any = useSelector((state: RootState) => state.login.user)
  const usrProfile: any = useSelector((state: RootState) => state.usrProfile.profiles)
  const todayEvents: EventsInterface[] = [eventDefault]
  const tomorrowEvents: EventsInterface[] = [{ ...eventDefault, starts: (eventDefault.starts = moment().add(1, 'd')) }]
  const limitDefault: number = useSelector((state: RootState) => state.home.posts.limitDefault)
  const limit: number = useSelector((state: RootState) => state.home.posts.limit)
  const loading: boolean = useSelector((state: RootState) => state.home.posts.isLoading)
  const usrId: number = usr?.kwuid

  useBackButtonMinimize()

  useEffect(() => {
    if (usrProfile.length === 0) dispatch(getUsrProfileActions.getUsrProfile(usrId))
    dispatch(homeActions.getPosts(limitDefault))
  }, [])

  const renderEvents = ({ item }: { item: EventsInterface }) => <EventCard event={item} style={styles.cardStyle} />
  const keyExtractor = (event: EventsInterface) => event.id.toString()
  const onRefresh = () => {
    dispatch(homeActions.getPosts(limit))
  }
  const onEndReached = () => {
    dispatch(homeActions.getPosts(limit + 10))
  }

  const emptyNotifications = () => {
    const title = 'components_Events_Empty'
    return <EmptyList title={title} icon={NotificationsFilled} iconStyle={styles.iconStyle} />
  }
  return {
    url,
    usr,
    usrId,
    usrProfile,
    todayEvents,
    tomorrowEvents,
    limitDefault,
    limit,
    loading,
    dispatch,
    renderEvents,
    keyExtractor,
    onEndReached,
    onRefresh,
    emptyNotifications,
    t
  }
}

export default useNotification
