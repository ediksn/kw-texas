import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { color, number, text } from '@storybook/addon-knobs'
import { Spinner } from '~/components'

storiesOf('Spinner', module).add('Custom Spinner', () => (
  <Spinner
    isLoading
    color={color('Background color', '#ce011f')}
    message={text('Message text', 'Loading')}
    size={number('Size Spinner', 70)}
  />
))
