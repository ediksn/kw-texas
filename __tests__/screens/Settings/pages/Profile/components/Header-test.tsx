import React from 'react'
import renderer from 'react-test-renderer'
import { profileResponse } from '../../../../../../__mocks__/mockResponses'
import Header from '~/screens/pages/Settings/pages/Profile/components/Header'

test('renders correctly', () => {
  const data: any = [profileResponse]
  const header = renderer.create(<Header data={data} />).toJSON()
  expect(header).toMatchSnapshot()
})
