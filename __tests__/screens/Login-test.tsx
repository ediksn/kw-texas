import React from 'react'
import { render, RenderAPI } from '@testing-library/react-native'
import { Provider } from 'react-redux'

import { Login } from '~/screens/pages'
import createTestStore from '../../__mocks__/store'
import { forgotButton, passwordInput, signinButton, usernameInput } from '~/constants'

let component: RenderAPI

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: any) => key })
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
    expect(component.getByTestId(usernameInput)).toBeDefined()
    expect(component.getByTestId(passwordInput)).toBeDefined()
    expect(component.getByTestId(signinButton)).toBeDefined()
    expect(component.getByTestId(forgotButton)).toBeDefined()
  })
})
