import React from 'react'
import { render, RenderAPI } from '@testing-library/react-native'
import Tags from './index'
import { PeopleMarkedInterface } from '~/interfaces/peopleInterface'

describe('Render People Component Test', () => {
  let component: RenderAPI
  const mockTags: PeopleMarkedInterface = {}

  beforeEach(() => {
    component = render(<Tags tags={mockTags} peopleList={[]} handlePeopleMarked={() => null} />)
  })

  it('Match with the snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('Renders correctly', () => {
    expect(component).toBeDefined()
  })
})
