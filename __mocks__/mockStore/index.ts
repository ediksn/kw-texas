import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { homeModel, loginModel, promptVideoModel } from '~/store/model'
import { VIDEO_INITIAL_STATE } from '~/store/model/videoModel'
import { VIDEO_INITIAL_STATE as BM_VIDEO_INITIAL_STATE } from '~/store/model/bmModel'
import { UPLOAD_INITIAL_STATE } from '~/store/model/uploadVideoModel'
import { USRPROFILE_INITIAL_STATE } from '~/store/model/usrProfileModel'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const store = mockStore({
  login: loginModel,
  videos: VIDEO_INITIAL_STATE,
  promptVideos: promptVideoModel,
  library: VIDEO_INITIAL_STATE,
  bookmarked: BM_VIDEO_INITIAL_STATE,
  home: homeModel,
  uploadVideo: UPLOAD_INITIAL_STATE,
  usrProfile: USRPROFILE_INITIAL_STATE
})

export default store
