import React from 'react'
import renderer from 'react-test-renderer'
import Post from '~/components/Post'

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
  const post = renderer.create(<Post />).toJSON()
  expect(post).toMatchSnapshot()
})
