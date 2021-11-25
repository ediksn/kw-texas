import React from 'react'
import renderer from 'react-test-renderer'
import { profileResponse } from '../../../../../../__mocks__/mockResponses'
import Header from '~/screens/pages/Profile/components/Header'
import { ProfileInterface } from '~/interfaces/usrInterface'

jest.mock('react-redux', () => {
  const ActualReactRedux = jest.requireActual('react-redux')
  return {
    ...ActualReactRedux,
    useDispatch: jest.fn().mockImplementation(() => {
      return jest.fn()
    }),
    useSelector: jest.fn().mockImplementation(() => {
      return jest.fn()
    })
  }
})

test('renders correctly', () => {
  const data: ProfileInterface = profileResponse
  const header = renderer.create(<Header userData={data} />).toJSON()
  expect(header).toMatchSnapshot()
})
