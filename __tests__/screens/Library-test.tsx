import React from 'react'
import { act, render } from '@testing-library/react-native'
import * as reactRedux from 'react-redux'
import createTestStore from '../../__mocks__/store'
import { Home } from '~/screens/pages'
import { videoActions } from '~/store/actions'
import { videoCardComponent, videoListComponent } from '~/constants'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: any) => key })
}))

const goBack = jest.fn()
const navigate = jest.fn()
const setOptions = jest.fn()

describe('Library test', () => {
  let component: any
  let store: any

  beforeEach(async () => {
    const promise = Promise.resolve(videoActions.getVideos(0))
    store = createTestStore()
    component = render(
      <reactRedux.Provider store={store}>
        <Home navigation={{ goBack, navigate, setOptions }} />
      </reactRedux.Provider>
    )
    await act(() => promise)
  })

  it('Renders correctly', () => {
    expect(component).toBeDefined()
    expect(component.queryAllByTestId(videoListComponent).length).toEqual(1)
    expect(component.queryAllByTestId(videoCardComponent).length).toEqual(0)
  })
})
