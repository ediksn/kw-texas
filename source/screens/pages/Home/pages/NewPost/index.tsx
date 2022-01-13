import React, { useState, useEffect, useRef } from 'react'
import {
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  TextInput
} from 'react-native'
import { useTranslation } from 'react-i18next'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { launchImageLibrary, launchCamera, MediaType } from 'react-native-image-picker'
import AndroidKeyboardAdjust from 'react-native-android-keyboard-adjust'
import { Icon, Header, Dropdown, Spinner, Input, PostLinksForm } from '~/components'
import { styles } from './styles'
import { IS_IOS, NAVIGATION, theme } from '~/constants'
import { useUnRichContent, useRichContent } from '~/hooks'
import { GroupInterface, OptionInterface } from '~/interfaces/groupInterface'
import ImagePickerPreview from '~/components/ImagePickerPreview'
import { UploadImageInterface } from '~/interfaces/uploadImageInterface'
import { MAX_CHARACTERS_NEW_POST } from '~/utils/constants'
import Avatar from '~/components/Avatar'
import { PostInterface, FormPostInterface, POST_TYPES } from '~/interfaces/postInterface'
import { RootState } from '~/store'
import { homeActions, toastActions } from '~/store/actions'
import { regexLink } from '~/components/PostLinksForm'

const NewPost = () => {
  const { t } = useTranslation()
  const navigation = useNavigation()
  const { navigate } = navigation
  const dispatch = useDispatch()
  const { params } = useRoute()
  const { editMode, idPost, groupId, currentGroupSelected }: any = params
  const activeAccount: number = useSelector((state: RootState) => state.usrProfile.activeAccount)
  const usrData: any = useSelector((state: RootState) => state.usrProfile.profiles[activeAccount])
  const posts: PostInterface[] = useSelector((state: RootState) => state.home.posts.data)
  const loading: boolean = useSelector((state: RootState) => state.home.posts.isLoading)
  const groups: GroupInterface[] = useSelector((state: RootState) => state.home.groups.data)
  const currentPost = posts.find(p => p.id === idPost)
  const content = currentPost?.content || ''
  const isLinkType = currentPost?.type === POST_TYPES.LINK
  const contentText = useUnRichContent(content)
  const images = currentPost?.detail?.attachments || []
  const defaultLinks = editMode && !isLinkType ? [] : ['']
  const linksEdit = currentPost?.detail?.links?.map(link => link.url) || defaultLinks
  const [inputValue, setInputValue] = useState(editMode ? contentText : '')
  const [showDropDown, setShowDropDown] = useState(false)
  const [groupSelected, setGroupSelected] = useState<OptionInterface>()
  const [pickerResponse, setPickerResponse] = useState<UploadImageInterface[]>(editMode ? images : [])
  const [newFiles, setNewFiles] = useState<UploadImageInterface[]>([])
  const [edited, setEdited] = useState(false)
  const [links, setLinks] = useState(linksEdit)
  const disabledLinks = pickerResponse.length > 0 || (editMode && images.length > 0)

  const checkLinks = () => {
    let error = false
    links.forEach((link: string) => {
      const linkRegex = new RegExp(regexLink)
      if (link !== '' && !linkRegex.test(link)) error = true
    })
    return !error
  }

  const linksFilled = () => {
    let exists = false
    links.forEach(link => {
      if (link !== '') {
        exists = true
      }
    })
    return exists
  }
  const hasValidForm = groupSelected?.key !== '0' && checkLinks() && ((edited && inputValue !== '') || linksFilled())
  const buttonRef = useRef<any>()
  const inputRef = useRef<TextInput | null>(null)
  const hasLinks = checkLinks() && linksFilled()
  const addMediaDisabled = pickerResponse.length >= 15 || (editMode && isLinkType) || linksFilled()

  const init = async () => {
    if (Platform.OS === 'android') AndroidKeyboardAdjust.setAdjustResize()
    dispatch(homeActions.getAllGroups())
    if (editMode && groupId) {
      const res: any = await dispatch(homeActions.getGroupInfo(groupId))
      res.name = res.name.trim()
      if (res) {
        setGroupSelected({ key: res.id, title: res.name })
      }
    } else if (currentGroupSelected) setGroupSelected(currentGroupSelected)
  }

  useEffect(() => {
    init()
  }, [])

  useEffect(() => {
    if (pickerResponse.length > 15) {
      dispatch(toastActions.showErrorToast('home_post_toast_message_image_limit'))
    }
  }, [pickerResponse])

  const handleSubmit = async () => {
    setShowDropDown(false)
    Keyboard.dismiss()
    const linksWithHttps: string[] = []

    links.forEach(link => {
      if (link === '') return
      const linkFormatted = link.includes('http') || link.includes('https') ? link : `https://${link}`
      linksWithHttps.push(linkFormatted)
    })

    const form: FormPostInterface = {
      group: groupSelected?.key,
      text: useRichContent(inputValue),
      hasImages: pickerResponse.length > 0,
      images: pickerResponse.length > 0 ? pickerResponse : undefined,
      links: linksWithHttps,
      hasLinks
    }
    const res: any = await dispatch(
      editMode && currentPost?.id
        ? homeActions.editPost(form, currentPost?.id, images, newFiles)
        : homeActions.createPost(form)
    )
    if (res) {
      dispatch(
        toastActions.showSuccessToast(editMode ? 'home_post_toast_message_edited' : 'home_post_toast_message_added')
      )
      navigation.goBack()
    } else {
      dispatch(toastActions.showErrorToast('Something went wrong'))
    }
  }

  const handleGroup = (option: OptionInterface) => {
    const { key, title } = option
    const groupSelectedFromDrop = {
      key,
      title: title && title.trim().length > 1 ? title : t('components_General_NoName')
    }
    setGroupSelected(groupSelectedFromDrop)
    setShowDropDown(false)
    setTimeout(() => {
      inputRef?.current?.focus()
    }, 200)
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

  const handleAttachImage = async () => {
    const options = {
      selectionLimit: 15 - pickerResponse.length,
      mediaType: 'photo' as MediaType,
      includeBase64: false
    }
    launchImageLibrary(options, (res: any) => {
      if (!res.didCancel && !res.error) {
        setPickerResponse((oldState: UploadImageInterface[]) => oldState.concat(res.assets))
        setNewFiles((oldState: UploadImageInterface[]) => oldState.concat(res.assets))
        if (!edited) setEdited(true)
      }
    })
  }

  const handleTakePicture = async () => {
    const options = {
      selectionLimit: 15 - pickerResponse.length,
      mediaType: 'photo' as MediaType,
      includeBase64: false
    }
    launchCamera(options, (res: any) => {
      if (!res.didCancel && !res.error) {
        setPickerResponse((oldState: UploadImageInterface[]) => oldState.concat(res.assets))
        setNewFiles((oldState: UploadImageInterface[]) => oldState.concat(res.assets))
        setEdited(true)
      }
    })
  }

  const handleDeleteImage = (image: UploadImageInterface) => {
    setPickerResponse((oldState: UploadImageInterface[]) => oldState.filter(imageState => imageState !== image))
    if (!edited) setEdited(true)
  }

  const handleOnChangeText = (text: string) => {
    setInputValue(text)
    if (!edited) setEdited(true)
  }

  const leftButton = <Icon name='close-icon' size={16.5} />
  const rightButton = (
    <Spinner isLoading={loading} size='small' color={theme.post.green}>
      <Text style={[styles.rightText, !hasValidForm && !editMode && styles.disabled]}>
        {t(`${editMode ? t('components_NewPost_EditMode') : t('components_NewPost_PostMode')}`)}
      </Text>
    </Spinner>
  )

  return (
    <>
      <Header
        title={t(`${editMode ? t('components_NewPost_Header_Edit_Post') : t('components_NewPost_Header_Create_Post')}`)}
        style={styles.header}
        leftButton={leftButton}
        onClickLeft={() => navigate(NAVIGATION.SCREEN.HOME)}
        rightButton={rightButton}
        onClickRight={hasValidForm ? () => handleSubmit() : null}
        rigthStyle={editMode && !edited ? styles.disabled : {}}
      />
      <KeyboardAvoidingView
        behavior={IS_IOS ? 'padding' : undefined}
        keyboardVerticalOffset={IS_IOS ? 40 : 0}
        style={styles.content}
      >
        <View style={styles.body}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.avatarBox}>
              <Avatar uri={usrData?.userProfile.photo} />
              <View style={styles.info}>
                <Text style={styles.name}>{usrData?.name?.toUpperCase()}</Text>
                <TouchableOpacity
                  ref={buttonRef}
                  style={styles.dropTouch}
                  onPress={() => setShowDropDown(!showDropDown)}
                >
                  <Text style={[styles.group, editMode && styles.disabled]} ellipsizeMode='tail' numberOfLines={1}>
                    {groupSelected?.title}
                  </Text>
                  <Icon
                    name={`drop${showDropDown ? 'up' : 'down'}-icon`}
                    size={6}
                    viewStyle={editMode && styles.disabled}
                    color={theme.post.green}
                  />
                </TouchableOpacity>
                <Dropdown
                  buttonRef={buttonRef}
                  isVisible={showDropDown && !editMode}
                  dropdonwHeader={
                    <View style={[styles.item, { height: 40 }]}>
                      <Text allowFontScaling={false} style={styles.dropdownHeader}>
                        {t('components_NewPost_Select_Community')}
                      </Text>
                    </View>
                  }
                  onRequestClose={() => setShowDropDown(false)}
                  onSelectOption={handleGroup}
                  options={getMyGroupsFormatted()}
                  selectedOption={groupSelected}
                  width={239}
                  center
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
          <ScrollView style={styles.scrollInputs} contentContainerStyle={styles.scrollInputsContainer}>
            <Input
              ref={inputRef}
              value={inputValue}
              title='Add post'
              onChangeText={handleOnChangeText}
              maxLength={MAX_CHARACTERS_NEW_POST}
              placeholder={t('components_NewPost_Share_today')}
              placeholderTextColor={theme.post.inputTitle}
              textAlignVertical='top'
              allowGrow
              autoFocus={!showDropDown}
              multiline
              style={styles.inputAddPost}
            />
            <PostLinksForm links={links} setLinks={setLinks} disabledLinks={disabledLinks} />
          </ScrollView>
        </View>
        <ImagePickerPreview images={pickerResponse} handleDelete={handleDeleteImage} />
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={handleAttachImage}
            disabled={addMediaDisabled}
            style={addMediaDisabled && styles.disabled}
          >
            <Icon name='gallery-icon' size={24} color={theme.post.green} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleTakePicture}
            disabled={addMediaDisabled}
            style={addMediaDisabled && styles.disabled}
          >
            <Icon name='camera-icon' size={24} color={theme.post.green} />
          </TouchableOpacity>
          <Icon name='people-icon' size={24} color={theme.post.green} />
          <Icon name='location-icon' size={24} color={theme.post.green} />
        </View>
      </KeyboardAvoidingView>
    </>
  )
}

export default NewPost
