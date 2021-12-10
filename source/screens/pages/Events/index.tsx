import React, { useEffect } from 'react'
import { ListRenderItem, RefreshControl, ScrollView, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import CalendarFilled from 'assets/images/calendar-filled.png'
import CalendarUnFilled from 'assets/images/calendar-unfilled.png'
import { useTranslation } from 'react-i18next'
import { useBackButtonMinimize } from '~/hooks'
import { styles } from './styles'
import { eventActions } from '~/store/actions'
import { RootState } from '~/store'
import { EventInterface } from '~/interfaces/eventsInterface'
import { EmptyList, EventCard, EventsCarrousel, Spinner } from '~/components'
import { TEST_IDS } from '~/constants'

export const Events = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const events: any = useSelector((state: RootState) => state.events)
  const { today, tomorrow } = events
  const isLoading = today?.isLoading || tomorrow?.isLoading
  const todayEvents = today?.data?.filter(
    (event: EventInterface) => moment(event.starts).format('YYYY-MM-DD') === moment().format('YYYY-MM-DD')
  )
  const tomorrowEvents = tomorrow?.data?.filter(
    (event: EventInterface) => moment(event.starts).format('YYYY-MM-DD') === moment().add(1, 'd').format('YYYY-MM-DD')
  )
  const {
    EVENTS: { TODAY_ID, TOMORROW_ID }
  } = TEST_IDS

  useEffect(() => {
    dispatch(eventActions.getTodayEvents())
    dispatch(eventActions.getTomorrowEvents())
  }, [])

  useBackButtonMinimize()

  const renderEvents: ListRenderItem<EventInterface> = ({ item }: { item: EventInterface }) => (
    <EventCard event={item} style={styles.cardStyle} />
  )
  const keyExtractor = (event: EventInterface) => event.id
  const onRefresh = () => {
    dispatch(eventActions.getTodayEvents())
    dispatch(eventActions.getTomorrowEvents())
  }
  const onEndReached = (when: string) =>
    when === 'TODAY' ? dispatch(eventActions.getTodayEvents(true)) : dispatch(eventActions.getTomorrowEvents(true))
  const EmptyEvents = () => <EmptyList icon={CalendarFilled} title='components_Events_Empty' />

  return (
    <ScrollView
      contentContainerStyle={!todayEvents?.length && !tomorrowEvents?.length && styles.container}
      refreshControl={
        <RefreshControl
          refreshing={!today?.hasMoreLoading && !tomorrow?.hasMoreLoading && isLoading}
          onRefresh={onRefresh}
        />
      }
      showsVerticalScrollIndicator={!!todayEvents?.length || !!tomorrowEvents?.length}
    >
      {!!todayEvents?.length && (
        <EventsCarrousel
          testID={TODAY_ID}
          title={t('components_Events_today')}
          titleIcon={CalendarUnFilled}
          renderItem={renderEvents}
          data={todayEvents}
          keyExtractor={keyExtractor}
          onMomentumScrollEnd={() => onEndReached('TODAY')}
          onEndReachedThreshold={1}
          ListFooterComponent={<Spinner isLoading={today?.hasMoreLoading} size='small' color='#3D424D' />}
          horizontal
        />
      )}
      {!!tomorrowEvents?.length && (
        <EventsCarrousel
          testID={TOMORROW_ID}
          title={t('components_Events_tomorrow')}
          titleIcon={CalendarUnFilled}
          renderItem={renderEvents}
          data={tomorrowEvents}
          keyExtractor={keyExtractor}
          onMomentumScrollEnd={() => onEndReached('TOMORROW')}
          onEndReachedThreshold={1}
          ListFooterComponent={<Spinner isLoading={tomorrow?.hasMoreLoading} size='small' color='#3D424D' />}
          horizontal
        />
      )}
      {!todayEvents?.length && !tomorrowEvents?.length && (
        <View style={styles.containerEmpty}>
          <EmptyEvents />
        </View>
      )}
    </ScrollView>
  )
}
