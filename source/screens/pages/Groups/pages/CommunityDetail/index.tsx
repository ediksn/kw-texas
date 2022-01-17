import React, { useCallback, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  ActivityIndicator,
  Animated,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import FastImage from 'react-native-fast-image'
import { Dropdown, EmptyList, Icon, Post } from '~/components'
import { styles } from './styles'
import { IS_IOS, NAVIGATION, theme } from '~/constants'
import useHandleScroll from '~/hooks/useHandleScroll'
import { RootState } from '~/store'
import { GroupInterface, OptionInterface } from '~/interfaces/groupInterface'
import Button from '~/components/Button'
import { homeActions } from '~/store/actions'
import { PostInterface } from '~/interfaces/postInterface'
import FastImageAvatar from '~/components/FastImageAvatar'
import Fade from '~/components/Fade'
import Message from '../../../../../../assets/images/message.png'
import { useDeviceWidth } from '~/hooks'
import CommunityPostsListHeader from '~/components/CommunityPostsListHeader'
import emptyImageWhite from '../../../../../../assets/images/emptyImageWhite.png'

interface ListFooterComponentProps {
  loadingPosts: boolean
}

const ListFooterComponent = ({ loadingPosts }: ListFooterComponentProps) => {
  if (!loadingPosts) {
    return null
  }
  return <ActivityIndicator color={theme.post.green} size={20} />
}

const CommunityDetail = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { goBack } = navigation
  const selectedCommunity: GroupInterface | undefined = useSelector(
    (state: RootState) => state.home.groups.selectedCommunity
  )
  const [scrolling, setScrolling] = useState(false)
  const [callOnScrollEnd, setCallOnScrollEnd] = useState(false)
  const [communityInfo, setCommunityInfo] = useState({})
  const [pullRefresh, setPullRefresh] = useState(false)
  const [showDropDown, setShowDropDown] = useState(false)
  const { handleScroll, scrolled } = useHandleScroll()
  const DEVICE_WIDTH = useDeviceWidth()
  const { t } = useTranslation()

  if (!selectedCommunity) {
    goBack()
    return null
  }

  const getGroup = (option: OptionInterface) => {
    const { key, title } = option
    const groupSelectedFromDrop = {
      key,
      title: title && title.trim().length > 1 ? title : t('components_General_NoName')
    }
    return groupSelectedFromDrop
  }

  const startDropDown = () => {
    setShowDropDown(true)
    if (!IS_IOS) {
      StatusBar.setBackgroundColor('#2B2B33FF')
      StatusBar.setBarStyle('light-content')
    }
  }

  const stopDropDown = () => {
    setShowDropDown(false)
    if (!IS_IOS) {
      StatusBar.setBackgroundColor(theme.backgrounds.whiteBackground)
      StatusBar.setBarStyle('dark-content')
    }
  }

  const onPostView = (post: PostInterface) => {
    dispatch(homeActions.selectPost(post))
    navigation.navigate(NAVIGATION.SCREEN.POSTVIEW)
  }

  const renderPost = ({ item }: { item: PostInterface }) => (
    <Post post={item} onPostPress={onPostView} containerStyle={styles.postCardContainer} />
  )

  const activeAccount: number = useSelector((state: RootState) => state.usrProfile.activeAccount)
  const usrData: any = useSelector((state: RootState) => state.usrProfile.profiles[activeAccount])
  const limitDefault: number = useSelector((state: RootState) => state.home.groups.limitDefault)
  const limit: number = useSelector((state: RootState) => state.home.groups.limitCommunityPosts)
  const isLoadingPosts: boolean = useSelector((state: RootState) => state.home.groups.postsLoading)
  const posts: PostInterface[] = useSelector((state: RootState) => state.home.groups.selectedCommunityPosts)
  const groups: GroupInterface[] = useSelector((state: RootState) => state.home.groups.data)
  const { id, icon, name } = selectedCommunity

  const avatarUri =
    usrData?.photo || typeof usrData?.photo !== 'undefined'
      ? `https://avatar.kwconnect.com/${usrData?.assigneeId}.jpeg`
      : ''
  const keyExtractor = (post: PostInterface) => post.id.toString()

  const getMyGroupsFormatted = () => {
    let myGroups: OptionInterface[] = []

    groups?.forEach((group: GroupInterface) => {
      myGroups = [
        ...myGroups,
        {
          key: group.id,
          title: group.name.trim().length > 1 ? group.name : t('components_General_NoName')
        }
      ]
    })

    return myGroups
  }

  const onEndReached = () => dispatch(homeActions.fetchSelectedCommunityPosts(limit + 10, id, true))
  const renderCommunityLocation = useCallback(() => {
    if (!communityInfo || !communityInfo?.location) {
      return null
    }
    const {
      location: { city, country, state }
    } = communityInfo
    if (!city || !country || !state) {
      return null
    }

    return (
      <View style={styles.rowLocation}>
        <Icon name='location-icon' size={16} color={theme.greenColor} />
        <Text style={styles.locationText}>{[city, state, country].join(', ')}</Text>
      </View>
    )
  }, [communityInfo])

  const renderMembersAvatars = useCallback(() => {
    if (communityInfo?.members && communityInfo?.members.length > 0) {
      return (
        <>
          {communityInfo.members.slice(0, 3).map((member: any, index: number) => (
            <FastImageAvatar uri={member.photoUrl} avatarStyle={index === 0 ? {} : styles.avatarFixed} />
          ))}
          {communityInfo?.members.length > 3 && (
            <View style={styles.avatarMembersCount}>
              <Text style={styles.membersCountText}>+{communityInfo?.members.length - 3}</Text>
            </View>
          )}
        </>
      )
    }
    return null
  }, [communityInfo])

  const init = async () => {
    const res: any = await dispatch(homeActions.getCommunity(id))
    if (res) {
      setCommunityInfo(res)
    }
  }

  const onRefresh = async () => {
    setPullRefresh(true)
    await dispatch(homeActions.fetchSelectedCommunityPosts(limit, id, true))
    setPullRefresh(false)
  }

  React.useEffect(() => {
    init()
    if (selectedCommunity) {
      dispatch(homeActions.fetchSelectedCommunityPosts(limitDefault, id, false))
    }
  }, [])

  React.useEffect(() => {
    dispatch(homeActions.setScrolled(scrolled))
  }, [scrolled])

  return (
    <SafeAreaView style={styles.safeArea}>
      <Fade visible={scrolled}>
        <View style={styles.animatedViewContainer}>
          <FastImage
            style={styles.communityCoverImage}
            source={
              icon?.url
                ? {
                    uri: icon?.url,
                    priority: FastImage.priority.normal
                  }
                : emptyImageWhite
            }
            resizeMode={icon?.url ? FastImage.resizeMode.cover : FastImage.resizeMode.contain}
          />
          <View style={styles.titleHeaderContainer}>
            <>
              <Text style={styles.communityTitle}>{name}</Text>
              {renderCommunityLocation()}
              <View style={styles.rowMembersJoinLeaveGroup}>
                <View style={styles.rowMembers}>{renderMembersAvatars()}</View>
                <Button
                  message={t('components_CommunityDetail_LeaveGroup')}
                  type={theme.buttons.types.OUTLINED}
                  onPress={() => null}
                  viewStyle={styles.leaveGroupButton}
                />
              </View>
            </>
          </View>
        </View>
      </Fade>
      {isLoadingPosts || posts.length > 0 ? (
        <Animated.FlatList
          onScroll={e => {
            if (pullRefresh && isLoadingPosts) {
              return
            }
            handleScroll(e, scrolling)
          }}
          scrollEventThrottle={16}
          onScrollBeginDrag={() => setScrolling(true)}
          onScrollEndDrag={() => setScrolling(false)}
          data={posts}
          stickyHeaderIndices={[0]}
          renderItem={renderPost}
          onEndReached={() => setCallOnScrollEnd(true)}
          onMomentumScrollEnd={() => {
            if (callOnScrollEnd) {
              onEndReached()
            }
            setCallOnScrollEnd(false)
          }}
          refreshControl={
            <RefreshControl
              refreshing={pullRefresh && isLoadingPosts}
              onRefresh={onRefresh}
              colors={[theme.spinner]}
              tintColor={theme.spinner}
            />
          }
          showsVerticalScrollIndicator={posts?.length > 0}
          style={styles.animatedFlatListStyle}
          ListHeaderComponent={<CommunityPostsListHeader avatarUri={avatarUri} />}
          ListFooterComponent={<ListFooterComponent loadingPosts={!pullRefresh && isLoadingPosts} />}
          keyExtractor={keyExtractor}
        />
      ) : (
        <ScrollView
          style={styles.emptyListScrollContainer}
          contentContainerStyle={styles.emptyListScrollContentContainer}
        >
          <View style={styles.emptyListContainer}>
            <EmptyList
              icon={Message}
              title='components_Home_No_post_message'
              subTitle='components_Home_No_post_message2'
            >
              <Button
                message={t('components_Home_Create_new_post')}
                viewStyle={styles.button}
                textStyle={styles.buttonText}
                onPress={startDropDown}
                testID='create_new_post_button'
              />
            </EmptyList>
          </View>
        </ScrollView>
      )}
      <Dropdown
        buttonRef={null}
        isVisible={showDropDown}
        onRequestClose={stopDropDown}
        dropdonwHeader={
          <View style={[styles.item, { height: 40 }]}>
            <Text allowFontScaling={false} style={styles.dropdownHeader}>
              {t('components_NewPost_Select_Community')}
            </Text>
          </View>
        }
        onSelectOption={option => {
          const groupSelected = getGroup(option)
          navigation.navigate(NAVIGATION.SCREEN.NEWPOST, { currentGroupSelected: groupSelected })
        }}
        options={getMyGroupsFormatted()}
        width={DEVICE_WIDTH - 136}
        fix
        center
      />
    </SafeAreaView>
  )
}

export default CommunityDetail
