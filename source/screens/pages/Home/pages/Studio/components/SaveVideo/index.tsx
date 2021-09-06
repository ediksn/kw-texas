import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, Text, TouchableOpacity, View } from 'react-native'
import { useTranslation } from 'react-i18next'
import { styles } from './styles'
import { Button, Input } from '~/components'
import { IS_IOS, KEYBOARD_AVOIDING_VIEW_BEHAVIOR } from '~/constants'
import { useDispatch } from 'react-redux'
import { uploadVideoActions } from '~/store/actions'

interface Props {
  data: any
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SaveVideo = ({ data, setOpen }: Props) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [error, setError] = useState(false)
  const [description, setDescription] = useState('')

  useEffect(() => {
    setError(false)
  }, [name])

  const handlePublish = () => {
    if (name === '') {
      setError(true)
    } else {
      dispatch(uploadVideoActions.uploadVideo(data, name, description))
    }
  }

  const handleSave = () => {
    if (!data) {
      // something is wrong with the video data
    } else {
      // manage redux actions
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
      <Button
        message={t('Save and Keep Private')}
        fontSize={13}
        type='OUTLINED'
        viewStyle={styles.button}
        onPress={handleSave}
      />
      <Button message={t('Publish to Library')} fontSize={13} viewStyle={styles.button} onPress={handlePublish} />
    </View>
  )

  return (
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
  )
}

export default SaveVideo
