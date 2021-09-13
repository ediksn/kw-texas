/** @format */

import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F7F8',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  separator: {
    backgroundColor: 'rgba(174, 178, 186, 0.2);',
    height: 1,
    marginVertical: 20
  },
  scrollView: {
    marginHorizontal: 20,
    marginVertical: 10
  },
  field: {
    marginVertical: 10
  },
  title: {
    fontSize: 18,
    color: '#282B33',
    fontFamily: 'Mulish-Bold',
    marginVertical: 10
  },
  subtitle: {
    fontSize: 14,
    color: '#282B33',
    lineHeight: 26,
    fontFamily: 'Mulish-Bold'
  },
  description: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Mulish-Regular'
  },
  socialText: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Mulish-Regular'
  }
})
