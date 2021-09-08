import React from 'react'
import renderer from 'react-test-renderer'
import TextMessage from '~/components/TextMessage'

test('renders correctly', () => {
  const header = renderer.create(<TextMessage type='error' message='This is a example message' />).toJSON()
  expect(header).toMatchSnapshot()
})
