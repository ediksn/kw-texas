import React, { useCallback } from 'react'
import { Image, Linking, ScrollView, Text, TouchableHighlight, View } from 'react-native'
import emptyImage from 'assets/images/emptyImage.png'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { scale } from 'react-native-size-matters'
import { styles } from './styles'
import Avatar from '~/components/Avatar'
import { RootState } from '~/store'
import { ProfileInterface } from '~/interfaces/usrInterface'
import { Icon } from '~/components'
import { theme } from '~/constants'

export const ProfileDetail = () => {
  const { t } = useTranslation()
  const activeAccount: number = useSelector((state: RootState) => state.usrProfile.activeAccount)
  const user: ProfileInterface = useSelector((state: RootState) => state.usrProfile.profiles[activeAccount])
  const { profileDetail } = user || {}

  const renderRoles = useCallback(
    () =>
      profileDetail?.roles.map((rol: string, i: number) => {
        return (
          <View style={styles.role} key={`rol${0 + i}`}>
            <Icon name='role' size={18} viewStyle={styles.icon} />
            <Text style={styles.subTitleRol}>{rol}</Text>
          </View>
        )
      }),
    []
  )

  const renderField = useCallback(
    (title: string, value: string) =>
      value && value.length > 0 ? (
        <View>
          <Text style={styles.subTextTitle}>{t(title)}</Text>
          <Text style={styles.subText}>{value}</Text>
        </View>
      ) : null,
    []
  )

  const renderAreas = useCallback((title: string, service_area: string) => {
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
  }, [])

  const openURL = useCallback(async (url: string) => {
    const canOpen = await Linking.canOpenURL(url)
    if (canOpen) {
      await Linking.openURL(url)
    }
  }, [])

  const renderImage = useCallback(
    (url: string, image: string) => (
      <TouchableHighlight onPress={() => openURL(url)} underlayColor='transparent'>
        <View style={styles.imageCircle}>
          <Icon name={image} size={20} color={theme.darkGreenColor} />
        </View>
      </TouchableHighlight>
    ),
    []
  )

  const renderSocial = useCallback(() => {
    return (
      <View style={styles.logosContainer}>
        {profileDetail?.twitter?.length > 0 && renderImage(profileDetail.twitter, 'twitter-icon')}
        {profileDetail?.instagram?.length > 0 && renderImage(profileDetail.instagram, 'instagram-icon')}
        {profileDetail?.facebook.length > 0 && renderImage(profileDetail.facebook, 'facebook-icon')}
        {profileDetail?.linkedin?.length > 0 && renderImage(profileDetail.linkedin, 'linkedin-icon')}
        {profileDetail?.youtube?.length > 0 && renderImage(profileDetail.youtube, 'youtube-icon')}
      </View>
    )
  }, [])

  const handleBannerUrl = useCallback((url: string): string => {
    return `https:${url}`
  }, [])

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.imageContainer}>
          {profileDetail?.banner.length > 0 ? (
            <Image resizeMode='cover' style={styles.banner} source={{ uri: handleBannerUrl(profileDetail?.banner) }} />
          ) : (
            <Image source={emptyImage} />
          )}
        </View>
        <View style={styles.avatarContainer}>
          <Avatar avatarStyle={styles.avatarStyle} uri={profileDetail?.photo_url} />
        </View>
        <Text style={styles.nameStyle}>{profileDetail?.name}</Text>
        <View style={styles.rolesContainer}>{renderRoles()}</View>
        <View style={styles.detailContainer}>
          {renderField('components_Profile_kwuid', profileDetail?.kw_uid.toString())}
          {renderField('components_Profile_email', profileDetail?.email)}
          {renderField('components_Profile_primary_phone', profileDetail?.phone)}
          {renderField('components_Profile_mobile_phone', profileDetail?.mobile_phone || '')}
          {renderAreas('components_Profile_service_areas', profileDetail?.service_area)}
          {renderField('components_Profile_bio', profileDetail?.bio)}
          {renderSocial()}
        </View>
      </ScrollView>
    </>
  )
}
