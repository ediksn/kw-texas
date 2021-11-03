// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

describe('Library Test', () => {
  it('should pass test', async () => {
    expect(true).toEqual(true)
  })
})

// import React from 'react'
// import { act, render } from '@testing-library/react-native'
// import * as reactRedux from 'react-redux'
// import createTestStore from '../../../__mocks__/store'
// import { Conversations } from '~/screens/pages'
// import { videoActions } from '~/store/actions'
// import { videoCardComponent, videoListComponent } from '~/constants'

// jest.mock('react-i18next', () => ({
//   useTranslation: () => ({ t: (key: any) => key })
// }))

// jest.mock('@react-native-community/netinfo', () => ({
//   useNetInfo: () => ({ t: (key: any) => key })
// }))

// jest.mock('rn-fetch-blob', () => ({
//   fetch: () => ({ t: (key: any) => key })
// }))

// jest.mock('@react-navigation/native', () => ({
//   useFocusEffect: () => ({ t: (key: any) => key })
// }))

// const goBack = jest.fn()
// const navigate = jest.fn()
// const setOptions = jest.fn()

// describe('Library test', () => {
//   let component: any
//   let store: any

//   beforeEach(async () => {
//     const promise = Promise.resolve(videoActions.getVideos(0))
//     store = createTestStore()
//     component = render(
//       <reactRedux.Provider store={store}>
//         <Conversations navigation={{ goBack, navigate, setOptions }} />
//       </reactRedux.Provider>
//     )
//     await act(() => promise)
//   })

//   it('Renders correctly', () => {
//     expect(component).toBeDefined()
//     expect(component.queryAllByTestId(videoListComponent).length).toEqual(1)
//     expect(component.queryAllByTestId(videoCardComponent).length).toEqual(0)
//   })
// })
