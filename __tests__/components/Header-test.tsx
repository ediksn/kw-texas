import React from 'react'
import renderer from 'react-test-renderer'
import { Header } from '~/components'
import { theme } from '~/constants'

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
  const header = renderer.create(<Header title='Home' backgroundColor={theme.backgroundColor} />).toJSON()
  expect(header).toMatchSnapshot()
})
