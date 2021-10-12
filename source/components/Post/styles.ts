import { StyleSheet } from 'react-native'
import { verticalScale, scale, moderateScale } from 'react-native-size-matters'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  container: {
    padding: moderateScale(10),
    elevation: 4,
    backgroundColor: '#FFFFFF',
    borderRadius: 4
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
    height: verticalScale(60),
    width: scale(60)
  },
  info: {
    flex: 4,
    paddingHorizontal: moderateScale(10)
  },
  name: {
    fontWeight: 'bold',
    fontSize: theme.fonts.MEDIUM_SIZE
  },
  date: {
    fontWeight: 'bold',
    fontSize: theme.fonts.MEDIUM_SIZE
  },
  threeDots: {
    height: verticalScale(26),
    width: scale(26)
  },
  showMore: {
    fontWeight: 'bold',
    color: theme.texts.green
  },
  infoNumbers: {
    margin: verticalScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  commentsSharesBox: {
    flexDirection: 'row'
  },
  infoNumber: {
    color: theme.texts.secondary
  },
  comments: {
    marginRight: scale(10)
  },
  horizontalLine: {
    width: '100%',
    height: verticalScale(1),
    backgroundColor: '#444444'
  },
  buttons: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center'
  },
  button: {
    width: scale(70)
  }
})
