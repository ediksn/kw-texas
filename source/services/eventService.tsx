import moment from 'moment-timezone'
import { axiosInstanceTokens } from './config'

export default {
  getEvents: async (limit: number, startDate: string, endDate: string) => {
    const axiosInstance = await axiosInstanceTokens()
    const zone_name = moment.tz.guess()

    return axiosInstance.post('/kw-connect-next-api/graphql', {
      query:
        '\n    query getEvents($input: EventFilter) {\n  searchOnlineEvents(input: $input) {\n    id\n    name\n    location\n    starts\n    ends\n    slug\n    price\n    instructors {\n      firstName\n      lastName\n    }\n    bookmarked\n    published\n  }\n}\n',
      variables: {
        endDate,
        filterByConnectLive: true,
        filterByEventsICreated: false,
        filterByEventsKWUCreated: false,
        filterByMyCommunities: true,
        filterByMyMarketCenter: true,
        filterByMyMemberships: true,
        filterByMyRegion: true,
        input: {
          endDate,
          filterByConnectLive: true,
          filterByEventsICreated: false,
          filterByEventsKWUCreated: false,
          filterByMyCommunities: true,
          filterByMyMarketCenter: true,
          filterByMyMemberships: true,
          filterByMyRegion: true,
          isBookmarked: false,
          isOnline: true,
          isPublished: true,
          page: 0,
          size: limit,
          startDate,
          timeZone: zone_name
        },
        isBookmarked: false,
        isOnline: true,
        isPublished: true,
        page: 0,
        size: limit,
        startDate,
        timeZone: zone_name
      }
    })
  }
}
