import React from 'react'
import renderer from 'react-test-renderer'
import Post from '~/components/Post'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: any) => key })
}))

test('renders correctly', () => {
  const post = renderer.create(<Post />).toJSON()
  expect(post).toMatchSnapshot()
})
