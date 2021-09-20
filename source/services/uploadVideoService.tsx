import { axiosInstanceTokens } from './config'

export default {
  uploadVideos: async (videoUrl: any, title: string, description: string) => {
    const axiosInstance = await axiosInstanceTokens()
    return axiosInstance.post('/api-connect-scripthub/graphql', {
      query: 'mutation createMeeting($input: MeetingInputType){\n createMeeting(input: $input) {\n id\n}\n}\n',
      variables: {
        input: {
          description,
          hashtags: [],
          imageUrl: null,
          isSoloScript: true,
          privacy: 0,
          scriptId: 5,
          timeRecorded: 1,
          title,
          videoUrl: videoUrl
        }
      }
    })
  }
}
