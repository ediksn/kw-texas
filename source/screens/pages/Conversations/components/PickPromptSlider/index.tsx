import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Image, TouchableOpacity, ScrollView } from 'react-native'
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
import { useTranslation } from 'react-i18next'
import { useFocusEffect } from '@react-navigation/native'
import { RootState } from '~/store/index'
import { PromptVideoInterface } from '~/interfaces/promptVideoInterface'
import { PickPromptInterface } from '~/interfaces/pickPromptsInterface'
import { styles } from './styles'
import { homeActions } from '~/store/actions'
import { NAVIGATION, pickPrompts } from '~/constants'
import { HeaderTitleBox } from '~/components'

const PickPromptSlider = ({ navigation }: any) => {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const getSoloScripts: PromptVideoInterface[] = useSelector((state: RootState) => state.promptVideos.getSoloScripts)
  const prompts: PickPromptInterface[] = useSelector((state: RootState) => state.home.pickPrompts.prompts)
  const [promptsRandom, setPromptsRandom] = useState([...prompts])
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

  useFocusEffect(() => {
    setPromptsRandom(promptsRandom.sort(() => (Math.random() > 0.5 ? 1 : -1)))
  })

  const renderPickPromptComponent = (item: PickPromptInterface) => {
    const activeSlideSelected = getSoloScripts.findIndex(promptVideo => promptVideo.id === item.link)

    return (
      <TouchableOpacity
        testID={pickPrompts}
        key={item.id.toString()}
        onPress={() => navigation.navigate(NAVIGATION.SCREEN.STUDIO, { activeSlideSelected })}
      >
        <Image style={styles.avatar} resizeMode='contain' source={pickPromptsImages[item.image]} />
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <HeaderTitleBox
        title={t('Pick a Prompt')}
        description={t(
          'Click on one of the prompts below to start building your library. Take your time and have fun with it!'
        )}
      />

      <ScrollView horizontal contentContainerStyle={styles.containerScroll}>
        {promptsRandom.map((item: PickPromptInterface) => renderPickPromptComponent(item))}
      </ScrollView>
    </View>
  )
}

export default PickPromptSlider
