/** @format */

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    maxWidth: '100%',
    alignItems: 'center',
    paddingVertical: '2%',
    borderBottomColor: 'rgb(150,150,150)',
    borderBottomWidth: 1,
    display: 'flex',
    justifyContent: 'space-between',
  },
  textContainer: {
    marginHorizontal: '20%',
  },
  touchableHighlight: {
    paddingVertical: '3%',
    paddingHorizontal: '3%',
    marginHorizontal: '3%',
    borderRadius: 50,
  },
  text: {
    fontSize: 17,
  },
});
