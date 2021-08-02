import React from 'react'
import renderer from 'react-test-renderer'
import { Header } from '~/components'
import { theme } from '~/constants'

test('renders correctly', () => {
  const header = renderer.create(<Header title='Home' backgroundColor={theme.backgroundColor} />).toJSON()
  expect(header).toMatchSnapshot()
})
