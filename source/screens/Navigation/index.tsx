import { useDispatch, useSelector } from 'react-redux'
import React, { memo, useEffect, useLayoutEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Storage, STORAGE_CONSTANTS } from '~/utils/storage'
import { loginActions } from '~/store/actions'
import { RootState } from '~/store'
import { ToastProps } from '~/interfaces/toastInterface'
import { Spinner, Toast } from '~/components'
import { styles } from '~/screens/styles'
import { StackNavigator, StackScreen } from '~/screens/components/Navigators'
import { NAVIGATION } from '~/constants'
import NewPost from '~/screens/pages/Home/pages/NewPost'
import { ProfileDetail } from '~/screens/pages/Profile/pages/ProfileDetail'
import PostView from '~/screens/pages/Home/pages/PostView'
import { Login } from '~/screens/pages'
import TabNavigation from '~/screens/Navigation/TabNavigation'
import { triggerAxiosInterceptors } from '~/screens/Navigation/utils/triggerAxiosInterceptors'

const Navigation = () => {
  const { open, title, type, menuHeight }: ToastProps = useSelector((store: RootState) => store.toast)

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top', 'left', 'right']}>
      <StackNavigator>
        <StackScreen options={{ header: () => null }} name='tabs' component={TabNavigation} />
        <StackScreen
          options={{
            cardStyle: { backgroundColor: '#F7F7F8' },
            header: () => null
          }}
          name={NAVIGATION.SCREEN.NEWPOST}
          component={NewPost}
        />
        <StackScreen
          options={{
            cardStyle: { backgroundColor: '#F7F7F8' },
            header: () => null
          }}
          name={NAVIGATION.SCREEN.PROFILEDETAIL}
          component={ProfileDetail}
        />
        <StackScreen
          options={{
            cardStyle: { backgroundColor: '#F7F7F8' },
            header: () => null
          }}
          name={NAVIGATION.SCREEN.POSTVIEW}
          component={PostView}
        />
      </StackNavigator>
      <Toast open={open} title={title} type={type} menuHeight={menuHeight} />
    </SafeAreaView>
  )
}

const RootNavigation = () => {
  const { LOGIN } = STORAGE_CONSTANTS
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  useLayoutEffect(() => {
    setTimeout(async () => {
      const storageIsLogged = await Storage.isLogged()
      if (storageIsLogged) {
        const storedLogin = await Storage.get({ key: LOGIN.SESSION })
        dispatch(loginActions.setUser(storedLogin.id_token))
      }
      setLoading(false)
    })
  }, [dispatch])

  const { isLogged } = useSelector((store: RootState) => store.login)

  const handleLogOut = () => dispatch(loginActions.logOut())

  useEffect(() => {
    if (!loading) {
      triggerAxiosInterceptors(async newRefreshedToken => {
        await Storage.save({
          key: LOGIN.SESSION,
          value: newRefreshedToken
        })
      }, handleLogOut)
    }
  }, [dispatch, handleLogOut, loading])

  return (
    <Spinner isLoading={loading} message='KW: Connect' styleView={styles.spinner}>
      {isLogged ? <Navigation /> : <Login />}
    </Spinner>
  )
}

export default memo(RootNavigation)
