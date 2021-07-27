/** @format */

import React, { useState, createElement } from 'react'
import { text, boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import { Input } from '~/components/'

storiesOf('Input', module).add('Input', () =>
  createElement(() => {
    const [textValue, setTextValue] = useState('')
    return (
      <Input
        title={text('Title', 'Full Name')}
        value={textValue}
        onChangeText={setTextValue}
        disabled={boolean('Disabled', false)}
        required={boolean('Is required', false)}
        error={boolean('Error', false)}
        style={{ marginHorizontal: '2%' }}
      />
    )
  })
)
