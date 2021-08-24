import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useTranslation } from 'react-i18next'
import { styles } from './styles'
import { Button, Input } from '~/components'

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  leftButtonAction?: () => {}
  rightButtonAction?: () => {}
}

const SaveVideo = ({ setOpen, leftButtonAction, rightButtonAction }: Props) => {
  const { t } = useTranslation()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const Header = () => (
    <View style={styles.header}>
      <Text style={styles.title}>{t('Save Video')}</Text>
      <TouchableOpacity onPress={() => setOpen(false)}>
        <Text style={styles.title}>X</Text>
      </TouchableOpacity>
    </View>
  )

  const Inputs = () => (
    <>
      <Text style={styles.subtitle}>
        {t(
          'Add details to finish saving your video. You can choose to publish your recording to all beta participants or keep it private..'
        )}
      </Text>
      <Input
        style={styles.input}
        title={t('Title Your Recording')}
        placeholder={t('Enter text...')}
        value={name}
        onChangeText={setName}
        required
      />
      <Input
        style={styles.input}
        title={t('Description')}
        placeholder={t('Enter text...')}
        value={description}
        onChangeText={setDescription}
        multiline
      />
    </>
  )

  const Footer = () => (
    <View style={styles.footer}>
      <Button
        message={t('Save and Keep Private')}
        fontSize={13}
        type='OUTLINED'
        viewStyle={styles.button}
        onPress={leftButtonAction}
      />
      <Button message={t('Publish to Library')} fontSize={13} viewStyle={styles.button} onPress={rightButtonAction} />
    </View>
  )

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.divider} />
      <Inputs />
      <View style={styles.divider} />
      <Footer />
    </View>
  )
}

export default SaveVideo
