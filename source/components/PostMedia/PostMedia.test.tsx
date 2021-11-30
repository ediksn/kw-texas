import React from 'react'
import { render } from '@testing-library/react-native'
import PostMedia from '~/components/PostMedia/index'
import { postMockObject } from '../../../__mocks__/mockObjects'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: any) => key })
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
  const header = render(<PostMedia post={postMockObject} />).toJSON()
  expect(header).toMatchSnapshot()
})
