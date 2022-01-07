import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { useTranslation } from 'react-i18next'
import { styles } from './styles'
import { GroupInterface } from '~/interfaces/groupInterface'
import { TEST_IDS } from '~/constants/testIds'

interface GroupProps {
  group: GroupInterface
  onGroupPress: (group: GroupInterface) => void
}

const Group = ({ group, onGroupPress }: GroupProps) => {
  const { icon, name } = group
  const { t } = useTranslation()

  return (
    <View style={styles.container} testID={TEST_IDS.GROUPS.GROUP_ID}>
      <TouchableOpacity style={styles.container} onPress={() => onGroupPress && onGroupPress(group)}>
        {icon?.url ? (
          <ImageBackground
            source={{ uri: icon.url }}
            imageStyle={styles.image}
            style={styles.containerImage}
            resizeMode='cover'
          >
            <View style={styles.background}>
              <Text style={styles.text} numberOfLines={4} ellipsizeMode='tail'>
                {name.trim().length > 1 ? name : t('components_General_NoName')}
              </Text>
            </View>
          </ImageBackground>
        ) : (
          <View style={styles.containerImage}>
            <View style={styles.background}>
              <Text style={styles.text} numberOfLines={4} ellipsizeMode='tail'>
                {name.trim().length > 1 ? name : t('components_General_NoName')}
              </Text>
            </View>
          </View>
        )}
      </TouchableOpacity>
    </View>
  )
}

export default Group
