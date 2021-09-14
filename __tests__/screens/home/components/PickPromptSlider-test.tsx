import React from 'react'
import { act, render } from '@testing-library/react-native'
import { Provider } from 'react-redux'
import PickPromptSlider from '~/screens/pages/Home/components/PickPromptSlider'
import { homeActions } from '~/store/actions'
import createTestStore from '../../../../__mocks__/store'
import { pickPrompts } from '~/constants/testIds'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: any) => key })
}))

const goBack = jest.fn()
const navigate = jest.fn()
const setOptions = jest.fn()

describe('renders correctly', () => {
  let component: any
  let store: any

  beforeEach(async () => {
    const promise = Promise.resolve(homeActions.getPickPrompts())
    store = createTestStore()
    component = render(
      <Provider store={store}>
        <PickPromptSlider navigation={{ goBack, navigate, setOptions }} />
      </Provider>
    )
    await act(() => promise)
  })

  it('Renders correctly', () => {
    expect(component).toBeDefined()
    expect(component.queryAllByTestId(pickPrompts).length).toEqual(10)
  })
})
