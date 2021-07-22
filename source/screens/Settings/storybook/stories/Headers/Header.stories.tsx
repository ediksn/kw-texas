/** @format */

import React from 'react'
import { text, color } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import { Header } from '~/components/'
import { theme } from '~/constants'

storiesOf('Header', module).add('Only title', () => (
  <Header title={text('Title', 'Home')} backgroundColor={color('Background color', theme.backgroundColor)} />
))
