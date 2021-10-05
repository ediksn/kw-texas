/** @format */

import React, { useEffect } from 'react'
import { SafeAreaView, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '~/store'
import { getUsrProfileActions } from '~/store/actions'

export const Home = () => {
  const dispatch = useDispatch()
  const usr: any = useSelector((state: RootState) => state.login.user)
  const usrProfile: any = useSelector((state: RootState) => state.usrProfile.profiles)
  const usrId: number = usr?.kwuid

  useEffect(() => {
    if (!usrProfile) dispatch(getUsrProfileActions.getUsrProfile(usrId))
  }, [])

  return (
    <SafeAreaView>
      <Text>Home</Text>
    </SafeAreaView>
  )
}
