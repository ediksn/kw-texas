/** @format */

import React, { useEffect } from 'react'
import { FlatList, SafeAreaView, View } from 'react-native'
import { useBackButtonMinimize } from '~/hooks'
import { getUsrProfileActions, homeActions } from '~/store/actions'
import { styles } from './styles'
import useNotification from './hooks/useNavigation'

export const Notifications = () => {
  const {
    usrId,
    usrProfile,
    posts,
    limitDefault,
    loading,
    renderEvents,
    keyExtractor,
    onRefresh,
    onEndReached,
    emptyNotifications,
    dispatch
  } = useNotification()

  useBackButtonMinimize()

  useEffect(() => {
    if (usrProfile.length === 0) dispatch(getUsrProfileActions.getUsrProfile(usrId))
    dispatch(homeActions.getPosts(limitDefault))
  }, [])

  return (
    <SafeAreaView style={styles.containerBoxStyle}>
      <View style={styles.container}>
        <FlatList
          renderItem={renderEvents}
          contentContainerStyle={styles.containerBoxStyle}
          ListEmptyComponent={emptyNotifications}
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
