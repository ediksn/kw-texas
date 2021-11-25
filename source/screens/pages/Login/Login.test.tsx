import React from 'react'
import { render, RenderAPI } from '@testing-library/react-native'
import { Provider } from 'react-redux'

import { Login } from '~/screens/pages'
import createTestStore from '../../../../__mocks__/store'
import { kwLogo, passwordInput, signinButton, usernameInput } from '~/constants'

let component: RenderAPI

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: any) => key })
}))

jest.mock('react-native-biometrics', () => ({
  isSensorAvailable: jest.fn(() => Promise.resolve({ then: jest.fn() }))
}))

jest.mock('@react-native-community/netinfo', () => ({
  useNetInfo: () => ({ t: (key: any) => key })
}))

// eslint-disable-next-line global-require
jest.mock('react-native-permissions', () => require('react-native-permissions/mock'))

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
  })
})
