import React from 'react'
import renderer from 'react-test-renderer'
import { Input } from '~/components'

test('renders correctly', () => {
  const header = renderer.create(<Input title='Input' />).toJSON()
  expect(header).toMatchSnapshot()
})
