import React from 'react'
import { render, RenderAPI } from '@testing-library/react-native'
import MakeCommentBar from '~/components/MakeCommentBar/index'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: any) => key })
}))

jest.mock('react-redux', () => ({
  useSelector: () => ({})
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

describe('Render Make Comment Bar Test', () => {
  let component: RenderAPI

  beforeEach(() => {
    component = render(<MakeCommentBar onSubmitComment={() => ({})} keyboardOpen={false} usrData={null} />)
  })

  it('Match with the snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('Renders correctly', () => {
    expect(component).toBeDefined()
  })
})
