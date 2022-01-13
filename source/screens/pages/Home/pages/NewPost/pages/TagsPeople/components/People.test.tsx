import React from 'react'
import { render, RenderAPI } from '@testing-library/react-native'
import People from './People'
import { PeopleInterface } from '~/interfaces/peopleInterface'
import { peopleResponse } from '~/../__mocks__/mockResponses'

jest.mock('react-redux', () => ({
  useSelector: () => ({})
}))

describe('Render People Component Test', () => {
  let component: RenderAPI
  const mockPeople: PeopleInterface = peopleResponse.data.data.getAllUsers[0]

  beforeEach(() => {
    component = render(<People people={mockPeople} handlePeopleMarked={() => null} />)
  })

  it('Match with the snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('Renders correctly', () => {
    expect(component).toBeDefined()
  })
})
