import React from 'react'
import { useTranslation } from 'react-i18next'
import { Header } from '~/components'
import { NAVIGATION } from '~/constants'
import { StackNavigator, StackScreen } from '~/screens/components/Navigators'
import { Events } from '..'
import { styles } from './styles'

const EventsHeader = () => {
  const { t } = useTranslation()

  const titleText = t('components_Events_Your_Events')

  return {
    header: () => {
      return <Header style={styles.container} title={titleText} />
    }
  }
}

const EventsStackScreen = () => (
  <StackNavigator>
    <StackScreen options={EventsHeader} name={NAVIGATION.SCREEN.EVENTS} component={Events} />
  </StackNavigator>
)

export default EventsStackScreen
