import React from 'react'
import { useTranslation } from 'react-i18next'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Header, Icon, Spinner } from '~/components'
import { styles } from './styles'
import { theme } from '../../constants/theme'
import { PeopleMarkedInterface } from '~/interfaces/peopleInterface'
import { NAVIGATION } from '../../constants/navigation'

interface TagsPeopleHeaderProps {
  tags: PeopleMarkedInterface
}

const TagsPeopleHeader = ({ tags }: TagsPeopleHeaderProps) => {
  const { t } = useTranslation()
  const navigation = useNavigation()

  const handleGoBack = () => navigation.goBack()

  const handleSave = () => navigation.navigate(NAVIGATION.SCREEN.NEWPOST, { tags })

  const leftButton = (
    <View style={styles.leftButtonContainer}>
      <Icon name='close-icon' size={16.5} color='#282B33' />
    </View>
  )

  const rightButton = (
    <Spinner isLoading={false} size='small' color={theme.post.green}>
      <Text style={styles.rightText}>{t('Home_NewPost_Tags_Peoples_Header_Text_Right')}</Text>
    </Spinner>
  )

  return (
    <Header
      titleStyle={styles.title}
      leftButton={leftButton}
      onClickLeft={handleGoBack}
      title={t('Home_NewPost_Tags_Peoples_Header_Title')}
      rightButton={rightButton}
      onClickRight={handleSave}
      style={styles.container}
    />
  )
}

export default TagsPeopleHeader
