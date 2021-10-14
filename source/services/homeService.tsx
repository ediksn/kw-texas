import { axiosInstanceTokens } from './config'

export default {
  getPickPrompts: () => {
    return [
      {
        id: 1,
        link: 3,
        image: 'blue'
      },
      {
        id: 2,
        link: 8,
        image: 'gray'
      },
      {
        id: 3,
        link: 2,
        image: 'green'
      },
      {
        id: 4,
        link: 7,
        image: 'pink'
      },
      {
        id: 5,
        link: 10,
        image: 'purple'
      },
      {
        id: 6,
        link: 4,
        image: 'purple2'
      },
      {
        id: 7,
        link: 6,
        image: 'red'
      },
      {
        id: 8,
        link: 9,
        image: 'yellow'
      },
      {
        id: 9,
        link: 12,
        image: 'teal2'
      },
      {
        id: 10,
        link: 10,
        image: 'teal'
      }
    ]
  },
  getPosts: async (limit: number) => {
    const axiosInstance = await axiosInstanceTokens()
    return axiosInstance.post('/connect-groups-api/graphql', {
      query:
        '\n    query getGlobalPosts($offset: Int!, $limit: Int!) {\n  getPosts(offset: $offset, limit: $limit) {\n    id\n    content\n    type\n    likedBy\n    likesCount\n    repliesCount\n    bookmarksCount\n    creatorfirstName\n    creatorLastName\n    creatorPhoto\n    createdAt\n    deleted\n    pinned\n    userHasAlreadyLiked\n    userHasAlreadyBookmarked\n    groupId\n    detail {\n      ... on Icon {\n        id\n        url\n      }\n      ... on pollType {\n        status\n        multiple\n        duration\n        pollVoteCount\n        voters\n        pollOption {\n          name\n          count\n          optionId\n        }\n        userHasAlreadyVoted\n      }\n    }\n  }\n}\n    ',
      variables: {
        offset: 0,
        limit
      }
    })
  }
}
