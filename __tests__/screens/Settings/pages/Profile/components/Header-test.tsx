import React from 'react'
import renderer from 'react-test-renderer'
import { profileResponse } from '../../../../../../__mocks__/mockResponses'
import Header from '~/screens/pages/Profile/components/Header'
import { ProfileInterface } from '~/interfaces/usrInterface'

test('renders correctly', () => {
  const data: ProfileInterface = profileResponse
  const header = renderer.create(<Header userData={data} />).toJSON()
  expect(header).toMatchSnapshot()
})
