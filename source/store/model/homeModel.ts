export default {
  pickPrompts: {
    prompts: [],
    isLoading: false
  },
  posts: {
    data: [],
    limitDefault: 10,
    limit: 10,
    isLoading: false,
    hasMoreLoading: false
  },
  groups: {
    data: [],
    limitDefault: 10,
    limit: 10,
    isLoading: false
  },
  isVisibleDropDown: false,
  comments: {
    selectedPost: undefined,
    selectedPostComments: [],
    loadingComments: false,
    limitDefault: 10,
    limit: 10,
    hasMoreLoading: false
  },
  bookmarkedPosts: {
    data: [],
    limitDefault: 10,
    limit: 10,
    isLoading: false,
    hasMoreLoading: false
  }
}
