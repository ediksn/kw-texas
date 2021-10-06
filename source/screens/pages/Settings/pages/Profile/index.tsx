import React, { useMemo } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '~/store'

import Header from './components/Header'
import Field from './components/Field'
import { SocialMedia } from './components/SocialMedia'

import { styles } from './styles'
import { Spinner } from '~/components'

const Profile = () => {
  const dataState: any = useSelector((state: RootState) => state.usrProfile)
  const data: any = useSelector((state: RootState) => state.usrProfile.profiles)
  const serviceAreas = data[0]?.service_area?.split(';').filter((w: any) => w) || []
  const hasServiceAreas = useMemo(() => !!serviceAreas.length, [serviceAreas])

  if (dataState.isLoading) {
    return (
      <View style={styles.container}>
        <Spinner />
      </View>
    )
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
      <View>
        <Header data={data} />
        <View style={styles.separator} />

        <Text style={styles.title}>Personal Data</Text>
        <Field title='Name' value={data[0]?.name} arr={null} />
        <Field title='Roles' value={null} arr={data[0]?.roles} />
        <Field title='KWUID' value={data[0]?.kw_uid} arr={null} />

        <View style={styles.separator} />
        <Text style={styles.title}>Contact Information</Text>
        <Field title='Primary phone number' value={data[0]?.phone} arr={null} />
        <Field title='Mobile phone' value={data[0]?.mobile_phone} arr={null} />
        <Field title='Email' value={data[0]?.email} arr={null} />

        {hasServiceAreas && <View style={styles.separator} />}
        {hasServiceAreas && <Field title='Service Areas' value={null} arr={serviceAreas} />}

        {data[0]?.bio != null && <View style={styles.separator} />}
        {data[0]?.bio != null && <Field title='Bio' value={data[0]?.bio} arr={null} />}

        <SocialMedia
          fb={data[0]?.facebook}
          google={data[0]?.google_plus}
          inst={data[0]?.instagram}
          lkd={data[0]?.linkedin}
          twt={data[0]?.twitter}
          yt={data[0]?.youtube}
        >
          <View style={styles.separator} />
          <Text style={styles.title}>Social Media</Text>
        </SocialMedia>
      </View>
    </ScrollView>
  )
}

export default Profile
