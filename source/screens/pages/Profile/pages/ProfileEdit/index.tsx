import React, { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import emptyImage from 'assets/images/emptyImage.png'
import { Image, ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { ProfileDetailInterface, ProfileInterface } from '~/interfaces/usrInterface'
import { RootState } from '~/store'
import { styles } from './styles'
import { Icon, Input } from '~/components'
import { theme } from '~/constants'
import { getUsrProfileActions } from '~/store/actions'

export const ProfileEdit = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const activeAccount: number = useSelector((state: RootState) => state.usrProfile.activeAccount)
  const usrData: ProfileInterface = useSelector((state: RootState) => state.usrProfile.profiles[activeAccount]) || {}
  const [data, setData] = useState<ProfileDetailInterface>(usrData.profileDetail)
  const serviceAreas = data?.service_area?.split(';') || []
  const [areas, setAreas] = useState(serviceAreas)
  const handleBannerUrl = useCallback((url: string): string => {
    return `https:${url}`
  }, [])

  useEffect(() => {
    dispatch(getUsrProfileActions.updateProfile(data, activeAccount))
  }, [data])

  const handleInputChange = useCallback(
    (field: keyof ProfileDetailInterface, text: string) => {
      const newData = { ...data }
      Object.assign(newData, { ...newData, [field]: text })
      setData({ ...newData })
    },
    [data]
  )

  const handleAreasChange = useCallback(
    (index: number, text: string) => {
      const newAreas = [...areas]
      const newData = { ...data }
      newAreas[index] = text
      setAreas(newAreas)
      Object.assign(newData, { ...newData, service_area: newAreas.join(';') })
      setData({ ...newData })
    },
    [areas]
  )

  const addArea = useCallback(() => {
    const newAreas = [...areas]
    const newData = { ...data }
    newAreas.push('')
    setAreas(newAreas)
    Object.assign(newData, { ...newData, service_area: newAreas.join(';') })
    setData({ ...newData })
  }, [data, areas])

  const removeArea = useCallback(
    (index: number) => {
      if (areas.length > 1) {
        const newAreas = [...areas]
        const newData = { ...data }
        const result = newAreas.filter((_, i) => i !== index)
        setAreas(result)
        Object.assign(newData, { ...newData, service_area: newAreas.join(';') })
        setData({ ...newData })
      }
    },
    [data, areas]
  )

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        {data?.banner.length > 0 ? (
          <Image resizeMode='cover' style={styles.banner} source={{ uri: handleBannerUrl(data.banner) }} />
        ) : (
          <Image source={emptyImage} />
        )}
        <View style={styles.imageEditButton}>
          <Icon name='gallery-icon' size={18} color={theme.backgroundWhite} />
          <Text style={styles.imageCoverText}>{t('components_Profile_edit_cover')}</Text>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Input
          title={t('components_Profile_first_name')}
          placeholder={t('components_Profile_first_name')}
          value={data?.first_name}
          style={styles.inputStyle}
          editable={false}
          onChangeText={text => handleInputChange('first_name', text)}
        />
        <Input
          title={t('components_Profile_last_name')}
          placeholder={t('components_Profile_last_name')}
          value={data?.last_name}
          style={styles.inputStyle}
          editable={false}
          onChangeText={text => handleInputChange('last_name', text)}
        />
        <Input
          title={t('components_Profile_kwuid')}
          value={data?.kw_uid.toString()}
          style={styles.inputStyle}
          editable={false}
        />
        <Input
          title={t('components_Profile_email')}
          placeholder={t('components_Profile_email')}
          value={data?.email}
          style={styles.inputStyle}
          onChangeText={text => handleInputChange('email', text)}
        />
        <Input
          title={t('components_Profile_primary_phone')}
          placeholder={t('components_Profile_primary_phone')}
          value={data?.phone}
          style={styles.inputStyle}
          onChangeText={text => handleInputChange('phone', text)}
        />
        <Input
          title={t('components_Profile_mobile_phone')}
          placeholder={t('components_Profile_mobile_phone')}
          value={data?.mobile_phone}
          style={styles.inputStyle}
          onChangeText={text => handleInputChange('mobile_phone', text)}
        />
        {areas.map((_, i) => {
          return (
            <View key={`area${0 + i}`}>
              <Input
                title={`${t('components_Profile_service_area')} #${i + 1}`}
                placeholder={t('components_Profile_service_area')}
                value={areas[i]}
                style={styles.inputStyle}
                onChangeText={text => handleAreasChange(i, text)}
              />
              <View style={styles.areasOption}>
                {i + 1 === areas.length && (
                  <TouchableWithoutFeedback onPress={addArea}>
                    <View style={[styles.areasOption, styles.addBotton]}>
                      <Icon name='add-circle-icon' color={theme.darkGreenColor} size={18} />
                      <Text style={styles.textStyle}>{t('components_Profile_add_new')}</Text>
                    </View>
                  </TouchableWithoutFeedback>
                )}
                {areas.length > 1 && (
                  <TouchableWithoutFeedback onPress={() => removeArea(i)}>
                    <View style={styles.areasOption}>
                      <Icon name='remove-circle-icon' color={theme.darkGreenColor} size={18} />
                      <Text style={styles.textStyle}>{t('components_Profile_add_remove')}</Text>
                    </View>
                  </TouchableWithoutFeedback>
                )}
              </View>
            </View>
          )
        })}
        <Input
          title={t('components_Profile_bio')}
          value={data?.bio}
          style={styles.bioStyle}
          styleText={styles.bioTextStyle}
          multiline
          maxLength={3999}
          onChangeText={text => handleInputChange('bio', text)}
        />
        <Text style={styles.bioLengthText}>{3999 - data?.bio?.length}/3999</Text>
        <Input
          title={t('components_Profile_twitter')}
          value={data?.twitter}
          style={styles.inputStyle}
          onChangeText={text => handleInputChange('twitter', text)}
        />
        <Input
          title={t('components_Profile_facebook')}
          value={data?.facebook}
          style={styles.inputStyle}
          onChangeText={text => handleInputChange('facebook', text)}
        />
        <Input
          title={t('components_Profile_linkedin')}
          value={data?.linkedin}
          style={styles.inputStyle}
          onChangeText={text => handleInputChange('linkedin', text)}
        />
        <Input
          title={t('components_Profile_youtube')}
          value={data?.youtube}
          style={styles.inputStyle}
          onChangeText={text => handleInputChange('youtube', text)}
        />
        <Input
          title={t('components_Profile_instagram')}
          value={data?.instagram}
          style={styles.inputStyle}
          onChangeText={text => handleInputChange('instagram', text)}
        />
      </View>
    </ScrollView>
  )
}
