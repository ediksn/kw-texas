import React from 'react'
import { act, render } from '@testing-library/react-native'
import { Provider } from 'react-redux'
import PickPromptSlider from '~/screens/pages/Conversations/components/PickPromptSlider'
import { homeActions } from '~/store/actions'
import createTestStore from '../../../../__mocks__/store'
import { pickPrompts } from '~/constants/testIds'

jest.mock('@react-navigation/native', () => ({
  createNavigatorFactory: jest.fn(),
  useNavigation: () => ({
    navigate: jest.fn(),
    dispatch: jest.fn(),
    goBack: jest.fn(),
    setOptions: jest.fn()
  }),
  useRoute: jest.fn(),
  useFocusEffect: jest.fn()
}))

jest.mock('@react-navigation/material-top-tabs', () => ({
  createMaterialTopTabNavigator: () => ({
    Navigator: jest.mock,
    Screen: jest.mock
  })
}))

jest.mock('@react-navigation/stack', () => ({
  createStackNavigator: () => ({
    Navigator: jest.mock,
    Screen: jest.mock
  })
}))

jest.mock('@react-navigation/bottom-tabs', () => ({
  createBottomTabNavigator: () => ({
    Navigator: jest.mock,
    Screen: jest.mock
  })
}))

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
    expect(component.queryAllByTestId(pickPrompts).length).toEqual(0)
  })
})
