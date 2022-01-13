import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Avatar from '~/components/Avatar'

interface ListHeaderComponentProps {
  avatarUri: string
}

const CommunityPostsListHeader = ({ avatarUri }: ListHeaderComponentProps) => {
  const { t } = useTranslation()

  return (
    <View style={styles.headerListContainer}>
      <View style={styles.headerCard}>
        <View style={styles.typeSomethingRow}>
          <Avatar uri={avatarUri} />
          <Text style={styles.typeSomething}>{t('components_NewPost_Share_today')}</Text>
        </View>
      </View>
    </View>
  )
}

export default CommunityPostsListHeader
