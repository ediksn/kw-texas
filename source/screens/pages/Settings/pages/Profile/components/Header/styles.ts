/** @format */

import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 25
  },
  avatar: {
    alignItems: 'center',
    aspectRatio: 1,
    backgroundColor: '#3D424D',
    borderRadius: 30,
    height: 60,
    justifyContent: 'center',
    overflow: 'hidden'
  },
  photo: {
    aspectRatio: 1,
    width: 60
  },
  initials: {
    color: '#ffffff',
    fontFamily: 'Mulish-Bold',
    fontSize: 14,
    position: 'absolute'
  },
  name: {
    color: '#282B33',
    fontFamily: 'Mulish-ExtraBold',
    fontSize: 20,
    marginTop: 8,
    textAlign: 'center'
  },
  role: {
    color: '#282B33',
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    textTransform: 'capitalize'
  },
  icon: {
    marginRight: 4
  },
  info: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 16,
    marginTop: 4
  }
})
