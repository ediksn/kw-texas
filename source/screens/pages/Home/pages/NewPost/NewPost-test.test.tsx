import React from 'react'
import { render, cleanup, RenderAPI } from '@testing-library/react-native'
import { Provider } from 'react-redux'
import createTestStore from '~/../__mocks__/store'
import NewPost from '~/screens/pages/Home/pages/NewPost'

afterEach(cleanup)

jest.mock('@react-navigation/native', () => ({
  createNavigatorFactory: jest.fn(),
  useNavigation: () => ({
    navigate: jest.fn(),
    dispatch: jest.fn(),
    goBack: jest.fn(),
    setOptions: jest.fn()
  }),
  useRoute: () => ({
    params: {
      editMode: false,
      idPost: '1',
      groupId: '1'
    }
  }),
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

describe('Render New Post Test', () => {
  let component: RenderAPI
  let storeReducers

  beforeEach(() => {
    storeReducers = createTestStore()
    component = render(
      <Provider store={storeReducers}>
        <NewPost />
      </Provider>
    )
  })

  it('Renders correctly', () => {
    expect(component).toBeDefined()
  })
})
