import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import logout_btn from 'assets/images/logout_btn.png'
import { RootState } from '~/store'

import Header from './components/Header'

import { styles } from './styles'
import { useBackButtonMinimize } from '~/hooks'
import AccountRow from './components/AccountRow'
import ListButton from '~/components/ListButton'
import { loginActions } from '~/store/actions'
import { ProfileInterface } from '~/interfaces/usrInterface'
import { Spinner } from '~/components'

const Profile = () => {
  const dispatch = useDispatch()
  const [changingAccount, setChangingAccount] = useState(false)
  const profiles: ProfileInterface[] = useSelector((state: RootState) => state.usrProfile.profiles)
  const activeAccount: number = useSelector((state: RootState) => state.usrProfile.activeAccount)
  const loading = useSelector((state: RootState) => state.usrProfile.isLoading)
  useBackButtonMinimize()

  useEffect(() => {
    setChangingAccount(false)
  }, [activeAccount])

  const handleLogOut = () => dispatch(loginActions.logOut())

  const AccountList = () => (
    <>
      {profiles.map((account: ProfileInterface, index: number) => {
        if (account !== profiles[activeAccount])
          return (
            <AccountRow
              key={account.id}
              index={index}
              image={account.photo}
              name={account.name}
              rol='Buyer Specialist'
              isDefault={account.isDefault}
              setChangingAccount={setChangingAccount}
            />
          )
        return null
      })}
    </>
  )

  return (
    <>
      <Spinner isLoading={loading || changingAccount}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header userData={profiles[activeAccount]} />
          <View style={styles.separator} />
          <Text style={styles.title}>Other accounts</Text>
          <AccountList />
          <View style={styles.separator} />
          <ListButton title='Log out' icon={logout_btn} onPress={handleLogOut} arrow={false} />
        </ScrollView>
      </Spinner>
    </>
  )
}

export default Profile