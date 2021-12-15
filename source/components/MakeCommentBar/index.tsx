import React, { useState } from 'react'
import { Keyboard, TextInput, TouchableOpacity, View } from 'react-native'
import { useTranslation } from 'react-i18next'
import { styles } from './styles'
import Avatar from '~/components/Avatar'
import { theme } from '~/constants'
import { Icon } from '~/components'
import { MAX_CHARACTERS_NEW_POST } from '~/utils/constants'

interface MakeCommentsBarProps {
  usrData: any
  onSubmitComment: (comment: string) => void
  keyboardOpen: boolean
}

const MakeCommentBar = ({ usrData, onSubmitComment, keyboardOpen }: MakeCommentsBarProps) => {
  const [comment, setComment] = useState('')
  const { t } = useTranslation()

  const onSubmitCommentInternal = () => {
    onSubmitComment(comment)
    setComment('')
    Keyboard.dismiss()
  }
  const SendIconButton = () => (
    <TouchableOpacity onPress={onSubmitCommentInternal}>
      <Icon name='send-icon' size={28} color={theme.post.green} />
    </TouchableOpacity>
  )

  return (
    <View style={styles.wrapper}>
      <View style={styles.makeCommentBar}>
        <View style={styles.makeCommentBarAvatar}>
          <Avatar
            uri={
              usrData?.photo || typeof usrData?.photo !== 'undefined'
                ? `https://avatar.kwconnect.com/${usrData?.assigneeId}.jpeg`
                : ''
            }
            avatarStyle={styles.avatar}
            avatarDefaultStyle={styles.avatarDefault}
          />
        </View>
        <TextInput
          value={comment}
          style={styles.input}
          maxLength={MAX_CHARACTERS_NEW_POST}
          textAlignVertical='top'
          placeholder={t('components_MakeCommentBar_Your_comment')}
          multiline
          placeholderTextColor={theme.greenColor}
          onChangeText={setComment}
        />
        {!keyboardOpen && (
          <View style={styles.sendIconButton}>
            <SendIconButton />
          </View>
        )}
      </View>
      {keyboardOpen && (
        <View style={styles.sendIconButtonFixed}>
          <SendIconButton />
        </View>
      )}
    </View>
  )
}

export default MakeCommentBar
