/** @format */

import React from 'react'
import { FlatList, SafeAreaView, View } from 'react-native'
import { useBackButtonMinimize } from '~/hooks'
import { styles } from './styles'
import useNotification from './hooks/useNavigation'

export const Notifications = () => {
  const { posts, loading, renderEvents, keyExtractor, onRefresh, onEndReached, emptyNotifications } = useNotification()

  useBackButtonMinimize()

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
