import React, { Dispatch, SetStateAction } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { useTranslation } from 'react-i18next'
import { styles } from './styles'
import { Icon, Input } from '~/components'
import { theme } from '~/constants'
import { addToArray, replaceValueFromIndex, removeFromArray } from '~/utils/arrayHelper'
import { validateLink } from '~/utils/linksHelper'

interface PostLinksFormProps {
  links: string[]
  setLinks: Dispatch<SetStateAction<string[]>>
  disabledLinks: boolean
}

const MAX_LINKS_ALLOWED = 3

const PostLinksForm = ({ links, setLinks, disabledLinks }: PostLinksFormProps) => {
  const { t } = useTranslation()
  const handleChange = (text: string, index: number) => {
    if (text.includes(' ')) {
      return
    }
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

  return (
    <View>
      {links.map((val, i) => (
        <View key={`link_${i + 1}`}>
          <Input
            value={links[i]}
            title={t('components_Post_LinksForm_Title')}
            onChangeText={text => handleChange(text, i)}
            placeholder={t('components_Post_LinksForm_Placeholder')}
            autoCapitalize='none'
            disabled={disabledLinks}
            error={validateLink(links[i])}
            autoCorrect={false}
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
