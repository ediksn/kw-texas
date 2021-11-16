import React from 'react'
import renderer from 'react-test-renderer'
import HomeFilled from 'assets/images/home-filled.png'
import CustomTabBar from '~/components/CustomTabBar'

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

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}))

test('renders correctly', () => {
  const tabBar = renderer.create(<CustomTabBar PNG={HomeFilled} focused />).toJSON()
  expect(tabBar).toMatchSnapshot()
})
