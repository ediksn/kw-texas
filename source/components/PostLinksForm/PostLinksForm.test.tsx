import React from 'react'
import { render, RenderAPI } from '@testing-library/react-native'
import { PostLinksForm } from '~/components'

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

describe('Render Header Post Links Form', () => {
  let component: RenderAPI

  beforeEach(() => {
    component = render(<PostLinksForm setLinks={() => ({})} disabledLinks={false} links={[]} />)
  })

  it('Match with the snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('Renders correctly', () => {
    expect(component).toBeDefined()
  })
})
