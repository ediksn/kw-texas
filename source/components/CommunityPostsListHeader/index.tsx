import { useTranslation } from 'react-i18next'
import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { styles } from './styles'
import Avatar from '~/components/Avatar'
import { NAVIGATION } from '~/constants/navigation'
import { OptionInterface } from '~/interfaces/groupInterface'
import { TEST_IDS } from '~/constants'

interface ListHeaderComponentProps {
  avatarUri: string
  currentGroupSelected: OptionInterface
}

const CommunityPostsListHeader = ({ avatarUri, currentGroupSelected }: ListHeaderComponentProps) => {
  const { t } = useTranslation()
  const navigation = useNavigation()

  return (
    <View testID={TEST_IDS.COMMUNITY.HOME.HEADER} style={styles.headerListContainer}>
      <View style={styles.headerCard}>
        <View style={styles.typeSomethingRow}>
          <Avatar uri={avatarUri} />
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(NAVIGATION.SCREEN.NEWPOST, { fromCommunity: true, currentGroupSelected })
            }
          >
            <Text style={styles.typeSomething}>{t('components_NewPost_Share_today')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default CommunityPostsListHeader
