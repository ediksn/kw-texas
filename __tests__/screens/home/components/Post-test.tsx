import React from 'react'
import renderer from 'react-test-renderer'
import { postResponse } from '../../../../__mocks__/mockResponses'
import Post from '~/components/Post'
import { PostInterface } from '~/interfaces/postInterface'

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

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: any) => key })
}))

test('renders correctly', () => {
  const item: PostInterface = postResponse
  const post = renderer.create(<Post post={item} />).toJSON()
  expect(post).toMatchSnapshot()
})
