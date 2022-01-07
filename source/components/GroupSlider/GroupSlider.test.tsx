import React from 'react'
import { render, RenderAPI } from '@testing-library/react-native'
import GroupSlider from '~/components/GroupSlider/index'
import { groupsResponse } from '../../../__mocks__/mockResponses'
import { TEST_IDS } from '~/constants/testIds'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: any) => key })
}))

describe('Render Group Slider Test', () => {
  let rendered: RenderAPI
  const mockOnPressGroup = jest.fn()
  const mockOnPressMoreGroups = jest.fn()

  beforeEach(() => {
    rendered = render(
      <GroupSlider groups={groupsResponse} onPressGroup={mockOnPressGroup} onPressMoreGroups={mockOnPressMoreGroups} />
    )
  })

  it('should render component Group Slider correctly', () => {
    const component = rendered.getAllByTestId(TEST_IDS.GROUPS.GROUP_SLIDER_ID)
    expect(component).not.toBeNull()
  })

  it('Match with the snapshot', () => {
    expect(rendered.toJSON()).toMatchSnapshot()
  })

  it('Renders correctly', () => {
    expect(rendered).toBeDefined()
  })
})
