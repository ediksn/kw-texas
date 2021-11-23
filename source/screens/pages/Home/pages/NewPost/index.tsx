import React, { useState, useEffect, useRef } from 'react'
import { Image, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { Icon, Header, Dropdown, Spinner } from '~/components'
import { styles } from './styles'
import { IS_IOS, NAVIGATION, theme } from '~/constants'
import { RootState } from '~/store'
import { FormPostInterface, PostInterface } from '~/interfaces/postInterface'
import { useUnRichContent, useRichContent } from '~/hooks'
import { homeActions, toastActions } from '~/store/actions'
import { GroupInterface, OptionInterface } from '~/interfaces/groupInterface'

const NewPost = () => {
  const { t } = useTranslation()
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { params } = useRoute()
  const { editMode, idPost, groupId }: any = params
  const activeAccount: number = useSelector((state: RootState) => state.usrProfile.activeAccount)
  const usrData: any = useSelector((state: RootState) => state.usrProfile.profiles[activeAccount])
  const posts: PostInterface[] = useSelector((state: RootState) => state.home.posts.data)
  const loading: boolean = useSelector((state: RootState) => state.home.posts.isLoading)
  const groups: GroupInterface[] = useSelector((state: RootState) => state.home.groups.data)
  const limitDefault: number = useSelector((state: RootState) => state.home.groups.limitDefault)
  const currentPost = posts.find(p => p.id === idPost)
  const content = currentPost?.content || ''
  const contentText = useUnRichContent(content)
  const [inputValue, setInputValue] = useState(editMode ? contentText : '')
  const [showDropDown, setShowDropDown] = useState(false)
  const [groupSelected, setGroupSelected] = useState<OptionInterface>({
    key: '0',
    title: t('components_NewPost_Select_Community'),
    color: theme.post.inputText
  })
  const hasValidForm = !editMode && inputValue !== '' && groupSelected.key !== '0'
  const buttonRef = useRef<any>()
  const inputRef = useRef<any>()

  useEffect(() => {
    dispatch(homeActions.getGroups(limitDefault))
    if (editMode && groupId) {
      setTimeout(async () => {
        const res: any = await dispatch(homeActions.getGroupInfo(groupId))
        res.name = res.name.trim()
        if (res) {
          setGroupSelected({ key: res.id, title: res.name })
        }
      }, 0)
    }
  }, [])

  const handleSubmit = async () => {
    setShowDropDown(false)
    const form: FormPostInterface = {
      group: groupSelected.key,
      text: useRichContent(inputValue)
    }

    const res: any = await dispatch(editMode ? homeActions.editPost(form) : homeActions.createPost(form))
    if (res) {
      dispatch(
        toastActions.showSuccessToast(editMode ? 'home_post_toast_message_edited' : 'home_post_toast_message_added')
      )
      navigation.goBack()
    } else {
      dispatch(toastActions.showErrorToast('Something went wrong'))
    }
  }

  const handleGroup = ({ id, name }: GroupInterface) => {
    const groupSelectedFromDrop = {
      key: id,
      name: name.trim().length > 1 ? name : 'NO NAME'
    }
    setGroupSelected(groupSelectedFromDrop)
    setShowDropDown(false)
    inputRef?.current?.focus()
  }

  const getMyGroupsFormatted = () => {
    let myGroups: OptionInterface[] = [
      {
        key: '0',
        isTitle: true,
        title: t('components_NewPost_Select_Community'),
        color: theme.post.inputText
      }
    ]

    groups.forEach((group: GroupInterface) => {
      myGroups = [
        ...myGroups,
        {
          key: group.id,
          handleOption: () => handleGroup(group),
          title: group.name.trim().length > 1 ? group.name : 'NO NAME'
        }
      ]
    })

    return myGroups
  }

  const leftButton = <Icon name='close-icon' size={16.5} />
  const rightButton = (
    <Spinner isLoading={loading} size={25} color={theme.post.green}>
      <Text style={[styles.rightText, !hasValidForm && styles.rightTextDisabled]}>
        {t(`${editMode ? 'Edit' : 'Post'}`)}
      </Text>
    </Spinner>
  )

  return (
    <>
      <Header
        title={t(`${editMode ? 'Edit ' : 'Create '} Post`)}
        style={styles.header}
        leftButton={leftButton}
        onClickLeft={() => navigation.navigate(NAVIGATION.SCREEN.HOME)}
        rightButton={rightButton}
        onClickRight={() => (hasValidForm && handleSubmit()) || null}
      />
      <KeyboardAvoidingView
        behavior={IS_IOS ? 'padding' : undefined}
        keyboardVerticalOffset={IS_IOS ? 40 : 0}
        style={styles.content}
      >
        <View style={styles.body}>
          <View style={styles.avatarBox}>
            <Image style={styles.avatar} resizeMode='cover' source={{ uri: usrData?.userProfile.photo }} />
            <View style={styles.info}>
              <Text style={styles.name}>{usrData?.name.toUpperCase()}</Text>
              <TouchableOpacity ref={buttonRef} style={styles.dropTouch} onPress={() => setShowDropDown(!showDropDown)}>
                <Text style={styles.group} ellipsizeMode='tail' numberOfLines={1}>
                  {groupSelected?.title}
                </Text>
                <Icon name={`drop${showDropDown ? 'up' : 'down'}-icon`} size={6} color={theme.post.green} />
              </TouchableOpacity>
              <Dropdown
                buttonRef={buttonRef}
                isVisible={showDropDown}
                onRequestClose={() => setShowDropDown(false)}
                onSelectOption={setGroupSelected}
                options={getMyGroupsFormatted()}
                selectedOption={groupSelected}
                width={239}
                center
              />
            </View>
          </View>

          <TextInput
            ref={inputRef}
            value={inputValue}
            onChangeText={text => setInputValue(text)}
            placeholder={t('components_NewPost_Share_today')}
            placeholderTextColor={theme.post.inputTitle}
            textAlignVertical='top'
            autoFocus={!showDropDown}
            multiline
            style={styles.inputText}
          />
        </View>

        <View style={styles.footer}>
          <Icon name='gallery-icon' size={24} color={theme.post.green} />
          <Icon name='camera-icon' size={24} color={theme.post.green} />
          <Icon name='people-icon' size={24} color={theme.post.green} />
          <Icon name='location-icon' size={24} color={theme.post.green} />
        </View>
      </KeyboardAvoidingView>
    </>
  )
}

export default NewPost
