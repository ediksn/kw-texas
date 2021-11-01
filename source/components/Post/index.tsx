import React, { useState, useRef } from 'react'
import moment from 'moment'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useTranslation } from 'react-i18next'
import { moderateScale } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { styles } from './styles'
import { Button, Dropdown } from '~/components'
import { avatarPost, NAVIGATION, theme } from '~/constants'
import { PostInterface } from '~/interfaces/postInterface'
import Icon from '../Icon'
import { useContentTextPost } from '~/hooks'
import { RootState } from '~/store'
import { OptionInterface } from '../../interfaces/groupInterface'
import { authorPost, datePost, dotsOptionsPost, contentPost, buttonPost } from '../../constants/testIds'

const Post = ({ post }: { post: PostInterface }) => {
  const {
    id,
    creatorId,
    createdAt,
    creatorfirstName,
    creatorLastName,
    creatorPhoto,
    content,
    likesCount,
    repliesCount,
    groupId
  } = post
  const author = `${creatorfirstName.toUpperCase()} ${creatorLastName.toUpperCase()}`
  const user: any = useSelector((state: RootState) => state.usrProfile.profiles[0])
  const date = moment(createdAt).format('MM/DD/YY')
  const shares = 0
  const contentText = useContentTextPost(content)
  const [showMore, setShowMore] = useState(false)
  const [showDropDown, setShowDropDown] = useState(false)
  const [hasShowLessMore, setHasShowLessMore] = useState(false)
  const { t } = useTranslation()
  const navigation = useNavigation()
  const hasMyPost = true || creatorId === user.id // In this section get new request to get userConfiguration
  const buttonRef = useRef<any>()
  const [selectedOption, setSelectedOption] = useState<OptionInterface>()

  const addMoreText = (event: any) => {
    setHasShowLessMore(event.nativeEvent.lines.length > 5)
  }

  const getLikesCommentsSharesText = (count: number, text: string) => {
    if (count > 0) {
      return `${count} ${count === 1 ? text.slice(0, text.length - 1) : text}`
    }

    return ''
  }

  const handleEdit = () => {
    setShowDropDown(false)
    navigation.navigate(NAVIGATION.SCREEN.NEWPOST, { editMode: true, idPost: id, groupId })
  }

  const optionsPost = () => {
    const myOptions = [
      {
        key: '1',
        handleOption: () => handleEdit(),
        title: t('Edit')
      },
      {
        key: '2',
        handleOption: () => {},
        title: t('Delete')
      }
    ]
    const options = [
      {
        key: '3',
        handleOption: () => {},
        title: t('Save Post')
      }
    ]

    return hasMyPost ? [...myOptions, ...options] : options
  }

  const HorizontalLine = () => <View style={styles.horizontalLine} />

  const Buttons = () => (
    <View style={styles.buttons}>
      <Button
        testID={buttonPost}
        message={t('Like')}
        type={theme.buttons.types.TEXT}
        icon={{
          name: 'like-icon',
          size: moderateScale(20),
          color: theme.post.green
        }}
        fontSize={theme.fonts.SMALL_SIZE}
        viewStyle={styles.button}
      />
      <Button
        testID={buttonPost}
        message={t('Comment')}
        type={theme.buttons.types.TEXT}
        icon={{
          name: 'comment-icon',
          size: moderateScale(20),
          color: theme.post.green
        }}
        fontSize={theme.fonts.SMALL_SIZE}
        viewStyle={styles.button}
      />
      <Button
        testID={buttonPost}
        message={t('Share')}
        type={theme.buttons.types.TEXT}
        icon={{
          name: 'share-icon',
          size: moderateScale(20),
          color: theme.post.green
        }}
        fontSize={theme.fonts.SMALL_SIZE}
        viewStyle={styles.button}
      />
    </View>
  )

  return (
    <View style={[styles.container]}>
      <View>
        <View style={styles.header}>
          <View style={styles.avatarBox}>
            <Image testID={avatarPost} style={styles.avatar} resizeMode='cover' source={{ uri: creatorPhoto }} />
            <View style={styles.info}>
              <Text testID={authorPost} style={styles.name}>
                {author}
              </Text>
              <Text testID={datePost} style={styles.date}>{`${t('Posted')} ${date}`}</Text>
            </View>
          </View>
          <TouchableOpacity testID={dotsOptionsPost} ref={buttonRef} onPress={() => setShowDropDown(!showDropDown)}>
            <Icon name='threedots-icon' size={8} color={theme.post.dotsColor} />
          </TouchableOpacity>
          <Dropdown
            buttonRef={buttonRef}
            isVisible={showDropDown}
            onRequestClose={() => setShowDropDown(false)}
            onSelectOption={setSelectedOption}
            options={optionsPost()}
            selectedOption={selectedOption}
          />
        </View>
        <View style={styles.body}>
          <View style={styles.content}>
            <Text
              testID={contentPost}
              style={styles.contentText}
              numberOfLines={showMore ? contentText.length : 5}
              ellipsizeMode='clip'
              onTextLayout={addMoreText}
            >
              {contentText}
            </Text>
            {hasShowLessMore && (
              <TouchableOpacity onPress={() => setShowMore(!showMore)}>
                <Text style={styles.showMore}>Show {showMore ? 'less' : 'more'}</Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.infoNumbers}>
            <Text style={styles.infoNumber}>{getLikesCommentsSharesText(likesCount, t('likes'))}</Text>
            <View style={styles.commentsSharesBox}>
              <Text style={[styles.infoNumber, shares > 0 ? styles.comments : null]}>
                {getLikesCommentsSharesText(repliesCount, t('comments'))}
              </Text>
              <Text style={styles.infoNumber}>{getLikesCommentsSharesText(shares, t('shares'))}</Text>
            </View>
          </View>
        </View>
      </View>
      <HorizontalLine />
      <Buttons />
    </View>
  )
}

export default Post
