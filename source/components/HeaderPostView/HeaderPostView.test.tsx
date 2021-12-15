import React from 'react'
import { render, RenderAPI } from '@testing-library/react-native'
import HeaderPostView from '~/components/HeaderPostView/index'

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

describe('Render Header Post View Test', () => {
  let component: RenderAPI

  beforeEach(() => {
    component = render(
      <HeaderPostView>
        <></>
      </HeaderPostView>
    )
  })

  it('Match with the snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('Renders correctly', () => {
    expect(component).toBeDefined()
  })
})
