/** @format */

import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import { styles } from '../../styles'

interface Props {
  children: React.ReactNode
  fb: any
  inst: any
  twt: any
  lkd: any
  google: any
  yt: any
}

interface PropsSoc {
  title: string
  value: string
}

export const SocialMedia = ({ children, fb, inst, twt, lkd, google, yt }: Props) => {
  const hasAny = fb || inst || twt || lkd || google || yt

  const Social = ({ title, value }: PropsSoc) => (
    <View style={styles.field}>
      <Text style={styles.subtitle}>{title}</Text>
      <TouchableOpacity onPress={() => null}>
        <Text style={styles.socialText}>{value}</Text>
      </TouchableOpacity>
    </View>
  )

  if (hasAny) {
    return (
      <>
        {children}
        {!!fb && <Social title='Facebook' value='@facebook' link={fb} />}
        {!!inst && <Social title='Instagram' value='@instagram' link={inst} />}
        {!!twt && <Social title='Twitter' value='@twitter' link={twt} />}
        {!!lkd && <Social title='LinkedIn' value='@linkedin' link={lkd} />}
        {!!yt && <Social title='Youtube' value='@youtube' link={yt} />}
        {!!google && <Social title='Google Plus' value='@google_plus' link={google} />}
      </>
    )
  }
  return null
}
