import React, { useEffect, useState } from 'react'
import { FlatList, RefreshControl, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { styles } from './styles'
import { GroupInterface } from '~/interfaces/groupInterface'
import { RootState } from '~/store'
import { homeActions } from '~/store/actions'
import { theme } from '~/constants'
import GroupListItem from '../../navigation/components/GroupListItem'

const GroupInteresting = () => {
  const dispatch = useDispatch()
  const groups: GroupInterface[] = useSelector((state: RootState) => state.home.groupsInteresting.data)
  const loading: boolean = useSelector((state: RootState) => state.home.groupsInteresting.isLoading)
  const renderGroups = ({ item }: { item: GroupInterface }) => <GroupListItem item={item} />
  const keyExtractor = (item: GroupInterface) => item.id.toString()
  const [size, setSize] = useState(10)

  useEffect(() => {
    dispatch(homeActions.getAllGroups())
  }, [])

  const onRefresh = () => dispatch(homeActions.getAllGroups(size))
  const onEndReached = () => {
    setSize(size + 10)
    dispatch(homeActions.getAllGroups(size + 10))
  }

  const renderSeparator = () => <View style={styles.separator} />
  return (
    <FlatList
      data={groups}
      renderItem={renderGroups}
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={onRefresh} colors={[theme.spinner]} tintColor={theme.spinner} />
      }
      onEndReached={onEndReached}
      showsVerticalScrollIndicator={groups?.length > 0}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={renderSeparator}
    />
  )
}

export default GroupInteresting
