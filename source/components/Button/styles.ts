import { StyleSheet } from 'react-native'
import { verticalScale, moderateScale, scale } from 'react-native-size-matters'

export const styles = StyleSheet.create({
  containerView: {
    height: verticalScale(30),
    width: scale(150),
    elevation: 1,
    borderWidth: 0,
    borderRadius: moderateScale(5),
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    margin: moderateScale(10)
  },
  messageView: {
    alignSelf: 'center'
  },
  messageWithIconView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    height: verticalScale(24),
    width: scale(24),
    marginRight: scale(10)
  },
  messageText: {
    fontWeight: 'bold'
  }
})

export const stylesOfType: any = {
  CONTAINED: (theme: any) => ({
    backgroundTypeStyle: {
      backgroundColor: theme.backgroundColor
    },
    textTypeStyle: {
      color: theme.color
    }
  }),
  OUTLINED: (theme: any) => ({
    backgroundTypeStyle: {
      backgroundColor: 'transparent',
      borderColor: theme.backgroundColor,
      borderWidth: moderateScale(2)
    },
    textTypeStyle: {
      color: theme.backgroundColor
    }
  }),
  TEXT: (theme: any) => ({
    backgroundTypeStyle: {
      backgroundColor: 'transparent',
      elevation: 0
    },
    textTypeStyle: {
      color: theme.backgroundColor
    }
  })
}
