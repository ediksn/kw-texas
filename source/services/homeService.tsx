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
        '\n    query getGlobalPosts($offset: Int!, $limit: Int!) {\n  getPosts(offset: $offset, limit: $limit) {\n    id\n    content\n    type\n    likedBy\n    likesCount\n    repliesCount\n    bookmarksCount\n    creatorId\n    isUserCreatorOfThePost\n    creatorfirstName\n    creatorLastName\n    creatorPhoto\n    createdAt\n    deleted\n   detail {\n    ... on attachmentList {\n      attachments {\n        id\n       url\n      }\n    }\n    }\n   pinned\n    userHasAlreadyLiked\n    userHasAlreadyBookmarked\n    groupInfo\n    {\n    id\n    name\n    }\n    }\n}\n    ',
      variables: {
        offset: 0,
        limit
      }
    })
  },
  getCommentsOfPost: async (postId: string, limit: number) => {
    const axiosInstance = await axiosInstanceTokens()
    return axiosInstance.post('/connect-groups-api/graphql', {
      query:
        '\n    query getPostReplies($postId: String!, $offset: Int!, $limit: Int!) {\n  getPostReplies(postId: $postId, offset: $offset, limit: $limit) {\n    id\n    creatorId\n    createdAt\n    type\n    creatorPhoto\n    creatorFirstName\n    creatorLastName\n    deleted\n    postId\n    updatedAt\n    detail {\n      ... on pollAnswers {\n        answers\n      }\n      ... on standardReplyType {\n        content\n        edited\n        likesCount\n        userHasAlreadyLiked\n        attachment {\n          id\n          url\n        }\n      }\n    }\n  }\n}\n    ',
      variables: {
        postId,
        offset: 0,
        limit
      }
    })
  },
  addCommentToPost: async (postId: string, comment: string) => {
    const axiosInstance = await axiosInstanceTokens()
    return axiosInstance.post('/connect-groups-api/graphql', {
      query:
        'mutation replyPost($reply: createReplyInput!, $file: Upload) {\n  replyPost(reply: $reply, file: $file)\n}',
      variables: {
        reply: {
          postId,
          type: 'STANDARD',
          standardDetail: comment,
          plainTextContent: useUnRichContent(comment)
        }
      }
    })
  },
  getGroups: async (limit: number) => {
    const axiosInstance = await axiosInstanceTokens()
    return axiosInstance.post('/connect-groups-api/graphql', {
      query:
        '\n    query getListOfGroups($limit: Int!, $offset: Int!) {\n  getListOfJoinedGroups(limit: $limit, offset: $offset) {\n    id\n    name\n    description\n    postCount\n    membersCount\n    status\n    icon {\n      url\n      id\n     filename\n    }\n  }\n}\n    ',
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
        '\n    query getListOfGroups($limit: Int!, $offset: Int!) {\n  getListOfJoinedGroups(limit: $limit, offset: $offset) {\n    id\n    name\n    description\n    postCount\n    membersCount\n    status\n    icon {\n      url\n      id\n   filename\n    }\n  }\n}\n    ',
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
        '\n    query getGroupInfo($groupId: String!) {\n  getGroupInfo(groupId: $groupId) {\n    id\n    name\n    description\n    postCount\n    membersCount\n    status\n    icon {\n      url\n      id\n    filename\n   }\n  }\n  }\n    ',
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
  editPost: async (form: FormPostInterface, postId: string) => {
    const axiosInstance = await axiosInstanceTokens()
    return axiosInstance.post('/connect-groups-api/graphql', {
      query:
        'mutation editPost($postId: String!, $post: editPostInput!, $file: [Upload]) { editPost(postId: $postId, post: $post, file: $file)}',
      variables: {
        post: {
          content: form.text,
          plainTextContent: useUnRichContent(form.text)
        },
        postId
      }
    })
  },
  editPostWithMedia: async (form: FormPostInterface, postId?: string, originalFiles?: any[]) => {
    const axiosInstance = await axiosInstanceFormTokens()
    const formData = new FormData()
    const fileMap: any = {}
    const fileList: any = []
    const urls: string[] = []
    const newFiles: any[] = form.images ? [...form.images] : []
    const filesRemoved: string[] = []
    originalFiles?.map(originalFile => {
      if (!newFiles.find(newFile => originalFile.id === newFile.id)) {
        filesRemoved.push(originalFile.id || '')
      }
      return true
    })

    const query =
      'mutation editPost($postId: String!, $post: editPostInput!, $file: [Upload]) { editPost(postId: $postId, post: $post, file: $file)}'

    newFiles?.map((newFile, index) => {
      if (originalFiles && originalFiles.find(originalFile => newFile.id === originalFile.id)) {
        newFiles.splice(index, 1)
      }
      return true
    })
    newFiles?.map((file, index) => {
      if (file.uri) {
        let aux = file.uri
        aux = Platform.OS === 'ios' ? aux.replace('file://', '') : aux
        urls.push(aux)
      } else if (file.url) {
        let aux = file.url
        aux = Platform.OS === 'ios' ? aux.replace('file://', '') : aux
        urls.push(aux)
      }
      fileMap[index] = [`variables.file.${index}`]
      fileList.push(null)
      return true
    })

    const operations = JSON.stringify({
      query,
      variables: {
        post: {
          content: form.text,
          filesRemoved,
          plainTextContent: useUnRichContent(form.text)
        },
        postId,
        file: fileList
      },
      operationName: 'editPost'
    })
    formData.append('operations', operations)
    formData.append('map', JSON.stringify(fileMap))
    newFiles.map((file, index) => {
      formData.append(String(index), {
        name: file.fileName,
        type: file.type,
        uri: urls[index]
      })
      return true
    })
    return axiosInstance.post('/connect-groups-api/graphql', formData)
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
