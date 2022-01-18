import React from 'react'
import { FlatList, View, Text, TouchableOpacity, ImageBackground, TouchableWithoutFeedback } from 'react-native'
import { useTranslation } from 'react-i18next'

import { scale } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'
import { styles } from './style'
import Group from '~/components/Group'
import { styles as stylesGroup } from '~/components/Group/styles'

import { GroupInterface } from '~/interfaces/groupInterface'
import { GROUP_PREVIEW_MEDIA_LENGTH } from '~/utils/constants'
import { TEST_IDS } from '~/constants/testIds'
import { Icon } from '..'
import { NAVIGATION, theme } from '~/constants'

interface GroupSliderProps {
  groups: GroupInterface | any
  onPressGroup: (group: GroupInterface) => void
  onPressMoreGroups: () => void
}

const GroupSlider = ({ groups, onPressGroup, onPressMoreGroups }: GroupSliderProps) => {
  const { t } = useTranslation()
  const { navigate } = useNavigation()
  const keyExtractorGroup = (group: GroupInterface) => group.id
  const moreGroups = groups.length > GROUP_PREVIEW_MEDIA_LENGTH
  const moreGroupsCount = groups.length - GROUP_PREVIEW_MEDIA_LENGTH
  const limitGroups = [...groups.slice(0, GROUP_PREVIEW_MEDIA_LENGTH)]

  const goToInterest = () => navigate(NAVIGATION.SCREEN.GROUPSINTERESTING)

  const headerGroup = () => (
    <View style={styles.containerHeaderGroup}>
      <View style={styles.containerText}>
        <Icon name='people-icon' size={18} viewStyle={styles.headerIcon} />
        <Text style={styles.headerTextGroup}>{t('components_Home_Header_Groups')}</Text>
      </View>
      <View style={styles.containerText}>
        <TouchableWithoutFeedback onPress={goToInterest}>
          <View style={styles.containerText}>
            <Icon name='people-icon' size={18} viewStyle={styles.headerRightIcon} color={theme.darkGreenColor} />
            <Text style={[styles.headerTextGroup, { color: theme.darkGreenColor, marginRight: scale(5) }]}>
              {t('components_Group_interesting')}
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.containerText}>
            <Icon name='people-icon' size={18} viewStyle={styles.headerRightIcon} color={theme.darkGreenColor} />
            <Text style={[styles.headerTextGroup, { color: theme.darkGreenColor }]}>
              {t('components_Group_invitations')}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  )

  const HorizontalLine = () => <View style={styles.horizontalLine} />

  const showMoreGroups = () => {
    return (
      <View style={stylesGroup.containerCount}>
        <TouchableOpacity style={stylesGroup.container} onPress={() => onPressMoreGroups()}>
          <ImageBackground
            source={{ uri: groups[GROUP_PREVIEW_MEDIA_LENGTH + 1]?.icon?.url }}
            style={stylesGroup.containerImage}
            resizeMode='cover'
            imageStyle={stylesGroup.image}
          >
            <View style={stylesGroup.backgroundCount}>
              <Text style={stylesGroup.textCount}>{`+ ${moreGroupsCount}`}</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    )
  }
  const renderGroup = ({ item }: { item: GroupInterface | any }) => <Group group={item} onGroupPress={onPressGroup} />
  return (
    <>
      {headerGroup()}
      <HorizontalLine />
      <FlatList
        testID={TEST_IDS.GROUPS.GROUP_SLIDER_ID}
        renderItem={renderGroup}
        data={limitGroups}
        keyExtractor={keyExtractorGroup}
        style={styles.groups}
        showsHorizontalScrollIndicator={false}
        horizontal
        ListFooterComponent={moreGroups ? showMoreGroups() : null}
        ListFooterComponentStyle={styles.imageContainer}
      />
      <HorizontalLine />
    </>
  )
}

export default GroupSlider
