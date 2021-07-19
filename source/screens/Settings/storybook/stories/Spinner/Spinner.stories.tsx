import React from 'react'
import { storiesOf } from '@storybook/react-native'
import Spinner from '~/components/Spinner'

storiesOf('Spinner', module).add('Custom Spinner', () => <Spinner isLoading />)
