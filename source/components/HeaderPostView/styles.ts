import { StyleSheet } from 'react-native'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    maxWidth: '100%',
    alignItems: 'center',
    paddingVertical: '2%',
    display: 'flex',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 8,
    backgroundColor: theme.backgrounds.whiteBackground,
    paddingHorizontal: '3%'
  },
  textContainer: {
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  touchableHighlight: {
    paddingVertical: '3%',
    paddingHorizontal: '3%',
    borderRadius: 50
  },
  text: {
    fontFamily: 'Mulish-Bold',
    fontSize: theme.fonts.LARGE_SIZE,
    lineHeight: 24,
    fontWeight: '700'
  }
})
