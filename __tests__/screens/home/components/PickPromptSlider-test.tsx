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

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ t: (key: any) => key })
}))

jest.mock('react-redux', () => ({
  useDispatch: () => ({ t: (key: any) => key }),
  useSelector: () => ({ t: (key: any) => key })
}))

describe('renders correctly', () => {
  let component: any
  let store: any

  beforeEach(async () => {
    const promise = Promise.resolve(homeActions.getPickPrompts())
    store = createTestStore()
    component = render(
      <Provider store={store}>
        <PickPromptSlider />
      </Provider>
    )
    await act(() => promise)
  })

  it('Renders correctly', () => {
    expect(component).toBeDefined()
    expect(component.queryAllByTestId(pickPrompts).length).toEqual(0)
  })
})
