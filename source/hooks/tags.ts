import { PeopleInterface } from '~/interfaces/peopleInterface'

export const useGetFullNamePeopleTags = (peopleList: PeopleInterface[], kwUid: number) => {
  const peopleSearched = peopleList.find(people => people.kwUid === kwUid)

  return peopleSearched && `${peopleSearched.firstName} ${peopleSearched.lastName}`
}
