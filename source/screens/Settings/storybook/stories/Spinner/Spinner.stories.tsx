import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { color, text } from '@storybook/addon-knobs'
import Spinner from '~/components/Spinner'

storiesOf('Spinner', module).add('Custom Spinner', () => (
  <Spinner isLoading color={color('Background color', '')} message={text('Message text', '')} />
))
