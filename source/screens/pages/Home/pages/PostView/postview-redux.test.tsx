import axios from 'axios'
import { addCommentToPostResponse } from '../../../../../../__mocks__/mockResponses'
import { ProduceProps } from '~/interfaces/reducerInterface'
import { homeActions } from '~/store/actions'
import { HOME_TYPES } from '~/store/types'
import storeModels from '~/../__mocks__/mockStore'
import { PostInterface } from '~/interfaces/postInterface'
import { commentMockObject, postMockObject } from '../../../../../../__mocks__/mockObjects'
import { homeReducer } from '~/store/reducers'

describe('Post View Actions', () => {
  jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn()
  }))

  const mockedAxios = axios as jest.Mocked<typeof axios>
  const postSelected: PostInterface = postMockObject
  const postCommentToAdd = 'comment'
  const { GET_POST_COMMENTS, GET_POST_COMMENTS_SUCCESS, ADD_COMMENT_POST, ADD_COMMENT_POST_SUCCESS, SELECT_POST } =
    HOME_TYPES
  const expectedActions: ProduceProps[] = [
    { type: SELECT_POST, payload: postSelected },
    {
      type: ADD_COMMENT_POST,
      payload: {
        comment: postCommentToAdd,
        postId: postSelected.id
      }
    },
    {
      type: ADD_COMMENT_POST_SUCCESS,
      payload: []
    },
    {
      type: GET_POST_COMMENTS,
      payload: false
    },
    {
      type: GET_POST_COMMENTS_SUCCESS,
      payload: {
        data: [],
        limit: 10,
        limitDefault: 10
      }
    }
  ]

  it('should create an action ADD_COMMENT_POST_SUCCESS when user add a comment to post', async () => {
    await storeModels.dispatch(homeActions.selectPost(postMockObject))
    await storeModels.dispatch(homeActions.addCommentPost(postCommentToAdd, postSelected.id))
    mockedAxios.post.mockResolvedValueOnce({ data: addCommentToPostResponse })
    expect(storeModels.getActions()).toEqual(expectedActions)
    expect(mockedAxios.post).toHaveBeenCalledTimes(2)
  })

  it('should return array of comments in state', () => {
    const oldStore: any = storeModels.getState()
    const expectedStore = { ...oldStore }
    expectedStore.home.comments.selectedPostComments = [commentMockObject]
    const getCommentsSuccess = {
      type: GET_POST_COMMENTS_SUCCESS,
      payload: { data: [commentMockObject], limitDefault: 10, limit: 10 }
    }
    expect(homeReducer(oldStore.home, getCommentsSuccess)).toEqual(expectedStore.home)
  })
})
