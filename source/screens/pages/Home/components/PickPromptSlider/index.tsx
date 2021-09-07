import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Text, View, FlatList, Image } from 'react-native'
import { RootState } from '~/store/index'
import { PickPromptInterface } from '~/interfaces/promptVideoInterface'
import { styles } from './styles'
import { homeActions } from '~/store/actions'

const PickPromptSlider = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const page: number = useSelector((state: RootState) => state.pickPrompts.page)
  const pickPrompts: PickPromptInterface[] = useSelector((state: RootState) => state.pickPrompts.prompts)

  useEffect(() => {
    dispatch(homeActions.getPickPrompts(page))
  }, [])

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
        data={pickPrompts}
        keyExtractor={(item: PickPromptInterface) => item.id.toString()}
        refreshing={false}
        onRefresh={() => {}}
        onEndReached={() => {}}
        onEndReachedThreshold={1}
      />
    </View>
  )
}

export default PickPromptSlider
