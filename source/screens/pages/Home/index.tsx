import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { View, FlatList, Text, StatusBar, RefreshControl } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import Message from 'assets/images/message.png'
import { IS_IOS, NAVIGATION } from '~/constants'
import { styles } from './styles'
import { PostInterface } from '~/interfaces/postInterface'
import { RootState } from '~/store'
import { getUsrProfileActions, homeActions } from '~/store/actions'
import { useBackButtonMinimize } from '~/hooks'
import { Spinner, Button, Post, EmptyList, Dropdown } from '~/components'
import { OptionInterface, GroupInterface } from '../../../interfaces/groupInterface'
import { theme } from '../../../constants/theme'
import { useDeviceWidth } from '../../../hooks/settings'
import Loading from '~/components/Loading'

export const Home = () => {
  const dispatch = useDispatch()
  const filterFlagged = true
  const posts: PostInterface[] = useSelector((state: RootState) => state.home.posts.data)
  const limitDefault: number = useSelector((state: RootState) => state.home.posts.limitDefault)
  const limit: number = useSelector((state: RootState) => state.home.posts.limit)
  const loading: boolean = useSelector((state: RootState) => state.home.posts.isLoading)
  const hasMoreLoading: boolean = useSelector((state: RootState) => state.home.posts.hasMoreLoading)
  const isVisibleDropDown: boolean = useSelector((state: RootState) => state.home.isVisibleDropDown)
  useBackButtonMinimize()
  const { t } = useTranslation()
  const navigation = useNavigation()
  const groups: GroupInterface[] = useSelector((state: RootState) => state.home.groups.data)
  const DEVICE_WIDTH = useDeviceWidth()
  const [pullRefresh, setPullRefresh] = useState(false)
  useEffect(() => {
    dispatch(getUsrProfileActions.getUsrProfile())
    dispatch(homeActions.getPosts(limitDefault, false, filterFlagged))
    dispatch(homeActions.getAllGroups())
  }, [dispatch])
  const onPostView = (post: PostInterface) => {
    dispatch(homeActions.selectPost(post))
    navigation.navigate(NAVIGATION.SCREEN.POSTVIEW)
  }
  const renderPost = ({ item }: { item: PostInterface }) => <Post post={item} onPostPress={onPostView} />

  const keyExtractor = (post: PostInterface) => post.id.toString()

  const onRefresh = () => {
    dispatch(homeActions.getPosts(limit, false, filterFlagged))
    setPullRefresh(true)
  }
  const onEndReached = () => dispatch(homeActions.getPosts(limit + 10, true))

  const getGroup = (option: OptionInterface) => {
    const { key, title } = option
    const groupSelectedFromDrop = {
      key,
      title: title && title.trim().length > 1 ? title : t('components_General_NoName')
    }
    return groupSelectedFromDrop
  }

  const startDropDown = () => {
    dispatch(homeActions.showDropDown())
    if (!IS_IOS) {
      StatusBar.setBackgroundColor('#2B2B33FF')
      StatusBar.setBarStyle('light-content')
    }
  }

  const stopDropDown = () => {
    dispatch(homeActions.hideDropDown())
    if (!IS_IOS) {
      StatusBar.setBackgroundColor(theme.backgrounds.whiteBackground)
      StatusBar.setBarStyle('dark-content')
    }
  }

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

  const EmptyPosts = () => (
    <EmptyList icon={Message} title='components_Home_No_post_message' subTitle='components_Home_No_post_message2'>
      <Button
        message={t('components_Home_Create_new_post')}
        viewStyle={styles.button}
        textStyle={styles.buttonText}
        onPress={startDropDown}
        testID='create_new_post_button'
      />
    </EmptyList>
  )

  return (
    <View style={styles.container}>
      <Loading isLoading={loading && !pullRefresh}>
        <FlatList
          renderItem={renderPost}
          data={posts}
          keyExtractor={keyExtractor}
          refreshControl={
            <RefreshControl
              refreshing={loading}
              onRefresh={onRefresh}
              colors={[theme.spinner]}
              tintColor={theme.spinner}
            />
          }
          onEndReached={onEndReached}
          onEndReachedThreshold={1}
          ListEmptyComponent={EmptyPosts}
          style={styles.list}
          showsVerticalScrollIndicator={posts?.length > 0}
          contentContainerStyle={styles.contentListStyle}
          ListFooterComponent={<Spinner isLoading={hasMoreLoading} size='small' color='#3D424D' />}
        />
      </Loading>
      <Dropdown
        buttonRef={null}
        isVisible={isVisibleDropDown}
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
    </View>
  )
}
