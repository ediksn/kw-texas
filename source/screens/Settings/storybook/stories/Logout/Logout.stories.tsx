/** @format */

import React, { createElement } from 'react'
import { storiesOf } from '@storybook/react-native'
import Logout from '~/components/Logout'

storiesOf('Logout', module).add('Just text', () =>
  createElement(() => {
    return <Logout />
  })
)
