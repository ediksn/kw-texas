import React, { Dispatch, SetStateAction } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { styles } from './styles'
import { Icon, Input } from '~/components'
import { theme } from '~/constants'
import { addToArray, replaceValueFromIndex, removeFromArray } from '~/utils/arrayHelper'

interface PostLinksFormProps {
  links: string[]
  setLinks: Dispatch<SetStateAction<string[]>>
  disabledLinks: boolean
}

const MAX_LINKS_ALLOWED = 3
export const regexLink = /^((?:https?:\/\/)?[^./]+(?:\.[^./]+)+(?:\/.*)?)$/g

const PostLinksForm = ({ links, setLinks, disabledLinks }: PostLinksFormProps) => {
  const handleChange = (text: string, index: number) => {
    const valueNew = replaceValueFromIndex(links, index, text)
    setLinks(valueNew)
  }

  const addLink = () => {
    const valueNew = addToArray(links, '')
    setLinks(valueNew)
  }

  const removeLink = (index: number) => {
    const newValues = removeFromArray(links, index)
    setLinks(newValues)
  }

  const checkRegex = (i: number) => {
    if (links[i] === '') return false
    const split = links[i].split('.')
    if (split.length === 2 && split[0] === 'www') return true
    const linkRegex = new RegExp(regexLink)
    const test = linkRegex.test(links[i])
    return !test
  }

  return (
    <View>
      {links.map((val, i) => (
        <View key={`link_${i + 1}`}>
          <Input
            value={links[i]}
            title='Add link'
            onChangeText={text => handleChange(text, i)}
            placeholder='Enter link'
            autoCapitalize='none'
            disabled={disabledLinks}
            error={checkRegex(i)}
            style={StyleSheet.flatten([styles.inputAddLink, disabledLinks && styles.disabled])}
          />
          <View style={styles.actionsContainer}>
            {i < MAX_LINKS_ALLOWED - 1 && i === links.length - 1 && (
              <>
                <Icon name='add-circle-icon' size={14} color={theme.darkGreenColor} />
                <Text
                  style={[styles.actionText, disabledLinks && styles.disabled]}
                  onPress={!disabledLinks ? addLink : () => null}
                >
                  Add More
                </Text>
              </>
            )}
            {links.length > 1 && (
              <>
                <Icon name='remove-circle-icon' size={14} color={theme.darkGreenColor} />
                <Text
                  style={[styles.actionText, disabledLinks && styles.disabled]}
                  onPress={!disabledLinks ? () => removeLink(i) : () => null}
                >
                  Remove
                </Text>
              </>
            )}
          </View>
        </View>
      ))}
    </View>
  )
}

export default PostLinksForm
