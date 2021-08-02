import React from 'react'
import renderer from 'react-test-renderer'
import { Header } from '~/components'
import { theme } from '~/constants'

test('renders correctly', () => {
  const tree = renderer.create(<Header title='Home' backgroundColor={theme.backgroundColor} />).toJSON()
  expect(tree).toMatchSnapshot()
})
