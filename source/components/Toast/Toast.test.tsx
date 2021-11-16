import React from 'react'
import { render } from '@testing-library/react-native'
import { Toast } from '~/components'
import { TEST_IDS } from '~/constants'

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}))

describe('<Toast />', () => {
  let rendered: any

  beforeEach(() => {
    rendered = render(<Toast open title='' type='' menuHeight={0} />)
  })

  it('should render component Toast correctly', () => {
    const component = rendered.getAllByTestId(TEST_IDS.GENERAL_COMPONENTS.TOAST_ID)
    expect(component).not.toBeNull()
  })

  it('should render icon for Toast correctly', () => {
    const title = rendered.getByTestId(TEST_IDS.TOAST.ICON_ID)
    expect(title).not.toBeNull()
  })

  it('should render title for Toast correctly', () => {
    const title = rendered.getByTestId(TEST_IDS.TOAST.TITLE_ID)
    expect(title).not.toBeNull()
  })
})
