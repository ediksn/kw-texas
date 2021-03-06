import React from 'react'
import { render, RenderAPI } from '@testing-library/react-native'
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

describe('Render Post Media Test', () => {
  let component: RenderAPI

  beforeEach(() => {
    component = render(<PostMedia post={postMockObject} />)
  })

  it('Match with the snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('Renders correctly', () => {
    expect(component).toBeDefined()
  })
})
