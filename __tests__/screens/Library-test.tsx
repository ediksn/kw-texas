import React from 'react'
import { waitFor } from '@testing-library/react-native'
import * as reactRedux from 'react-redux'
import { act, create } from 'react-test-renderer'
import createTestStore from '../../__mocks__/store'
import { Home } from '~/screens/pages'
import { libraryVideosSelector } from '../../__mocks__/mockResponses'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: any) => key })
}))

const goBack = jest.fn()
const navigate = jest.fn()
const setOptions = jest.fn()

describe('Library test', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')
  let component: any
  let store: any

  // eslint-disable-next-line no-console
  const consoleError = console.error
  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation((...args) => {
      if (!args[0].includes('Warning: An update to %s inside a test was not wrapped in act')) {
        consoleError(...args)
      }
    })
  })

  beforeEach(async () => {
    store = createTestStore()
    useSelectorMock.mockClear()
    useDispatchMock.mockClear()
    act(() => {
      component = create(
        <reactRedux.Provider store={store}>
          <Home navigation={{ goBack, navigate, setOptions }} />
        </reactRedux.Provider>
      )
    })
  })

  it('Renders correctly', () => {
    const dummyDispatch = jest.fn()
    act(() => {
      useDispatchMock.mockReturnValue(dummyDispatch)
      useSelectorMock.mockReturnValue(libraryVideosSelector)
    })
    waitFor(() => {
      expect(component).toBeDefined()
      expect(component.queryAllByTestId('videolist-test').length).toEqual(0)
    })
  })
})
