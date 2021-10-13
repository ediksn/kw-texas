import React from 'react'
import renderer from 'react-test-renderer'
import { Input } from '~/components'

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
  const header = renderer.create(<Input title='Input' />).toJSON()
  expect(header).toMatchSnapshot()
})
