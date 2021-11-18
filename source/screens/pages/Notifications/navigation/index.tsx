import React from 'react'
import { useTranslation } from 'react-i18next'
import { Header } from '~/components'
import { NAVIGATION } from '~/constants'
import { StackNavigator, StackScreen } from '~/screens/components/Navigators'
import { Notifications } from '..'
import { styles } from './styles'

const NoitificationsHeader = () => {
  const { t } = useTranslation()

  const titleText = t('components_Events_Your_Events')

  return {
    header: () => {
      return <Header style={styles.container} title={titleText} titleStyle={styles.titleStyle} />
    }
  }
}

const NotificationsStackScreen = () => (
  <StackNavigator>
    <StackScreen options={NoitificationsHeader} name={NAVIGATION.SCREEN.NOTIFICATIONS} component={Notifications} />
  </StackNavigator>
)

export default NotificationsStackScreen
