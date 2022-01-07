import React, { useCallback } from 'react'
import { Image, Linking, ScrollView, Text, TouchableHighlight, View } from 'react-native'
import emptyImage from 'assets/images/emptyImage.png'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { scale } from 'react-native-size-matters'
import LinearGradient from 'react-native-linear-gradient'
import { styles } from './styles'
import Avatar from '~/components/Avatar'
import { RootState } from '~/store'
import { ProfileInterface } from '~/interfaces/usrInterface'
import { Icon } from '~/components'
import { theme } from '~/constants'

export const ProfileDetail = () => {
  const { t } = useTranslation()
  const activeAccount: number = useSelector((state: RootState) => state.usrProfile.activeAccount)
  const usrData: ProfileInterface = useSelector((state: RootState) => state.usrProfile.profiles[activeAccount])

  const renderRoles = useCallback(
    () =>
      usrData?.profileDetail.roles.map((rol: string, i: number) => {
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
    (url: string, image: string, color: string) => (
      <TouchableHighlight onPress={() => openURL(url)} underlayColor='transparent'>
        <Icon name={image} size={image === 'instagram' ? 30 : 50} color={color} />
      </TouchableHighlight>
    ),
    []
  )

  const renderSocial = useCallback(() => {
    const profile = usrData?.profileDetail
    return (
      <View style={styles.logosContainer}>
        {profile?.twitter?.length > 0 && renderImage(profile.twitter, 'twitter', theme.twitter)}
        {profile?.facebook.length > 0 && renderImage(profile.facebook, 'facebook', theme.facebook)}
        {profile?.linkedin?.length > 0 && renderImage(profile.linkedin, 'linkedin', theme.linkedin)}
        {profile?.youtube?.length > 0 && renderImage(profile.youtube, 'youtube', theme.youtube)}
        {profile?.google_plus?.length > 0 && renderImage(profile.google_plus, 'google', theme.google)}
        {profile?.instagram?.length > 0 && (
          <LinearGradient
            start={{ x: 0, y: 0.9 }}
            end={{ x: 0.5, y: 0 }}
            colors={['#fccc63', '#fbad50', '#cd486b', '#8a3ab9']}
            style={{ borderRadius: 30, height: 50, width: 50, alignItems: 'center', justifyContent: 'center' }}
          >
            {renderImage(profile.instagram, 'instagram', theme.instagram)}
          </LinearGradient>
        )}
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
          {usrData?.profileDetail.banner.length > 0 ? (
            <Image
              resizeMode='cover'
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
