import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { text, select } from '@storybook/addon-knobs'
import { Alert, View } from 'react-native'
import { Button } from '~/components'
import { theme } from '~/constants'
import { styles } from './style.stories'

storiesOf('Button', module).add('Custom Button', () => {
  const buttonThemes = {
    primary: theme.buttons.primary,
    secondary: theme.buttons.secondary
  }

  return (
    <View style={styles.buttonView}>
      <Button
        message={text('Message', 'Ok')}
        THEME={buttonThemes[select('Theme', ['primary', 'secondary'], 'primary')]}
        fontSize={theme.fonts[select('Font Sizes', Object.keys(theme.fonts), 'MEDIUM_SIZE')]}
        type={select('Type', Object.keys(theme.buttons.types), theme.buttons.types.CONTAINED)}
        onPress={() => Alert.alert('Pressured me')}
      />
    </View>
  )
})
