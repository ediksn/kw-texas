import React from 'react'
import { render, RenderAPI } from '@testing-library/react-native'
import { Provider } from 'react-redux'

import { Login } from '~/screens/pages'
import createTestStore from '../../__mocks__/store'

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
    expect(component.getByTestId('username-input')).toBeDefined()
    expect(component.getByTestId('password-input')).toBeDefined()
    expect(component.getByTestId('signin-button')).toBeDefined()
    expect(component.getByTestId('forgot-button')).toBeDefined()
  })
})
