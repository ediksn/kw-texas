import React from 'react'
import { render } from '@testing-library/react-native'
import { eventResponse } from '~/../__mocks__/mockResponses'
import EventCard from '~/components/EventCard'
import { TEST_IDS } from '~/constants'

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

describe('<EventCard />', () => {
  let rendered: any

  beforeEach(() => {
    rendered = render(<EventCard event={eventResponse} />)
  })

  it('should render component EventCard correctly', () => {
    const component = rendered.getAllByTestId(TEST_IDS.GENERAL_COMPONENTS.EVENT_CARD_ID)
    expect(component).not.toBeNull()
  })

  it('should render date for EventCard correctly', () => {
    const timestamp = rendered.getByTestId(TEST_IDS.EVENT_CARD.DATE_ID)
    expect(timestamp).not.toBeNull()
  })

  it('should render title for EventCard correctly', () => {
    const title = rendered.getByTestId(TEST_IDS.EVENT_CARD.TITLE_ID)
    expect(title).not.toBeNull()
  })

  it('should render image for EventCard correctly', () => {
    const timestamp = rendered.getByTestId(TEST_IDS.EVENT_CARD.IMAGE_ID)
    expect(timestamp).not.toBeNull()
  })

  it('should render assistance for EventCard correctly', () => {
    const timestamp = rendered.getByTestId(TEST_IDS.EVENT_CARD.ASSISTANCE_ID)
    expect(timestamp).not.toBeNull()
  })

  it('should render interested button for EventCard correctly', () => {
    const timestamp = rendered.getByTestId(TEST_IDS.EVENT_CARD.INTERESTED_BUTTON_ID)
    expect(timestamp).not.toBeNull()
  })

  it('should render share button for EventCard correctly', () => {
    const timestamp = rendered.getByTestId(TEST_IDS.EVENT_CARD.SHARE_BUTTON_ID)
    expect(timestamp).not.toBeNull()
  })
})
