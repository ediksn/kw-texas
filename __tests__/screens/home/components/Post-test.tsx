import React from 'react'
import { render, RenderAPI } from '@testing-library/react-native'
import { postResponse } from '../../../../__mocks__/mockResponses'
import { PostInterface } from '~/interfaces/postInterface'
import Post from '~/components/Post'
import {
  avatarPost,
  authorPost,
  datePost,
  dotsOptionsPost,
  contentPost,
  buttonPost
} from '../../../../source/constants/testIds'

let component: RenderAPI

jest.useFakeTimers()

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

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ navigate: jest.fn(), goBack: jest.fn() })
}))

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: any) => key })
}))

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}))

describe('Login test', () => {
  const item: PostInterface = postResponse

  beforeEach(() => {
    component = render(<Post post={item} />)
  })

  it('Renders correctly', () => {
    expect(component).toBeDefined()
    expect(component.queryAllByTestId(avatarPost).length).toEqual(1)
    expect(component.queryAllByTestId(authorPost).length).toEqual(1)
    expect(component.queryAllByTestId(datePost).length).toEqual(1)
    expect(component.queryAllByTestId(dotsOptionsPost).length).toEqual(1)
    expect(component.queryAllByTestId(contentPost).length).toEqual(1)
    expect(component.queryAllByTestId(buttonPost).length).toEqual(3)
  })
})
