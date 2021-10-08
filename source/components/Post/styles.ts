import { StyleSheet } from 'react-native'
import { verticalScale, scale, moderateScale } from 'react-native-size-matters'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  container: {
    elevation: 4,
    backgroundColor: '#FFFFFF',
    marginBottom: verticalScale(10)
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(10)
  },
  avatar: {
    height: verticalScale(45),
    width: scale(40),
    borderRadius: moderateScale(20)
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
    marginVertical: verticalScale(10),
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
  body: {
    padding: moderateScale(10)
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
