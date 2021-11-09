import React from 'react'
import { render, RenderAPI } from '@testing-library/react-native'
import { Provider } from 'react-redux'

import { Login } from '~/screens/pages'
import createTestStore from '../../../../__mocks__/store'
import { illustrationLogo, kwLogo, passwordInput, signinButton, usernameInput } from '~/constants'

let component: RenderAPI

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

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: any) => key })
}))

jest.mock('@react-native-community/netinfo', () => ({
  useNetInfo: () => ({ t: (key: any) => key })
}))

jest.mock('rn-fetch-blob', () => ({
  fetch: () => ({ t: (key: any) => key })
}))

jest.mock('react-native-biometrics', () => ({
  isSensorAvailable: jest.fn(() => Promise.resolve({ then: jest.fn() }))
}))

describe('Login test', () => {
  let store

  beforeEach(() => {
    store = createTestStore()
    component = render(
      <Provider store={store}>
        <Login />
      </Provider>
    )
  })

  it('Renders correctly', () => {
    expect(component).toBeDefined()
    expect(component.queryAllByTestId(usernameInput).length).toEqual(1)
    expect(component.queryAllByTestId(passwordInput).length).toEqual(1)
    expect(component.queryAllByTestId(signinButton).length).toEqual(1)
    expect(component.queryAllByTestId(kwLogo).length).toEqual(1)
    expect(component.queryAllByTestId(illustrationLogo).length).toEqual(1)
  })
})
