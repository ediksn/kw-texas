import React from 'react'
import { act, render } from '@testing-library/react-native'
import { Provider } from 'react-redux'
import PickPromptSlider from '~/screens/pages/Conversations/components/PickPromptSlider'
import { homeActions } from '~/store/actions'
import createTestStore from '../../../../__mocks__/store'
import { pickPrompts } from '~/constants/testIds'

jest.mock(
  'rn-fetch-blob',
  () => {
    return {
      DocumentDir: () => {},
      ImageCache: {
        get: {
          clear: () => {}
        }
      },
      fs: {
        exists: jest.fn(),
        dirs: {
          MainBundleDir: () => {},
          CacheDir: () => {},
          DocumentDir: () => {}
        }
      }
    }
  },
  { virtual: true }
)

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: any) => key })
}))

jest.mock('rn-fetch-blob', () => ({
  fetch: () => ({ t: (key: any) => key })
}))

jest.mock('@react-navigation/native', () => ({
  useFocusEffect: () => ({ t: (key: any) => key })
}))

const goBack = jest.fn()
const navigate = jest.fn()
const setOptions = jest.fn()

describe('renders correctly', () => {
  let component: any
  let store: any

  beforeEach(async () => {
    const promise = Promise.resolve(homeActions.getPickPrompts())
    store = createTestStore()
    component = render(
      <Provider store={store}>
        <PickPromptSlider navigation={{ goBack, navigate, setOptions }} />
      </Provider>
    )
    await act(() => promise)
  })

  it('Renders correctly', () => {
    expect(component).toBeDefined()
    expect(component.queryAllByTestId(pickPrompts).length).toEqual(0)
  })
})
