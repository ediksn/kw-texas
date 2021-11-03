import React from 'react'
import { Image, ImageSourcePropType, Text, View, ViewStyle } from 'react-native'
import { useTranslation } from 'react-i18next'

import NoImage from 'assets/images/no-image.png'
import { moderateScale } from 'react-native-size-matters'
import { styles } from './styles'
import Button from '../Button'
import { TEST_IDS, theme } from '~/constants'
import { EventsInterface } from '~/interfaces/eventsInterface'

interface Props {
  event: EventsInterface
  img?: ImageSourcePropType
  style?: ViewStyle
}

const EventCard = ({ event, style, img = NoImage }: Props) => {
  const { t } = useTranslation()
  return (
    <View style={[styles.container, style]}>
      <View style={styles.imageContainer}>
        <Image
          testID={TEST_IDS.GENERAL_COMPONENTS.EVENT_CARD_ID}
          source={img}
          style={styles.image}
          resizeMode='cover'
          resizeMethod='resize'
        />
      </View>
      <View testID={TEST_IDS.EVENT_CARD.IMAGE_ID} style={styles.dateContainer}>
        <Text style={styles.date}>{t(event.starts.format('dddd'))}</Text>
        <View style={styles.separator} />
        <Text style={styles.date}>
          {event.starts.date()} {t(event.starts.format('MMMM'))}
        </Text>
        <View style={styles.separator} />
        <Text style={styles.date}>At {event.starts.format('HH:mm A')}</Text>
        <View style={styles.separator} />
        <Text style={styles.date}>{event.location}</Text>
      </View>
      <View testID={TEST_IDS.EVENT_CARD.TITLE_ID} style={styles.titleContainer}>
        <Text style={styles.title}>{event.name}</Text>
      </View>
      <View testID={TEST_IDS.EVENT_CARD.ASSISTANCE_ID} style={styles.footerContainer}>
        <Text style={styles.date}>Interested:</Text>
        <View style={styles.separator} />
        <Text style={styles.date}>Will go: {event.slug}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          testID={TEST_IDS.EVENT_CARD.INTERESTED_BUTTON_ID}
          viewStyle={styles.buttons}
          icon={{
            name: 'star-empty-icon',
            size: moderateScale(20),
            color: theme.texts.white
          }}
          message={t('components_EventCard_Interested')}
        />
        <Button
          testID={TEST_IDS.EVENT_CARD.SHARE_BUTTON_ID}
          viewStyle={styles.buttons}
          icon={{
            name: 'share-icon',
            size: moderateScale(22),
            color: theme.activeColor,
            iconStyle: styles.shareIcon
          }}
          message={t('components_EventCard_Share')}
          type={theme.buttons.types.OUTLINED}
        />
      </View>
    </View>
  )
}

export default EventCard
