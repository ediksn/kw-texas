import { Platform } from 'react-native'
import { useUnRichContent } from '~/hooks'
import { FormPostInterface } from '~/interfaces/postInterface'
import { axiosInstanceFormTokens, axiosInstanceTokens } from './config'

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
        '\n    query getGlobalPosts($offset: Int!, $limit: Int!) {\n  getPosts(offset: $offset, limit: $limit) {\n    id\n    content\n    type\n    likedBy\n    likesCount\n    repliesCount\n    bookmarksCount\n    creatorId\n    isUserCreatorOfThePost\n    creatorfirstName\n    creatorLastName\n    creatorPhoto\n    createdAt\n    deleted\n    pinned\n    userHasAlreadyLiked\n    userHasAlreadyBookmarked\n    groupInfo\n    {\n    id\n    name\n    }\n    }\n}\n    ',
      variables: {
        offset: 0,
        limit
      }
    })
  },
  getGroups: async (limit: number) => {
    const axiosInstance = await axiosInstanceTokens()
    return axiosInstance.post('/connect-groups-api/graphql', {
      query:
        '\n    query getListOfGroups($limit: Int!, $offset: Int!) {\n  getListOfJoinedGroups(limit: $limit, offset: $offset) {\n    id\n    name\n    description\n    postCount\n    membersCount\n    status\n    icon {\n      url\n      id\n    }\n  }\n}\n    ',
      variables: {
        offset: 0,
        limit
      }
    })
  },
  getAllGroups: async () => {
    const axiosInstance = await axiosInstanceTokens()
    return axiosInstance.post('/connect-groups-api/graphql', {
      query:
        '\n    query getListOfGroups($limit: Int!, $offset: Int!) {\n  getListOfJoinedGroups(limit: $limit, offset: $offset) {\n    id\n    name\n    description\n    postCount\n    membersCount\n    status\n    icon {\n      url\n      id\n    }\n  }\n}\n    ',
      variables: {
        offset: 0,
        limit: 10000
      }
    })
  },
  getGroupInfo: async (id: string) => {
    const axiosInstance = await axiosInstanceTokens()
    return axiosInstance.post('/connect-groups-api/graphql', {
      query:
        '\n    query getGroupInfo($groupId: String!) {\n  getGroupInfo(groupId: $groupId) {\n    id\n    name\n    description\n    postCount\n    membersCount\n    status\n    icon {\n      url\n      id\n    }\n  }\n  }\n    ',
      variables: {
        groupId: id
      }
    })
  },
  createPost: async (form: FormPostInterface) => {
    const axiosInstance = await axiosInstanceTokens()
    return axiosInstance.post('/connect-groups-api/graphql', {
      query:
        '\n    mutation createPost($post: createPostInput!, $file: [Upload]) {\n  createPost(post: $post, file: $file)\n}\n    ',
      variables: {
        post: {
          group: form.group,
          content: form.text,
          type: 'STANDARD',
          source: 'GROUPS',
          plainTextContent: useUnRichContent(form.text)
        }
      }
    })
  },
  createPostWithMedia: async (form: FormPostInterface) => {
    const axiosInstance = await axiosInstanceFormTokens()
    if (form.hasImages && form.images) {
      const formData = new FormData()
      const fileMap: any = {}
      const fileList: any = []
      form.images.map((file, index) => {
        // eslint-disable-next-line no-param-reassign
        file.uri = Platform.OS === 'ios' ? file.uri.replace('file://', '') : file.uri
        fileMap[index] = [`variables.file.${index}`]
        fileList.push(null)
        return true
      })
      const query =
        'mutation createPost($post: createPostInput!, $file: [Upload]) {\n  createPost(post: $post, file: $file)\n}'
      const operations = JSON.stringify({
        query,
        variables: {
          post: {
            group: form.group,
            content: form.text,
            type: 'FILE',
            source: 'GROUPS',
            plainTextContent: useUnRichContent(form.text)
          },
          file: [null]
        },
        operationName: 'createPost'
      })
      formData.append('operations', operations)
      formData.append('map', JSON.stringify(fileMap))
      form.images.map((file, index) => {
        formData.append(String(index), {
          name: file.fileName,
          type: file.type,
          uri: file.uri
        })
        return true
      })
      return axiosInstance.post('/connect-groups-api/graphql', formData)
    }
    return { data: { data: null } }
  },
  editPost: async (form: FormPostInterface) => {
    const axiosInstance = await axiosInstanceTokens()
    return axiosInstance.post('/connect-groups-api/graphql', {
      query:
        '\n    mutation createPost($post: createPostInput!, $file: [Upload]) {\n  createPost(post: $post, file: $file)\n}\n    ',
      variables: {
        post: {
          group: form.group,
          content: form.text,
          type: 'STANDARD',
          source: 'GROUPS',
          plainTextContent: useUnRichContent(form.text)
        }
      }
    })
  },
  deletePost: async (postId: string) => {
    const axiosInstance = await axiosInstanceTokens()
    return axiosInstance.post('/connect-groups-api/graphql', {
      query: '\n    mutation deletePost($postId: String!) {\n  deletePost(postId: $postId)\n}\n    ',
      variables: {
        postId
      }
    })
  },
  addBookmarkPost: async (postId: string) => {
    const axiosInstance = await axiosInstanceTokens()
    return axiosInstance.post('/connect-groups-api/graphql', {
      query: '\n    mutation toggleBookmarkPost($postId: String!) {\n  toggleBookmarkPost(postId: $postId)\n}\n    ',
      variables: {
        postId
      }
    })
  },
  removeBookmarkPost: async (postId: string) => {
    const axiosInstance = await axiosInstanceTokens()
    return axiosInstance.post('/connect-groups-api/graphql', {
      query: '\n    mutation toggleBookmarkPost($postId: String!) {\n  toggleBookmarkPost(postId: $postId)\n}\n    ',
      variables: {
        postId
      }
    })
  },
  toggleLikePost: async (postId: string) => {
    const axiosInstance = await axiosInstanceTokens()
    return axiosInstance.post('/connect-groups-api/graphql', {
      query: '\n    mutation toggleLikePost($postId: String!) {\n  toggleLikePost(postId: $postId)\n}\n    ',
      variables: {
        postId
      }
    })
  }
}
