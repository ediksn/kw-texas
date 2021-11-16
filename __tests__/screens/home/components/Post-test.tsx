import React from 'react'
import { render, RenderAPI } from '@testing-library/react-native'
import { postResponse } from '../../../../__mocks__/mockResponses'
import { PostInterface } from '~/interfaces/postInterface'
import Post from '~/components/Post'
import {
  avatarPost,
  authorPost,
  datePost,
  dotsOptionsPost,
  contentPost,
  buttonPost
} from '../../../../source/constants/testIds'

let component: RenderAPI

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ navigate: jest.fn(), goBack: jest.fn() }),
  createNavigatorFactory: jest.fn()
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

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}))

describe('Login test', () => {
  const item: PostInterface = postResponse

  beforeEach(() => {
    component = render(<Post post={item} />)
  })

  it('Renders correctly', () => {
    expect(component).toBeDefined()
    expect(component.queryAllByTestId(avatarPost).length).toEqual(1)
    expect(component.queryAllByTestId(authorPost).length).toEqual(1)
    expect(component.queryAllByTestId(datePost).length).toEqual(1)
    expect(component.queryAllByTestId(dotsOptionsPost).length).toEqual(1)
    expect(component.queryAllByTestId(contentPost).length).toEqual(1)
    expect(component.queryAllByTestId(buttonPost).length).toEqual(3)
  })
})
