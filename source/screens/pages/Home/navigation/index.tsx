import React from 'react'
import { useTranslation } from 'react-i18next'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'
import { Header } from '~/components'
import { NAVIGATION } from '~/constants'
import { StackNavigator, StackScreen } from '~/screens/components/Navigators'
import { RootState } from '~/store'
import { Home } from '..'
import { styles } from './styles'

const HomeHeader = () => {
  const { t } = useTranslation()
  const usrData: any = useSelector((state: RootState) => state.usrProfile.profiles[0])

  const leftButton = (
    <View style={styles.leftButtonContainer}>
      <Image style={styles.photo} resizeMode='cover' resizeMethod='resize' source={{ uri: usrData?.photo_url }} />
      <TouchableOpacity>
        <Text style={styles.text}>{t('Anything new?')} </Text>
      </TouchableOpacity>
    </View>
  )

  const rightButton = (
    <Image style={styles.photo} resizeMode='cover' resizeMethod='resize' source={{ uri: usrData?.photo_url }} />
  )

  return {
    header: () => {
      return <Header leftButton={leftButton} rightButton={rightButton} />
    }
  }
}

const HomeStackScreen = () => (
  <StackNavigator>
    <StackScreen options={HomeHeader} name={NAVIGATION.SCREEN.HOME} component={Home} />
  </StackNavigator>
)

export default HomeStackScreen
