import moment from 'moment-timezone'
import { axiosInstanceTokens } from './config'

export default {
  getEvents: async (limit: number, startDate: string, endDate: string) => {
    const axiosInstance = await axiosInstanceTokens()
    const zone_name = moment.tz.guess()

    return axiosInstance.post('/kw-connect-next-api/graphql', {
      query:
        '\n    query getEvents($input: EventFilter) {\n  searchOnlineEvents(input: $input) {\n    id\n    name\n    location\n    starts\n    ends\n    slug\n    price\n    instructors {\n      firstName\n      lastName\n    }\n    bookmarked\n    published\n  }\n}',
      variables: {
        input: {
          page: 0,
          size: limit,
          timeZone: zone_name,
          startDate,
          endDate,
          isOnline: true,
          filterByConnectLive: true,
          filterByMyRegion: true,
          filterByMyMarketCenter: true,
          filterByMyCommunities: true,
          filterByMyMemberships: true,
          filterByEventsICreated: false,
          filterByEventsKWUCreated: false,
          isBookmarked: false,
          isPublished: true
        }
      }
    })
  }
}
