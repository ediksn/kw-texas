import React from 'react'
import { render, RenderAPI } from '@testing-library/react-native'
import Group from '~/components/Group/index'
import { groupMockObject } from '../../../__mocks__/mockObjects'
import { TEST_IDS } from '~/constants/testIds'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: any) => key })
}))

describe('Render Group Test', () => {
  let rendered: RenderAPI
  const mockOnPressGroup = jest.fn()

  beforeEach(() => {
    rendered = render(<Group group={groupMockObject} onGroupPress={mockOnPressGroup} />)
  })

  it('should render component Group correctly', () => {
    const component = rendered.getAllByTestId(TEST_IDS.GROUPS.GROUP_ID)
    expect(component).not.toBeNull()
  })

  it('Match with the snapshot', () => {
    expect(rendered.toJSON()).toMatchSnapshot()
  })

  it('Renders correctly', () => {
    expect(rendered).toBeDefined()
  })
})
