import React from 'react'
import { render } from '@testing-library/react-native'
import PostComment from '~/components/PostComment/index'
import { commentMockObject } from '../../../__mocks__/mockObjects'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: any) => key })
}))

jest.mock('react-redux', () => ({
  useSelector: jest.fn()
}))

jest.mock(
  'rn-fetch-blob',
  () => {
    return {
      DocumentDir: () => {},
      ImageCache: {
        get: {
          clear: () => {}
        }
      },
      fs: {
        exists: jest.fn(),
        dirs: {
          MainBundleDir: () => {},
          CacheDir: () => {},
          DocumentDir: () => {}
        }
      }
    }
  },
  { virtual: true }
)

test('renders correctly', () => {
  const header = render(<PostComment item={commentMockObject} />).toJSON()
  expect(header).toMatchSnapshot()
})
