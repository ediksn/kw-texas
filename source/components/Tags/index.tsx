import React from 'react'
import { TouchableOpacity, View, Text, Image, ScrollView } from 'react-native'
import closeTagImage from 'assets/images/close-tag.png'
import { styles } from './styles'
import { PeopleInterface, PeopleMarkedInterface } from '~/interfaces/peopleInterface'
import { useGetFullNamePeopleTags } from '~/hooks/tags'

interface TagsProps {
  tags: PeopleMarkedInterface
  peopleList: PeopleInterface[]
  handlePeopleMarked: (kwUid: number) => void
}

const Tags = ({ tags, peopleList, handlePeopleMarked }: TagsProps) => (
  <View style={styles.container}>
    <ScrollView horizontal>
      {Object.keys(tags).map((kwUid: string) => {
        const kwUidNumber = parseInt(kwUid, 10)

        return (
          tags[kwUidNumber] && (
            <View key={kwUidNumber} style={styles.tags}>
              <Text style={styles.name}>{useGetFullNamePeopleTags(peopleList, kwUidNumber)}</Text>
              <TouchableOpacity onPress={() => handlePeopleMarked(kwUidNumber)}>
                <Image source={closeTagImage} style={styles.closeIcon} />
              </TouchableOpacity>
            </View>
          )
        )
      })}
    </ScrollView>
  </View>
)

export default Tags
