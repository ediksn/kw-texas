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
    expect(component.queryAllByTestId('username-input').length).toEqual(1)
    expect(component.queryAllByTestId('password-input').length).toEqual(1)
    expect(component.queryAllByTestId('signin-button').length).toEqual(1)
    expect(component.queryAllByTestId('forgot-button').length).toEqual(1)
  })
})
