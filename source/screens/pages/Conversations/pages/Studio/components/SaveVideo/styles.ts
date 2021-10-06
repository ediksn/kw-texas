import { StyleSheet } from 'react-native'
import { scale } from 'react-native-size-matters'

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
    paddingTop: '4%',
    paddingBottom: '4%',
    paddingLeft: '6%',
    paddingRight: '6%'
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
    paddingTop: '4%',
    paddingLeft: '6%',
    paddingRight: '6%',
    paddingBottom: '5%',
    fontSize: 14
  },
  input: {
    paddingLeft: '6%',
    paddingRight: '11%'
  },
  footer: {
    paddingTop: '1%',
    paddingBottom: '1%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    width: scale(140)
  }
})
