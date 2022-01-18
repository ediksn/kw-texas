import { StyleSheet } from 'react-native'
import { scale, verticalScale } from 'react-native-size-matters'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  groups: {
    flex: 1,
    flexGrow: 0.21,
    marginVertical: scale(16),
    marginLeft: scale(16)
  },
  containerHeaderGroup: {
    marginVertical: scale(9),
    marginHorizontal: scale(16),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  containerText: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerTextGroup: {
    fontFamily: 'Mulish-Regular',
    fontSize: theme.fonts.MEDIUM_SIZE,
    fontStyle: 'normal',
    fontWeight: '700',
    letterSpacing: 0,
    textAlign: 'left',
    color: theme.lightColor
  },
  horizontalLine: {
    height: verticalScale(1),
    backgroundColor: theme.post.horizontalLine,
    opacity: 0.1
  },
  imageContainer: {
    flex: 1,
    borderRadius: 4
  },
  headerIcon: {
    marginRight: scale(10)
  },
  headerRightIcon: {
    marginRight: scale(5)
  }
})
