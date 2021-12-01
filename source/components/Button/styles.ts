import { StyleSheet } from 'react-native'
import { verticalScale, moderateScale, scale } from 'react-native-size-matters'

export const styles = StyleSheet.create({
  containerView: {
    height: verticalScale(30),
    width: scale(150),
    borderWidth: 0,
    borderRadius: moderateScale(5),
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    margin: moderateScale(5)
  },
  messageView: {
    alignSelf: 'center'
  },
  messageWithIconView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    textAlign: 'center',
    marginRight: scale(9.5)
  },
  messageText: {
    fontFamily: 'Mulish-Bold'
  },
  spinner: {
    marginVertical: verticalScale(5)
  }
})

export const stylesOfType: any = {
  CONTAINED: (theme: any) => ({
    backgroundTypeStyle: {
      backgroundColor: theme.backgroundColor
    },
    textTypeStyle: {
      color: theme.color,
      fontFamily: 'Mulish-Regular'
    }
  }),
  OUTLINED: (theme: any) => ({
    backgroundTypeStyle: {
      backgroundColor: 'transparent',
      borderColor: theme.backgroundColor,
      borderWidth: moderateScale(1)
    },
    textTypeStyle: {
      color: theme.backgroundColor,
      fontFamily: 'Mulish-Regular'
    }
  }),
  TEXT: (theme: any) => ({
    backgroundTypeStyle: {
      backgroundColor: 'transparent',
      elevation: 0
    },
    textTypeStyle: {
      color: theme.backgroundColor,
      fontFamily: 'Mulish-Regular'
    }
  })
}
