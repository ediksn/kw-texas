import { axiosInstanceTokens } from './config'

export default {
  getVideos: async (actualPage: number) => {
    const axiosInstance = await axiosInstanceTokens()
    return axiosInstance.post('/api-connect-scripthub/graphql', {
      query:
        'query searchScriptMeeting($range: RangeFilter!, $filter: ScriptFilter!) {\n  searchScriptMeeting(range: $range, filter: $filter) {\n    id\n    title\n    description\n    videoUrl\n    imageUrl\n    status\n    privacy\n    publishedBy\n    liked\n    createdAt\n    likesDetail {\n      likes\n      __typename\n    }\n    bookmarked\n    timeRecorded\n    views\n    agents {\n      id\n      kwUid\n      firstName\n      lastName\n      __typename\n    }\n    creatorHashtags {\n      tag\n      id\n      __typename\n    }\n    scripts {\n      videoUrl\n      videoResponseUrl\n      shortDescription\n      hashtags {\n        id\n        description\n        tag\n        __typename\n      }\n      topics {\n        id\n        title\n        __typename\n      }\n      __typename\n    }\n    formats {\n      format\n      videoUrl\n      __typename\n    }\n    __typename\n  }\n}\n',
      variables: {
        range: { page: actualPage, size: 6 },
        filter: { privacy: 'PUBLIC' }
      }
    })
  },
  postLike: async (backendId: number, like: boolean) => {
    const axiosInstance = await axiosInstanceTokens()
    return axiosInstance.post('/api-connect-scripthub/graphql', {
      operationName: 'thumbUp',
      query: 'mutation thumbUp($input: ThumbInputType!) {\n  thumbUp(input: $input)\n}\n',
      variables: {
        input: { meetingId: backendId, thumbUp: like }
      }
    })
  }
}
