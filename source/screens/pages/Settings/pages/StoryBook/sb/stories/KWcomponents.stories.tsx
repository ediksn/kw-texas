/** @format */

import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { withKnobs } from '@storybook/addon-knobs'

import ButtonStories from './Button.stories'

const Stories = storiesOf('KW Components', module)
Stories.addDecorator(withKnobs)
Stories.add('Button', () => <ButtonStories />)
