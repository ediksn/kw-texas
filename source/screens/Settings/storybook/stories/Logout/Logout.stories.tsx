/** @format */

import React, { createElement } from 'react'
import { storiesOf } from '@storybook/react-native'
import Logout from '~/components/Logout'

storiesOf('Log out', module).add('Log out', () =>
  createElement(() => {
    return <Logout />
  })
)
