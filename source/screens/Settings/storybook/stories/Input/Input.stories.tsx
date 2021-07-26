/** @format */

import React, { useState, createElement } from 'react'
import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import { Input } from '~/components/'

storiesOf('Input', module).add('Without error', () =>
  createElement(() => {
    const [textValue, setTextValue] = useState('')
    return <Input title={text('Title', 'Full Name*')} value={textValue} onChangeText={setTextValue} />
  })
)

storiesOf('Input', module).add('With error', () =>
  createElement(() => {
    const [textValue, setTextValue] = useState('')
    return (
      <Input
        title={text('Title', 'Full Name*')}
        value={textValue}
        onChangeText={setTextValue}
        error
        errorText={text('error', 'First Name Required')}
      />
    )
  })
)
