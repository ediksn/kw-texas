import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { CheckBox, Avatar } from '~/components'
import { styles } from './styles'
import { PeopleInterface } from '~/interfaces/peopleInterface'

interface PeopleProps {
  people: PeopleInterface
  handlePeopleMarked: (kwUid: number) => void
  marked?: boolean
}

const People = ({ people, handlePeopleMarked, marked }: PeopleProps) => {
  const { kwUid, photoUrl, firstName, lastName } = people

  return (
    <TouchableOpacity onPress={() => handlePeopleMarked(kwUid)} style={styles.container}>
      <CheckBox marked={marked} />
      <Avatar
        uri={photoUrl}
        avatarStyle={styles.avatar}
        avatarDefaultStyle={styles.avatar}
        initialsStyle={styles.avatar}
      />
      <Text style={styles.name}>{`${firstName} ${lastName}`}</Text>
    </TouchableOpacity>
  )
}

export default People
