import { render, RenderAPI } from '@testing-library/react-native'
import React from 'react'
import { Dropdown } from '~/components'
import { theme } from '~/constants'
import { OptionInterface } from '~/interfaces/groupInterface'

let component: RenderAPI

interface Props {
  buttonRef: any
  isVisible: boolean
  onRequestClose: () => void
  onSelectOption: (item: OptionInterface) => void
  options: OptionInterface[]
  selectedOption: any
  width?: number
  center?: boolean
  right?: number
  top?: number
}

let mockProps: Props

describe('Dropdown test', () => {
  beforeEach(() => {
    mockProps = {
      buttonRef: null,
      isVisible: false,
      onRequestClose: jest.fn(),
      onSelectOption: jest.fn(),
      options: [],
      selectedOption: null
    }
  })
  component = render(<Dropdown {...mockProps} />)
})

it('Render correctly', () => {
  expect(component).toBeDefined()
})

it('Has option selected', () => {
  const group: OptionInterface = {
    key: '1',
    title: 'Test title',
    color: theme.post.inputText,
    handleOption: jest.fn()
  }
  mockProps = {
    ...mockProps,
    isVisible: true,
    selectedOption: group,
    options: [group]
  }
  component = render(<Dropdown {...mockProps} />)
  expect(component.queryAllByTestId('selectedChek')).toBeTruthy()
})
