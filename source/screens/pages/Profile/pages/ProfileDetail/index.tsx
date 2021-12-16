import React from 'react'
import { Image, Linking, ScrollView, Text, TouchableHighlight, View } from 'react-native'
import emptyImage from 'assets/images/emptyImage.png'
import { useSelector } from 'react-redux'
import GroupsUnfilled from 'assets/images/groups-unfilled.png'
import { useTranslation } from 'react-i18next'
import { scale } from 'react-native-size-matters'
import TwitterLogo from 'assets/images/twitter.png'
import FacebookLogo from 'assets/images/facebook.png'
import YoutubeLogo from 'assets/images/youtube.png'
import GoogleLogo from 'assets/images/google+.png'
import InstagramLogo from 'assets/images/instagram.png'
import LinkedinLogo from 'assets/images/linkedin.png'
import { styles } from './styles'
import Avatar from '~/components/Avatar'
import { RootState } from '~/store'
import { ProfileInterface } from '~/interfaces/usrInterface'
import { Icon } from '~/components'

export const ProfileDetail = () => {
  const { t } = useTranslation()
  const activeAccount: number = useSelector((state: RootState) => state.usrProfile.activeAccount)
  const usrData: ProfileInterface = useSelector((state: RootState) => state.usrProfile.profiles[activeAccount])

  const renderRoles = () =>
    usrData?.profileDetail.roles.map((rol: string, i: number) => {
      return (
        <View style={styles.role} key={`rol${0 + i}`}>
          <Image source={GroupsUnfilled} resizeMode='contain' resizeMethod='resize' style={styles.icon} />
          <Text style={styles.subTitleRol}>{rol}</Text>
        </View>
      )
    })

  const renderField = (title: string, value: string) =>
    value && value.length > 0 ? (
      <View>
        <Text style={styles.subTextTitle}>{t(title)}</Text>
        <Text style={styles.subText}>{value}</Text>
      </View>
    ) : null

  const renderAreas = (title: string, service_area: string) => {
    const areas = service_area?.split(';')
    return service_area?.length > 0 ? (
      <View>
        <Text style={styles.subTextTitle}>{t(title)}</Text>
        <View style={styles.areasContainer}>
          {areas.map((area, i) => {
            return (
              <View key={`area${0 + i}`} style={styles.area}>
                <Icon name='location-icon' size={14} />
                <Text style={[styles.subText, { marginLeft: scale(5) }]}>{area}</Text>
              </View>
            )
          })}
        </View>
      </View>
    ) : null
  }

  const openURL = async (url: string) => {
    const canOpen = await Linking.canOpenURL(url)
    if (canOpen) {
      await Linking.openURL(url)
    }
  }

  const renderImage = (url: string, image: any) => (
    <TouchableHighlight onPress={() => openURL(url)} underlayColor='transparent'>
      <Image resizeMode='contain' source={image} />
    </TouchableHighlight>
  )

  const renderSocial = () => {
    const profile = usrData?.profileDetail
    return (
      <View style={styles.logosContainer}>
        {profile?.twitter?.length > 0 && renderImage(profile.twitter, TwitterLogo)}
        {profile?.facebook.length > 0 && renderImage(profile.facebook, FacebookLogo)}
        {profile?.linkedin?.length > 0 && renderImage(profile.linkedin, LinkedinLogo)}
        {profile?.youtube?.length > 0 && renderImage(profile.youtube, YoutubeLogo)}
        {profile?.google_plus?.length > 0 && renderImage(profile.google_plus, GoogleLogo)}
        {profile?.instagram?.length > 0 && renderImage(profile.instagram, InstagramLogo)}
      </View>
    )
  }

  const handleBannerUrl = (url: string): string => {
    return `https:${url}`
  }

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.imageContainer}>
          {usrData?.profileDetail.banner.length > 0 ? (
            <Image
              resizeMode='contain'
              style={styles.banner}
              source={{ uri: handleBannerUrl(usrData?.profileDetail.banner) }}
            />
          ) : (
            <Image source={emptyImage} />
          )}
        </View>
        <View style={styles.avatarContainer}>
          <Avatar avatarStyle={styles.avatarStyle} uri={usrData?.userProfile.photo} />
        </View>
        <Text style={styles.nameStyle}>{usrData?.profileDetail.name}</Text>
        <View style={styles.rolesContainer}>{renderRoles()}</View>
        <View style={styles.detailContainer}>
          {renderField('components_Profile_kwuid', usrData?.profileDetail.kw_uid.toString())}
          {renderField('components_Profile_email', usrData?.profileDetail.email)}
          {renderField('components_Profile_primary_phone', usrData?.profileDetail.phone)}
          {renderField('components_Profile_mobile_phone', usrData?.profileDetail.mobile_phone || '')}
          {renderAreas('components_Profile_service_areas', usrData?.profileDetail.service_area)}
          {renderField('components_Profile_bio', usrData?.profileDetail.bio)}
          {renderSocial()}
        </View>
      </ScrollView>
    </>
  )
}
