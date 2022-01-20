import React from 'react'
import { Provider } from 'react-redux'
import { cleanup, RenderAPI, render } from '@testing-library/react-native'
import createTestStore from '../../../../../../../__mocks__/store'
import GroupListItem from './index'
import { groupMockObject } from '../../../../../../../__mocks__/mockObjects'

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

describe('Render Group List Item Test', () => {
  let component: RenderAPI
  let storeReducers
  const item = groupMockObject

  beforeEach(() => {
    storeReducers = createTestStore()
    component = render(
      <Provider store={storeReducers}>
        <GroupListItem item={item} />
      </Provider>
    )
  })

  it('Renders correctly', () => {
    expect(component).toBeDefined()
  })
})
