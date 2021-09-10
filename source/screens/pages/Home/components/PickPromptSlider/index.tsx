import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import blue from 'assets/images/pickPrompts/blue.png'
import gray from 'assets/images/pickPrompts/gray.png'
import green from 'assets/images/pickPrompts/green.png'
import pink from 'assets/images/pickPrompts/pink.png'
import purple from 'assets/images/pickPrompts/purple.png'
import purple2 from 'assets/images/pickPrompts/purple2.png'
import red from 'assets/images/pickPrompts/red.png'
import teal from 'assets/images/pickPrompts/teal.png'
import teal2 from 'assets/images/pickPrompts/teal2.png'
import yellow from 'assets/images/pickPrompts/yellow.png'
import { useNavigation } from '@react-navigation/native'
import { RootState } from '~/store/index'
import { PromptVideoInterface } from '~/interfaces/promptVideoInterface'
import { PickPromptInterface } from '~/interfaces/pickPromptsInterface'
import { styles } from './styles'
import { homeActions } from '~/store/actions'
import { NAVIGATION } from '~/constants'

const PickPromptSlider = () => {
  const { t } = useTranslation()
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const getSoloScripts: PromptVideoInterface[] = useSelector((state: RootState) => state.promptVideos.getSoloScripts)
  const prompts: PickPromptInterface[] = useSelector((state: RootState) => state.home.pickPrompts.prompts)
  const pickPromptsImages: { [key: string]: object } = {
    blue,
    gray,
    green,
    pink,
    purple,
    purple2,
    red,
    teal,
    teal2,
    yellow
  }

  useEffect(() => {
    dispatch(homeActions.getPickPrompts())
  }, [])

  const renderPickPromptComponent = ({ item }: { item: PickPromptInterface }) => {
    const activeSlideSelected = getSoloScripts.findIndex(promptVideo => promptVideo.id === item.link)

    return (
      <TouchableOpacity
        key={item.id}
        onPress={() => navigation.navigate(NAVIGATION.SCREEN.STUDIO, { activeSlideSelected })}
      >
        <Image style={styles.avatar} resizeMode='contain' source={pickPromptsImages[item.image]} />
      </TouchableOpacity>
    )
  }

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
        data={prompts}
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
