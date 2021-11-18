/** @format */

import React from 'react'
import { FlatList, Image, RefreshControl, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { useBackButtonMinimize } from '~/hooks'
import { styles } from './styles'
import useNotification from './hooks/useNavigation'

export const Notifications = () => {
  const {
    url,
    todayEvents,
    tomorrowEvents,
    loading,
    renderEvents,
    keyExtractor,
    onRefresh,
    onEndReached,
    emptyNotifications,
    t
  } = useNotification()

  useBackButtonMinimize()

  return (
    <SafeAreaView style={styles.containerBoxStyle}>
      {(todayEvents.length > 0 || tomorrowEvents.length > 0) && (
        <ScrollView
          contentContainerStyle={styles.container}
          refreshControl={<RefreshControl refreshing={loading} onRefresh={onRefresh} />}
        >
          <View style={styles.titleStyle}>
            <Image source={url} style={styles.icon} />
            <Text style={styles.text}>{t('components_Events_today')}</Text>
          </View>
          <FlatList
            renderItem={renderEvents}
            contentContainerStyle={styles.containerBoxStyle}
            data={todayEvents}
            keyExtractor={keyExtractor}
            onEndReached={onEndReached}
            onEndReachedThreshold={1}
            horizontal
          />
          <View style={styles.titleStyle}>
            <Image source={url} style={styles.icon} />
            <Text style={styles.text}>{t('components_Events_tomorrow')}</Text>
          </View>
          <FlatList
            renderItem={renderEvents}
            contentContainerStyle={styles.containerBoxStyle}
            data={tomorrowEvents}
            keyExtractor={keyExtractor}
            onEndReached={onEndReached}
            onEndReachedThreshold={1}
            horizontal
          />
        </ScrollView>
      )}
      {todayEvents.length < 1 && tomorrowEvents.length < 1 && (
        <View style={styles.containerEmpty}>{emptyNotifications}</View>
      )}
    </SafeAreaView>
  )
}
