import { StyleSheet } from 'react-native'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  container: {
    shadowColor: theme.darkGrey,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10,
    backgroundColor: theme.backgroundWhite
  },
  img: {
    width: '100%',
    height: 200,
    resizeMode: 'cover'
  },
  title: {
    fontSize: 17,
    fontFamily: 'Mulish-Bold',
    marginBottom: 5
  },
  statisticsContainer: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between'
  },
  statisticsText: {
    fontSize: 12,
    fontFamily: 'Mulish-Regular'
  },
  authorText: {
    fontFamily: 'Mulish-Italic'
  },
  authorName: {
    color: theme.buttons.secondary.color
  },
  wrapper: {
    paddingHorizontal: '3%',
    paddingVertical: '3%'
  },
  tagContainerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: '3%'
  },
  tagItemView: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  bookmarkedIcon: {
    marginHorizontal: '5%'
  }
})
