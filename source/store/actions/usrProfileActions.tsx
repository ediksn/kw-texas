import { sortBy } from 'lodash'
import { usrProfileService } from '~/services'
import { USR_TYPES } from '~/store/types'
import { ORG_TYPE } from '~/constants'
import { AppDispatch } from '..'
import { AccountInterface } from '~/interfaces/usrInterface'

const actionCreators = {
  getUsrProfile: () => async (dispatch: AppDispatch) => {
    const { GET_USRPROFILE, GET_USRPROFILE_SUCCESS, GET_USRPROFILE_FAILURE } = USR_TYPES
    dispatch({ type: GET_USRPROFILE })
    try {
      const kwuId = await usrProfileService.getKwuId()
      const accounts: AccountInterface[] = await usrProfileService.getAccounts(kwuId)
      const user = await usrProfileService.getUser(kwuId)
      const profile = await usrProfileService.getProfile()
      const profileDetail = await usrProfileService.getProfileDetails(kwuId)

      const result = accounts
        .filter(account => account?.end_dt === null)
        .map((account: AccountInterface) => {
          const isDefault = user?.default_org_id === account.id
          const isPersonal = account?.org_type?.name === ORG_TYPE.PERSON
          const photo = isPersonal ? profile?.profile?.agent_photo : profile?.logo?.team_logo
          const assigneeId = kwuId

          const name = account?.name?.replace('(personal)', '')?.trim() || 'n/a'
          const sortName = account?.name?.replace(/^The|the /, '').trim() || 'n/a'
          const role = isPersonal ? 'Personal' : account?.person_role_orgs?.[0]?.role?.name
          const members = Array.isArray(account?.members) ? account?.members?.map(member => member?.kw_uid) : []

          return {
            id: account.id,
            assigneeId,
            name,
            sortName,
            role,
            photo,
            members,
            isPersonal,
            isDefault,
            userProfile: user || {},
            profileDetail
          }
        })
      dispatch({
        type: GET_USRPROFILE_SUCCESS,
        payload: sortBy(result, [({ isDefault }) => !isDefault, ({ isPersonal }) => !isPersonal, 'sortName'])
      })
    } catch (error) {
      dispatch({ type: GET_USRPROFILE_FAILURE, payload: error })
    }
  },
  changeAccount: (index: number) => async (dispatch: AppDispatch) => {
    const { CHANGE_ACTIVE_ACCOUNT_SUCCESS } = USR_TYPES
    dispatch({
      type: CHANGE_ACTIVE_ACCOUNT_SUCCESS,
      payload: index
    })
  }
}

export default actionCreators
