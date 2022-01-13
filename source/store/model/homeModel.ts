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
    selectedCommunity: undefined,
    postsLoading: false,
    hasMoreLoading: false,
    selectedCommunityPosts: [],
    limitCommunityPosts: 10,
    scrolled: false,
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
