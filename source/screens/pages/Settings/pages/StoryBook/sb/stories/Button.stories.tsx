import React from 'react'
import { text, select } from '@storybook/addon-knobs'
import { Alert } from 'react-native'
import { Button } from '~/components'
import { theme } from '~/constants'

const ButtonStories = () => {
  const buttonThemes = {
    primary: theme.buttons.primary,
    secondary: theme.buttons.secondary
  }

  return (
    <Button
      message={text('Message', 'Ok')}
      THEME={buttonThemes[select('Theme', ['primary', 'secondary'], 'primary')]}
      fontSize={theme.fonts[select('Font Sizes', Object.keys(theme.fonts), 'MEDIUM_SIZE')]}
      type={select('Type', Object.keys(theme.buttons.types), theme.buttons.types.CONTAINED)}
      onPress={() => Alert.alert('Pressured me')}
    />
  )
}

export default ButtonStories
