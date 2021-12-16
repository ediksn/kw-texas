import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { RootState } from '~/store'
import { theme } from '~/constants'
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
  const { t } = useTranslation()
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
              rol={account.role}
              isDefault={account.isDefault}
              setChangingAccount={setChangingAccount}
              containerImage={!account.photo && styles.containerAvatarDefault}
              styleImage={account.photo ? styles.avatarPhoto : styles.avatarDefault}
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
          {profiles.length > 1 && (
            <>
              <View style={styles.separator} />
              <Text style={styles.title}>{t('components_Account_Other_Accounts')}</Text>
              <AccountList />
              <View style={styles.separator} />
            </>
          )}
          <ListButton
            title='components_Login_Log_Out'
            onPress={handleLogOut}
            arrow={false}
            svg
            svgTitle='logout_btn'
            svgSize={18}
            icon={false}
            svgColor={theme.darkGrey}
          />
        </ScrollView>
      </Spinner>
    </>
  )
}

export default Profile
