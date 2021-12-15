import React from 'react'
import { render, RenderAPI } from '@testing-library/react-native'
import { postMockObject } from '../../../__mocks__/mockObjects'
import { PostInfo } from '~/components'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: any) => key })
}))

jest.mock('react-redux', () => ({
  useDispatch: () => ({})
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

describe('Render Post Info Test', () => {
  let component: RenderAPI

  beforeEach(() => {
    component = render(<PostInfo post={postMockObject} commentsCount={1} customContainerStyle={{}} />)
  })

  it('Match with the snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('Renders correctly', () => {
    expect(component).toBeDefined()
  })
})
