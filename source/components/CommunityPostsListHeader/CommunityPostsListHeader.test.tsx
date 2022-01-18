import React from 'react'
import { Provider } from 'react-redux'
import { cleanup, RenderAPI, render } from '@testing-library/react-native'
import createTestStore from '../../../__mocks__/store'
import CommunityPostsListHeader from './index'
import { TEST_IDS } from '~/constants'

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

describe('Render Community Detail Test', () => {
  let component: RenderAPI
  let storeReducers
  const currentGroupSelectedMock = {
    key: '0001',
    isTitle: true,
    handleOption: () => null,
    title: 'Title Mock',
    color: '#ffffff'
  }

  beforeEach(() => {
    storeReducers = createTestStore()
    component = render(
      <Provider store={storeReducers}>
        <CommunityPostsListHeader avatarUri='' currentGroupSelected={currentGroupSelectedMock} />
      </Provider>
    )
  })

  it('Match with the snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('Renders correctly', () => {
    expect(component).toBeDefined()
    expect(component.queryAllByTestId(TEST_IDS.COMMUNITY.HOME.HEADER).length).toEqual(1)
  })
})
