import React from 'react'
import renderer from 'react-test-renderer'
import HomeFilled from 'assets/images/home-filled.png'
import CustomTabBar from '~/components/CustomTabBar'

test('renders correctly', () => {
  const tabBar = renderer.create(<CustomTabBar PNG={HomeFilled} focused />).toJSON()
  expect(tabBar).toMatchSnapshot()
})
