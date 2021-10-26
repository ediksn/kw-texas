import { StyleSheet } from 'react-native'
import { scale, verticalScale } from 'react-native-size-matters'

import { theme } from '~/constants/theme'

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: theme.backgroundWhite,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: theme.grey
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: verticalScale(13),
    paddingBottom: verticalScale(10),
    paddingLeft: scale(14),
    paddingRight: scale(15)
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  divider: {
    borderWidth: 0.5,
    borderColor: theme.grey
  },
  subtitle: {
    paddingTop: verticalScale(10),
    paddingLeft: scale(15),
    paddingRight: scale(10),
    paddingBottom: verticalScale(10),
    fontSize: 14
  },
  input: {
    marginLeft: scale(10),
    marginBottom: verticalScale(10),
    width: scale(290),
    paddingLeft: scale(3),
    paddingRight: scale(3)
  },
  footer: {
    paddingTop: scale(10),
    paddingBottom: scale(10),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    width: scale(140)
  }
})
