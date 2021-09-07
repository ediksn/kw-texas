import React from 'react'
import { useTranslation } from 'react-i18next'
import { Text, View, FlatList, Image } from 'react-native'
import { styles } from './styles'

const PickPromptSlider = () => {
  const { t } = useTranslation()

  const renderPickPromptComponent = () => (
    <Image
      style={styles.avatar}
      resizeMode='contain'
      source={{
        uri: 'https://ui-connect-scripthub.kw-qa-us-east1.kw.com/_next/static/chunks/media/green-370e31d5bb666f39d24fe201a0441e98.png'
      }}
    />
  )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('Pick a Prompt')}</Text>
      <Text style={styles.description}>
        {t('Click on one of the prompts below to start building your library. Take your time and have fun with it!')}
      </Text>
      <FlatList
        contentContainerStyle={{ flex: 1 }}
        horizontal
        renderItem={renderPickPromptComponent}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
        // keyExtractor={(item: Interface) => item.id.toString()}
        refreshing={false}
        onRefresh={() => {}}
        onEndReached={() => {}}
        onEndReachedThreshold={1}
      />
    </View>
  )
}

export default PickPromptSlider
