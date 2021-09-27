import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, Text, TouchableOpacity, View } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import { Button, Input, Spinner } from '~/components'
import { IS_IOS, KEYBOARD_AVOIDING_VIEW_BEHAVIOR, NAVIGATION } from '~/constants'
import { uploadVideoActions } from '~/store/actions'

import { styles } from './styles'
import uploadFileService from '~/services/uploadFileService'
import { RootState } from '~/store'

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  videoUri: any
  timeRecorded: number
}

const SaveVideo = ({ setOpen, videoUri, timeRecorded }: Props) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const [name, setName] = useState('')
  const [error, setError] = useState(false)
  const [description, setDescription] = useState('')
  const [videoSent, setVideoSent] = useState(false)
  const loadingVideo = useSelector((state: RootState) => state.uploadVideo.isLoading)

  const aux = videoUri?.split('.')
  const extension = aux?.slice(-1).pop()

  useEffect(() => {
    if (!loadingVideo && videoSent) navigation.navigate(NAVIGATION.SCREEN.LIBRARY)
  }, [videoSent, loadingVideo])

  useEffect(() => {
    setError(false)
  }, [name])

  const handlePublish = async () => {
    if (name === '') {
      setError(true)
    } else {
      const videoUrl = await uploadFileService.uploadFile(videoUri, name, extension)
      setVideoSent(true)
      dispatch(uploadVideoActions.uploadVideo(videoUrl, name, description, timeRecorded))
    }
  }

  const Header = () => (
    <View style={styles.header}>
      <Text style={styles.title}>{t('Save Video')}</Text>
      <TouchableOpacity onPress={() => setOpen(false)}>
        <Text style={styles.title}>X</Text>
      </TouchableOpacity>
    </View>
  )

  const Footer = () => (
    <View style={styles.footer}>
      <Button message={t('Save and Keep Private')} fontSize={13} type='OUTLINED' viewStyle={styles.button} />

      <Button message={t('Publish to Library')} fontSize={13} viewStyle={styles.button} onPress={handlePublish} />
    </View>
  )

  return (
    <Spinner isLoading={loadingVideo}>
      <KeyboardAvoidingView behavior={KEYBOARD_AVOIDING_VIEW_BEHAVIOR} keyboardVerticalOffset={IS_IOS ? 50 : 70}>
        <View style={styles.container}>
          <Header />
          <View style={styles.divider} />
          <Text style={styles.subtitle}>
            {t(
              'Add details to finish saving your video. You can choose to publish your recording to all beta participants or keep it private..'
            )}
          </Text>
          <Input
            title={t('Recording Title')}
            placeholder={t('Enter text...')}
            value={name}
            onChangeText={setName}
            required
            error={error}
            style={styles.input}
          />
          <Input
            title={t('Description')}
            placeholder={t('Enter text...')}
            value={description}
            onChangeText={setDescription}
            multiline
            style={styles.input}
          />
          <View style={styles.divider} />
          <Footer />
        </View>
      </KeyboardAvoidingView>
    </Spinner>
  )
}

export default SaveVideo
