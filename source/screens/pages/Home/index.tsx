import React, { useEffect } from 'react'
import { SafeAreaView, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { styles } from './styles'
import Post from '~/components/Post'
import { RootState } from '~/store'
import { getUsrProfileActions } from '~/store/actions'
import { useBackButtonMinimize } from '~/hooks'

export const Home = () => {
  const dispatch = useDispatch()
  const usr: any = useSelector((state: RootState) => state.login.user)
  const usrProfile: any = useSelector((state: RootState) => state.usrProfile.profiles)
  const usrId: number = usr?.kwuid

  useBackButtonMinimize()

  useEffect(() => {
    if (usrProfile.length === 0) dispatch(getUsrProfileActions.getUsrProfile(usrId))
  }, [])

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Post />
      </View>
    </SafeAreaView>
  )
}
