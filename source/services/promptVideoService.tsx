import moment from 'moment'
import { axiosInstanceTokens } from './config'

export default {
  getPromptVideos: async (actualPage: number) => {
    const axiosInstance = await axiosInstanceTokens()
    return axiosInstance.post('https://qa-kong.command-api.kw.com/api-connect-scripthub/graphql', {
      query:
        'query getDailyPersonScript($input: RangeFilter!, $currentUserDay: String!) {\n  getSoloScripts(range: $input, currentUserDay: $currentUserDay) {\n    id\n    shortDescription\n    description\n    videoUrl\n    videoResponseUrl\n    startDate\n    recordings\n    lastRecording\n    endDate\n    hashtags {\n      id\n      tag\n      __typename\n    }\n    person {\n      id\n      firstName\n      lastName\n      imageUrl\n      createdAt\n      updatedAt\n      __typename\n    }\n    roles {\n      id\n      name\n      description\n      roleType\n      createdAt\n      updatedAt\n      __typename\n    }\n    topics {\n      id\n      title\n      hashtags {\n        id\n        tag\n        description\n        createdAt\n        updatedAt\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n',
      variables: { currentUserDay: moment(new Date()).format('YYYY-MM-DD'), input: { page: actualPage, size: 20 } }
    })
  }
}
