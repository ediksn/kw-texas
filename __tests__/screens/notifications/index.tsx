import React from 'react'
import renderer from 'react-test-renderer'
import { Notifications } from '~/screens/pages/Notifications/index'

let mockLoading = false

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

jest.mock('react-redux', () => {
  const ActualReactRedux = jest.requireActual('react-redux')
  return {
    ...ActualReactRedux,
    useDispatch: jest.fn().mockImplementation(() => {
      return jest.fn()
    }),
    useSelector: jest.fn().mockImplementation(() => {
      return jest.fn()
    })
  }
})

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native')
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn()
    }),
    useFocusEffect: jest.fn()
  }
})

jest.mock('~/screens/pages/Notifications/hooks/useNavigation', () => {
  return jest.fn(() => ({
    loading: mockLoading
  }))
})

beforeAll(() => {
  mockLoading = false
})

test('renders correctly', () => {
  const emtpyList = renderer.create(<Notifications />).toJSON()
  expect(emtpyList).toMatchSnapshot()
})
