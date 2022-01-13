import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { View, FlatList, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useRoute } from '@react-navigation/native'
import { theme } from '~/constants'
import { styles } from './styles'
import { PeopleInterface, PeopleMarkedInterface } from '~/interfaces/peopleInterface'
import { RootState } from '~/store'
import { homeActions } from '~/store/actions'
import { useBackButtonMinimize } from '~/hooks'
import { Spinner, Icon, TagsPeopleHeader, Tags } from '~/components'
import People from './components/People'

const EmptyPeopleView = (t: any) => (
  <View style={styles.noPostWrapper}>
    <Icon name='bookmark-icon' size={56} color={theme.backgroundDark} />
    <Text style={styles.noPostMessage} testID='no_post_message_bookmark'>
      {t('components_Bookmarks_No_post_message')}
    </Text>
    <Text style={styles.noPostMessage2} testID='no_post_sub_message_bookmark'>
      {t('components_Bookmarks_No_post_sub_message')}
    </Text>
  </View>
)

const TagsPeople = () => {
  const dispatch = useDispatch()
  const { params } = useRoute()
  const { tags, groupId }: any = params
  const { t } = useTranslation()
  const peopleList: PeopleInterface[] = useSelector((state: RootState) => state.home.peopleList.data)
  const limit: number = useSelector((state: RootState) => state.home.peopleList.limit)
  const isLoading: boolean = useSelector((state: RootState) => state.home.peopleList.isLoading)
  const hasMoreLoading: boolean = useSelector((state: RootState) => state.home.peopleList.hasMoreLoading)
  const [peopleMarked, setPeopleMarked] = useState<PeopleMarkedInterface>(tags || {})
  const [callOnScrollEnd, setCallOnScrollEnd] = useState(false)

  useBackButtonMinimize()

  useEffect(() => {
    dispatch(homeActions.getPeople({ limit, isLoading: true, groupId }))
  }, [])

  const handlePeopleMarked = (kwUid: number) => {
    if (peopleMarked[kwUid]) {
      const newPeopleMarked = { ...peopleMarked }
      delete newPeopleMarked[kwUid]
      setPeopleMarked(newPeopleMarked)
    } else {
      setPeopleMarked({ ...peopleMarked, [kwUid]: !peopleMarked[kwUid] })
    }
  }

  const renderPeople = ({ item }: { item: PeopleInterface }) => (
    <People people={item} handlePeopleMarked={handlePeopleMarked} marked={peopleMarked[item.kwUid]} />
  )

  const keyExtractor = (people: PeopleInterface) => people.kwUid.toString()
  const onRefresh = () => dispatch(homeActions.getPeople({ limit, isLoading: true, groupId }))
  const onEndReached = () => dispatch(homeActions.getPeople({ limit: limit + 10, hasMoreLoading: true, groupId }))

  return (
    <>
      <TagsPeopleHeader tags={peopleMarked} />
      <View style={styles.container}>
        <Tags tags={peopleMarked} peopleList={peopleList} handlePeopleMarked={handlePeopleMarked} />
        <FlatList
          renderItem={renderPeople}
          data={peopleList}
          keyExtractor={keyExtractor}
          refreshing={isLoading}
          onRefresh={onRefresh}
          onEndReached={() => setCallOnScrollEnd(true)}
          onMomentumScrollEnd={() => {
            if (callOnScrollEnd) {
              onEndReached()
            }
            setCallOnScrollEnd(false)
          }}
          ListEmptyComponent={EmptyPeopleView(t)}
          showsVerticalScrollIndicator={peopleList?.length > 0}
          ListFooterComponent={<Spinner isLoading={hasMoreLoading} size='small' color='#3D424D' />}
          style={styles.list}
          contentContainerStyle={styles.contentListStyle}
        />
      </View>
    </>
  )
}

export default TagsPeople
