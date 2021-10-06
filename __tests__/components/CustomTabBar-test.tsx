import React from 'react'
import renderer from 'react-test-renderer'
import CustomTabBar from '~/components/CustomTabBar'

test('renders correctly', () => {
  const tabBar = renderer.create(<CustomTabBar name='home-icon' focused />).toJSON()
  expect(tabBar).toMatchSnapshot()
})
