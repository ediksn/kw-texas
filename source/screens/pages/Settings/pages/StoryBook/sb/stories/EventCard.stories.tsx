import moment from 'moment'
import React from 'react'
import { View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import EventCard from '~/components/EventCard'
import { EventsInterface } from '~/interfaces/eventsInterface'

const EventCardStories = () => {
  const event: EventsInterface = {
    bookmarked: true,
    ends: moment('2021-10-11 19:00:00'),
    id: 857429,
    instructors: [
      {
        firstName: 'Gabi',
        lastName: 'Holmberg'
      }
    ],
    location: 'Online',
    name: 'Online Event for KW Texas Agents',
    price: '0',
    published: true,
    slug: null,
    starts: moment('2021-10-10 11:00:00')
  }

  return (
    <View style={{ margin: moderateScale(5) }}>
      <EventCard event={event} />
    </View>
  )
}

export default EventCardStories
