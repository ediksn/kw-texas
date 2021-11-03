import React from 'react'
import renderer from 'react-test-renderer'
import EmptyList from '~/components/EmptyList'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: any) => key })
}))

test('renders correctly', () => {
  const title = 'Title'
  const icon = null
  const iconStyle = {}
  const emtpyList = renderer.create(<EmptyList title={title} icon={icon} iconStyle={iconStyle} />).toJSON()
  expect(emtpyList).toMatchSnapshot()
})
